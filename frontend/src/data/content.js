// All portfolio copy — updated. Don't paraphrase.

export const NAV_SECTIONS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "positions", label: "Positions" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
];

export const RESUME_URL = "/resume-placeholder.pdf";
export const LINKEDIN_URL = "#linkedin-placeholder";
export const EMAIL = "saqsham2002@gmail.com";

export const HERO_BG =
    "https://customer-assets.emergentagent.com/job_saksham-portfolio-3/artifacts/49iswo72_WhatsApp%20Image%202026-07-08%20at%2023.55.16.jpeg";
// About photo — same source image as the hero for now, cropped as a circle.
export const ABOUT_PHOTO = HERO_BG;
export const TMRW_LOGO =
    "https://customer-assets.emergentagent.com/job_saksham-portfolio-3/artifacts/udk3w8nx_image.png";
export const OZI_LOGO =
    "https://customer-assets.emergentagent.com/job_saksham-portfolio-3/artifacts/y97e9rwc_image.png";

export const ABOUT = {
    paragraphs: [
        "I'm a product manager who starts with the problem, not the solution — reading behavioral data to find where things actually break, then getting close enough to users to understand why. I care about the outcome for the business and the person using the product, and I don't think you get to either one by only staring at a dashboard.",
        "I'm also a builder at heart — I like getting hands-on with whatever it takes to turn an idea into something real, whether that's a PRD, a working prototype, or a full-stack build of my own. If you like people who go from spotting a problem to shipping something for it — data-backed, never data-only — you'll probably enjoy what I'm building.",
    ],
    traits: [
        { icon: "BarChart3", label: "Data-led product thinker" },
        { icon: "Lightbulb", label: "First-principles problem solver" },
        { icon: "Users", label: "Events & PR Head, E-Cell MIT Manipal" },
        { icon: "Sparkles", label: "PM @ Tmrw (Aditya Birla Group) · OZI" },
    ],
    quote: "Opened a stand-up comedy show for 2,500 students at MIT Manipal.",
    facts: [
        { top: "B.Tech, E&I", bot: "MIT Manipal (MAHE)" },
        { top: "8.07 CGPA", bot: "Diamond Jubilee Award, 1st rank" },
        { top: "Jul 2026", bot: "Graduating" },
        { top: "Bangalore", bot: "Currently based" },
    ],
};

export const EXPERIENCE_INTRO =
    "Two very different problems, roughly a year apart — a high-traffic D2C fashion platform figuring out where users get stuck, and a quick-commerce startup finding its first customers on the ground. Here's what I actually built and learned at each.";

export const COMPANIES = [
    {
        id: "tmrw",
        name: "Tmrw",
        logo: TMRW_LOGO,
        dates: "Jan 2026 – present",
        role: "Product management intern",
        line: "Aditya Birla Group's D2C house of brands — Bewakoof, Nobero, TIGC and more.",
        skills: [
            "SQL & data querying",
            "Microsoft Clarity (behavioral analysis)",
            "A/B test design & experiment analysis",
            "PRD writing & UX flows",
            "K-Means clustering (Databricks)",
            "GA4 event tracking & analytics QA",
            "Jira & Notion workflow ownership",
        ],
        projects: [
            {
                id: "cohort-sorting",
                title: "Cohort-based PLP sorting (Nobero)",
                headline: "4.1x intent gap",
                cardCopy:
                    "Built a 4-cohort intent model so Nobero stops showing every visitor the same product ranking.",
                problem:
                    "Nobero's PLP ranked every visitor with the same formula — QPTI (revenue generated per view) — regardless of intent. A first-time visitor with zero browsing history saw the exact same product order as a returning shopper who had added to cart five times. High-converting products stayed buried for the people most likely to buy them, while discovery-oriented products got pushed at users already deep in the funnel and ready to convert — suppressing both conversion rate and revenue per user.",
                solution:
                    "Analyzed 100,000+ sessions across 45 days of Nobero web data, running K-Means clustering on 10 behavioral signals computed per user before each session starts — browsing history depth, purchase funnel depth, session quality, recency, search behavior, historical add-to-cart count, and visit count among them. Tested 2 to 8 possible cluster counts; the silhouette score peaked at k=4, confirming 4 natural groupings, and the boundaries were validated across 4 different ML model types agreeing at 92% to 99.6% accuracy. The three signals that most reliably predict session intent: whether the user has ever used search, how many times they've visited before, and their historical add-to-cart count. Architecture: a classification layer runs at session start, assigns the user to one of the 4 cohorts, and looks up a pre-computed product rank order for that cohort from a low-latency serving layer (Redis) — the actual ranking computation itself runs once daily in Databricks, so the live PLP API never has to query Databricks per user.",
                metrics:
                    "Personalization of PLP ranking by intent level, alignment between product order and actual purchase likelihood — this is a pre-launch justification metric, not yet a live conversion result.",
                numbers:
                    "100,000+ sessions analyzed, 4 validated cohorts, 92–99.6% cross-model accuracy on cohort boundaries, and a 4.1x purchase-rate gap between the highest-intent cohort (~4% purchase rate) and the lowest-intent cohort (~0.7%) — the evidence that these are fundamentally different shoppers and the justification for building cohort-specific sorting. Feature ships end of July 2026.",
                stats: [
                    { num: 100000, suffix: "+", lbl: "Sessions analyzed" },
                    { num: 4, lbl: "Cohorts validated" },
                    { num: 4.1, suffix: "x", lbl: "Intent gap", decimals: 1 },
                ],
            },
            {
                id: "sourcing-oms",
                title: "Sourcing OMS (Tmrw House of Brands · B2B)",
                headline: "OTIF 35% → 85% (target)",
                cardCopy:
                    "Contributing to a single sourcing system to replace Tmrw's Excel trackers and disconnected tools.",
                problem:
                    "Tmrw runs a complex multi-brand sourcing operation that, at the time, ran entirely on Excel trackers and disconnected tools — Tessera, Unicommerce, MS D365, AppSheet, Simplex, Google Sheets — stitched together by email, phone calls, and WhatsApp, with zero real-time visibility into production progress, pre-production approvals, or dispatch timelines. Three concrete symptoms: OTIF, on-time-in-full delivery, sat at 35% against an 85% target for pilot brand Nautinati in March 2026 (57,415 GRN units delivered out of 164,212 planned); quality inspection requests were managed in a tool (AppSheet) not integrated with the order lifecycle, so quality failures weren't linked to vendor scorecards; and process fragmentation meant every data point was manually maintained in at least two places, with the Daily Production Report compiled by hand from multiple sources every single day.",
                solution:
                    "Shadowing the senior PM owning the project (Sahil Sharma), actively contributing to the PRD and process mapping for a full Sourcing OMS covering the entire lifecycle from OTB (Open to Buy) to PO (Purchase Order) creation — designed to replace every Excel tracker and disconnected tool in one connected system. Nautinati is the pilot brand, with other brands to follow once validated.",
                metrics:
                    "OTIF (on-time-in-full delivery rate), process visibility across production/approvals/dispatch, manual double-entry eliminated, quality-failure traceability back to vendor scorecards.",
                numbers:
                    "Targeting OTIF improvement from 35% to 85% — a 50-point gap the system is designed to close. Currently in development, no live result yet.",
                stats: [
                    { num: 35, suffix: "%", lbl: "Current OTIF" },
                    { num: 85, suffix: "%", lbl: "Target OTIF" },
                    { num: 50, suffix: "pt", lbl: "Gap to close" },
                ],
            },
            {
                id: "dynamic-filters",
                title: "Dynamic filters (Bewakoof PLP)",
                headline: "↓80% zero-results",
                cardCopy:
                    "Rebuilt Bewakoof's PLP filter logic end-to-end so a user can no longer select a combination that doesn't exist in stock.",
                problem:
                    "42.8% of filter-apply sessions on Bewakoof's PLP were ending on a “No Items Found” zero-result page. Two root causes. First, static filters — filter options didn't update based on the user's selections or real-time inventory, so a user could pick a combination like size XL + color blue + slim fit that simply didn't exist in stock; the filter showed the option, the inventory didn't have it, and the user landed on an empty page. Second, generic filter attributes reused across every category instead of being tailored per category (t-shirts, jeans, shirts), which surfaced irrelevant attributes and caused wrong selections. On top of both: wrong or duplicate attribute values sitting in the catalogue, so a user could select a misspelled or duplicate size value and still land on zero results.",
                solution:
                    "Owned the full PRD, the user stories, the filter architecture logic, and the UX flows across mobile, desktop, and edge cases. Designed a two-tier attribute system: primary attributes (size, color) are always visible; secondary, category-specific attributes (fit, fabric for t-shirts, for example) only appear once a category is selected, so users never see irrelevant options. Built five components total: (1) dynamic filter updates — after every sub-attribute selection, all other attributes recompute in real time to show only inventory-valid combinations; (2) a real-time product count shown next to each filter value; (3) the two-tier attribute logic itself; (4) a new filter API — a dedicated endpoint built specifically for the dynamic filter system, separate from the existing PLP catalogue call; (5) a full catalogue cleanup pass across 300,000+ product IDs to remove wrong, duplicate, and incorrect attribute values before the new system could go live. Designed and owned the A/B test structure, then presented the full filter revamp at the Q1 FY26 quarterly feature review.",
                metrics:
                    "Zero-result filter sessions, overall PLP conversion, catalogue data quality (300,000+ PIDs cleaned), filter-to-purchase reliability.",
                numbers:
                    "42.8% → near-eliminated (zero-result sessions, ↓80% overall); conversion trending +1.6% positive, 10 days into a still-running A/B test; 300,000+ product IDs cleaned as part of the fix.",
                stats: [
                    { num: 80, suffix: "%", prefix: "↓", lbl: "Zero-result sessions" },
                    { num: 1.6, suffix: "%", prefix: "+", lbl: "Conversion (A/B)", decimals: 1 },
                    { num: 300000, suffix: "+", lbl: "PIDs cleaned" },
                ],
                hasDemo: true,
            },
            {
                id: "nectar-loyalty",
                title: "Nectar loyalty wallet (Nobero)",
                headline: "+22% app revenue",
                cardCopy:
                    "Rolled out Nobero's loyalty wallet across 7 touchpoints, from PLP to post-order.",
                problem:
                    "Nobero had no repeat-purchase moat. Loyalty programs are table stakes in fashion D2C — Myntra Insider, Ajio Wardrobe, H&M Member all already live — and without one, Nobero had no structured habit loop or measurable repeat-purchase signal.",
                solution:
                    "Owned the end-to-end rollout of Nectar, a third-party loyalty wallet, across Nobero. Users earn 10% cashback on every purchase, redeemable on any future order above ₹999 — redemption is deliberately app-only, to create an app pull. Surfaced messaging across 7 touchpoints spanning the full funnel: pre-order (a wallet balance strip on PLP, a cashback callout with info icon on PDP, wallet messaging in cart) and post-order (a Thank You page confirming eligible cashback, an Order Details page showing total money saved via Nectar, and a dedicated Cashback & Rewards section to browse rewards, history, and redeem).",
                metrics:
                    "Share of orders and revenue influenced by the loyalty wallet, app revenue contribution, platform-specific conversion (tracked separately for Android, iOS, Desktop since results diverged by platform).",
                numbers:
                    "Influences 6% of orders and 7% of revenue on Nobero, +22% app revenue contribution. A/B results split by platform: +3% Desktop conversion, +1% iOS conversion, −8% Android conversion (Android result is still being iterated on).",
                stats: [
                    { num: 6, suffix: "%", lbl: "Orders influenced" },
                    { num: 22, suffix: "%", prefix: "+", lbl: "App revenue" },
                    { num: 7, suffix: "%", lbl: "Revenue influenced" },
                ],
            },
            {
                id: "header-logo",
                title: "Header logo (Bewakoof PLP/PDP)",
                headline: "+2.79% conversion",
                cardCopy:
                    "Added a one-tap way home for users landing on Bewakoof with no navigation history.",
                problem:
                    "Users landing on Bewakoof's PLP or PDP from marketing channels — ads, social, email — arrive with no navigation history. The back arrow becomes a dead element with nowhere to go. This was surfaced by a personal Microsoft Clarity analysis run at the very start of the internship: heatmaps, rage clicks, dead clicks, and session recordings, filtered to regular weekdays to avoid sale-driven anomalies, and split by new vs. returning users and Android vs. iOS. That analysis found a 70% rage-tap rate on the broken back button before users gave up and bounced.",
                solution:
                    "Added a tappable Bewakoof logo to the top nav bar on both PLP and PDP, alongside the existing back arrow — one tap always routes to the homepage. A clean, simple, always-available navigation escape for every user. This was one of two projects seeded directly by that first Clarity analysis. Ran as a full-funnel A/B experiment, variant vs. control.",
                metrics:
                    "User conversion, purchased users, average basket size, PLP-to-purchase and PDP-to-purchase completion among users who used the logo, logo click-through rate.",
                numbers:
                    "+2.79% user conversion, +2.61% purchased users, +1.22% average basket size, +135% PLP→purchase among PLP clickers, +76% PDP→purchase among PDP clickers, 1.58% overall logo click-through rate. Ramped to 100% the following sprint as a clear, uncontested winner.",
                stats: [
                    { num: 2.79, suffix: "%", prefix: "+", lbl: "Conversion", decimals: 2 },
                    { num: 135, suffix: "%", prefix: "+", lbl: "PLP → purchase" },
                    { num: 76, suffix: "%", prefix: "+", lbl: "PDP → purchase" },
                ],
            },
            {
                id: "fbt-atc",
                title: "FBT on Add to Cart (Bewakoof PDP)",
                headline: "In experiment",
                cardCopy:
                    "Moved Bewakoof's product recommendations to the exact moment of highest purchase intent — right after Add to Cart.",
                problem:
                    "Users follow a predictable PDP pattern — land, browse images, select size/colour, tap Add to Cart, exit — completing their purchase intent and leaving without scrolling further. The FBT (Frequently Bought Together) and recommendation sections sat below the ATC button, at roughly 70% scroll depth. Clarity data sampled across two PDP URLs (4,823 combined sessions) showed only 66% of users even reach the ATC button zone at 40% scroll depth, with a dramatic drop-off below that — recommendation sections were getting near-zero visibility for most sessions.",
                solution:
                    "Surface FBT recommendations at the moment of highest intent — immediately after the user taps Add to Cart — without requiring any further scroll. Two things happen simultaneously on ATC tap: a slim, non-blocking confirmation bar replaces the old “Item Added to Bag” toast at the top (showing product name, price, and a View Bag link), and an FBT bottom sheet auto-inserts below it — 4 to 5 product cards in horizontal scroll, each with a direct one-tap (+) add, no modal navigation required. The shelf appears exactly where the user's thumb already is.",
                metrics:
                    "Visibility of recommendation/cross-sell inventory at the highest-intent moment in the PDP flow.",
                numbers:
                    "Built directly from Clarity data showing only 34% of users ever reached the old recommendation zone. Shipped and currently in experiment — final before/after conversion numbers not yet locked. This is one of the “4 growth features” (with header logo, feed view, and large-tile-style) that together drove +3.2% overall user conversion and +1.52% purchased users on Bewakoof.",
                stats: [
                    { num: 34, suffix: "%", lbl: "Old reco visibility" },
                    { num: 3.2, suffix: "%", prefix: "+", lbl: "Bundle conversion", decimals: 1 },
                    { num: 1.52, suffix: "%", prefix: "+", lbl: "Purchased users", decimals: 2 },
                ],
            },
            {
                id: "best-price-plp",
                title: "Best Price on PLP (Bewakoof)",
                headline: "In development",
                cardCopy:
                    "Extended Bewakoof's “Best Price” discount visibility one level earlier, from PDP to the product listing page.",
                problem:
                    "Bewakoof offers tiered cart-level discounts plus a 5% prepaid discount at checkout, but users only discovered these at cart or checkout — too late in the journey. On the PLP, users were forming their value perception on displayed price alone, and a meaningful share of traffic (new users) had never been through checkout before, so they had no way of knowing these offers even existed. “Best Price” — a tag showing the real, all-discounts-included price — had already shipped on PDP and delivered a measurable lift across PDP→ATC, ATC→Checkout, AOV and RPU.",
                solution:
                    "Add a “Best Price ₹XXX” tag to every eligible product card directly on the PLP — one level earlier in the funnel than the existing PDP version. Deliberately non-clickable on PLP, consistent with how Myntra and Zepto handle the same pattern; tapping the card still routes to PDP, where the existing Best Price bottom sheet handles deeper exploration.",
                metrics:
                    "Price transparency earlier in the funnel; expected downstream lift on PLP→ATC and PLP→Checkout, based on the PDP version's proven pattern.",
                numbers:
                    "PRD written, currently in development / entering A/B — no PLP-specific numbers yet. The PDP version it extends already showed a measurable lift across PDP→ATC, ATC→Checkout, AOV and RPU.",
                stats: [],
            },
            {
                id: "feed-view",
                title: "Instagram-style feed view (Bewakoof PLP)",
                headline: "−7.64% conversion (an honest result)",
                cardCopy:
                    "Tested an Instagram-style swipe exploration UX on Bewakoof's collection pages — and let the data say no.",
                problem:
                    "The bet: giving users an Instagram-style, swipe-first exploration experience on collection PLPs would lean into browsing behavior they already knew from social apps, and increase discovery. Scoped to mWeb only, collection PLPs only, run as a 90/10 A/B test.",
                solution:
                    "Shipped the feed-style browsing experience and let the experiment run rather than assuming the bet was right.",
                metrics:
                    "None on the primary metric — included here deliberately as an honest result, not cherry-picked wins only.",
                numbers:
                    "−7.64% user conversion, +2.19% average order value, +3.38% average basket size. Reading: conversion dropped but basket size grew — discovery-style browsing produced bigger baskets but fewer completed checkouts. Not shipped to 100%, but a real learning about the trade-off between discovery UX and conversion.",
                stats: [
                    { num: 7.64, suffix: "%", prefix: "↓", lbl: "User conversion", decimals: 2 },
                    { num: 2.19, suffix: "%", prefix: "+", lbl: "Average order value", decimals: 2 },
                    { num: 3.38, suffix: "%", prefix: "+", lbl: "Average basket size", decimals: 2 },
                ],
            },
            {
                id: "analytics-fix",
                title: "Analytics tracking fix (Bewakoof)",
                headline: "12% → 98% tracking coverage",
                cardCopy:
                    "Fixed a broken analytics pipeline that was quietly invalidating most of Bewakoof's A/B tests.",
                problem:
                    "“Experiment Viewed → Purchase” event tracking coverage sat at just 12%, meaning 88% of purchase events inside running experiments weren't being properly attributed. Every A/B test decision at Bewakoof was effectively being made on deeply incomplete data — without anyone realizing it.",
                solution:
                    "Diagnosed and fixed the GA4 analytics event-mapping pipeline underneath the experimentation platform.",
                metrics:
                    "Experiment data reliability and the trustworthiness of every A/B test result run on the platform afterward.",
                numbers:
                    "Tracking coverage went from 12% to 98%. Not a user-facing feature — foundational instrumentation work that made every other experiment on this list trustworthy.",
                stats: [
                    { num: 12, suffix: "%", lbl: "Before coverage" },
                    { num: 98, suffix: "%", lbl: "After coverage" },
                    { num: 86, suffix: "pt", lbl: "Coverage gain" },
                ],
            },
            {
                id: "trust-marker",
                title: "Clickable trust marker (Bewakoof PDP)",
                headline: "In progress",
                cardCopy:
                    "Made Bewakoof's PDP trust markers (“Easy Returns,” “100% Authentic”) tappable so users can learn more.",
                problem:
                    "Trust markers on the PDP (like “Easy Returns” and “100% Authentic”) were static text — users had no way to learn more about what those claims actually meant at the exact moment they were deciding whether to trust the purchase.",
                solution:
                    "Made the trust markers clickable, surfacing more detail right at the decision-making moment.",
                metrics:
                    "Not yet available — this is a smaller growth hack still in progress.",
                numbers:
                    "Flagging rather than inventing depth — depth to be added once more detail is available.",
                stats: [],
            },
        ],
    },
    {
        id: "ozi",
        name: "OZI",
        logo: OZI_LOGO,
        dates: "Dec 2025 – Jan 2026",
        role: "Growth and product intern",
        line: "Quick-commerce platform for babies and moms across NCR, 60-minute delivery, backed by Blume Ventures, 15,000+ SKUs across 10+ categories.",
        skills: [
            "0→1 systems thinking",
            "Offline retail operations",
            "Partnership & BD outreach",
            "Manual-to-digital process design",
            "Shipping fast under constraints",
        ],
        projects: [
            {
                id: "event-oms",
                title: "Offline event OMS (product build)",
                headline: "+4.3% offline sales",
                cardCopy:
                    "Replaced WhatsApp-logged sales with a live, one-tap OMS for offline events.",
                problem:
                    "OZI ran a large share of its sales through offline brand activations — stalls at play cafes, school events, and malls — but the operational backbone behind those stalls was almost entirely manual. Every stall carried a different product catalogue and different active coupon offers, and products weren't listed at MRP (a ₹1,000 MRP item might be listed at ₹800, with a different discount stacked per location), so the person running the stall had no reliable, real-time way to know the actual selling price for a given product at that location. Sales recording was worse: the stall person would photograph or hand-write orders, post them into a WhatsApp group during the event, and then someone would manually type every transaction into a Google Sheet — usually two or three days later, on the following Monday or Tuesday. That delay caused lost and unclear records, zero real-time inventory visibility (no way to know what had sold or what was left), products going missing with no traceability, and no way to automatically create a user ID in OZI's database for offline buyers — undermining the whole point of the events, which was to convert offline buyers into online users.",
                solution:
                    "Built a complete Order Management System specifically for OZI's offline events, in three steps. First, catalog setup: before each event, only the products assigned to that specific location are entered into the system, each with its correct platform price and any active coupon offers for that location — removing all MRP-vs-listed-price confusion. Second, stall-person authentication: the person running the stall logs in and sees only their location's relevant products, correct prices, and active offers. Third, recording a sale, in two modes — if the customer already has an OZI account, the stall person just enters their name and number and the sale is recorded against their existing account; if the customer is new, the stall person captures name, phone number, product(s), and payment mode, which automatically creates their user ID in the OZI database, maps them to the product purchased, and updates inventory in real time.",
                metrics:
                    "Manual data-entry time (eliminated entirely), inventory accuracy and real-time visibility, automatic online user-ID creation for offline buyers, pricing/offer accuracy at the point of sale, product traceability.",
                numbers:
                    "Offline event sales up 4.3%, with the manual WhatsApp-to-spreadsheet logging process eliminated entirely.",
                stats: [
                    { num: 4.3, suffix: "%", prefix: "+", lbl: "Offline sales", decimals: 1 },
                    { num: 100, suffix: "%", lbl: "Manual logging cut" },
                ],
            },
            {
                id: "brand-activations",
                title: "Brand activations & events (Gurgaon HQ)",
                headline: "+18% weekend orders",
                cardCopy:
                    "Planned offers and product mix for 15+ weekend brand activations across NCR.",
                problem:
                    "In OZI's expansion phase, most sales were still coming through offline channels — weekend activations at play cafes and school events across NCR — but execution quality and offer planning varied a lot event to event, with no consistent process for deciding what to sell, at what price, and with what offer at each location.",
                solution:
                    "Ran point on planning and executing 15+ weekend brand activations out of OZI's Gurgaon HQ — deciding which offers to run at each event and location, figuring out the right product mix per stall, and managing on-the-ground execution to drive both direct offline sales and new user registrations simultaneously.",
                metrics:
                    "Weekend order volume, new user registrations, activation count and consistency.",
                numbers:
                    "15+ brand activations hosted, weekend orders up 18%, user registrations up 27%.",
                stats: [
                    { num: 18, suffix: "%", prefix: "+", lbl: "Weekend orders" },
                    { num: 27, suffix: "%", prefix: "+", lbl: "Registrations" },
                    { num: 15, suffix: "+", lbl: "Activations hosted" },
                ],
            },
            {
                id: "city-expansion",
                title: "City expansion — Dwarka & Noida launches",
                headline: "14 partnerships closed",
                cardCopy:
                    "Closed partnerships to seed early demand ahead of the Dwarka and Noida launches.",
                problem:
                    "OZI's Dwarka and Noida city launches needed an early demand base before go-live — a brand-new city launch with zero existing customers has nowhere to generate its first offline sales or registrations from.",
                solution:
                    "Worked as part of OZI's expansion team on partnership calls, play-cafe deals, and school partnership outreach — closing agreements with local play cafes, gaming arcades, and schools to run OZI activations and build an early demand pipeline ahead of each city's official launch.",
                metrics:
                    "Partner pipeline for new city launches, pre-launch demand base.",
                numbers:
                    "14 partnerships closed across play cafes, gaming arcades, and schools for the Dwarka and Noida launches.",
                stats: [
                    { num: 14, lbl: "Partnerships closed" },
                    { num: 2, lbl: "New cities seeded" },
                ],
            },
        ],
    },
];

export const POSITION = {
    heading: "Events & PR Head — E-Cell, MIT Manipal",
    context:
        "One of 14 executives picked for the board out of a pool of 88 — headed a 16-person execution team inside E-Cell's 200+ member department.",
    tenure: "Sep 2023 – Aug 2025",
    progression: ["Executive", "Events & PR Head"],
    stats: [
        { num: 20000, suffix: "+", lbl: "MES footfall" },
        { num: 1.6, suffix: "x", lbl: "Registration growth", decimals: 1 },
        { num: 40, suffix: "+", lbl: "MOUs signed" },
        { num: 16, lbl: "Team members led" },
    ],
    work: "Started as an Executive in the Events & PR department before making the board in third year as Events & PR Head. The team's biggest build was the Manipal Entrepreneurship Summit — 15+ events over the tenure, 5,000+ participants, with speakers and guests including Velu Mani, Ashni Grover, Eclipse Nova, Raj Samani and SDX.",
    achievements: [
        "Broke every previous registration record for the Manipal Entrepreneurship Summit — up 1.6x on prior years.",
        "Signed 40+ MOUs with academic and corporate partners over the full tenure.",
        "Planned and executed 15+ events under MES, drawing 20,000+ footfall and 5,000+ participants.",
    ],
};

export const PROJECTS = [
    {
        id: "smartreco",
        wordmark: "SmartReco",
        category: "Fintech · Full-stack build",
        title: "Smart Credit Card Adviser",
        blurb:
            "An AI credit card recommender that matches users to the right card — by spend mix and income, not ads.",
        problem:
            "Most credit card “recommendation” sites are really ad placements ranked by commission, not fit for the actual user.",
        approach:
            "Scores 70+ Indian cards against a user's income, CIBIL score and a 6-category spend mix through a TOPSIS-based scoring engine, then layers Gemini 2.0 Flash on top to explain the recommendation in plain English. Includes a 2-card wallet optimizer for users who should be carrying more than one card.",
        stack: ["React", "FastAPI", "PostgreSQL", "Gemini 2.0 Flash", "TOPSIS scoring"],
        live: "https://smartreco.netlify.app",
    },
    {
        id: "snabbit",
        wordmark: "Snabbit",
        category: "Observation-led build",
        title: "Snabbit — time estimation prototype",
        blurb:
            "A prototype of a delivery time-estimation feature — an observation as a user that turned into a self-initiated build.",
        problem:
            "Noticed Snabbit's home-service delivery flow was missing a real time-estimation signal — a friction point I kept running into as a user. That observation was worth turning into a personal project rather than filing away as feedback.",
        approach:
            "Built a functional prototype of the missing time-estimation feature end-to-end — treating the problem as a real product exercise: understand the flow, teardown the current UX, and ship a working version rather than just describing one.",
        stack: ["Prototype build", "Product teardown", "Full-stack shipping"],
        live: "https://snabbit-estimation.netlify.app",
    },
];

export const ACHIEVEMENTS = [
    {
        badge: "Top 40",
        title: "HSBC India Business Case",
        context: "National · 2,000+ teams · with Sattva & MindMap",
    },
    {
        badge: "5th place",
        title: "Market Mania, SRCC Delhi",
        context: "Flagship marketing case competition",
    },
    {
        badge: "1st place",
        title: "Monopoly, MIT Manipal",
        context: "80+ teams · flagship business competition",
    },
    {
        badge: "1st Rank",
        title: "Diamond Jubilee Award",
        context: "Electronics & Instrumentation, 2nd year — academic",
    },
];

export const CONTACT = {
    lead:
        "Open to full-time APM, Product Analyst or Founder's Office roles — and internships with a clear path to full-time. Reach out on either of these.",
    closing: "Thanks for reading this far.",
};
