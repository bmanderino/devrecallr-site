// ===========================
// OS DETECTION
// ===========================

function getOS() {
  const ua = navigator.userAgent;
  if (/Mac/i.test(ua)) return 'mac';
  if (/Win/i.test(ua)) return 'windows';
  return 'unknown';
}

// SVG icons for OS buttons
const MAC_SVG = `<svg class="btn-os-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
</svg>`;

const WIN_SVG = `<svg class="btn-os-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M3 12V6.75l6-1.32v6.57H3zm17 0V3l-9 1.68V12h9zM3 13h6v6.57l-6-1.32V13zm17 0h-9v7.32L20 22V13z"/>
</svg>`;

const DMG_URL = "https://github.com/bmanderino/DevRecallr/releases/download/v0.2.9/DevRecallr-0.2.9-universal.dmg"
const EXE_URL = "https://github.com/bmanderino/DevRecallr/releases/download/v0.2.9/DevRecallr.Setup.0.2.9.exe"

// Build HTML for each download zone
function buildNavButton(os) {
  if (os === 'mac') {
    return `<a href=${DMG_URL} class="btn btn-primary btn-sm">
      ${MAC_SVG} Download for macOS
    </a>`;
  }
  if (os === 'windows') {
    return `<a href=${EXE_URL} class="btn btn-primary btn-sm">
      ${WIN_SVG} Download for Windows
    </a>`;
  }
  // Unknown — generic link to download section
  return `<a href="#download" class="btn btn-primary btn-sm">Download</a>`;
}

function buildHeroButtons(os) {
  if (os === 'mac') {
    return `<div class="download-group download-group--centered">
      <a href=${DMG_URL} class="btn btn-primary">
        ${MAC_SVG} Download for macOS
      </a>
      <span class="os-req">macOS 12+</span>
      <a href=${EXE_URL} class="alt-os-link">
        Windows version also available →
      </a>
    </div>`;
  }
  if (os === 'windows') {
    return `<div class="download-group download-group--centered">
      <a href=${EXE_URL} class="btn btn-primary">
        ${WIN_SVG} Download for Windows
      </a>
      <span class="os-req">Windows 10+</span>
      <a href=${DMG_URL} class="alt-os-link">
        macOS version also available →
      </a>
    </div>`;
  }
  // Unknown — show both stacked
  return `<div class="download-group download-group--centered download-group--stack">
    <a href=${DMG_URL} class="btn btn-primary">
      ${MAC_SVG} Download for macOS
    </a>
    <a href=${EXE_URL} class="btn btn-primary btn-secondary">
      ${WIN_SVG} Download for Windows
    </a>
  </div>`;
}

function buildCtaButtons(os) {
  if (os === 'mac') {
    return `<div class="download-group download-group--centered">
      <a href=${DMG_URL} class="btn btn-primary btn-large">
        ${MAC_SVG} Download for macOS
      </a>
      <span class="os-req">macOS 12+</span>
      <a href=${EXE_URL} class="alt-os-link">
        Windows version also available →
      </a>
    </div>`;
  }
  if (os === 'windows') {
    return `<div class="download-group download-group--centered">
      <a href=${EXE_URL} class="btn btn-primary btn-large">
        ${WIN_SVG} Download for Windows
      </a>
      <span class="os-req">Windows 10+</span>
      <a href=${DMG_URL} class="alt-os-link">
        macOS version also available →
      </a>
    </div>`;
  }
  // Unknown — show both stacked
  return `<div class="download-group download-group--centered download-group--stack">
    <a href=${DMG_URL} class="btn btn-primary btn-large">
      ${MAC_SVG} Download for macOS
    </a>
    <a href=${EXE_URL} class="btn btn-primary btn-secondary btn-large">
      ${WIN_SVG} Download for Windows
    </a>
  </div>`;
}

function applyOSDownload() {
  const os = getOS();

  const navEl  = document.getElementById('nav-download');
  const heroEl = document.getElementById('hero-download');
  const ctaEl  = document.getElementById('cta-download');

  if (navEl)  navEl.innerHTML  = buildNavButton(os);
  if (heroEl) heroEl.innerHTML = buildHeroButtons(os);
  if (ctaEl)  ctaEl.innerHTML  = buildCtaButtons(os);
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}

// ===========================
// NAV SCROLL STATE
// ===========================

function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled
}

// ===========================
// INIT
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  applyOSDownload();
  initScrollAnimations();
  initNav();
});
