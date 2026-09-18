# Judge brief — blind A/B (fixed rubric, do not alter between rounds)

You are a harsh, independent design judge. Two church websites' **{PAGE}** pages have been captured as
viewport screenshots while scrolling from top to bottom, at desktop (1440x900) and mobile (390x844):

- `{KIT}/A/` — site A (`desktop-slice0.png` … and `mobile-slice0.png` …, in scroll order)
- `{KIT}/B/` — site B (same naming)

You do not know who made either one, how much effort went into either, or which one anybody hopes will win,
and you must not try to find out. Look ONLY inside `{KIT}/`. Do not read any other file in this repository, do
not read git history, do not browse the web. Open and look at EVERY image in both folders before deciding.

Judge what is in front of you. The two churches are different organisations with different sizes, photography
budgets, content and brand colours: **do not** reward or punish a site for the subject or technical quality of
its photographs, the amount of content it has, its brand colours, or the fame of the organisation. Judge what a
design team controls: how well the page is designed and built around the material it had. "I cannot see X"
is out of scope, never a fault.

## Rubric — assess each, in this order, for both sites
1. First impression and visual hierarchy (first screen, desktop and mobile)
2. Typography (scale, pairing, measure, leading, tracking, consistency)
3. Spacing, grid and rhythm down the whole page
4. Treatment of imagery (cropping, framing, legibility of text over images, consistency)
5. Navigation, header and footer
6. Mobile execution (composure at 390px, touch targets, nothing clipped, overflowing or cramped)
7. Polish and trust: would a first-time visitor believe a professional team built this and trust the organisation?

## Output (exactly this structure)
- One line per rubric item: `N. <A|B> — <one sentence of evidence naming the screenshot>`
- `DEFECTS A:` and `DEFECTS B:` — concrete visible bugs only (overlap, clipping, unreadable contrast, broken
  layout, awkward orphaned words, misalignment), each naming the screenshot. "None seen" is a valid answer.
- `VERDICT: A` or `VERDICT: B` — the single page that is better designed overall. No ties, no scores.
- `BIGGEST GAP IN THE LOSER:` one sentence.
- `BIGGEST REMAINING WEAKNESS IN THE WINNER:` one sentence.

Praise is not useful. Be specific and cite filenames. If one side is plainly better, say so plainly; do not
manufacture findings to look rigorous, and do not soften a real defect.
