import { useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import workshops from '../data/workshops';
import type { Lang } from '../i18n/translations';

export default function WorkshopDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const workshop = workshops.find((w) => w.id === id);

  useEffect(() => {
    if (workshop) {
      document.title = `${workshop.title[lang as Lang]} — David Schol`;
      // Focus main heading on page load
      headingRef.current?.focus();
    }
  }, [workshop, lang]);

  if (!workshop) {
    return <Navigate to="/" replace />;
  }

  const l = lang as Lang;

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[var(--bg)]">
      {/* Hero section */}
      <div className="bg-[var(--bg-soft)] border-b border-[var(--line)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            to="/#workshops"
            className="detail-link mb-8 block"
            aria-label={t('workshop-back')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t('workshop-back')}
          </Link>

          {/* Number */}
          <span className="font-mono text-sm font-semibold text-[var(--accent-ink)] mb-4 block">
            {workshop.num}
          </span>

          {/* Title */}
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] mb-6 focus:outline-none"
            style={{ fontFamily: 'var(--font-tight)' }}
          >
            {workshop.title[l]}
          </h1>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-3">
            <span className="tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-1">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {workshop.duration[l]}
            </span>
            <span className="tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-1">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              {workshop.format[l]}
            </span>
            <span className="tag">{workshop.level[l]}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Long description */}
            <div>
              <p className="text-[var(--ink-2)] text-lg leading-relaxed whitespace-pre-line">
                {workshop.longDesc[l]}
              </p>
            </div>

            {/* Learning outcomes */}
            <div>
              <h2
                className="text-xl font-bold text-[var(--ink)] mb-5"
                style={{ fontFamily: 'var(--font-tight)' }}
              >
                {t('workshop-outcomes')}
              </h2>
              <ul className="space-y-3" role="list">
                {workshop.outcomes[l].map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--ink-2)] text-sm leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-soft)] flex items-center justify-center" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Who it's for */}
            <div className="card p-6">
              <h2
                className="text-base font-bold text-[var(--ink)] mb-3"
                style={{ fontFamily: 'var(--font-tight)' }}
              >
                {t('workshop-audience')}
              </h2>
              <p className="text-[var(--ink-2)] text-sm leading-relaxed">
                {workshop.audience[l]}
              </p>
            </div>

            {/* What's included */}
            <div className="card p-6">
              <h2
                className="text-base font-bold text-[var(--ink)] mb-4"
                style={{ fontFamily: 'var(--font-tight)' }}
              >
                {t('workshop-includes')}
              </h2>
              <ul className="space-y-2" role="list">
                {workshop.includes[l].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[var(--ink-2)] text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="cta-strip rounded-[var(--radius)] p-6 text-center">
              <h2
                className="text-base font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-tight)' }}
              >
                {t('workshop-contact-cta')}
              </h2>
              <p className="text-white/70 text-sm mb-4">
                {t('workshop-contact-cta-desc')}
              </p>
              <a
                href="mailto:hello@davidschol.nl"
                className="btn-primary !text-sm w-full justify-center"
              >
                {t('cta-email')}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
