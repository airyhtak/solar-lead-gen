/**
 * Google Apps Script — Solar Lead Webhook
 * Receives form submissions from the NJ Solar lead gen website
 * and writes them to the connected Google Sheet.
 *
 * SETUP: Change the email below to receive lead notifications.
 */
var NOTIFICATION_EMAIL = 'johansoic@gmail.com';

/**
 * Sanitize input to prevent formula injection and limit length.
 */
function sanitize(val) {
  if (typeof val !== 'string') return '';
  val = val.trim();
  // Prevent formula injection in Google Sheets
  if (/^[=+\-@\t\r]/.test(val)) {
    val = "'" + val;
  }
  return val.substring(0, 500);
}

/**
 * Per-email rate limiter — max 3 submissions per email per 10 minutes.
 */
function isRateLimited(email) {
  if (!email) return false;
  var cache = CacheService.getScriptCache();
  var key = 'ratelimit_' + email.toLowerCase();
  var count = parseInt(cache.get(key) || '0', 10);
  if (count >= 3) return true;
  cache.put(key, String(count + 1), 600);
  return false;
}

/**
 * Global rate limiter — caps total submissions across the whole script to
 * protect Johan's Gmail daily quota (100/day) and prevent a flood attack
 * using unique emails from bypassing the per-email limiter.
 */
function isGloballyRateLimited() {
  var cache = CacheService.getScriptCache();
  var count = parseInt(cache.get('global_rate_10min') || '0', 10);
  if (count >= 30) return true;  // 30 leads per 10 minutes ceiling (~3x peak)
  cache.put('global_rate_10min', String(count + 1), 600);
  return false;
}

/**
 * Handles POST requests from the website form.
 * Deployed as a Web App with access set to "Anyone".
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Honeypot check — bots fill hidden fields
    if (data.website) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Validate required fields (address and motivation removed from form Apr 2026)
    if (!data.name || !data.phone || !data.email) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Rate limit checks (global first — stops flood attack with unique emails)
    if (isGloballyRateLimited() || isRateLimited(data.email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'rate_limited' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Format timestamp nicely
    var timestamp = data.timestamp
      ? new Date(data.timestamp).toLocaleString('en-US', { timeZone: 'America/New_York' })
      : new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

    // Normalize language field (en or es)
    var language = (data.language || 'en').toLowerCase();
    if (language !== 'en' && language !== 'es') language = 'en';

    // Build the row with sanitized data
    // Note: Address and Motivation columns kept for backwards compatibility with existing sheet
    // Column L added for language tracking (en/es) — added Apr 2026 for bilingual funnel
    var row = [
      timestamp,                              // A: Timestamp
      sanitize(data.type) || '',              // B: Type (lead)
      sanitize(data.name) || '',              // C: Name
      sanitize(data.phone) || '',             // D: Phone
      sanitize(data.email) || '',             // E: Email
      '',                                     // F: Address (collected during consultation)
      sanitize(data.monthlyBill) || '',       // G: Monthly Bill
      '',                                     // H: Motivation (removed from form)
      'New',                                  // I: Status
      sanitize(data.tcpaConsent) || '',       // J: TCPA Consent
      sanitize(data.consentText) || '',       // K: Consent Language (legal record)
      language,                               // L: Language (en/es)
      sanitize(data.utm_source) || '',        // M: UTM Source
      sanitize(data.utm_medium) || '',        // N: UTM Medium
      sanitize(data.utm_campaign) || '',      // O: UTM Campaign
      sanitize(data.fbclid || data.gclid) || '', // P: Ad Click ID
      sanitize(data.referrer) || '',          // Q: Referrer URL
    ];

    // Append the row
    sheet.appendRow(row);

    // Send email notification for every new lead
    sendNotification(data);

    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error processing lead: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests (for testing).
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Solar Lead Webhook is running. Use POST to submit leads.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Sends an email notification when a new lead comes in.
 */
function sendNotification(data) {
  var lang = (data.language || 'en').toLowerCase();
  var langLabel = lang === 'es' ? '[SPANISH]' : '[ENGLISH]';
  var subject = 'NEW SOLAR LEAD ' + langLabel + ': ' + sanitize(data.name || 'Unknown');

  var body = 'New solar lead!\n\n'
    + 'Language: ' + (lang === 'es' ? 'Spanish — call in Spanish' : 'English') + '\n'
    + 'Name: ' + sanitize(data.name || 'N/A') + '\n'
    + 'Phone: ' + sanitize(data.phone || 'N/A') + '\n'
    + 'Email: ' + sanitize(data.email || 'N/A') + '\n'
    + 'Monthly Bill: ' + sanitize(data.monthlyBill || 'N/A') + '\n'
    + '\n'
    + 'Submitted: ' + new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }) + '\n'
    + '\n'
    + 'CALL WITHIN 5 MINUTES for best results.\n'
    + '(Or they may have self-booked via Calendly — check your calendar.)\n'
    + '\n'
    + '---\n'
    + 'NJ Solar Consultant Lead System';

  try {
    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
  } catch (error) {
    Logger.log('Failed to send notification email: ' + error.toString());
  }
}

/**
 * Utility: Manually test the webhook by running this function in the Apps Script editor.
 */
function testWebhook() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        type: 'lead',
        name: 'Test Lead',
        phone: '201-555-0123',
        email: 'test@example.com',
        monthlyBill: '$200-$300',
        tcpaConsent: 'Yes',
        consentText: 'Test consent text',
        timestamp: new Date().toISOString(),
      })
    }
  };

  var result = doPost(testData);
  Logger.log(result.getContent());
  Logger.log('Check your Google Sheet for a test row.');
}
