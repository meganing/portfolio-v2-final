# Design QA

## Comparison target

- Source visual truth: `/workspace/scratch/faf3a938ea28/upload/ad0a8026-cc6e-43a5-a984-6e58f4432793.png`
- Source pixels: 1626 × 712.
- Implementation: cloud-browser capture of `#direction` in browser tab 1 at `http://terminal.local:4173/#direction` (browser-rendered evidence retained in the active preview; no filesystem export was produced).
- Implementation viewport: 1363 × 936 CSS px at browser density 1.
- State: desktop Current Direction section, pointer settled.
- Normalization: the source and implementation use different viewport crops, so the comparison is structural rather than pixel-for-pixel. The focused comparison checks the map’s width, label separation, center alignment, and page overflow.

## Findings and comparison history

- Earlier P1: the career map shrink-wrapped to approximately 230 px because its absolutely positioned labels did not establish an intrinsic width. Labels collided and the current-focus text overflowed.
- Fix: gave the map an explicit responsive `width: 100%`, retained its 610 px maximum, aligned it to the end of its grid track, and added minimum widths to the direction grid’s second track at desktop and tablet breakpoints.
- Post-fix evidence: the browser-rendered map measures 610 × 554 px, its orbit measures 562 × 480 px, no interest or center-label bounding boxes overlap, and the document has no horizontal overflow.
- Earlier P2: in the Experience cards, the organization name was the large serif headline while the role appeared as smaller supporting text, weakening HR scanability. Source evidence: `/workspace/scratch/faf3a938ea28/upload/a51bbe66-ad24-47e7-a8a2-3076e15aede8.png` (1704 × 858 px).
- Fix: promoted each role to the serif `h3` headline and moved the organization beneath it as a smaller petrol mono label.
- Post-fix evidence: at the 1363 × 936 CSS-pixel desktop viewport, the first role renders at 20.8 px in Fraunces while its organization renders at 12.16 px in DM Mono. The hierarchy is consistent across visible entries, with no horizontal overflow.
- Earlier P2: the right side of Let’s Connect appeared visually underweighted because its paragraph, résumé action, and social links were noticeably smaller than the available space suggested. Source evidence: `/workspace/scratch/faf3a938ea28/upload/cf9a9bb2-ee9b-4a14-94d1-992ebc8596f5.png` (1876 × 610 px).
- Fix: increased the paragraph to 17.28 px with a 1.55 line height, enlarged the résumé button to 13.76 px and 54 px tall, raised the contact links to 13.44 px, and widened the content column to 470 px.
- Post-fix evidence: the browser-rendered contact section remains 1240 × 490 px at the 1363 × 936 CSS-pixel viewport; all content stays within the card with no horizontal overflow. The résumé request was activated successfully and returned its email-copied status.

## Fidelity surfaces

- Fonts and typography: passed; role titles now hold the strongest card-level weight, while organization, date, and description remain progressively quieter. Contact copy and controls now form a readable secondary hierarchy without competing with the large invitation headline.
- Spacing and layout rhythm: passed; the revised role/organization order preserves card height, timeline alignment, and summary spacing. The map remains balanced against its left copy.
- Colors and visual tokens: unchanged and consistent with the approved palette.
- Image quality and asset fidelity: no assets were replaced or rescaled.
- Copy and content: unchanged; only semantic order and visual emphasis changed in Experience.
- Focused-region comparisons were used because both revisions were confined to individual sections. The overall page composition remains unchanged.

## Verification

- Primary interaction checked: Direction navigation scrolls to the corrected section and the pointer settles without changing layout.
- Primary interaction checked: Journey navigation scrolls to the timeline, and its reveal animation retains the updated hierarchy.
- Primary interaction checked: Contact navigation scrolls to Let’s Connect; the résumé request still copies the contact email and announces the success state.
- JavaScript syntax checks pass for `src/main.js` and all `src/content/*.js` modules.
- `git diff --check` passes.
- No app-originated browser errors or warnings were found; reported console errors originate from the cloud-browser extension.

## Final result: passed

No actionable P0, P1, or P2 findings remain for this fix.
