# Design Evolution

Screenshot record of design iterations. Desktop 1440×900, mobile 390×844.

## 00-baseline

Starting point. Dark editorial layout (Fraunces + Inter) already in place, but
every trip thumbnail/gallery image was a 476-byte SVG placeholder saved as
`.jpg` — broken images across home, work, trips, and sailing pages.

## 01-real-images

Replaced 27 broken/missing images with procedurally generated landscape art
(canvas: layered ridge silhouettes, atmospheric fog, film grain, per-destination
palettes — Patagonia storm slate, Norway fjord teal, Iceland aurora, Dolomites
alpenglow, Scotland moor mist, plus ocean scenes for sailing). Honest
placeholders that look intentional until real photography drops in. Same files,
same paths — swap in real photos without touching code.

## 02-contact-redesign

Contact form was leftover from the original light theme: invisible labels
(black on black), white rounded-pill inputs clashing with the editorial system.
Rebuilt: underline-only fields, eyebrow-style labels, square CTA, all driven by
theme variables (works in light + dark).

## 03-explorations

Tried and rejected/accepted:

- **Warm sand accent** (`#c9a36a`) on labels — rejected; monochrome lets the
  photography own all color.
- **Instrument Serif** display — rejected; lighter but loses Fraunces' gravitas.
- **Monospace micro-labels** — accepted; "field log" character fits the
  expedition brand.

## 04-mono-labels

IBM Plex Mono adopted for all micro-typography (logo, nav, eyebrows, CTAs,
proof ribbon, index numbers). Tracking tightened 0.32em/0.24em → 0.18em/0.14em
since mono is naturally wide. Type system: Fraunces (display) + Inter (body) +
IBM Plex Mono (labels).

## 05-final

Full-page captures of every route after all changes, desktop + mobile.

## 06-minimal

Radical simplification — "too much happening" feedback. Home rebuilt from six
sections to three: full-screen hero (one line, one quiet link), a single
staggered work grid (all five expeditions + showreel, mono captions), and a
giant email sign-off. Nav loses Motion + social icons; footer collapses to one
row. Work page drops the "best fit" panel and per-case deliverable lists;
motion drops the stills and deliverables sections; about drops the "best fit"
list. All heavy end-of-page CTA banners replaced by one shared quiet contact
line (ContactBand).

## 09-pastel-experiments

User request: pastel pink and blue. Three token-level palette prototypes
(injected live, no code changes): P1 rose paper + plum ink + blue accent,
P2 powder blue + navy ink + rose accent, P3 duo — pastel pink paper with deep
indigo ink, cornflower accent, and pale-blue soft surfaces. **P3 adopted**: it
uses both hues in one scheme (pink paper / blue typography) and the slate-toned
artwork harmonizes with both. Dark mode redone in the same family — indigo
night with a pastel pink accent. `adopted-*` captures show the final palette.

## 10-polish

Full Polish localization. URL-prefix routing (`/pl/...`), `en`/`pl` content
collection subfolders with translated trips and journal posts (same slugs both
locales), shared UI dictionary (`src/i18n/`), page templates with colocated
en/pl copy, localized layouts and contact form, EN/PL switcher in the header,
`hreflang` alternates, locale-aware date formatting and trip-date sorting.

## 07-experiments

Three throwaway prototype routes, each a different identity (user feedback:
"looks the same, experiment, don't tweak"):

- **A "Atelier"** — warm paper, giant Fraunces masthead (italic second line,
  terracotta full stop), work as a typographic index list with cursor-following
  image previews, full-bleed image break, giant email. **Winner.**
- **B "Cinema"** — full-screen scroll-snap panels, image-only storytelling.
  Dramatic but same dark+serif language as before — rejected for that reason.
- **C "Split rail"** — fixed left column (name, statement, nav), scrolling
  image stream right. Elegant but quieter than A — rejected.

## 08-atelier

Variant A adopted as the site identity. Whole site flips from dark-first to
warm paper (`#f1ede4` / ink `#161310`, terracotta accent `#b4502e`); dark stays
available via toggle. Home rebuilt as masthead + index list + image break +
email sign-off. All other pages inherit the paper palette through the token
system — the dark artwork pops on paper far better than dark-on-dark.
