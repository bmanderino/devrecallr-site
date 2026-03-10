# DevRecallr Marketing Site

Single-page marketing site for DevRecallr — a local-first developer dashboard for macOS and Windows.

**Stack:** Plain HTML + CSS + vanilla JS

## Development

No build step required. Open `index.html` directly in a browser, or serve with any local server:

```sh
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

---

## OS Detection

The site auto-detects the visitor's OS (via `navigator.userAgent`) and shows the appropriate download button in the nav, hero, and closing CTA. If detection is inconclusive, both Mac and Windows buttons are shown stacked. Test on both platforms before launch.
