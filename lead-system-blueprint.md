# Solar Lead Gen System — Complete Blueprint

## How It All Connects

```
TRAFFIC SOURCES                CAPTURE              QUALIFICATION           BOOKING
─────────────────             ─────────             ─────────────           ───────
Facebook/IG Ads ──┐
Google (later) ───┤
TikTok/Reels ─────┤──→  Landing Page  ──→  AI Chatbot  ──→  AI SMS Sequence ──→  Calendar
Nextdoor Posts ───┤      (Calculator)      (Qualifies)      (Nurtures)          (Calendly)
Referrals ────────┤
Door Knocking ────┘
                                │                │               │
                                └────────────────┴───────────────┘
                                         All leads flow into
                                         ONE CRM / Google Sheet
```

---

## Strategy 1: Landing Page + AI Chatbot + Solar Calculator (THE FOUNDATION)

Everything feeds into this. Build it first.

### What It Does
1. Single-page website: "See How Much NJ Homeowners Are Saving With Solar"
2. Solar savings calculator asks 4 questions: ZIP code, monthly electric bill, roof age, homeownership
3. After showing estimated savings, AI chatbot qualifies the lead
4. Qualified leads auto-book onto calendar and enter CRM
5. Unqualified leads (renters, low bills, bad roofs) get a polite exit

### Chatbot Qualifying Questions
- Do you own your home?
- Is your roof less than 15 years old?
- Average monthly PSE&G/JCP&L bill?
- Interested in reducing your bill or earning SREC income?
- When would you like to meet?

### Tools & Cost

| Tool | Purpose | Monthly |
|---|---|---|
| Carrd.co | Landing page | $1.58 ($19/yr) |
| Domain (njsolarsavings.com or similar) | URL | $1/mo ($12/yr) |
| Typeform | Calculator flow | $25 |
| Tidio AI or ManyChat | Chatbot | $15-29 |
| GoHighLevel OR HubSpot free | CRM | $97 or $0 |
| Calendly free | Booking | $0 |
| **Full stack** | | **$153/mo** |
| **Budget alternative** | Carrd + Google Forms + ManyChat + HubSpot free + Calendly free | **~$17/mo** |

### Expected Results (organic only, no paid traffic)
- 10-30 leads/month
- 40-60% qualified
- 1-7 booked appointments/month

---

## Strategy 2: AI SMS Follow-Up Sequences (THIS CONVERTS LEADS)

Speed-to-lead is everything. Leads contacted within 5 minutes are 9x more likely to convert.

### The 7-Message Sequence (14 days)

**Message 1 (5 min after opt-in):**
"Hey [Name], thanks for checking out the NJ solar calculator! Based on your info, you could save an estimated $[X]/month. Want me to send a detailed breakdown? — Johan"

**Message 2 (Day 1, next morning):**
"Quick fact: NJ homeowners earn $800-1,500/year in SREC income just for having solar. That's ON TOP of your electric savings. Want to see what you'd earn?"

**Message 3 (Day 3):**
"[Name], PSE&G rates have gone up 40% in the last 5 years. Solar locks in your rate at $0. Want a side-by-side comparison for your home?"

**Message 4 (Day 5):**
"3 homes in [their town] went solar this year. I can show you exactly what they're saving. Want me to pull up the numbers for your address?"

**Message 5 (Day 7):**
"Did you know NJ has a property tax exemption for solar? Your home value goes up but your taxes stay the same. Here's the full list of NJ solar benefits: [link]"

**Message 6 (Day 10):**
"[Name], I help NJ homeowners figure out if solar makes sense for their situation. No pressure, just math. Want to grab 15 minutes this week? [Calendly link]"

**Message 7 (Day 14):**
"Last one from me! If solar isn't on your radar right now, no worries. If it ever is, I'm a text away. Have a great week! — Johan"

### TCPA Compliance (CRITICAL — violations are $500-1,500 PER MESSAGE)
- Every lead MUST give express written consent before first text
- Landing page must include: "By entering your phone number, you agree to receive text messages about solar savings. Msg & data rates may apply. Reply STOP to unsubscribe."
- Consent must be a clear action (checkbox, NOT pre-checked)
- Honor STOP requests immediately and automatically
- Do not text before 8am or after 9pm
- Keep consent records for 4+ years
- Since these are opt-in leads, NJ Do Not Call list does not apply

### Cost
- SMS via GoHighLevel (included) or Twilio ($0.0079/SMS): ~$15-30/mo
- AI response handling (OpenAI API): ~$5-10/mo

---

## Strategy 3: Nextdoor (Free, Hyperlocal, 90% Homeowners)

### Organic Strategy (don't pay for Nextdoor ads)

**Post Type 1 — Education:**
"PSE&G just announced another rate increase. If you're a homeowner in [Town], here's what that means for your bill — and what your neighbors are doing about it. [calculator link]"

**Post Type 2 — Social Proof:**
"Just helped a family in [Neighborhood] go solar. Their PSE&G bill went from $220/month to $12. Plus they'll earn ~$1,100/year in SREC income. Happy to answer any questions."

**Post Type 3 — Q&A:**
"I work in solar and I see a lot of confusion about NJ incentives. Ask me anything — SRECs, net metering, tax credits, costs. No sales pitch, just honest answers."

**Post Type 4 — Urgency:**
"The 30% federal tax credit is locked in through 2032, but NJ SREC values could change. If you've been on the fence, now's a good time to run the numbers. [calculator link]"

### Expected: 2-5 warm inbound inquiries/month. These close at 50-70% because they reached out to you.

---

## Strategy 4: Content Engine (TikTok / Reels / Shorts)

Long-game play. 2-3 short videos/week. Post everywhere simultaneously.

### First 12 Video Ideas
1. "How much I saved going solar in NJ" (real customer example)
2. "NJ pays you to have solar panels — here's how SRECs work"
3. "PSE&G rates over the last 10 years" (chart — only goes up)
4. "The 30% federal tax credit explained in 60 seconds"
5. "What happens to your solar panels when it snows?"
6. "3 reasons NJ is one of the best states for solar"
7. "How net metering works with PSE&G"
8. "Solar myth: you need a south-facing roof" (debunk)
9. "How much does solar actually cost in NJ in 2026?"
10. "NJ property tax exemption — home value up, taxes stay the same"
11. "What happens in a power outage?" (with vs. without battery)
12. "I knocked on 100 doors. Here's what NJ homeowners asked about solar."

### Tools: ChatGPT/Claude for scripts, CapCut (free) for editing, phone camera. Cost: $0.

### Expected: Months 1-3: 0-5 leads. Months 6+: 15-40/month. Also builds brand so when he knocks on doors, they may have already seen his face.

---

## Strategy 5: AI-Powered Referral System

Start after first 5 installations.

### Automated Sequence for Every New Solar Customer

**Day 0 (install complete):**
"Congrats on going solar! Know any neighbors thinking about it? If they install through us, you get $[250-500]. Share your personal link: [unique link]"

**Day 7:**
"How are you liking the savings? Your referral link has been viewed [X] times. Share with one more neighbor: [link]"

**Day 30:**
"First full month of solar! Estimated savings: $[X]. Your neighbors would love to hear about this. [link]"

**Day 90:**
"3 months in. Have you told your [HOA/block/neighborhood group]? [link]"

### Expected: 10-20% of customers refer someone. Referred leads close at 3-5x rate of cold leads.

---

## Strategy 6: Data-Driven Door Knocking ($0 — Start Immediately)

This makes his existing door-to-door work 3-5x more effective.

### Before Each Session, Score 20 Target Homes Using:

**Google Project Sunroof (free)** — sunroof.withgoogle.com
- Estimated sunlight hours, usable roof sq ft, recommended system size, estimated savings

**NJ County Tax Records (free/public)**
- Owner name, owner vs. renter, property value, mailing address
- Filter: owner-occupied, $250K-$750K property value

**Zillow/Redfin (free)**
- Homes sold in last 6-12 months (new homeowners = 2-3x more likely to buy solar)

**Google Maps Satellite (free)**
- Check roof orientation (south-facing ideal), existing panels (skip), tree shading

### Scoring System (Google Sheet)

| Factor | Points |
|---|---|
| Homeowner (confirmed) | +30 |
| Property value $300-600K | +20 |
| Built after 2000 | +15 |
| South/SW facing roof | +15 |
| Neighbor has solar | +10 |
| Bought in last 12 months | +10 |

Sort by score. Take top 20. Plot on Google My Maps for route.

### Door Script (Warm Approach with Data)
"Hi, I'm [Name] — I work with [Company]. I noticed a few homes on this street went solar recently, and your roof looks like it has great potential. Have you ever looked into what solar would save you? I have a quick calculator on my phone — takes 30 seconds. Want to see your estimate?"

If interested but not ready: "Can I text you a link to the calculator?" → they enter the SMS sequence.

### Impact
- Random knocking: 1-3% interest rate
- Data-driven knocking: 5-10% interest rate (3-5x improvement)
- 50 doors: random = 1 conversation, data-driven = 3-5 conversations

---

## Total System: Expected Monthly Pipeline (After 90 Days)

| Source | Raw Leads | Qualified | Appointments |
|---|---|---|---|
| Facebook Ads ($300/mo) | 8-15 | 5-10 | 2-5 |
| Nextdoor (organic) | 3-5 | 2-4 | 2-3 |
| Landing Page (organic) | 5-10 | 3-6 | 1-3 |
| Door Knocking (data-driven) | 15-25 | 8-15 | 4-8 |
| Referrals | 2-5 | 2-4 | 1-3 |
| Content/Social | 2-5 | 1-3 | 0-1 |
| **Total** | **35-65** | **21-42** | **10-23** |

At 20-30% close rate on warm leads: **2-7 installations/month** from this system.
