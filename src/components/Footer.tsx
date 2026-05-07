import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      className="border-t border-[var(--line)] bg-[var(--bg-soft)] py-12 px-6"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
        {/* Brand column */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 no-underline mb-3" aria-label="David Schol — home">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="footer-logo-g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="oklch(0.65 0.18 310)" />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="url(#footer-logo-g)" />
              <rect x="8" y="8" width="16" height="16" rx="3" fill="white" opacity="0.9" />
            </svg>
            <span className="font-semibold text-sm text-[var(--ink)]" style={{ fontFamily: 'var(--font-tight)' }}>
              David Schol
            </span>
          </Link>
          <p className="text-[var(--ink-3)] text-sm">{t('footer-tagline')}</p>
        </div>

        {/* Nav column */}
        <div>
          <h3 className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-widest mb-4">
            {t('footer-nav-title')}
          </h3>
          <ul className="space-y-2 list-none p-0 m-0" role="list">
            {[
              { href: '/#expertise', labelKey: 'nav-expertise' as const },
              { href: '/#workshops', labelKey: 'nav-workshops' as const },
              { href: '/#insights', labelKey: 'nav-insights' as const },
              { href: '/#about', labelKey: 'nav-about' as const },
            ].map(({ href, labelKey }) => (
              <li key={labelKey}>
                <a href={href} className="footer-link">{t(labelKey)}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect column */}
        <div>
          <h3 className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-widest mb-4">
            {t('footer-connect-title')}
          </h3>
          <ul className="space-y-2 list-none p-0 m-0" role="list">
            <li>
              <a href="mailto:hello@davidschol.nl" className="footer-link">hello@davidschol.nl</a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/davidschol"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[var(--line)] text-center">
        <p className="text-[var(--ink-3)] text-xs">{t('footer-copy')}</p>
      </div>
    </footer>
  );
}
