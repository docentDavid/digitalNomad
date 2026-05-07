# David Schol — Personal Website

Personal portfolio and workshop landing page for David Schol, UX/UI & Webdevelopment educator based in the Netherlands. A static single-page site built with semantic HTML and vanilla CSS/JS — no frameworks, no build step.

---

## Features

- **Dark / light mode** — respects `prefers-color-scheme` on first visit; preference is saved to `localStorage`
- **NL / EN language switch** — full Dutch and English translations toggled at runtime with flag indicator (🇳🇱 / 🇬🇧); preference persists across sessions
- **Micro animations** — hero fade-in stagger, floating UI panels, animated gradient on headline, pulsing status dot, ambient background drift, spring-eased card hover lifts, scroll-triggered section reveals via `IntersectionObserver`
- **Accessibility (WCAG 2.1 AA)** — skip-to-main link, `aria-live` announcer for dynamic changes, `aria-labelledby` on every section, `aria-hidden` on decorative elements, visible `focus-visible` outlines throughout, `prefers-reduced-motion` respected (all animations disabled), `<noscript>` fallback
- **Semantic HTML** — `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<figure>`, `<dl>/<dt>/<dd>`, `<time>`, `<abbr>`
- **No flash of unstyled content** — theme token applied before first paint via an inline script in `<head>`
- **Zero dependencies** — no npm, no bundler, no runtime libraries

---

## Project structure

```
digitalNomad/
├── index.html   # Markup, translations, and JS behaviour
├── style.css    # All styles: tokens, layout, components, animations
└── LICENSE      # MIT
```

---

## Getting started

No installation required. Open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
# Python (built-in)
python3 -m http.server 8080

# Node.js (npx, no install needed)
npx serve .

# VS Code
# Use the Live Server extension and click "Go Live"
```

Then visit `http://localhost:8080`.

---

## Customisation

### Content

All visible text lives in the `T` translation object in `index.html`. Each key maps to an `en` and `nl` value. HTML elements that display text carry a `data-i18n` attribute matching a key in that object:

```html
<h2 data-i18n="ws-title">Practical sessions, run live online or with your team.</h2>
```

Adding a new language requires a third entry in `T` and a button state in `applyLang()`.

### Colours and spacing

Design tokens are CSS custom properties at the top of `style.css` — one block for light mode (`:root`) and one for dark (`[data-theme="dark"]`):

```css
:root {
  --accent:     oklch(0.55 0.18 270);
  --accent-ink: oklch(0.42 0.20 270);
  --radius:     22px;
  /* … */
}
```

### Typography

Three font families are loaded from Google Fonts:

| Family | Use |
|---|---|
| Inter | Body text |
| Inter Tight | Headings, logo |
| JetBrains Mono | Labels, tags, metadata |

Swap the `<link>` in `<head>` and update the `font-family` declarations in `style.css` to change them.

### Animations

All keyframe animations and transitions respect `prefers-reduced-motion: reduce` — a single media query at the top of `style.css` collapses durations to `0.01ms`. To adjust individual timings, search for the relevant `@keyframes` name or `animation:` declaration in `style.css`.

---

## Browser support

Targets all evergreen browsers. Uses:

- `oklch()` colour space (Chrome 111+, Firefox 113+, Safari 15.4+)
- `text-wrap: balance` and `text-wrap: pretty` (Chrome 114+, progressive enhancement)
- `IntersectionObserver` (all evergreen)
- CSS custom properties, `clamp()`, `aspect-ratio`, `backdrop-filter`

---

## Accessibility notes

- Keyboard navigable in logical DOM order
- All interactive elements have `:focus-visible` outlines
- Theme and language changes are announced to screen readers via an `aria-live="polite"` region
- Decorative elements (`hero-bg`, `hero-visual-wrap`, `logo-mark`) carry `aria-hidden="true"`
- The photo placeholder uses `role="img"` with a descriptive `aria-label`

---

## License

[MIT](LICENSE) © 2026 David Schol
