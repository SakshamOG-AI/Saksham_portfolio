# Saksham Goel — Portfolio Site (Vasu-cloned)

## Original problem
Single-page personal portfolio site, exact clone of vasu-yogeshwar.lovable.app visual
system. Built to be posted on LinkedIn and sent to hiring managers as an interactive
product artifact. Target roles: APM / Product Analyst / Founder's Office at D2C + fintech.

## Architecture
- Pure React 19 SPA. No backend needed (content is hardcoded).
- All theme tokens live in /app/frontend/src/index.css exactly as VASU_AUDIT.md specifies.
- All copy lives in /app/frontend/src/data/content.js.

## Sections implemented (2026-02)
1. Hero — real stand-up comedy photo bg + vignette + gradient text + shine sweep + bouncing arrow
2. About — glass card, 2 paragraphs (updated), 4 traits, magenta pull-quote, fact row
3. Experience — company tabs, 7 skill chips, carousel with 5 Tmrw projects + 3 OZI projects
   - Case-study takeover: fixed-position slide-up, hash-routed (#project/{company}/{id}),
     4 blocks (Problem / Solution / Metrics improved / Numbers that moved the most),
     count-up stats, ESC-close, back-button close
   - Live "Static vs Dynamic filter" demo built into the Dynamic Filters case study
4. Position — "Events & PR Head" (was Board Head, corrected), progression chips, 4 count-up stats
5. Projects — 2 personal builds (SmartReco, Snabbit), gradient tile cards, modal
6. Achievements — 4 cards, decorative 3-star row (Vasu-faithful clone)
7. Gallery — dashed placeholder stub (8 tiles)
8. Contact — glass card, brand-colored LinkedIn (blue) + Email (red) pills

## Open placeholders
- LinkedIn URL: `#linkedin-placeholder` in data/content.js (LINKEDIN_URL)
- Résumé PDF: `/resume-placeholder.pdf` (RESUME_URL)
- Gallery photos: still stub
- About photo: gradient circle w/ "SG" initials
- Third personal project slot: intentionally empty

## Backlog / future
- P1: Real Résumé PDF at /public/resume.pdf
- P1: LinkedIn URL swap-in
- P2: Real gallery photo grid + lightbox
- P2: About photo (real headshot)
- P2: 3rd personal project when confirmed
