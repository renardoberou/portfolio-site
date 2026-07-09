# Bernardo Roustand — Portfolio Site

Static multilingual portfolio homepage for Bernardo Roustand.

## Current contents

- `index.html` — static homepage shell.
- `styles.css` — base portfolio styling.
- `visuals.css` — cinematic product-visual layer using the supplied screenshots as the hero/card imagery.
- `image-quality.css` — screenshot layout/hero overrides for better mobile presentation.
- `hero-sync.js` — applies the Spectral Camera photograph as the full hero visual.
- `status-sync.js` — patches the current signed-release statuses for Bighart Beat and Spectral Camera after app card rendering.
- `app.js` — language switch, project cards, translations, app-icon rendering, and current project copy.
- `profile.svg` — selected profile portrait embedded as a text-safe SVG asset.
- `icons/` — web-ready SVG exports of the Android app icons from the four app repositories.
- `.gitignore` — excludes local artifacts, release binaries, and private material.

## Public identity

- Name: Bernardo Roustand
- Email: roustandsystems@gmail.com
- GitHub: https://github.com/Renardoberou

## Language behavior

The site loads in English by default and includes a top-right language switch for:

- 🇬🇧 English
- 🇧🇷 Portuguese
- 🇨🇭 French / Switzerland

The selected language is stored in `localStorage`.

## Portfolio project status

Updated after the app repo-sync reports and signed-release confirmations:

- **Bighart Beat:** signed `app-v1.0.0` Android release live; signed APK installed; basic device smoke confirmed; extended checklist and distribution listing still pending.
- **Ping Thing:** signed Android release; installed and device-confirmed; public-release ready for direct distribution.
- **Bighart Synth:** signed v1.0.0 release live; developer-tested on device; distribution/Gumroad/Play listing work pending.
- **Spectral Camera:** signed v1.8.2 release live with APK, AAB, and checksums; simulated spectral/IR effects only; store/privacy wording still required for Play distribution.

## Current release blockers

- Bighart Beat: extended device regression checklist, Gumroad attachment / Play internal-test distribution, and Phase C native-deepening items.
- Bighart Synth: distribution listing work, Play internal testing/privacy-policy preparation, and an optional independent `apksigner verify --verbose` pass before public distribution.
- Spectral Camera: store/privacy wording, Play metadata, and broader device testing beyond the current verified path.
- Play Store privacy-policy URLs and store assets for any Play submission.

## GitHub Pages

This repo is intended to be published from `main` / `/root` using GitHub Pages.
