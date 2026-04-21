# WhatsApp Outreach Playbook — Johan Solar Consultant (NJ)

**Created:** April 7, 2026
**Status:** DRAFT — Review compliance section before launching

---

## CRITICAL COMPLIANCE WARNING

**WhatsApp does NOT avoid TCPA.** The assumption is wrong. Here's what actually applies:

| Regulation | Applies? | Risk Level |
|---|---|---|
| TCPA (federal) | YES — WhatsApp messages go to cell numbers, which TCPA covers | HIGH ($500-$1,500 per message) |
| FTC Endorsement Guides | YES — referral fee = material connection, must disclose | MEDIUM |
| NJ Consumer Fraud Act | YES — treble damages for misleading claims | MEDIUM |
| NJ Telemarketer Registration | GRAY AREA — broad statute, no WhatsApp case law yet | MEDIUM-HIGH |
| NJ Do Not Call | YES if systematic telemarketing | MEDIUM |
| WhatsApp Terms of Service | YES — bans are automated and permanent | HIGH (most immediate risk) |

### How to Stay Safe

The legal exposure shrinks dramatically if Johan follows **one rule**: keep this genuinely personal, not systematic.

- **Manual, one-by-one messages** from the WhatsApp app (NOT bulk tools, NOT the API for cold outreach) = no ATDS under *Facebook v. Duguid* (2021)
- **Warm contacts only** who Johan personally knows = arguably personal communication, not telemarketing
- **Low volume** (under 15 new contacts/week) = defensible as personal outreach
- **Personalize every message** — never copy-paste identical text
- **Include referral fee disclosure** in the conversation before recommending solar
- **Honor every opt-out immediately**

**If the plan is 50+ people from a master list with a scripted pitch**, that's systematic telemarketing. Johan would need: prior express written consent from each person, NJ DCA telemarketer registration, federal + NJ DNC scrubbing, and WhatsApp Business API with approved templates.

### Still Blocked Until Confirmed

These items from the pending list MUST be resolved first:

1. **What name is on Johan's 1099?** — TCPA consent language must match the legal entity
2. **How does Johan actually get paid?** — "referral fee" disclosure must match reality (commission split, flat rate, etc.)

---

## SETUP (Tonight, 30 Minutes)

### 1. Download WhatsApp Business App (free)

Switch from personal WhatsApp. Same number works.

**Business Profile:**
- Name: Johan [Last Name] — Solar Consultant
- Category: Consulting
- Description: "Free 30-minute solar consultations for NJ homeowners. I review your home specs and utility bill and show you your options. No cost, no pressure. Hablo espanol."
- Website: timely-sherbet-f1872d.netlify.app (or new domain when purchased)

**Catalog — create ONE item:**
- Name: Free 30-Minute Solar Consultation
- Description: Roof review, bill analysis, savings estimate, PPA and purchase options explained
- Price: Free

**Quick Replies:**
- `/intro` — initial outreach template
- `/followup` — check-in message
- `/book` — scheduling message
- `/referral` — referral ask
- `/spanish` — Spanish versions of above

**Labels:**
- New Lead
- Consultation Scheduled
- Consultation Done
- Referral Asked
- Not Interested
- Follow Up Later

### 2. Create Google Sheets Tracker

**Sheet name: WhatsApp Outreach Tracker**

| Column | What It Tracks |
|---|---|
| A: Name | Contact name |
| B: Phone | Phone number |
| C: Language | EN / ES |
| D: Tier | 1-5 (see segmentation below) |
| E: Source | How Johan knows them |
| F: First Msg Date | When first message sent |
| G: Reply? | Y/N |
| H: Reply Date | When they responded |
| I: Consult Booked? | Y/N |
| J: Consult Date | Scheduled date |
| K: Consult Done? | Y/N |
| L: Outcome | Interested / Signed / Not Interested / Thinking |
| M: Referral Asked? | Y/N |
| N: Referrals Given | Names of anyone they referred |
| O: Follow-Up 1 | Date sent |
| P: Follow-Up 2 | Date sent |
| Q: Status | Active / Closed Won / Closed Lost / Dormant |
| R: Notes | Anything relevant |

**Color coding:** Green = consultation done | Yellow = replied, no consult yet | Red = closed lost

### 3. Segment the Master List

| Tier | Who | Priority | Message Angle |
|---|---|---|---|
| **3** | Anyone who ever mentioned solar, energy bills, home improvement | FIRST | Reference the prior conversation |
| **1** | Family, close friends | SECOND | Direct, personal, casual |
| **4** | Referrals from others | THIRD | Name-drop the referrer |
| **2** | Extended network (coworkers, acquaintances, gym, church) | FOURTH | Lead with NJ rate data |
| **5** | Community contacts (neighbors, school parents, local biz) | LAST | Lead with local/neighbor angle |

**Spanish-speaking contacts** exist across all tiers. Message them in Spanish — this is a competitive advantage (most solar marketing in NJ is English-only).

---

## THE SCRIPTS

### Message 1: Initial Outreach (Warm Contact)

> Hey [Name], it's Johan
>
> Quick heads up — I started working as an independent solar consultant here in NJ. I'm reaching out to people I know because I genuinely think it's worth a look, especially with how much PSE&G and JCP&L rates have gone up.
>
> What I do: free 30-minute consultation where I review your house specs and utility bill, then show you what solar options are available through my broker. Most homeowners pay $0 upfront through a Power Purchase Agreement.
>
> Full transparency — I earn a referral fee if you move forward, so I want you to know that upfront.
>
> No pressure at all. If you're even a little curious, I'm happy to take a look. And if it's not for you, no hard feelings.
>
> Reply STOP and I won't message again.

**Compliance built in:** Identifies himself by name, states commercial purpose, discloses referral fee, no "I install" language, no specific savings claims, opt-out included.

**For Tier 3 (prior solar interest), swap the opening:**
> Hey [Name], it's Johan. Remember when you mentioned looking into solar? I'm actually doing this now...

**For Tier 4 (referrals), swap the opening:**
> Hey [Name], [referrer's name] mentioned you might be interested in solar...

---

### Follow-Up #1: 3 Days Later, No Response

> Hey [Name] — not trying to bug you. Wanted to share something I found useful:
>
> PSE&G residential rates have gone up 46% over the last 10 years (EIA data). JCP&L is up 34%. That trend isn't slowing down.
>
> A lot of the homeowners I talk to don't realize how much they're overpaying until they see the side-by-side. The consultation is free, takes 30 min, and there's zero obligation.
>
> If the timing isn't right, totally get it. Just wanted to make sure you had the info.

---

### Follow-Up #2: 5 Days After Follow-Up #1 (Final Touch)

> Hey [Name] — last message from me on this, promise.
>
> If solar ever crosses your mind down the road, I'm around. Happy to run the numbers whenever.
>
> And if you know anyone who's been complaining about their electric bill — I'd appreciate the introduction. No pressure either way.
>
> Hope you're doing well

---

### When They Say "Tell Me More"

> Here's how it works:
>
> **What I do:** I'm an independent solar consultant. I don't install anything — I work with a solar broker who has access to multiple installers and financing options. My job is to find what fits YOUR house and budget.
>
> **The consultation (free, ~30 min):**
> 1. I look at your roof specs (satellite imagery, shade, orientation)
> 2. You share a recent electric bill so I can see your actual usage
> 3. I run the numbers and show you the options — including what you'd pay vs. what you're paying now
>
> **Most popular option:** PPA (Power Purchase Agreement). No money down. A licensed installer puts panels on your roof, you buy the power they produce at a locked-in rate that's typically lower than what PSE&G/JCP&L charges today. The agreement runs 20-25 years.
>
> **The honest trade-off:** You don't own the panels (the provider does), and it's a long-term commitment. But for most homeowners the math works because utility rates keep climbing and your PPA rate stays predictable.
>
> Want to pick a time this week for me to take a look? I just need 30 min and a copy of your last electric bill.

---

### When They Ask "How Much Does It Cost?"

> Great question — and I want to be straight with you.
>
> **Most common option (PPA):** $0 upfront. A solar provider installs panels on your roof at no cost to you. You pay them for the electricity the panels produce, usually at a rate lower than what you're paying PSE&G/JCP&L right now.
>
> **What's the catch?** It's a 20-25 year agreement. You don't own the panels — the provider does. They handle maintenance and monitoring. If you sell your house, the agreement transfers to the new buyer.
>
> **Why people still do it:** Your PPA rate is locked in or has small annual increases (usually capped at 1-3%), while utility rates have been climbing 3-5% a year in NJ. Over time, the gap tends to widen in your favor.
>
> **There are also purchase and loan options** if you want to own the panels outright — I can walk you through those too.
>
> The best way to know if it makes sense for YOUR house is the free consultation. I look at your actual usage and roof, and show you the real numbers. Takes about 30 min.
>
> Want to set something up?

---

### When They Say "Not Interested"

> Totally understand — appreciate you letting me know. If anything changes down the road, I'm always here.
>
> Hope all's good with you and the family

**DO NOT follow up after this. The relationship is worth more than any referral fee.**

---

### Referral Ask (1-2 Days After Consultation)

> Hey [Name] — really glad we got to go through everything. Hope the numbers gave you a clearer picture.
>
> Quick ask: if you know anyone in your circle — neighbors, family, coworkers — who's been frustrated with their electric bill, I'd love an introduction. Even just a "hey, talk to Johan" goes a long way.
>
> I do this the same way for everyone: free consultation, honest breakdown, no pressure. And I'll always let them know you sent them.
>
> Thanks again for your time

**For Spanish-speaking contacts, add:** "Y si tienen familia que habla espanol, tambien los puedo ayudar en espanol."

---

## OUTREACH CADENCE

### Daily Limits (to avoid WhatsApp ban)

| Week | New Conversations/Day | Why |
|---|---|---|
| Week 1 | 10-15 max | Build account trust |
| Week 2 | 15-20 | If no warnings |
| Week 3+ | 20-25 ceiling | Never exceed this |

Follow-ups to existing conversations don't count toward this limit.

### Timing

- **Best:** Tuesday-Thursday, 6:00-8:00 PM
- **Good:** Saturday, 10:00 AM-12:00 PM (especially for Spanish-speaking contacts)
- **Avoid:** Before 9 AM, after 9 PM, Monday, Friday evening, Sunday

### Spacing

- 3-5 minutes between each new message (don't blast 15 in 5 minutes)
- Vary the text — never copy-paste identical messages

### Follow-Up Timeline

- No reply after 3 days: Send Follow-Up #1
- No reply after 8 days total: Send Follow-Up #2 (final)
- After that: Mark dormant. Revisit in 60 days with a different angle

---

## WHATSAPP STATUS (Stories)

Post 3-4 per week. This is passive marketing to everyone who has Johan's number saved.

**Rotation:**
1. **Social proof:** Photo from a consultation. "Just finished a consultation for a family in [town]."
2. **Education:** One fact. "PSE&G rates up 46% in 10 years. Most NJ homes qualify for $0 down solar."
3. **Behind the scenes:** Photo of a utility bill (numbers blurred). "This is what I review during a free consultation."
4. **Spanish-language:** At least 1/week in Spanish. Signals he serves that community.

**Never post:** Hard sells, fake urgency, stock photos, anything that looks like an ad.

---

## ANTI-BAN RULES

| Trigger | What to Do Instead |
|---|---|
| Identical messages to many people | Vary every message — change a phrase, swap a sentence |
| 25+ new conversations in one day | Stay under 15 in week 1, 25 max ever |
| Getting blocked/reported | Start with Tier 1-3 (warm contacts who won't report) |
| Bulk messaging tools | NEVER use unofficial tools — guaranteed ban |
| Sending links in first message | Share website link in second or third message only |
| Messaging 10 PM - 7 AM | Don't |
| New account + high activity | Keep volume very low for first 2 weeks |

**Use a separate phone number for business.** If the number gets banned, Johan loses his entire contact history. Never risk his personal number.

---

## WEEK 1 PLAYBOOK

| Day | Action | Volume |
|---|---|---|
| **Day 0 (tonight)** | Set up WhatsApp Business, Sheets tracker, segment master list | 0 messages |
| **Day 1 (Tue)** | Message 5 from Tier 3 + 5 from Tier 1. Post 1 Status. | 10 new |
| **Day 2 (Wed)** | Message 5 from Tier 1 + 5 from Tier 4. Reply to Day 1. Book consultations. | 10 new |
| **Day 3 (Thu)** | Message 10 from Tier 2. Follow up on Day 1 no-replies. Post 1 Status. | 10 new |
| **Day 4 (Fri)** | No new outreach. Conduct consultations. Reply to inbound. | 0 new |
| **Day 5 (Sat AM)** | Message 10 Spanish-speaking contacts. Post 1 Spanish Status. | 10 new |
| **Day 6 (Sun)** | Rest. Post 1 Status (social proof). | 0 new |
| **Day 7 (Mon)** | Review tracker. Follow up on Wed no-replies. Ask consultation completers for referrals. Plan Week 2. | 0 new |

**Week 1 targets:** 40-50 conversations, 3-5 consultations booked, 1-2 referrals, 0 reports/blocks.

---

## SCALING (When Johan Outgrows Manual WhatsApp)

**When:** Consistently 5+ consultations/week and 300+ contacts exhausted.

**Next step:** WhatsApp Business API via WATI (~$0.05-0.08/conversation). Enables:
- Automated follow-up sequences
- Click-to-WhatsApp Facebook/Instagram ads
- CRM integration
- Broadcast to larger lists without manual spacing

**Never use:** WA Web Plus, WASender, or any unofficial bulk tool. Guaranteed ban, no recovery.

---

## METRICS TO TRACK WEEKLY (Every Monday)

- Messages sent (new conversations)
- Reply rate (target: 40%+ for Tiers 1-3)
- Consultations booked
- Consultations completed
- Referrals received
- Referrals converted to consultations
- Blocks/reports (monitor closely)

**The compounding metric:** Referrals per consultation. If > 1.0, the pipeline grows without cold outreach.

---

## BEFORE LAUNCHING — CHECKLIST

- [ ] Confirm Johan's 1099 name (for TCPA consent language)
- [ ] Confirm compensation structure (for accurate disclosure)
- [ ] Switch to WhatsApp Business app
- [ ] Set up separate phone number for business (protect personal number)
- [ ] Create Google Sheets tracker
- [ ] Segment master list by tier
- [ ] Set up WhatsApp Business profile, catalog, quick replies, labels
- [ ] Redeploy website with compliance fixes (still pending from March)
- [ ] Redeploy updated Apps Script
- [ ] Consider NJ DCA telemarketer registration (consult attorney if volume will exceed ~50 contacts)
