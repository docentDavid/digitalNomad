import { useRef } from 'react';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

export default function CtaStrip() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="reveal cta-strip py-20 px-6"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          style={{ fontFamily: 'var(--font-tight)' }}
        >
          {t('cta-title')}
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          {t('cta-subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@davidschol.nl"
            className="btn-primary"
            aria-label={`${t('cta-email')} — hello@davidschol.nl`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {t('cta-email')}
          </a>
          <a
            href="https://linkedin.com/in/davidschol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/30 hover:border-white/70 transition-all"
            aria-label={`${t('cta-linkedin')} (opens in new tab)`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            {t('cta-linkedin')}
          </a>
        </div>
      </div>
    </section>
  );
}
