import { useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import insights from '../data/insights';
import type { Lang } from '../i18n/translations';

function formatDate(iso: string, lang: Lang): string {
  try {
    return new Date(iso).toLocaleDateString(lang === 'nl' ? 'nl-NL' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

export default function InsightDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const currentIndex = insights.findIndex((i) => i.id === id);
  const insight = currentIndex !== -1 ? insights[currentIndex] : null;

  const prevInsight = currentIndex > 0 ? insights[currentIndex - 1] : null;
  const nextInsight = currentIndex < insights.length - 1 ? insights[currentIndex + 1] : null;

  useEffect(() => {
    if (insight) {
      document.title = `${insight.title[lang as Lang]} — David Schol`;
      headingRef.current?.focus();
    }
  }, [insight, lang]);

  if (!insight) {
    return <Navigate to="/" replace />;
  }

  const l = lang as Lang;

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[var(--bg)]">
      {/* Article header */}
      <div className="bg-[var(--bg-soft)] border-b border-[var(--line)] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/#insights"
            className="detail-link mb-8 block"
            aria-label={t('insight-back')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t('insight-back')}
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-[var(--ink-3)]">
            <span className="tag">{insight.type[l]}</span>
            <span>{formatDate(insight.date, l)}</span>
            <span aria-hidden="true">·</span>
            <span>{insight.readTime[l]}</span>
          </div>

          {/* Title */}
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] mb-6 focus:outline-none"
            style={{ fontFamily: 'var(--font-tight)' }}
          >
            {insight.title[l]}
          </h1>

          {/* Intro */}
          <p className="text-xl text-[var(--ink-2)] leading-relaxed mb-6">
            {insight.intro[l]}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {insight.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {insight.body[l].map((paragraph, i) => (
            <p key={i} className="text-[var(--ink-2)] text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-6 rounded-[var(--radius)] bg-[var(--bg-soft)] border border-[var(--line)] text-center">
          <p className="text-[var(--ink-2)] mb-4">{t('insight-contact-cta')}</p>
          <a href="mailto:hello@davidschol.nl" className="btn-primary inline-flex">
            {t('cta-email')}
          </a>
        </div>

        {/* Prev / Next navigation */}
        <nav
          className="mt-12 grid grid-cols-2 gap-4"
          aria-label="Article navigation"
        >
          <div>
            {prevInsight && (
              <Link
                to={`/insights/${prevInsight.id}`}
                className="card p-4 block no-underline group"
                aria-label={`${t('insight-prev')}: ${prevInsight.title[l]}`}
              >
                <span className="text-xs text-[var(--ink-3)] mb-1 block">{t('insight-prev')}</span>
                <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)] transition-colors line-clamp-2">
                  {prevInsight.title[l]}
                </span>
              </Link>
            )}
          </div>
          <div>
            {nextInsight && (
              <Link
                to={`/insights/${nextInsight.id}`}
                className="card p-4 block no-underline text-right group"
                aria-label={`${t('insight-next')}: ${nextInsight.title[l]}`}
              >
                <span className="text-xs text-[var(--ink-3)] mb-1 block">{t('insight-next')}</span>
                <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)] transition-colors line-clamp-2">
                  {nextInsight.title[l]}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </main>
  );
}
