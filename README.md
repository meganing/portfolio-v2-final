# Portfolio V2

A separate static portfolio experiment for Thiri Htet Thwe. The existing portfolio is not part of this repository and is not modified by this project.

## Run locally

From this directory:

```bash
npm run dev -- --host 0.0.0.0 --port 4173
```

Open `http://localhost:4173`.

## Replace content

Editable content lives in:

- `src/content/profile.js` — name, role, links and portrait
- `src/content/projects.js` — carousel project records and links
- `src/content/capabilities.js` — core-strength cards
- `src/content/experience.js` — vertical journey records and editable summaries
- `src/content/direction.js` — current direction and compass labels

Poster and image assets belong in `public/assets`. The paper texture and hero crop live in `public/assets/editorial`; the restrained cat, vine and compass details live in `public/assets/painted`. Empty URLs are intentionally hidden from the interface. Unconfirmed bracketed contribution and experience text is also hidden until it is replaced with Master CV wording.

## Interaction notes

- Project carousel: side previews, buttons, arrow keys, pagination dots, touch swipes and poster lightbox
- Capability deck: stacked, spread and card-selection states
- Reverse-chronological experience timeline with progressive scroll reveal
- Compass: scroll-linked exploration and settled direction
- One painted orange cat reused across the page, with a reduced-motion static alternative
- Mobile navigation and responsive layouts at mobile, tablet and desktop widths

## Deployment

This is a static site. It can be deployed to GitHub Pages, Netlify, Vercel or any static host. No public résumé download is included by default.
