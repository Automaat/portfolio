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
