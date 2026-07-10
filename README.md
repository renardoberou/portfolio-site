# Bernardo Roustand — Portfolio Site

Static multilingual portfolio homepage for Bernardo Roustand.

## Current contents

- `index.html` — static homepage shell.
- `styles.css` — base portfolio styling.
- `visuals.css` — cinematic product-visual layer using supplied screenshots as hero/card imagery.
- `image-quality.css` — screenshot layout/hero overrides for better mobile presentation.
- `commerce.css` — centered, conversion-focused Gumroad CTA styling for commercial product cards.
- `hero-sync.js` — applies the Spectral Camera photograph as the full hero visual.
- `status-sync.js` — patches current signed-release statuses, removes competing per-card GitHub actions from live Gumroad products, and adds centered Gumroad purchase buttons after app-card rendering.
- `app.js` — language switch, project cards, translations, app-icon rendering, and current project copy.
- `profile.svg` — selected profile portrait embedded as a text-safe SVG asset.
- `icons/` — web-ready SVG exports of the Android app icons from the four app repositories.
- `.gitignore` — excludes local artifacts, release binaries, and private material.

## Public identity

- Name: Bernardo Roustand
- Email: roustandsystems@gmail.com
- GitHub: https://github.com/Renardoberou

## Product-card CTA strategy

For products with live Gumroad landing pages, each portfolio card presents one primary action: **Buy on Gumroad**. The redundant Source Repo / Status links are removed from those cards to reduce competing calls to action. GitHub remains accessible through the portfolio-level GitHub link for evaluators who want to inspect the development work.

Spectral Camera keeps GitHub/status actions until its Gumroad landing page is published.

## Language behavior

The site loads in English by default and includes a top-right language switch for:

- 🇬🇧 English
- 🇧🇷 Portuguese
- 🇨🇭 French / Switzerland

The selected language is stored in `localStorage`.

## Live Gumroad product links

- **Ping Thing Android:** https://renardoberou.gumroad.com/l/ping-thing-android
- **Bighart Synth Standalone Android:** https://renardoberou.gumroad.com/l/bighart-synth-standalone-android
- **Bighart Beat Android:** https://renardoberou.gumroad.com/l/bighart-beat-android
- **Spectral Camera:** pending; planned for publication after its landing page is completed.

## Portfolio project status

Updated after the app repo-sync reports, signed-release confirmations, and Gumroad landing-page publication:

- **Bighart Beat:** signed `app-v1.0.0` Android release live; basic device smoke confirmed; Gumroad product page live; extended checklist and store distribution still pending.
- **Ping Thing:** signed Android release; installed and device-confirmed; Gumroad product page live; public-release ready for direct distribution.
- **Bighart Synth:** signed v1.0.0 release live; developer-tested on device; Gumroad product page live; Play/internal distribution work pending.
- **Spectral Camera:** signed v1.8.2 release live with APK, AAB, and checksums; Gumroad landing page pending; simulated spectral/IR effects only.

## Current release blockers

- Bighart Beat: extended device regression checklist, Play internal-test distribution, and Phase C native-deepening items.
- Bighart Synth: Play internal testing/privacy-policy preparation and optional independent `apksigner verify --verbose` pass before broader public distribution.
- Spectral Camera: Gumroad landing page, store/privacy wording, Play metadata, and broader device testing.
- Play Store privacy-policy URLs and store assets for any Play submission.

## GitHub Pages

This repo is intended to be published from `main` / `/root` using GitHub Pages.
