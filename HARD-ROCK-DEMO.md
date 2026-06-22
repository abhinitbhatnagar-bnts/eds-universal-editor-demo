# Hard Rock Las Vegas — EDS Demo

A branded Edge Delivery Services landing page built from the Figma "Landing Page 5"
design, intended to show Hard Rock how authoring works in Universal Editor.

This is a **signature-subset** first pass: gradient guitar hero + booking widget,
"Find Your Next Stay" media carousel, an experiences photo grid, and a dark Vegas
footer/header theme. More sections from the design (sweepstakes blade, feature-card
carousel, content-card list) can be added the same way.

## What was built

| Piece | Files | Notes |
|-------|-------|-------|
| Brand foundation | `styles/styles.css`, `styles/fonts.css`, `head.html` | Hard Rock palette (black / gold `#F9B200` / purple hero gradient / green) and fonts. |
| `hero` block | `blocks/hero/*` | Purple gradient stage, foreground guitar render, title / eyebrow / sub-copy. |
| `booking-bar` block | `blocks/booking-bar/*` | White rounded search widget with gold search button; overlaps the hero. |
| `stay-carousel` block | `blocks/stay-carousel/*` | "Find Your Next Stay" horizontal media cards (image, tag, text, CTA). |
| `experience-grid` block | `blocks/experience-grid/*` | Photo tiles with overlaid labels; first/last tiles run full-width. |
| Dark theme | `blocks/header/header.css`, `blocks/footer/footer.css` | Black Vegas nav + footer. |

All blocks are **Universal Editor authorable** — each has a `_*.json` model, and the
new blocks are registered in `models/_section.json` so they appear in the section's
"insert" menu. Run `npm run build:json` after any model change.

### Fonts (demo substitutes)
The design uses **SangBleu Sunrise** (serif), **Cera Pro** (display sans) and **Lato**.
Lato is real; the other two are licensed, so this demo substitutes free Google Fonts:
**Playfair Display** (serif/display) and **Poppins** (headings). For production, drop
the licensed woff2 files into `/fonts` and update `styles/fonts.css` + `head.html`.

### Images
Sample imagery is pulled live from the public Hard Rock site
(`https://www.hardrockvegas.com/...`), including the guitar render
`/guitar/guitar-fill-2.png`. These are **external URLs for the demo only** — in
production (and when authoring in UE) use assets from the AEM DAM. The blocks detect
cross-origin images and skip the AEM image optimizer for them (see `brandPicture` in
`scripts/scripts.js`); same-origin DAM images are optimized normally.

## Preview locally

```bash
npx -y @adobe/aem-cli up --no-open --html-folder drafts
```

Then open: **http://localhost:3000/drafts/landing**

`drafts/landing.html` holds the full sample page in EDS block markup. The header/footer
are empty locally (they load from `/nav` and `/footer` fragments that live in AEM).

## Demo in Universal Editor (primary path)

Your `fstab.yaml` (committed version) is already mounted to the AEM author
`author-p28206-e1206067` via `franklin.delivery`, so UE works against this repo.

> ⚠️ The working copy of `fstab.yaml` is currently set to `url: "aem up"` (local mode).
> **Revert it to the committed `franklin.delivery` value before pushing**, or the
> cloud preview / Universal Editor will not pull content from AEM author.

1. Push this branch — AEM Code Sync picks up the new blocks/models automatically.
2. In AEM author, create a page and open it in Universal Editor.
3. Add a **Section**, then insert blocks from the menu (Hero, Booking Bar,
   Stay Carousel, Experience Grid) and fill the fields below.
4. For images, pick assets from the DAM (upload a few Hard Rock images first).

### Field values to enter (matches the design)

**Hero**
- Title: `Hard Rock Las Vegas`
- Eyebrow: `Reservations Now Open`
- Sub copy / dates: `Now accepting reservations for stays beginning 2027 on the heart of the Las Vegas Strip.`
- Foreground image: the guitar render

**Booking Bar**
- Destination: `Hard Rock Las Vegas`
- Dates: `Check-In — Check-Out`
- Guests: `2 Adults`

**Stay Carousel** → add a heading "Find Your Next Stay" above it, then Stay Card items:
- Tag `Featured` · Text `The Guitar Hotel` + description + `Las Vegas, NV` · Button `Book a Getaway`
- Tag `Dining` · `Social Food Hall` … · Button `Explore Dining`
- Tag `Entertainment` · `Live at The Joint` … · Button `See Shows`

(In a Stay Card, the **Text** field holds three lines — name, description, location;
the first line renders as the bold name, the last as the muted location.)

**Experience Grid** → heading "Iconic Experiences", then Experience Tiles
(first and last tiles render full-width): Hit the Jackpot, Social Dining, See a Show,
Meetings & Events, Rock Shop, Pool & Resort.

## Environment URLs
- Production preview: `https://main--eds-universal-editor-demo--abhinitbhatnagar-bnts.aem.page/`
- Production live: `https://main--eds-universal-editor-demo--abhinitbhatnagar-bnts.aem.live/`
- Feature preview: `https://<branch>--eds-universal-editor-demo--abhinitbhatnagar-bnts.aem.page/`
