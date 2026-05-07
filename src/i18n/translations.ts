export type Lang = 'en' | 'nl';

export type TranslationKey =
  | 'nav-expertise'
  | 'nav-workshops'
  | 'nav-insights'
  | 'nav-about'
  | 'nav-contact'
  | 'nav-lang-toggle'
  | 'nav-theme-toggle-dark'
  | 'nav-theme-toggle-light'
  | 'hero-eyebrow'
  | 'hero-title'
  | 'hero-subtitle'
  | 'hero-cta-primary'
  | 'hero-cta-secondary'
  | 'hero-stat-1-num'
  | 'hero-stat-1-label'
  | 'hero-stat-2-num'
  | 'hero-stat-2-label'
  | 'hero-stat-3-num'
  | 'hero-stat-3-label'
  | 'hero-panel-a-label'
  | 'hero-panel-a-sub'
  | 'hero-panel-b-label'
  | 'hero-panel-b-sub'
  | 'hero-panel-c-label'
  | 'hero-panel-c-sub'
  | 'expertise-eyebrow'
  | 'expertise-title'
  | 'expertise-subtitle'
  | 'expertise-1-title'
  | 'expertise-1-desc'
  | 'expertise-2-title'
  | 'expertise-2-desc'
  | 'expertise-3-title'
  | 'expertise-3-desc'
  | 'about-eyebrow'
  | 'about-title'
  | 'about-body-1'
  | 'about-body-2'
  | 'about-dl-exp-label'
  | 'about-dl-exp-value'
  | 'about-dl-loc-label'
  | 'about-dl-loc-value'
  | 'about-dl-lang-label'
  | 'about-dl-lang-value'
  | 'about-cta'
  | 'workshops-eyebrow'
  | 'workshops-title'
  | 'workshops-subtitle'
  | 'workshops-cta'
  | 'workshop-back'
  | 'workshop-outcomes'
  | 'workshop-audience'
  | 'workshop-includes'
  | 'workshop-contact-cta'
  | 'workshop-contact-cta-desc'
  | 'insights-eyebrow'
  | 'insights-title'
  | 'insights-subtitle'
  | 'insights-read-more'
  | 'insight-back'
  | 'insight-prev'
  | 'insight-next'
  | 'insight-contact-cta'
  | 'cta-title'
  | 'cta-subtitle'
  | 'cta-email'
  | 'cta-linkedin'
  | 'footer-tagline'
  | 'footer-nav-title'
  | 'footer-connect-title'
  | 'footer-copy';

type Translations = Record<Lang, Record<TranslationKey, string>>;

const T: Translations = {
  en: {
    'nav-expertise':              'Expertise',
    'nav-workshops':              'Workshops',
    'nav-insights':               'Insights',
    'nav-about':                  'About',
    'nav-contact':                'Get in touch',
    'nav-lang-toggle':            'NL',
    'nav-theme-toggle-dark':      'Switch to dark mode',
    'nav-theme-toggle-light':     'Switch to light mode',

    'hero-eyebrow':               'UX/UI & Frontend Educator',
    'hero-title':                 'Design that <em>teaches</em>. Code that <em>connects</em>.',
    'hero-subtitle':              'I run online workshops and practical training for designers, developers, and teams who want to bridge the gap between great design and production-ready code.',
    'hero-cta-primary':           'Explore workshops',
    'hero-cta-secondary':         'Read my insights',
    'hero-stat-1-num':            '200+',
    'hero-stat-1-label':          'Learners trained',
    'hero-stat-2-num':            '12',
    'hero-stat-2-label':          'Workshops delivered',
    'hero-stat-3-num':            '98%',
    'hero-stat-3-label':          'Satisfaction rate',
    'hero-panel-a-label':         'Workshop progress',
    'hero-panel-a-sub':           'AI for UX Designers · Module 3/6',
    'hero-panel-b-label':         'New insight published',
    'hero-panel-b-sub':           '5 min read · Interfaces & Overwhelm',
    'hero-panel-c-label':         'Available',
    'hero-panel-c-sub':           'Booking open — Q3 2025',

    'expertise-eyebrow':          'What I do',
    'expertise-title':            'Where design meets engineering',
    'expertise-subtitle':         'Three disciplines, one through-line: making digital products that are beautiful, accessible, and genuinely usable.',
    'expertise-1-title':          'UX & UI Design',
    'expertise-1-desc':           'Research-grounded design systems, interaction patterns, and accessible component libraries that scale from prototype to production.',
    'expertise-2-title':          'Frontend Development',
    'expertise-2-desc':           'Semantic HTML, modern CSS, TypeScript, and React — written to be maintainable, performant, and a joy to work with.',
    'expertise-3-title':          'Education & Workshops',
    'expertise-3-desc':           'Curriculum design and live workshop facilitation for mixed audiences, turning complex concepts into lasting, practical skills.',

    'about-eyebrow':              'About me',
    'about-title':                'Hi, I\'m David',
    'about-body-1':               'I\'m a UX/UI designer and frontend educator based in the Netherlands. For the past eight years I\'ve been helping teams build better digital products — and teaching the people behind those teams to do the same.',
    'about-body-2':               'My workshops are built on a simple premise: real learning happens when you do, not just when you watch. Every session combines concise theory with hands-on exercises, live code, and genuine feedback.',
    'about-dl-exp-label':         'Experience',
    'about-dl-exp-value':         '8+ years in UX & frontend',
    'about-dl-loc-label':         'Location',
    'about-dl-loc-value':         'Netherlands · Remote worldwide',
    'about-dl-lang-label':        'Languages',
    'about-dl-lang-value':        'Dutch & English',
    'about-cta':                  'Download CV',

    'workshops-eyebrow':          'Workshops',
    'workshops-title':            'Learn by building',
    'workshops-subtitle':         'Focused, practical workshops designed to give you skills you can use the very next day.',
    'workshops-cta':              'View workshop',
    'workshop-back':              '← Back to workshops',
    'workshop-outcomes':          'Learning outcomes',
    'workshop-audience':          'Who this is for',
    'workshop-includes':          'What\'s included',
    'workshop-contact-cta':       'Book this workshop',
    'workshop-contact-cta-desc':  'Ready to level up your team? Let\'s talk about dates, format, and what you need.',

    'insights-eyebrow':           'Insights',
    'insights-title':             'Thinking out loud',
    'insights-subtitle':          'Articles on UX, frontend craft, and the intersection of design and code.',
    'insights-read-more':         'Read article',
    'insight-back':               '← Back to insights',
    'insight-prev':               '← Previous',
    'insight-next':               'Next →',
    'insight-contact-cta':        'Have thoughts on this? I\'d love to hear from you.',

    'cta-title':                  'Ready to raise the bar?',
    'cta-subtitle':               'Whether you\'re looking to book a workshop, collaborate on a project, or just say hello — my inbox is open.',
    'cta-email':                  'Send an email',
    'cta-linkedin':               'Connect on LinkedIn',

    'footer-tagline':             'UX/UI & Frontend Educator',
    'footer-nav-title':           'Navigation',
    'footer-connect-title':       'Connect',
    'footer-copy':                '© 2025 David Schol. All rights reserved.',
  },

  nl: {
    'nav-expertise':              'Expertise',
    'nav-workshops':              'Workshops',
    'nav-insights':               'Inzichten',
    'nav-about':                  'Over mij',
    'nav-contact':                'Neem contact op',
    'nav-lang-toggle':            'EN',
    'nav-theme-toggle-dark':      'Schakel naar donkere modus',
    'nav-theme-toggle-light':     'Schakel naar lichte modus',

    'hero-eyebrow':               'UX/UI & Frontend Educator',
    'hero-title':                 'Design dat <em>onderwijst</em>. Code die <em>verbindt</em>.',
    'hero-subtitle':              'Ik geef online workshops en praktijkgerichte trainingen voor designers, developers en teams die de kloof tussen goed design en productieklare code willen overbruggen.',
    'hero-cta-primary':           'Bekijk workshops',
    'hero-cta-secondary':         'Lees mijn inzichten',
    'hero-stat-1-num':            '200+',
    'hero-stat-1-label':          'Deelnemers opgeleid',
    'hero-stat-2-num':            '12',
    'hero-stat-2-label':          'Workshops gegeven',
    'hero-stat-3-num':            '98%',
    'hero-stat-3-label':          'Tevredenheidsgraad',
    'hero-panel-a-label':         'Workshop voortgang',
    'hero-panel-a-sub':           'AI voor UX Designers · Module 3/6',
    'hero-panel-b-label':         'Nieuw inzicht gepubliceerd',
    'hero-panel-b-sub':           '5 min lezen · Interfaces & Overload',
    'hero-panel-c-label':         'Beschikbaar',
    'hero-panel-c-sub':           'Boekingen open — Q3 2025',

    'expertise-eyebrow':          'Wat ik doe',
    'expertise-title':            'Waar design engineering ontmoet',
    'expertise-subtitle':         'Drie disciplines, één rode draad: digitale producten maken die mooi, toegankelijk en echt bruikbaar zijn.',
    'expertise-1-title':          'UX & UI Design',
    'expertise-1-desc':           'Onderzoeksgestuurde designsystemen, interactiepatronen en toegankelijke componentbibliotheken die schalen van prototype naar productie.',
    'expertise-2-title':          'Frontend Development',
    'expertise-2-desc':           'Semantische HTML, moderne CSS, TypeScript en React — geschreven om onderhoudbaar, performant en prettig te werken te zijn.',
    'expertise-3-title':          'Onderwijs & Workshops',
    'expertise-3-desc':           'Curriculumontwerp en live workshopbegeleiding voor gemengde doelgroepen, waarbij complexe concepten worden omgezet in blijvende, praktische vaardigheden.',

    'about-eyebrow':              'Over mij',
    'about-title':                'Hoi, ik ben David',
    'about-body-1':               'Ik ben een UX/UI designer en frontend educator gevestigd in Nederland. De afgelopen acht jaar heb ik teams geholpen betere digitale producten te bouwen — en de mensen achter die teams geleerd hetzelfde te doen.',
    'about-body-2':               'Mijn workshops zijn gebaseerd op een eenvoudig principe: echte leren vindt plaats wanneer je het doet, niet alleen wanneer je kijkt. Elke sessie combineert bondige theorie met hands-on oefeningen, live code en echte feedback.',
    'about-dl-exp-label':         'Ervaring',
    'about-dl-exp-value':         '8+ jaar in UX & frontend',
    'about-dl-loc-label':         'Locatie',
    'about-dl-loc-value':         'Nederland · Wereldwijd remote',
    'about-dl-lang-label':        'Talen',
    'about-dl-lang-value':        'Nederlands & Engels',
    'about-cta':                  'Download CV',

    'workshops-eyebrow':          'Workshops',
    'workshops-title':            'Leer door te bouwen',
    'workshops-subtitle':         'Gerichte, praktische workshops ontworpen om je vaardigheden te geven die je de volgende dag al kunt gebruiken.',
    'workshops-cta':              'Bekijk workshop',
    'workshop-back':              '← Terug naar workshops',
    'workshop-outcomes':          'Leerdoelen',
    'workshop-audience':          'Voor wie is dit',
    'workshop-includes':          'Wat is inbegrepen',
    'workshop-contact-cta':       'Boek deze workshop',
    'workshop-contact-cta-desc':  'Klaar om je team naar een hoger niveau te brengen? Laten we praten over data, format en wat je nodig hebt.',

    'insights-eyebrow':           'Inzichten',
    'insights-title':             'Hardop denken',
    'insights-subtitle':          'Artikelen over UX, frontend vakmanschap en het snijpunt van design en code.',
    'insights-read-more':         'Lees artikel',
    'insight-back':               '← Terug naar inzichten',
    'insight-prev':               '← Vorige',
    'insight-next':               'Volgende →',
    'insight-contact-cta':        'Gedachten hierover? Ik hoor ze graag.',

    'cta-title':                  'Klaar om de lat hoger te leggen?',
    'cta-subtitle':               'Of je nu een workshop wilt boeken, wil samenwerken aan een project of gewoon hallo wilt zeggen — mijn inbox is open.',
    'cta-email':                  'Stuur een e-mail',
    'cta-linkedin':               'Verbind op LinkedIn',

    'footer-tagline':             'UX/UI & Frontend Educator',
    'footer-nav-title':           'Navigatie',
    'footer-connect-title':       'Verbind',
    'footer-copy':                '© 2025 David Schol. Alle rechten voorbehouden.',
  },
};

export default T;
