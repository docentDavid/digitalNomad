import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { useTheme } from '../hooks/useTheme';

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const otherLang = lang === 'en' ? 'nl' : 'en';

  return (
    <header className="site-header" role="banner">
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline"
          aria-label="David Schol — home"
        >
          <span className="logo-mark" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nav-logo-g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="oklch(0.65 0.18 310)" />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="url(#nav-logo-g)" />
              <rect x="8" y="8" width="16" height="16" rx="3" fill="white" opacity="0.9" />
            </svg>
          </span>
          <span
            className="font-semibold text-sm text-[var(--ink)] hidden sm:block"
            style={{ fontFamily: 'var(--font-tight)' }}
          >
            David Schol
          </span>
        </Link>

        {/* Nav links — desktop */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0" role="list">
          {[
            { href: '/#expertise', key: 'nav-expertise' as const },
            { href: '/#workshops', key: 'nav-workshops' as const },
            { href: '/#insights', key: 'nav-insights' as const },
            { href: '/#about', key: 'nav-about' as const },
          ].map(({ href, key }) => (
            <li key={key}>
              <a href={href} className="nav-link">
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="btn-ghost w-9 h-9 !p-0 flex items-center justify-center rounded-full"
            aria-label={isDark ? t('nav-theme-toggle-light') : t('nav-theme-toggle-dark')}
            title={isDark ? t('nav-theme-toggle-light') : t('nav-theme-toggle-dark')}
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLang(otherLang)}
            className="btn-ghost text-xs font-semibold tracking-wide px-2.5 h-9 rounded-full"
            aria-label={`Switch to ${otherLang === 'nl' ? 'Dutch' : 'English'}`}
          >
            {t('nav-lang-toggle')}
          </button>

          {/* CTA */}
          <a
            href="/#contact"
            className="btn-primary hidden sm:inline-flex text-sm !py-2 !px-4"
          >
            {t('nav-contact')}
          </a>
        </div>
      </nav>
    </header>
  );
}
