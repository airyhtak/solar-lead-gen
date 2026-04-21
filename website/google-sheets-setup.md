# Google Sheets Webhook Setup — Step by Step

This connects the solar calculator to a Google Sheet so every lead lands in a spreadsheet automatically. Takes 10 minutes. Free forever.

---

## Step 1: Create the Google Sheet

1. Go to https://sheets.google.com
2. Create a new blank spreadsheet
3. Name it: **"Solar Leads"**
4. In Row 1, add these column headers (exactly as written):

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Type | Name | Phone | Email | Address | Monthly Bill | Motivation | Status |

5. Bold the header row
6. Freeze the header row: View → Freeze → 1 row

---

## Step 2: Add the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete everything in the editor
3. Paste the ENTIRE contents of the file `google-apps-script.js` (included in this folder)
4. Click the floppy disk icon (or Ctrl+S / Cmd+S) to save
5. Name the project: **"Solar Lead Webhook"**

---

## Step 3: Deploy as Web App

1. In Apps Script, click **Deploy → New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Set these options:
   - Description: "Solar lead capture"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. It will ask you to authorize. Click **Review Permissions** → choose your Google account → **Advanced** → **Go to Solar Lead Webhook (unsafe)** → **Allow**
6. You'll see a **Web app URL** that looks like:
   `https://script.google.com/macros/s/AKfycbx.../exec`
7. **COPY THIS URL** — you need it for the next step

---

## Step 4: Connect to the Website

1. Open `calculator.js` in a text editor
2. Find this line (line 10):
   ```
   var WEBHOOK_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the URL you copied
   (or just replace the entire URL with the one you copied)
4. Save the file

---

## Step 5: Test It

1. Open your website (index.html)
2. Go through the calculator
3. Fill in the consultation form with test data and submit
4. Check your Google Sheet — the lead should appear within 5-10 seconds

---

## Step 6: Set Up Instant Notifications (Optional but Recommended)

Get a text/email every time a new lead comes in:

### Option A: Email notification (built into the script)
The Apps Script already sends an email notification. Update the email address on line 5 of the script.

### Option B: Phone notification via Google Sheets + Zapier
1. Create a free Zapier account (zapier.com)
2. Create a Zap:
   - Trigger: "New Spreadsheet Row in Google Sheets" (select your Solar Leads sheet)
   - Action: "Send SMS" via Zapier SMS (free tier)
   - Message: "NEW SOLAR LEAD: {{Name}}, {{Phone}}, {{ZIP}}, Bill: ${{Monthly Bill}}"
3. Turn it on — you'll get a text within 60 seconds of every new lead

---

## Troubleshooting

**Lead didn't appear in the sheet:**
- Check that the Web App URL in calculator.js matches exactly (no extra spaces)
- Make sure the deployment is set to "Anyone" for access
- Check the Apps Script execution log: Extensions → Apps Script → Executions (left sidebar)

**Permission error:**
- Re-deploy: Deploy → Manage deployments → Edit (pencil icon) → Deploy
- Re-authorize if prompted

**Want to add more columns later:**
- Add the column header in the Google Sheet
- Update the Apps Script to include the new field in the row array
- Re-deploy (Deploy → Manage deployments → Edit → Deploy)

---

## What Happens When a Lead Comes In

1. Person fills out calculator + consultation form on the website
2. JavaScript sends data to Google Sheets webhook
3. Apps Script receives it and writes a new row
4. Email notification fires to your inbox
5. (If Zapier is set up) SMS notification hits your phone
6. Lead row shows "New" status — update to "Contacted", "Qualified", "Booked", "Closed", or "Dead" as you work it

Your Google Sheet IS your CRM. Sort by status, filter by date, track everything.
