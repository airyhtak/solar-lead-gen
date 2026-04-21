# Solar Lead Nurture Email Sequence

3-email sequence for leads who submit the form but DON'T book a consultation.
Set up in HubSpot Free or Brevo Free. Trigger: form submission with no Calendly booking.

---

## Email 1 — Immediate (send on form submission)

**Subject:** Your free solar consultation — next steps

**From:** Johan | NJ Solar Consultant

**Body:**

Hey [First Name],

Thanks for reaching out about solar for your home. I'm Johan — I help NJ homeowners figure out if solar actually makes sense for their situation. No sales pitch, just math.

Here's what happens next:

**Option A: Pick a time that works for you**
Book a quick phone call or in-person visit — whichever you prefer:

[Book My Free Consultation] ← link to Calendly

**Option B: I'll call you**
If you'd rather not schedule online, I'll reach out within 24 hours.

**Either way, have this ready:**
A recent electric bill (a phone photo is fine). It makes the conversation way more useful.

Talk soon,
Johan
NJ Solar Consultant

---
Your consultation is 100% free with no obligation.
NJ Solar Consultant | [PO Box address] | [Unsubscribe link]

---

## Email 2 — Day 2 (send 48 hours after Email 1, only if no booking)

**Subject:** Quick question about your electric bill

**Body:**

Hey [First Name],

Just circling back. Most NJ homeowners I talk to are surprised by how much rates have gone up — PSE&G is up 46% over the past decade, and there's no sign of it slowing down.

Solar doesn't make sense for every home. But for homes where it does work, the savings start from day one.

Want to find out if yours is one of them? It takes 15 minutes:

[Book a Quick Phone Call] ← link to Calendly

No pressure either way. If now isn't the right time, I get it.

Johan
NJ Solar Consultant

---
Your consultation is always free with no obligation.
NJ Solar Consultant | [PO Box address] | [Unsubscribe link]

---

## Email 3 — Day 7 (send 7 days after Email 1, only if no booking)

**Subject:** Last check-in from Johan

**Body:**

Hey [First Name],

I don't want to be that person who won't stop emailing — so this is my last note.

If solar isn't for you right now, totally understood. But if you're still curious about what the numbers look like for your home, I'm right here:

[Book a 15-Minute Phone Call] ← link to Calendly

Or just reply to this email with any questions. I read everything.

Have a great week,
Johan
NJ Solar Consultant

---
Your consultation is always free with no obligation.
NJ Solar Consultant | [PO Box address] | [Unsubscribe link]

---

## Setup Notes

**Platform:** HubSpot Free (2,000 emails/mo) or Brevo Free (300 emails/day)

**Enrollment trigger:** Contact submits website form AND does not have a Calendly booking within 1 hour

**Exit conditions:**
- Contact books a Calendly appointment → stop sequence
- Contact replies to any email → stop sequence, notify Johan
- Contact unsubscribes → stop sequence, mark in CRM

**Tracking:**
- Open rate target: 40%+ (these are warm leads who just submitted a form)
- Click rate target: 15%+
- If Email 1 open rate < 30%, test subject lines
- If click rate < 10%, the CTA isn't compelling enough — test button copy

**CAN-SPAM requirements (every email must have):**
- Physical mailing address (PO Box)
- Working unsubscribe link
- Accurate "From" name and email
- No deceptive subject lines
