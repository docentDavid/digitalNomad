import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import workshops from '../data/workshops';
import type { Lang } from '../i18n/translations';

export default function WorkshopsList() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="workshops"
      className="reveal py-24 bg-[var(--bg-soft)]"
      aria-labelledby="workshops-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="section-eyebrow mb-4 block">{t('workshops-eyebrow')}</span>
            <h2
              id="workshops-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-tight)' }}
            >
              {t('workshops-title')}
            </h2>
          </div>
          <p className="text-[var(--ink-2)] max-w-xs sm:text-right text-sm">
            {t('workshops-subtitle')}
          </p>
        </div>

        {/* Workshop cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop) => (
            <article key={workshop.id} className="card p-7 flex flex-col">
              {/* Number */}
              <span
                className="text-xs font-mono font-semibold text-[var(--accent-ink)] mb-4 block"
                aria-hidden="true"
              >
                {workshop.num}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-bold text-[var(--ink)] mb-3 flex-1"
                style={{ fontFamily: 'var(--font-tight)' }}
              >
                {workshop.title[lang as Lang]}
              </h3>

              {/* Description */}
              <p className="text-[var(--ink-2)] text-sm leading-relaxed mb-5">
                {workshop.desc[lang as Lang]}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 mb-6 text-xs text-[var(--ink-3)]">
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {workshop.duration[lang as Lang]}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  {workshop.format[lang as Lang]}
                </span>
              </div>

              {/* Level badge */}
              <div className="flex items-center justify-between">
                <span className="tag">{workshop.level[lang as Lang]}</span>
                <Link
                  to={`/workshops/${workshop.id}`}
                  className="detail-link"
                  aria-label={`${t('workshops-cta')}: ${workshop.title[lang as Lang]}`}
                >
                  {t('workshops-cta')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
