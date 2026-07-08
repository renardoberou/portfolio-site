# Bernardo Roustand — Portfolio Site

Static multilingual portfolio homepage for Bernardo Roustand.

## Current contents

- `index.html` — static homepage shell.
- `styles.css` — portfolio styling.
- `app.js` — language switch, project cards, translations, app-icon rendering, and current project status copy.
- `profile.svg` — selected profile portrait embedded as a text-safe SVG asset.
- `icons/` — web-ready SVG exports of the actual Android app icons from the four app repositories.
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

Updated after the four app repo-sync reports and the Ping Thing signed-release confirmation:

- **Bighart Beat:** playable web app plus Android shell; README/CHANGELOG synced; 142 tests passing; phone Phase A checklist pending.
- **Ping Thing:** signed Android release; installed and device-confirmed; public-release ready for direct distribution.
- **Bighart Synth:** Android repo structure corrected; CI green; debug APK artifact produced; phone smoke test pending.
- **Spectral Camera:** README synced to v1.8.1 state; CI green; production signing pending; spectral/IR effects are simulated, not true infrared.

## Current release blockers

- Bighart Beat: Phase A phone checklist, then signing/release.
- Bighart Synth: phone smoke test, then signing/release.
- Spectral Camera: production signing and store/privacy wording.
- Play Store privacy-policy URLs and store assets for any Play submission.

## GitHub Pages

This repo is intended to be published from `main` / `/root` using GitHub Pages.
