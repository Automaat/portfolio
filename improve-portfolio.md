# Portfolio improvement synthesis

Merged from `improve-codex.md` and `improve-claude.md` on 2026-05-05.

## Shared findings

- portfolio must sell paid work, not just taste
- homepage must answer fast:
  - who you help
  - what you make
  - where you work
- one clear positioning wins over broad mixed galleries
- stills and motion need separate top-level paths
- case studies beat diary-style trip posts
- nav must stay short: `3-6` items
- contact must stay visible in header + footer
- email must be visible, not form-only
- galleries need hard curation:
  - roughly `12-18` images per project
  - avoid mixed-quality filler
- about page must be short, human, credible
- stock imagery hurts trust
- motion must be sold as real offer, not side note
- logo walls are weak proof by themselves
- client/context proof works better inside project stories

## Where the docs differ

- `improve-codex.md` is stronger on positioning, buyers, services, lead qualification
- `improve-claude.md` is stronger on visual patterns, IA norms, project-page structure, motion presentation
- `improve-codex.md` pushes niche around marine / expedition competence
- `improve-claude.md` pushes stricter minimalism and tighter nav

## Final direction

- position site as:
  - `Adventure, travel & marine photographer + filmmaker for tourism brands, expeditions, and outdoor companies`
- use sailing/offshore background as authority proof, not separate business line
- optimize for commercial buyers first:
  - tourism boards
  - marine brands
  - expedition operators
  - charter companies
  - outdoor gear brands
- keep personal/editorial work, but subordinate it to commercial conversion

## Recommended IA

- Home
- Work
- Motion
- Journal
- About
- Contact

## Homepage changes

- replace nameplate hero with buyer-facing statement
- use one strong full-bleed hero image or video
- add two CTAs above fold:
  - `View Work`
  - `Start Project`
- add proof strip under hero:
  - named clients
  - publications
  - select stats only if real
- add `3` curated buckets:
  - Adventure
  - Marine
  - Motion
- add `2-4` case studies with short context
- add services / deliverables block
- add credibility block:
  - offshore experience
  - remote logistics
  - permits / access
  - expedition planning
- end with direct contact CTA + visible email

## Work structure

- create dedicated `Work` collection/page for commissioned projects
- keep `Trips` only as journal/personal unless upgraded into case studies
- convert strongest trip stories into commercial-style case studies with:
  - client
  - brief
  - deliverables
  - location
  - outcome
  - credits
- separate stills from motion at nav level

## Motion changes

- create top-level `Motion` page
- place one reel first: `60-90s`
- list `3-5` project films below with context
- sell motion as package:
  - brand film
  - destination film
  - social cutdowns
  - drone
  - hybrid photo + video coverage
- prefer Vimeo embeds with clean controls

## About changes

- remove stock / Unsplash imagery
- use real portrait or BTS image
- rewrite around:
  - who you help
  - what you shoot
  - why you are credible
  - what access/logistics edge you bring
- keep bio to roughly `80-150` words
- add named clients, publications, awards, rep info if real

## Contact changes

- remove stock / Unsplash imagery
- keep visible email on page
- keep form simple but qualifying
- add fields for:
  - project type
  - location
  - timeline
  - deliverables
  - budget range

## Visual/system guidance

- light theme
- sans-serif only
- minimal motion
- no parallax, no gimmicks, no splash page
- one statement per screen
- square grids for indexes
- full-bleed imagery inside projects
- project pages should use:
  - hero
  - short intro
  - `8-15` strong images
  - credits / client block

## Repo-specific fixes

- homepage lacks buyer-facing pitch and conversion structure
- current nav over-prioritizes `Trips`, `Sailing`, `Blog`
- `Sailing` should move from top-level offer to differentiator inside positioning
- `Trips` currently reads as journal before proof of commercial value
- `About` uses trust-breaking stock imagery
- `Contact` uses trust-breaking stock imagery

## Build order

1. rewrite nav to `Work / Motion / Journal / About / Contact`
2. rebuild homepage around positioning + CTAs + proof + buckets
3. create `Work` section and convert top trips into case studies
4. create `Motion` page
5. rewrite `About`
6. rebuild `Contact`
7. remove remaining stock imagery
8. add per-project credits + OG images

## Decision summary

- best mix is:
  - codex for market positioning and buyer logic
  - claude for structure, layout discipline, and portfolio conventions
- resulting site should feel premium and minimal, but convert like a commercial portfolio
