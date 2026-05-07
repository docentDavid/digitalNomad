export interface Workshop {
  id: string;
  num: string;
  title: { en: string; nl: string };
  desc: { en: string; nl: string };
  duration: { en: string; nl: string };
  format: { en: string; nl: string };
  level: { en: string; nl: string };
  longDesc: { en: string; nl: string };
  outcomes: { en: string[]; nl: string[] };
  audience: { en: string; nl: string };
  includes: { en: string[]; nl: string[] };
}

const workshops: Workshop[] = [
  {
    id: 'ai-for-ux',
    num: '01',
    title: {
      en: 'AI for UX Designers',
      nl: 'AI voor UX Designers',
    },
    desc: {
      en: 'Learn how to integrate AI tools into your UX workflow — from rapid prototyping and user research synthesis to writing better prompts for generative interfaces.',
      nl: 'Leer hoe je AI-tools integreert in je UX-workflow — van snel prototypen en het synthetiseren van gebruikersonderzoek tot het schrijven van betere prompts voor generatieve interfaces.',
    },
    duration: {
      en: 'Full day (6 hrs)',
      nl: 'Hele dag (6 uur)',
    },
    format: {
      en: 'Live online or on-site',
      nl: 'Live online of op locatie',
    },
    level: {
      en: 'Intermediate',
      nl: 'Gemiddeld',
    },
    longDesc: {
      en: 'Artificial intelligence is reshaping the tools designers use every day — but most teams are only scratching the surface. This full-day workshop goes beyond "AI autocomplete" to show you how to use AI strategically across the entire UX lifecycle.\n\nWe start with how large language models actually work, giving you a mental model that makes you a better prompter. Then we move into hands-on exercises: synthesising user interview transcripts in minutes, generating design variations from a brief, writing microcopy at scale, and prototyping AI-powered interactions.\n\nBy the end of the day you\'ll have a repeatable AI workflow you can bring back to your team the very next morning.',
      nl: 'Kunstmatige intelligentie herschrijft de tools die designers dagelijks gebruiken — maar de meeste teams krabbelen slechts aan de oppervlakte. Deze full-day workshop gaat verder dan "AI autocomplete" en laat je zien hoe je AI strategisch kunt inzetten in de gehele UX-levenscyclus.\n\nWe beginnen met hoe grote taalmodellen eigenlijk werken, wat je een mentaal model geeft dat je tot een betere prompter maakt. Dan gaan we over op hands-on oefeningen: gebruikersinterviewtranscripten in minuten synthetiseren, designvariaties genereren vanuit een briefing, microcopy op schaal schrijven en AI-aangedreven interacties prototypen.\n\nAan het einde van de dag heb je een herhaalbaar AI-workflow dat je de volgende ochtend meteen kunt terugbrengen naar je team.',
    },
    outcomes: {
      en: [
        'Understand how LLMs and image models work at a conceptual level',
        'Write effective prompts for UX research synthesis and content generation',
        'Use AI to accelerate ideation, prototyping, and design critique',
        'Build a personal AI toolkit tailored to your design process',
        'Spot the limitations and ethical considerations of AI in design',
        'Facilitate a simple AI-assisted design sprint with your team',
      ],
      nl: [
        'Begrijp hoe LLMs en beeldmodellen conceptueel werken',
        'Schrijf effectieve prompts voor UX-onderzoekssynthese en contentgeneratie',
        'Gebruik AI om ideeontwikkeling, prototypen en designkritiek te versnellen',
        'Bouw een persoonlijke AI-toolkit afgestemd op je ontwerpproces',
        'Herken de beperkingen en ethische overwegingen van AI in design',
        'Faciliteer een eenvoudige AI-ondersteunde design sprint met je team',
      ],
    },
    audience: {
      en: 'Mid-level to senior UX/UI designers, product designers, and UX researchers who are curious about AI but haven\'t found a structured way to integrate it into their practice.',
      nl: 'Middel- tot senior-niveau UX/UI designers, product designers en UX-onderzoekers die nieuwsgierig zijn naar AI maar nog geen gestructureerde manier hebben gevonden om het in hun praktijk te integreren.',
    },
    includes: {
      en: [
        'Pre-workshop reading list and tool setup guide',
        'Slide deck and workshop exercises (PDF)',
        'Prompt library with 40+ reusable UX prompts',
        'Recording of the session (if held online)',
        '30-day Q&A access via email',
        'Certificate of completion',
      ],
      nl: [
        'Leeslijst en toolinstallatiehulp vóór de workshop',
        'Slide deck en workshopoefeningen (PDF)',
        'Promptbibliotheek met 40+ herbruikbare UX-prompts',
        'Opname van de sessie (indien online gehouden)',
        '30 dagen Q&A-toegang via e-mail',
        'Bewijs van deelname',
      ],
    },
  },
  {
    id: 'ux-for-devs',
    num: '02',
    title: {
      en: 'UX Fundamentals for Developers',
      nl: 'UX Fundamenten voor Developers',
    },
    desc: {
      en: 'A practical UX crash-course built for engineers. Learn to make better product decisions, communicate with designers, and write code that puts users first.',
      nl: 'Een praktische UX-spoedcursus speciaal voor engineers. Leer betere productbeslissingen te nemen, communiceer effectiever met designers en schrijf code die de gebruiker centraal stelt.',
    },
    duration: {
      en: 'Half day (3.5 hrs)',
      nl: 'Halve dag (3,5 uur)',
    },
    format: {
      en: 'Live online or on-site',
      nl: 'Live online of op locatie',
    },
    level: {
      en: 'Beginner to intermediate',
      nl: 'Beginner tot gemiddeld',
    },
    longDesc: {
      en: 'Developers make dozens of UX decisions every day — whether they realise it or not. The copy in an error message, the order of form fields, the timing of a loading state: all of these shape user experience. This workshop gives developers the vocabulary, frameworks, and instincts to make those decisions well.\n\nIn three and a half hours we cover the core heuristics of usable interfaces, how to read a design file with intent, how to push back on designs that will cause problems, and how to champion accessibility in code reviews. We use real examples from production apps — including some you\'ve probably used today.\n\nThis workshop is deliberately concise and high-density. You\'ll leave with a mental framework that changes how you approach every component you build.',
      nl: 'Developers nemen tientallen UX-beslissingen per dag — of ze het nu beseffen of niet. De tekst in een foutmelding, de volgorde van formuliervelden, de timing van een laadstatus: dit alles vormt de gebruikerservaring. Deze workshop geeft developers het vocabulaire, de kaders en de instincten om die beslissingen goed te nemen.\n\nIn drieënhalf uur behandelen we de kernheuristieken van bruikbare interfaces, hoe je met intentie een designbestand leest, hoe je ontwerpen die problemen zullen veroorzaken kunt terugsturen en hoe je toegankelijkheid kunt bevorderen in code reviews. We gebruiken echte voorbeelden uit productie-apps — inclusief sommige die je vandaag waarschijnlijk hebt gebruikt.\n\nDeze workshop is bewust beknopt en hoogdicht. Je verlaat hem met een mentaal kader dat verandert hoe je elk component dat je bouwt benadert.',
    },
    outcomes: {
      en: [
        'Apply Nielsen\'s 10 usability heuristics to your own code and UI decisions',
        'Read design files and Figma annotations with confidence',
        'Write user-centric error messages, labels, and microcopy',
        'Identify and flag accessibility issues before they reach production',
        'Have productive conversations with designers using shared language',
        'Conduct a basic heuristic evaluation of an existing interface',
      ],
      nl: [
        'Pas Nielsens 10 bruikbaarheidsheuristieken toe op je eigen code en UI-beslissingen',
        'Lees designbestanden en Figma-annotaties met vertrouwen',
        'Schrijf gebruikersgerichte foutmeldingen, labels en microcopy',
        'Identificeer en meld toegankelijkheidsproblemen voordat ze productie bereiken',
        'Voer productieve gesprekken met designers met behulp van gedeelde taal',
        'Voer een eenvoudige heuristische evaluatie van een bestaande interface uit',
      ],
    },
    audience: {
      en: 'Frontend and full-stack developers who work closely with design teams and want to contribute more meaningfully to product decisions. No prior design experience required.',
      nl: 'Frontend- en full-stack developers die nauw samenwerken met designteams en betekenisvoller willen bijdragen aan productbeslissingen. Geen eerdere designervaring vereist.',
    },
    includes: {
      en: [
        'Workshop slides and cheat-sheet (PDF)',
        'Heuristic evaluation template (Notion & Figma)',
        'Curated reading list for going deeper',
        'Access to the workshop community channel (Slack)',
        'Certificate of completion',
      ],
      nl: [
        'Workshop slides en spiekbriefje (PDF)',
        'Heuristische evaluatiesjabloon (Notion & Figma)',
        'Samengestelde leeslijst voor verdieping',
        'Toegang tot het workshop-communitykanaal (Slack)',
        'Bewijs van deelname',
      ],
    },
  },
  {
    id: 'responsive-frontend',
    num: '03',
    title: {
      en: 'Responsive Frontend Masterclass',
      nl: 'Responsive Frontend Masterclass',
    },
    desc: {
      en: 'Modern CSS layout, fluid typography, and component architecture. Build interfaces that look right on every screen — without a mountain of media queries.',
      nl: 'Moderne CSS-layout, vloeiende typografie en componentarchitectuur. Bouw interfaces die op elk scherm goed uitkomen — zonder een berg media queries.',
    },
    duration: {
      en: 'Full day (6 hrs)',
      nl: 'Hele dag (6 uur)',
    },
    format: {
      en: 'Live online or on-site',
      nl: 'Live online of op locatie',
    },
    level: {
      en: 'Intermediate to advanced',
      nl: 'Gemiddeld tot gevorderd',
    },
    longDesc: {
      en: 'The web has evolved — but many teams are still building responsive layouts the same way they did in 2015. This masterclass replaces breakpoint-heavy stylesheets with intrinsic, content-driven layouts that adapt gracefully to any viewport.\n\nWe cover CSS Grid and Flexbox in depth, fluid clamp()-based typography and spacing, container queries for truly encapsulated components, custom properties as a design token layer, and a modern approach to dark mode. Every concept is introduced with a real-world problem, solved live in the browser, and then given to you as a codeable exercise.\n\nYou\'ll also get a behind-the-scenes look at how design systems like Tailwind CSS are structured under the hood — so you understand what tools like that are doing, whether you use them or not.',
      nl: 'Het web is geëvolueerd — maar veel teams bouwen responsieve layouts nog steeds op dezelfde manier als in 2015. Deze masterclass vervangt stylesheets vol breekpunten door intrinsieke, inhoudgestuurde layouts die elegant aanpassen aan elke viewport.\n\nWe behandelen CSS Grid en Flexbox diepgaand, vloeiende clamp()-gebaseerde typografie en spacing, container queries voor echt ingekapselde componenten, custom properties als designtokenlaag, en een moderne aanpak van dark mode. Elk concept wordt geïntroduceerd met een praktijkprobleem, live in de browser opgelost en vervolgens als een codeerbare oefening aan je gegeven.\n\nJe krijgt ook een blik achter de schermen op hoe designsystemen zoals Tailwind CSS intern zijn gestructureerd — zodat je begrijpt wat dergelijke tools doen, of je ze nu gebruikt of niet.',
    },
    outcomes: {
      en: [
        'Build fluid, intrinsic layouts using CSS Grid and Flexbox without media query overload',
        'Implement clamp()-based fluid typography and spacing scales',
        'Use container queries to create genuinely reusable components',
        'Structure CSS custom properties as a maintainable design token system',
        'Implement dark mode cleanly without duplication or JavaScript hacks',
        'Audit and refactor an existing stylesheet for modern best practices',
      ],
      nl: [
        'Bouw vloeiende, intrinsieke layouts met CSS Grid en Flexbox zonder mediaquery-overbelasting',
        'Implementeer clamp()-gebaseerde vloeiende typografie en spacing-schalen',
        'Gebruik container queries om echt herbruikbare componenten te maken',
        'Structureer CSS custom properties als een onderhoudbaar designtokensysteem',
        'Implementeer dark mode netjes zonder duplicatie of JavaScript-hacks',
        'Auditeer en refactor een bestaand stylesheet naar moderne best practices',
      ],
    },
    audience: {
      en: 'Frontend developers and designers who write CSS, with at least a year of web development experience. Familiarity with HTML and CSS is assumed; knowledge of a JS framework is helpful but not required.',
      nl: 'Frontend developers en designers die CSS schrijven, met minimaal een jaar webontwikkelingservaring. Bekendheid met HTML en CSS wordt verondersteld; kennis van een JS-framework is handig maar niet vereist.',
    },
    includes: {
      en: [
        'Starter kit repository with all exercises and solutions',
        'Full slide deck (PDF)',
        'CSS layout reference card',
        'Design token starter template (CSS & Figma variables)',
        'Recording of the session (if held online)',
        '30-day Q&A access via email',
        'Certificate of completion',
      ],
      nl: [
        'Starter kit repository met alle oefeningen en oplossingen',
        'Volledig slide deck (PDF)',
        'CSS layout-referentiekaart',
        'Designtoken-starterssjabloon (CSS & Figma variabelen)',
        'Opname van de sessie (indien online gehouden)',
        '30 dagen Q&A-toegang via e-mail',
        'Bewijs van deelname',
      ],
    },
  },
];

export default workshops;
