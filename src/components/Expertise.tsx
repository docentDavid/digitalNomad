import { useRef } from 'react';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';

interface ExpertiseCard {
  icon: React.ReactNode;
  titleKey: 'expertise-1-title' | 'expertise-2-title' | 'expertise-3-title';
  descKey: 'expertise-1-desc' | 'expertise-2-desc' | 'expertise-3-desc';
  tags: string[];
}

function UXIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function EduIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

const cards: ExpertiseCard[] = [
  {
    icon: <UXIcon />,
    titleKey: 'expertise-1-title',
    descKey: 'expertise-1-desc',
    tags: ['User Research', 'Design Systems', 'Figma', 'Accessibility'],
  },
  {
    icon: <CodeIcon />,
    titleKey: 'expertise-2-title',
    descKey: 'expertise-2-desc',
    tags: ['React', 'TypeScript', 'CSS', 'Performance'],
  },
  {
    icon: <EduIcon />,
    titleKey: 'expertise-3-title',
    descKey: 'expertise-3-desc',
    tags: ['Curriculum Design', 'Live Workshops', 'Team Training'],
  },
];

export default function Expertise() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="reveal py-24 bg-[var(--bg-soft)]"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4 justify-center">{t('expertise-eyebrow')}</span>
          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] mb-4"
            style={{ fontFamily: 'var(--font-tight)' }}
          >
            {t('expertise-title')}
          </h2>
          <p className="text-[var(--ink-2)] max-w-xl mx-auto text-lg">
            {t('expertise-subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <article key={card.titleKey} className="card p-8">
              <div
                className="card-icon w-14 h-14 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center mb-6"
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3" style={{ fontFamily: 'var(--font-tight)' }}>
                {t(card.titleKey)}
              </h3>
              <p className="text-[var(--ink-2)] text-sm leading-relaxed mb-6">
                {t(card.descKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
