# Facebook Ads Playbook — NJ Solar

## Budget Reality Check

At $300-500/month, you're at the floor of viable paid media for solar. National companies (SunRun, Tesla) spend millions. But a solo rep with hyper-local targeting and authentic creative can carve out a niche they can't replicate. Your advantage is trust, locality, and speed — not budget.

## Why Facebook Gets 100% of the Ad Budget

- Google solar CPCs in NJ: $15-45/click. At $10/day, you get 0-1 clicks. Skip it.
- Facebook lets you target homeowners specifically (Google can't)
- Lower CPL ($15-40 vs $80-200 on Google)
- Visual medium — solar is a visual product

## Campaign Structure ($300/month = $10/day)

```
CAMPAIGN: solar-leads_meta_nj_homeowners
  ├── Budget: $10/day — CBO enabled
  ├── Objective: Leads (native Lead Form, NOT traffic)
  │
  ├── AD SET 1: "core-homeowners"
  │   ├── Audience: See targeting below
  │   └── Ads: 3 creatives (one per angle)
  │
  └── AD SET 2: "retargeting" (add after week 3)
      ├── Audience: Form openers who didn't submit
      └── Budget floor: $2/day
```

## Targeting

**Geography — Start with these NJ counties:**
- Tier 1: Bergen, Essex, Monmouth, Middlesex, Morris, Ocean, Passaic, Hudson
- Tier 2 (expand later): Burlington, Camden, Mercer, Somerset, Union
- Or narrow to his specific service area ZIP codes

**Demographics:**
- Age: 30-65
- Homeownership: **"Homeowners"** (Demographics > Home > Home Ownership) — MOST IMPORTANT filter
- Gender: All
- Income: Don't restrict (Meta's income targeting is unreliable)
- Language: English + consider Spanish

**Interests (OR logic, not AND):**
- Solar energy, Solar panel, Renewable energy
- Home improvement, Home renovation, Energy efficiency
- Tesla Powerwall, Electric vehicles
- Environmental issues, Sustainability
- Personal finance, Saving money

**Exclude:** Renters, apartment dwellers, people who already submitted the form, age under 25

**Estimated audience:** 200,000-500,000 (plenty for $10/day)

## Ad Creative — 3 Angles

### Ad A: The Savings Angle
**Headline:** NJ Homeowners Are Cutting Their Electric Bill by $1,800/Year
**Text:** Your neighbors are already saving. NJ homeowners who switched to solar are saving an average of $150/month — and most paid $0 out of pocket. I help homeowners in [County] find out exactly how much they can save. Takes 60 seconds. No commitment. No pressure. Just the math.
**CTA:** Get My Savings Estimate
**Image:** NJ home with solar panels. Overlay: "$0 down | $150/mo savings | Free estimate"

### Ad B: The Incentive Angle
**Headline:** New Jersey Will Pay You to Go Solar (Here's How Much)
**Text:** Most NJ homeowners have no idea how much the state and federal government will pay them to install solar. Between the 30% federal tax credit, NJ's SREC program, and net metering, the average NJ homeowner gets back $15,000-$25,000 in incentives. I put together free, no-obligation savings reports for homeowners in [County]. Takes 60 seconds.
**CTA:** See My Incentives
**Image:** Breakdown graphic: "Federal Tax Credit: 30% | NJ SRECs: $X,000 | Net Metering: $X/yr"

### Ad C: The Rate Hike Angle
**Headline:** PSE&G Rates Are Up Again — Lock In Your Energy Cost Now
**Text:** NJ electricity costs have increased over 20% in the last 3 years. Solar lets you lock in your rate at today's rate — or lower. No more surprises. No more rate hikes. I help homeowners in [County] figure out if solar makes sense. Free estimate, no obligation. 60 seconds.
**CTA:** Get My Free Estimate
**Image:** Split — left: PSE&G bill with red upward arrow. Right: solar panel with green flat arrow.

## Lead Form Setup

**Use Facebook native Lead Form (NOT a landing page).** 2-5x higher conversion at this budget.

**Use "Higher Intent" form type** (adds confirmation screen, reduces junk by 20-30%).

**Fields (6 max — every extra field loses 10-15% completions):**
1. Full Name (pre-filled)
2. Email (pre-filled)
3. Phone Number (pre-filled)
4. "Do you own your home?" — Yes / No / I rent
5. "Average monthly electric bill?" — Under $100 / $100-200 / $200-300 / $300+
6. ZIP code

**Must include:** Privacy policy URL (use free Google Sites page)

## Lead Flow: Form → Phone in 5 Minutes

```
Facebook Lead Form submitted
       │
       ▼
Zapier (free tier, 100 tasks/month)
       │
       ├──► Google Sheet (lead database)
       ├──► SMS to his phone: "NEW LEAD: [Name], [Phone], [ZIP], Bill: $[X]. Call within 5 min."
       └──► Auto-email to lead: "Thanks! I'll be calling shortly. Here's a quick overview of NJ incentives: [link]"
```

**If he can't call immediately (door-to-door):**
Auto-text to lead via Zapier: "Hi [Name], thanks for your solar estimate request! I'm [Name], your local consultant. I'll call you within the hour."

## Testing Plan

**Month 1:** Run all 3 ads. Let Facebook optimize. After $150 spent, review which has lowest CPL.

**Month 2:** Kill worst performer. Create 2-3 variations of the winner (same copy/diff image, same image/diff headline, video version).

**Month 3:** Test audiences (broad vs. interest-targeted, different counties, age segments).

**Kill criteria:**
- $50+ spent, zero leads → kill
- 1,000+ impressions, CTR below 0.5% → kill
- CPL 2x+ higher than other ads after $75 → kill

**Keep criteria:**
- CPL under $30 → keep running
- Strong CTR (above 1%) → give more time

## Realistic Expectations (Be Honest With Your Brother)

### Cost Per Lead
- Facebook Lead Ads in NJ solar: **$15-40/lead** ($20-25 realistic midpoint)
- Google Search Ads: $80-200+/lead (don't bother at this budget)

### Funnel Math

```
100 form submissions
 └── 15-20% junk → 80-85 contactable
      └── 40-50% answer phone → 35-45 engaged
           └── 60-70% actually qualified → 20-30 qualified
                └── 30-40% book appointment → 7-12 appointments
                     └── 20-30% close → 1-3 deals
```

### Monthly Volume

| Budget | Raw Leads | Qualified | Appointments | Closes |
|---|---|---|---|---|
| $300/mo | 8-15 | 5-10 | 2-5 | 0-2 |
| $500/mo | 12-25 | 8-16 | 3-8 | 1-3 |

### Timeline
- **Month 1:** Algorithm learning. 5-10 leads, mostly low quality. Maybe 1 appointment. Likely 0 closes. Normal.
- **Month 2:** CPL drops 20-30%. 8-15 leads. Creative optimization. 2-4 appointments. Maybe 1 close.
- **Month 3:** System working. 10-18 leads. 3-6 appointments. 1-2 closes.
- **Commit to 3 months minimum** before judging.

### Break-Even Math
If average commission = $2,000-5,000 per deal, ONE close every 2-3 months makes $300/mo profitable.

## Compliance

### Facebook Policy
- Use "estimated" or "average" — never guarantee savings
- No before/after lifestyle imagery
- Lead form MUST link to privacy policy
- Solar ads generally don't need Housing special category (unless referencing home value)

### Company Brand vs. Personal Brand
- **Best:** Get company permission to run ads under their brand
- **Backup:** Run as personal brand ("Solar with [Name]") — check employment contract for non-compete clauses
- **Ideal:** "Hi, I'm [Name], your local [Company] solar consultant" — needs written company approval

### NJ Regulations
- NJ Consumer Fraud Act: no misleading savings claims
- Incentive info must be current and accurate (SREC rates change)
- Company must be NJ Home Improvement Contractor registered

## Don't Waste Money On
- Google Ads (CPCs too high at this budget)
- TikTok Ads (audience too young)
- LinkedIn Ads ($8-12 CPCs, no homeowner targeting)
- Buying leads from lead gen companies (shared with 5-8 competitors)
- Fancy CRM (Google Sheet handles 25 leads/month fine)
- Hiring an agency ($500/mo fee on $300/mo spend = insane)
