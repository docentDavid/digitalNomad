import { useRef } from 'react';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="reveal py-24 bg-[var(--bg)]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo frame */}
          <div className="photo-frame relative">
            <div
              className="w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-[var(--radius)] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, var(--accent-soft) 0%, var(--bg-soft) 100%)' }}
            >
              {/* Placeholder graphic */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-24 h-24 rounded-full bg-[var(--accent)] opacity-40" />
                <div className="w-32 h-3 rounded-full bg-[var(--line-2)]" />
                <div className="w-24 h-3 rounded-full bg-[var(--line)]" />
              </div>
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[var(--accent-soft)] -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Bio */}
          <div>
            <span className="section-eyebrow mb-4 block">{t('about-eyebrow')}</span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] mb-6"
              style={{ fontFamily: 'var(--font-tight)' }}
            >
              {t('about-title')}
            </h2>
            <p className="text-[var(--ink-2)] leading-relaxed mb-4">
              {t('about-body-1')}
            </p>
            <p className="text-[var(--ink-2)] leading-relaxed mb-8">
              {t('about-body-2')}
            </p>

            {/* Details list */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {([
                ['about-dl-exp-label', 'about-dl-exp-value'],
                ['about-dl-loc-label', 'about-dl-loc-value'],
                ['about-dl-lang-label', 'about-dl-lang-value'],
              ] as const).map(([labelKey, valueKey]) => (
                <div key={labelKey} className="p-4 rounded-xl bg-[var(--bg-soft)] border border-[var(--line)]">
                  <dt className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wide mb-1">
                    {t(labelKey)}
                  </dt>
                  <dd className="text-sm font-medium text-[var(--ink)]">
                    {t(valueKey)}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="/cv.pdf"
              className="btn-secondary inline-flex"
              download
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t('about-cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
