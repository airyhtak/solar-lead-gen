# Johan's Experimentation Framework
### Test what works. Kill what doesn't. In 5 hours a week.

**Built for:** Solo 1099 solar consultant, NJ, zero budget, non-technical, 5-10 hrs/week.

**Golden rule:** If a test can't change what you do on Monday, don't run it.

---

## The One Metric That Matters Most

**Booked consultations per $100 spent (or per hour worked).**

Not impressions. Not clicks. Not form fills. Not leads. **Booked consultations on your calendar.**

Why: A lead who doesn't book is worth $0. A booked consultation is the only thing that predicts a check. Every channel, every message, every test gets judged by this one number.

Secondary metric (lagging): **Close rate per channel** — which source of leads actually signs PPAs. You won't have this data for 60-90 days. That's fine. Track it, use it to re-weight your efforts next quarter.

---

## Part 1: The Five Tests

### TEST 1 — Postcard A/B (the 243 leads)

**Variants:**
- A: "Your electric bill went up" (loss aversion)
- B: "Your neighbors said yes" (social proof)

**Split:** Randomly assign each address to A or B. Use a spreadsheet — sort by last name, odd rows = A, even rows = B. ~121 per variant.

**How to track which variant won (critical — this is the whole test):**
Put a **different phone number or URL on each postcard.**
- Option 1 (free): Different URL paths. A = `yoursite.com/bill` | B = `yoursite.com/neighbors`. Add a hidden form field that records which page they came from.
- Option 2 ($0-15/mo): Two Google Voice numbers (free, 2 numbers) OR CallRail free trial. Postcard A uses number 1, Postcard B uses number 2.
- Option 3 (lowest tech): Promo code. "Mention code BILL for priority scheduling" vs "mention code NEIGHBOR." Ask every inbound caller which code they saw.

**Primary metric:** Booked consultations per 100 postcards sent.
Not response rate (too noisy at this volume). Not close rate (takes months). **Booked consultations** is the Goldilocks metric — it arrives within 2-3 weeks and predicts revenue.

**Sample size reality check:**
Direct mail response rates are 0.5-2%. On 121 postcards per variant you'll get **0-3 responses per side.** That is not enough for statistical significance. Ever.

**What this means:** Don't expect a statistically clean "winner." Treat this as a **directional signal**, not a verdict.
- If A gets 4 bookings and B gets 1 → lean A, send next batch 80/20 A-heavy
- If A gets 2 and B gets 2 → tie, pick the one that generated better conversations
- If both get 0 → the postcard format/offer is broken, not the headline. Change the whole thing.

**Time to decision:** 21 days after mail drop. Postcards generate responses in a bimodal pattern — days 3-10 (impulse) and days 14-21 (second look at the fridge). After 21 days, call it.

**Minimum sample for actual significance (for reference, not reality):** ~1,500 per variant to detect a 1% → 2% lift at 95% confidence. You will never have this. Move on.

---

### TEST 2 — Channel Performance (which source actually produces revenue)

This is the **most important test** in the whole document. Without this, you're flying blind and every channel claims credit.

**What to build — the "Source" field discipline:**

Every lead that enters your CRM **must** have:
1. `Source` (channel it came from)
2. `Sub-source` (specific campaign/ad/post)
3. `First touch date`
4. `Cost attributed` (what you paid/hours you worked for this lead)

**UTM parameters — put these on EVERY link you share:**

```
?utm_source=[channel]&utm_medium=[type]&utm_campaign=[what]
```

Examples:
- Facebook ad: `?utm_source=facebook&utm_medium=paid&utm_campaign=bill-shock-mar`
- Nextdoor post: `?utm_source=nextdoor&utm_medium=organic&utm_campaign=neighbor-post`
- TikTok bio: `?utm_source=tiktok&utm_medium=organic&utm_campaign=bio-link`
- Google Ad: `?utm_source=google&utm_medium=cpc&utm_campaign=nj-solar`
- QR code on truck: `?utm_source=truck&utm_medium=offline&utm_campaign=magnet`

Build them free at: `ga-dev-tools.google/ga4/campaign-url-builder/`

Your website form needs a **hidden field** that captures the URL's UTM parameters and writes them to the Google Sheet. This is a 10-line JavaScript snippet — already likely in your website template or ask Kat for 15 minutes.

**Tracking offline channels (postcards, door knocking, referrals):**

Offline channels can't carry UTMs. You tag them **manually at the point of first contact:**
- Postcards → promo codes (BILL, NEIGHBOR) or dedicated URL paths
- Door knocking → you enter the lead yourself with `Source = door` and street name in sub-source
- Yard signs → `Source = yardsign` and ZIP in sub-source
- Referrals → `Source = referral` and referrer name in sub-source

**Minimum CRM fields for channel attribution (add these to your Google Sheet today):**

| Field | Example | Why |
|---|---|---|
| Source | facebook | Channel bucket |
| Sub-source | bill-shock-mar | Specific campaign |
| First touch date | 2026-04-04 | For velocity |
| Cost this lead | $3.50 | Paid ads ÷ leads from that ad |
| Hours this lead | 0.25 | Door knocking labor cost |
| Booked? | Y/N | The metric that matters |
| Booked date | 2026-04-11 | Speed to booking |
| Closed? | Y/N | Lags 60-90 days |
| Deal value | $X | For CAC math |

**Decision rule:** Once you have **10 booked consultations** from a channel, you can start judging it. Below 10, it's noise.

---

### TEST 3 — Website Conversion Tests

**Hard truth:** At your current website traffic (likely <500 visitors/month), you cannot run a real A/B test on the website. You will not reach significance in a reasonable time.

**What to do instead — "sequential testing" (the poor man's A/B):**

Run one version for 2 weeks. Measure form fills ÷ visitors. Change ONE thing. Run for 2 more weeks. Compare.

This isn't statistically pure — external factors (weather, season, news) confound it. But at your scale, a 50% lift is detectable and a 5% lift doesn't matter anyway. **You're hunting for big wins, not 2% optimizations.**

**Priority order (test the highest-impact thing first):**

1. **Headline** (biggest lever, test first, 2 weeks each)
   - "Stop Overpaying" vs "Lock In Your Rate"
2. **Form length** (second biggest — shorter almost always wins)
   - 4 fields vs 3 fields. Kill the least-qualifying field.
3. **CTA button copy** (smallest lever, test last)
   - "Get Free Consultation" vs "See My Savings"

**Free tools for the test itself:**
- **Google Analytics 4** (free) — measure conversion rate per page
- **Microsoft Clarity** (free, unlimited) — watch actual user sessions, see where they drop off. This is more valuable than any A/B test at your volume. Install it today.
- **Google Optimize is dead.** Don't waste time looking.
- **Netlify has built-in split testing** (free) — your site is on Netlify. You can literally publish two branches and Netlify splits traffic. Use this for real A/B.

**The brutal version:** Before running any website test, go to Clarity and watch 20 session recordings. You will learn more in 30 minutes than any A/B test will tell you in 2 months.

---

### TEST 4 — Outreach Message Tests (cold call, voicemail, text)

**Test structure:** Rotate scripts in blocks of ~25 attempts each, not randomly. Human memory is bad at random.

**Cold call openers — test 25 calls per script:**
- Script A (problem): "Hi, this is Johan — I help NJ homeowners lock in their electric rate before PSE&G raises it again. Got 90 seconds?"
- Script B (curiosity): "Hi, this is Johan — quick question, are you on PSE&G or JCP&L?"
- Script C (social proof): "Hi, this is Johan — I just helped 3 homes on [their street/ZIP] cut their electric bill. Are you the homeowner?"

**Metric:** Conversations that last >60 seconds ÷ dials. Not booked meetings — that's too rare at 25 dials to measure.

**Voicemails — test 25 each:**
- Short (under 15 seconds): "Hi [name], Johan here about your electric bill — call me back at [number]."
- Medium (30 seconds) with specific hook: "Hi [name], Johan here — PSE&G just filed for another rate increase and I'm helping neighbors on [street] lock in before it hits. Two minutes of your time — [number]."

**Metric:** Callbacks per 25 voicemails. Realistically 0-2. If it's 0/0, the voicemail itself isn't the problem — the list is cold.

**Text messages (warm leads only — TCPA risk on cold):**
- Angle A (bill): "Hi [name], Johan from NJ Solar. PSE&G rates jumped 46% in 10 years. Want a free 30-min review of your bill? No obligation."
- Angle B (neighbor): "Hi [name], Johan here. Your neighbor on [street] just went solar and saved $X/mo. Want me to run the same numbers for your home?"

**Metric:** Reply rate within 48 hours.

**Logging:** Every call/text/VM gets a row in your spreadsheet with script ID (A/B/C), outcome, and timestamp. 10 seconds of logging per call.

---

### TEST 5 — Time-of-Day / Day-of-Week

**Direct mail (postcards):** Land in mailbox **Tuesday-Thursday**. USPS data and marketer consensus: Mondays get lost in the weekend pile, Fridays get trashed on the way out. Mail drops 5 business days before target arrival.

**Nextdoor:** Post **Sunday 6-8 PM or Wednesday 7-9 PM**. Peak neighborhood lurking hours (kids in bed, scrolling local feed). Test this by posting 4 Sundays, 4 Wednesdays, compare engagement (reactions + comments + DMs).

**Cold calls — best windows per decades of sales data:**
- **Wed/Thu 10-11:30 AM** (settled into work day, pre-lunch)
- **Tue-Thu 4-5:30 PM** (wrapping up, easier to talk)
- **Worst:** Monday before 10 AM, Friday after 3 PM, any lunch hour

**How Johan tests this cheaply:** Don't A/B it. **Just do the right thing.** These windows are already well-known — using them is free, testing them costs time you don't have.

---

## Part 2: The Minimum Viable Tracking Spreadsheet

Create a new Google Sheet called `Johan-Experiments-2026`. Two tabs.

### Tab 1: `Leads` (one row per lead — expand your existing sheet)

| Column | Example | Notes |
|---|---|---|
| Lead ID | L0001 | Auto-increment |
| First touch date | 2026-04-04 | |
| Name | Jane Doe | |
| Phone | 201-555-0100 | |
| Email | jane@... | |
| Address / ZIP | 07030 | For territory analysis |
| Source | facebook | Channel bucket — controlled list |
| Sub-source | bill-shock-mar | Campaign name |
| Experiment tag | postcard-A | Which variant, if any |
| Cost attributed | $3.50 | $ spent ÷ leads from that ad |
| Hours attributed | 0.25 | Time sunk into this lead |
| Bill amount | $180 | Qualifier |
| Motivation | "bill too high" | From form |
| Booked? | Y | THE metric |
| Booked date | 2026-04-11 | |
| Show? | Y | Did they show up |
| Closed? | Y | Signed PPA (lags 30-90 days) |
| Deal value | $X | For CAC math |
| Notes | "call back Tue" | |

**Formulas to add:**
- Days first touch → booked: `=IF(M2="Y", N2-B2, "")`
- Effective CAC: `=J2/IF(M2="Y", 1, 0)` (cost per booking)

### Tab 2: `Experiments` (one row per test)

| Column | Example |
|---|---|
| Experiment ID | EXP-001 |
| Name | Postcard A vs B headline |
| Hypothesis | "Loss aversion beats social proof for cold NJ homeowners" |
| Start date | 2026-04-04 |
| End date (target) | 2026-04-25 |
| Variant A description | "Your bill went up" |
| Variant B description | "Neighbors said yes" |
| Sample A | 121 |
| Sample B | 122 |
| Metric | Booked consultations |
| Result A | 3 |
| Result B | 1 |
| Winner | A (directional) |
| Decision | Reorder A-heavy 80/20 |
| What I learned | "Bill shock beats FOMO in cold NJ mail" |
| Status | Done |

Pin this tab. This is your lab notebook.

---

## Part 3: The Friday Weekly Experiment Review (30 min)

Every Friday at the same time — put it on your calendar, recurring.

### The 7 questions (4 minutes each):

1. **What got booked this week?** (Count booked consultations. This is THE number.)
2. **Where did they come from?** (Sort by Source column. Is one channel dominating?)
3. **What did each booking cost me?** (Dollars + hours. Any channel >$100/booking? Flag it.)
4. **Which experiments are running right now?** (Check Experiments tab. Any past end date? Close them out.)
5. **What did I learn this week that I didn't know last Friday?** (Write one sentence. If you can't, you ran no real experiments.)
6. **What's my ONE change for next week?** (Kill something, double something, or test something. ONE thing.)
7. **What am I procrastinating on?** (Usually the answer: calling the leads you already have.)

### The three decisions every Friday:

- **KILL:** Any channel with 0 bookings after 4 weeks and real effort. Stop. No sentimental attachment.
- **DOUBLE:** The channel producing the most bookings per hour or dollar. Put 2x the effort there next week.
- **TEST:** ONE new thing. Not five. One.

**Output of the review:** 3 bullets in a pinned note. That's it. No deck, no report, no tracker update beyond what's already in the sheet.

---

## Part 4: Statistical Significance — The Non-Technical Version

You will almost never have enough data for "statistical significance" in the textbook sense. Here's when to trust a result anyway:

### Johan's rules of thumb:

| Situation | Can you trust it? |
|---|---|
| 1 vs 0 (A got 1 booking, B got 0) | No. Noise. |
| 3 vs 0 | Maybe. Lean A but keep testing. |
| 5 vs 0 or 5 vs 1 | Yes, directionally. Act on it. |
| 10 vs 2 | Yes, confidently. A wins. |
| 2 vs 3 | Tie. Pick based on gut or cost. |
| 20 vs 15 | Probably a tie. Not worth declaring. |

### The "could this be a coincidence?" test:

Ask: **If I flipped a coin, could I plausibly get this result?**
- 1 vs 0 — yes, obviously
- 3 vs 0 — a fair coin gets this ~12% of the time
- 5 vs 0 — ~3%. Trust it.
- 10 vs 2 — <2%. Very trustworthy.

That's literally all the statistics you need.

### The 5x rule:

For a test to be trustworthy, the winner should have **at least 5x** the conversions of the loser, OR the test should run until you have at least **30 total conversions** across both variants.

Below either threshold: directional only, don't bet the farm.

### Time cap:

**No experiment runs longer than 4 weeks.** If you don't have a clear answer in 4 weeks, the effect is too small to matter at your scale. Kill the test, move on.

---

## Part 5: What NOT to Test

At your scale, these tests are procrastination dressed up as strategy. **Skip them all:**

### Waste-of-time tests:
- **Button colors.** Red vs blue. Irrelevant.
- **Font sizes.** Nobody is not booking because your font is 14px instead of 16px.
- **Hero image variations** (unless it's photo vs no photo — that's fine).
- **Micro-copy on field labels.** "Name" vs "Your Name." Does not matter.
- **Email subject line tests on sends <200.** You need thousands.
- **"Optimal" number of emails in a nurture sequence.** Use 5. Move on.
- **Landing page color schemes.**
- **Favicon, logo size, footer layout.**
- **Anything that requires >2 hours to set up and <5 hours/week to run.**

### When "experimentation" is procrastination (the warning signs):

- You've been "testing" the headline for 6 weeks and haven't called your existing 243 leads.
- You're building a tracking dashboard before you have 20 rows of data.
- You're comparing 4+ variants at once (you can't, your volume is too low).
- You're optimizing a channel that has produced 0 bookings in 30 days (that's not optimization, that's denial).
- You're reading about A/B testing instead of running A/B tests.
- You have more experiment tabs than booked consultations.

**Rule:** If the test doesn't change what you do next Monday, skip it. If you have <5 hours this week, skip the test and go **call the leads you already have.** Every time. Without exception.

### The "calling existing leads" override:

You have 243 cold postcards going out. You will have leads. **Calling a warm lead is worth 10x more than any test you can run.** If experimentation is pulling you away from phone time, you are doing it wrong.

---

## Part 6: The Whole Framework on One Page

**Daily (5 min):**
- Log every lead, call, text to the sheet with Source, Sub-source, Experiment tag.

**Weekly Friday (30 min):**
- Review the 7 questions.
- Kill 1 thing, double 1 thing, test 1 thing.
- Write 3 bullets of what you learned.

**Monthly (60 min):**
- Close out experiments past their end date.
- Update the Experiments tab with results.
- Re-weight channel effort based on bookings per $100 or per hour.

**Never:**
- Test >2 things at once.
- Run a test >4 weeks.
- Optimize a channel producing 0 bookings.
- Skip Friday review.
- Mistake motion for progress.

**Always:**
- Tag every lead with a Source.
- Believe the phone > believe the dashboard.
- Kill losers without sentimentality.

---

## First Actions (This Week)

1. Add the new columns to your Google Sheet (Tab 1 above). 15 minutes.
2. Build the Experiments tab. 10 minutes.
3. Decide on tracking method for the 243 postcards (promo code or URL path). 15 minutes.
4. Install Microsoft Clarity on your website. 5 minutes.
5. Put "Friday Experiment Review — 30 min" on your calendar, recurring. 1 minute.
6. Write down your ONE experiment for next week in the Experiments tab. 5 minutes.

Total: under 1 hour. Do it before the postcards land.
