# David Schol — Personal Website

Personal portfolio and workshop landing page for David Schol, UX/UI & Webdevelopment educator based in the Netherlands. Built with Vite, React, TypeScript and Tailwind CSS v4.

---

## Features

- **Dark / light mode** — respects `prefers-color-scheme` on first visit; preference saved to `localStorage`; FOUC prevented by an inline script in `<head>`
- **NL / EN language switch** — full Dutch and English translations, flag indicator (🇳🇱 / 🇬🇧), preference persists across sessions
- **Workshop & insight detail pages** — dedicated routes with full content, learning outcomes, sidebar, and article prev/next navigation
- **PWA** — web app manifest, SVG icons, manual service worker (cache-first for assets, network-first for navigation, offline fallback)
- **Micro animations** — hero fade-in stagger, floating UI panels, animated gradient on headline, pulsing status dot, ambient background drift, spring-eased card hover lifts, scroll-triggered section reveals via `IntersectionObserver`
- **Accessibility (WCAG 2.1 AA)** — skip-to-main link, `aria-live` announcer for route/theme/lang changes, `aria-labelledby` on every section, `aria-hidden` on decorative elements, visible `focus-visible` outlines, `prefers-reduced-motion` respected
- **No flash of unstyled content** — theme token applied before first paint
- **Route-level code splitting** — detail pages load as separate chunks via `React.lazy`

---

## Tech stack

| | |
|---|---|
| **Vite 5** | Build tool and dev server |
| **React 18** | UI library |
| **TypeScript 5** | Strict mode throughout |
| **Tailwind CSS v4** | `@tailwindcss/vite` plugin, CSS-first config via `@theme` |
| **React Router v6** | `createBrowserRouter`, lazy routes |

No other runtime dependencies.

---

## Project structure

```
digitalNomad/
├── public/
│   ├── favicon.svg            # SVG favicon (logo-mark)
│   ├── icon-192.svg           # PWA icon — any purpose
│   ├── icon-512.svg           # PWA icon — maskable purpose
│   ├── manifest.webmanifest   # Web app manifest
│   └── sw.js                  # Service worker (native, no Workbox)
├── src/
│   ├── components/
│   │   ├── Nav.tsx            # Sticky header, theme + lang toggles
│   │   ├── Hero.tsx           # Hero section with animated panels
│   │   ├── Expertise.tsx      # Three expertise cards
│   │   ├── About.tsx          # Bio and details
│   │   ├── WorkshopsList.tsx  # Workshop grid (links to detail)
│   │   ├── InsightsList.tsx   # Insights grid (links to detail)
│   │   ├── CtaStrip.tsx       # Contact call-to-action banner
│   │   └── Footer.tsx         # Footer with nav links
│   ├── pages/
│   │   ├── Home.tsx           # All sections stacked
│   │   ├── WorkshopDetail.tsx # /workshops/:id
│   │   └── InsightDetail.tsx  # /insights/:id
│   ├── context/
│   │   └── LangContext.tsx    # Language state + persistence
│   ├── hooks/
│   │   ├── useTheme.ts        # Stateless theme read/write (no React state)
│   │   └── useReveal.ts       # IntersectionObserver scroll reveal
│   ├── data/
│   │   ├── workshops.ts       # 3 workshops with full bilingual content
│   │   └── insights.ts        # 4 articles with full bilingual content
│   ├── i18n/
│   │   └── translations.ts    # EN/NL translation object (60+ keys)
│   ├── App.tsx                # Router, layout, skip link, announcer
│   ├── main.tsx               # React root + SW registration
│   └── index.css              # Tailwind v4 + design tokens + animations
├── index.html                 # Vite entry point
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting started

```bash
npm install
npm run dev      # Dev server at http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Home — all sections |
| `/workshops/:id` | Workshop detail |
| `/insights/:id` | Insight / article detail |
| `*` | Redirects to `/` |

Workshop IDs: `ai-for-ux`, `ux-for-devs`, `responsive-frontend`  
Insight IDs: `interfaces-overwhelm`, `ai-ux-workflows`, `responsive-wrong`, `frontend-non-devs`

---

## Customisation

### Content and translations

All UI strings live in `src/i18n/translations.ts` as a typed `T` object with `en` and `nl` keys. Adding a language means adding a third entry and a button state in `LangContext.tsx`.

Workshop and insight content — including full article bodies and bilingual detail-page text — lives in `src/data/workshops.ts` and `src/data/insights.ts`.

### Design tokens

Tokens are CSS custom properties in `src/index.css` — one block for light mode (`:root`) and one for dark (`[data-theme="dark"]`). Because Tailwind v4's `@theme` block maps them to utility classes via `var()`, swapping the variable values changes the entire UI without class changes:

```css
:root {
  --accent:     oklch(0.55 0.18 270);
  --accent-ink: oklch(0.42 0.20 270);
  --radius:     22px;
}
[data-theme="dark"] {
  --accent:     oklch(0.68 0.18 270);
}
```

### Typography

Three font families loaded from Google Fonts:

| Family | Tailwind class | Use |
|---|---|---|
| Inter | `font-sans` | Body text |
| Inter Tight | `font-tight` | Headings, logo |
| JetBrains Mono | `font-mono` | Labels, tags, metadata |

Swap the `<link>` in `index.html` and update the `--font-*` variables in the `@theme` block.

### Animations

All keyframe animations are defined in `src/index.css`. A single `@media (prefers-reduced-motion: reduce)` block at the bottom collapses all durations to `0.01ms` and removes the `.reveal` transform.

---

## PWA

The service worker (`public/sw.js`) is registered in production only (`import.meta.env.PROD`). It uses a cache-first strategy for static assets and network-first for navigation requests, falling back to `/` when offline — which allows the SPA router to handle the rest.

---

## Browser support

Targets all evergreen browsers. Notable features used:

- `oklch()` colour space — Chrome 111+, Firefox 113+, Safari 15.4+
- `text-wrap: balance` / `pretty` — Chrome 114+ (progressive enhancement)
- `IntersectionObserver`, `CSS custom properties`, `backdrop-filter` — all evergreen

---

## License

[MIT](LICENSE) © 2026 David Schol
