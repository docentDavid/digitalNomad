import { useRef } from 'react';
import { useLang } from '../context/LangContext';

export default function Hero() {
  const { t, tHtml } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grid-overlay" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 w-full py-24 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left: copy */}
        <div>
          <span className="section-eyebrow mb-6 block" aria-hidden="true">
            {t('hero-eyebrow')}
          </span>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-tight)', color: 'var(--ink)' }}
            dangerouslySetInnerHTML={{
              __html: tHtml('hero-title').replace(/<em>/g, '<em class="hero-title-em not-italic">'),
            }}
          />

          <p className="text-lg text-[var(--ink-2)] leading-relaxed mb-8 max-w-lg">
            {t('hero-subtitle')}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a href="/#workshops" className="btn-primary">
              {t('hero-cta-primary')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="/#insights" className="btn-secondary">
              {t('hero-cta-secondary')}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {([
              ['hero-stat-1-num', 'hero-stat-1-label'],
              ['hero-stat-2-num', 'hero-stat-2-label'],
              ['hero-stat-3-num', 'hero-stat-3-label'],
            ] as const).map(([numKey, labelKey]) => (
              <div key={numKey}>
                <div className="stat-num">{t(numKey)}</div>
                <div className="text-sm text-[var(--ink-3)] mt-1">{t(labelKey)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: decorative floating panels */}
        <div className="hero-visual hidden lg:block" aria-hidden="true">
          {/* Panel A — Workshop progress */}
          <div className="panel panel-a">
            <div className="flex items-center gap-2 mb-3">
              <span className="panel-dot" />
              <span className="text-xs font-semibold text-[var(--ink-2)]">{t('hero-panel-a-label')}</span>
            </div>
            <div className="text-xs text-[var(--ink-3)] mb-3">{t('hero-panel-a-sub')}</div>
            <div className="h-1.5 rounded-full bg-[var(--line)] overflow-hidden">
              <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: '50%' }} />
            </div>
          </div>

          {/* Panel B — New insight */}
          <div className="panel panel-b">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-[var(--accent-soft)] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-[var(--ink-2)]">{t('hero-panel-b-label')}</span>
            </div>
            <p className="text-xs text-[var(--ink-3)]">{t('hero-panel-b-sub')}</p>
          </div>

          {/* Panel C — Availability */}
          <div className="panel panel-c">
            <div className="flex items-center gap-2">
              <span className="panel-dot" />
              <span className="text-xs font-semibold text-[var(--ink)]">{t('hero-panel-c-label')}</span>
            </div>
            <div className="text-xs text-[var(--ink-3)] mt-1">{t('hero-panel-c-sub')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
