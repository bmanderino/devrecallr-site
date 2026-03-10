# DevRecallr Marketing Site

Single-page marketing site for [DevRecallr](https://github.com/your-org/devrecallr) — a local-first developer dashboard for macOS and Windows.

**Stack:** Plain HTML + CSS + vanilla JS. No framework, no build step, no bundler. Drop files on any static host and it works.

---

## File Structure

```
devrecallr-site/
├── index.html          ← full page markup
├── styles.css          ← all styles
├── main.js             ← OS detection + scroll animations
└── assets/
    ├── mainScreen.png      ← main dashboard screenshot
    └── welcomeDialog.png   ← welcome/onboarding screenshot
```

---

## Setup Checklist

### 1. Screenshots

Real screenshots are already in `assets/`. If you replace them, keep the same filenames:

| File | Used in |
|------|---------|
| `assets/mainScreen.png` | Hero section + Screenshots section |
| `assets/welcomeDialog.png` | Screenshots section |

### 2. Download URLs

Search for `TODO: replace href` in `main.js` — there are 6 occurrences (2 per download zone × 3 zones). Replace each `href="#"` with the real release URL:

- macOS: direct link to the `.dmg` file (e.g., a GitHub Releases asset URL)
- Windows: direct link to the `.exe` installer

### 3. GitHub Link

In `index.html`, find the footer `TODO: replace href with real GitHub repo URL` comment and update the `<a>` tag's `href`.

### 4. OS Version Strings

In `main.js`, the strings `macOS 12+` and `Windows 10+` appear inside `buildHeroButtons` and `buildCtaButtons`. Update these if your minimum OS requirements change.

---

## Development

No build step required. Open `index.html` directly in a browser, or serve with any local server:

```sh
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

---

## Deployment

This is a fully static site — no server required.

**Netlify (fastest):** Drag the project folder onto [netlify.com/drop](https://app.netlify.com/drop).

**GitHub Pages:** Push to a repo, enable Pages in repo Settings → Pages → Deploy from branch.

**Any host:** Upload all files to your server's public root. The folder structure must be preserved so `assets/` is in the same directory as `index.html`.

---

## OS Detection

The site auto-detects the visitor's OS (via `navigator.userAgent`) and shows the appropriate download button in the nav, hero, and closing CTA. If detection is inconclusive, both Mac and Windows buttons are shown stacked. Test on both platforms before launch.
