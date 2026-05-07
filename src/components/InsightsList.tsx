import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
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

export default function InsightsList() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="insights"
      className="reveal py-24 bg-[var(--bg)]"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4 justify-center">{t('insights-eyebrow')}</span>
          <h2
            id="insights-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] mb-4"
            style={{ fontFamily: 'var(--font-tight)' }}
          >
            {t('insights-title')}
          </h2>
          <p className="text-[var(--ink-2)] max-w-xl mx-auto">
            {t('insights-subtitle')}
          </p>
        </div>

        {/* Insights grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {insights.map((insight) => (
            <article key={insight.id} className="card p-7 flex flex-col">
              {/* Meta row */}
              <div className="flex items-center gap-3 mb-4 text-xs text-[var(--ink-3)]">
                <span className="tag">{insight.type[lang as Lang]}</span>
                <span>{formatDate(insight.date, lang as Lang)}</span>
                <span>·</span>
                <span>{insight.readTime[lang as Lang]}</span>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold text-[var(--ink)] mb-3 flex-1"
                style={{ fontFamily: 'var(--font-tight)' }}
              >
                {insight.title[lang as Lang]}
              </h3>

              {/* Intro */}
              <p className="text-[var(--ink-2)] text-sm leading-relaxed mb-5">
                {insight.intro[lang as Lang]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {insight.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Link */}
              <Link
                to={`/insights/${insight.id}`}
                className="detail-link self-start"
                aria-label={`${t('insights-read-more')}: ${insight.title[lang as Lang]}`}
              >
                {t('insights-read-more')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
