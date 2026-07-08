# Bernardo Roustand — Portfolio Site

Static multilingual portfolio homepage for Bernardo Roustand.

## Current contents

- `index.html` — static homepage shell.
- `styles.css` — portfolio styling.
- `app.js` — language switch, project cards, translations, and current project status copy.
- `profile.svg` — selected profile portrait embedded as a text-safe SVG asset.
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

Updated after the four app repo-sync reports:

- **Bighart Beat:** playable web app plus Android shell; README/CHANGELOG synced; 142 tests passing; phone Phase A checklist pending.
- **Ping Thing:** Android beta device-confirmed; README synced to Phase 0–3 status; CI green; signed release pending.
- **Bighart Synth:** Android repo structure corrected; CI green; debug APK artifact produced; phone smoke test pending.
- **Spectral Camera:** README synced to v1.8.1 state; CI green; production signing pending; spectral/IR effects are simulated, not true infrared.

## Current release blockers

- Production signing / keystore setup for Android releases.
- Release tags and signed GitHub Releases where applicable.
- Phone smoke-test checklist completion for Bighart Beat and Bighart Synth.
- Privacy-policy pages for Play Store readiness.

## GitHub Pages

This repo is intended to be published from `main` / `/root` using GitHub Pages.
