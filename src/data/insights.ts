export interface Insight {
  id: string;
  type: { en: string; nl: string };
  readTime: { en: string; nl: string };
  title: { en: string; nl: string };
  date: string;
  tags: string[];
  intro: { en: string; nl: string };
  body: { en: string[]; nl: string[] };
}

const insights: Insight[] = [
  {
    id: 'interfaces-overwhelm',
    type: { en: 'Essay', nl: 'Essay' },
    readTime: { en: '5 min read', nl: '5 min lezen' },
    title: {
      en: 'Why Interfaces Overwhelm Us (And What to Do About It)',
      nl: 'Waarom Interfaces Ons Overweldigen (En Wat We Eraan Kunnen Doen)',
    },
    date: '2025-03-12',
    tags: ['UX', 'Cognitive Load', 'Simplicity'],
    intro: {
      en: 'Modern apps are more powerful than ever — and more confusing than ever. The problem isn\'t features; it\'s how we present them.',
      nl: 'Moderne apps zijn krachtiger dan ooit — en verwarrender dan ooit. Het probleem zijn niet de functies; het is hoe we ze presenteren.',
    },
    body: {
      en: [
        'Open any popular productivity app and count the number of interactive elements on the first screen you see. Menus, buttons, icons, toggles, tabs, sidebars, inline actions — the average is somewhere between 40 and 80 distinct clickable elements. And yet we wonder why people feel overwhelmed.',
        'Cognitive load theory, developed by educational psychologist John Sweller in the 1980s, tells us that working memory has a hard limit. We can hold roughly four chunks of information at once before our processing degrades. When an interface exceeds that threshold — which most do — users don\'t just slow down. They make mistakes, they give up, and they tell their friends the product is too complicated.',
        'The cruel irony is that overwhelming interfaces are usually the result of good intentions. Teams add features because users request them. They add tooltips because users get confused. They add wizards and onboarding flows because users don\'t know where to start. Each addition feels justified in isolation. Together, they compound into an experience that no one would have designed on purpose.',
        'The antidote isn\'t minimalism for its own sake — stripping everything out doesn\'t help if the things you removed were actually needed. The antidote is progressive disclosure: revealing complexity only when the user has demonstrated readiness for it. Gmail does this well. The compose window starts with three visible fields and hides the rest behind a small "More options" link. The power is there; it just doesn\'t get in the way until you need it.',
        'Designers can apply progressive disclosure at every scale: at the interaction level (revealing form fields on demand), at the navigation level (collapsing rarely-used sections), and at the information architecture level (separating beginner and advanced modes). The skill is knowing what to hide and when — and that comes from watching real people use your product, not from reading about best practices.',
        'If your team is working on a complex application, I\'d suggest this exercise: sit with someone who has never used your product and do nothing while they try to complete a core task. Don\'t help them. Just watch where they hesitate, where they go wrong, and where they give up. You\'ll come away with more insight into your interface\'s cognitive burden than any heuristic evaluation can give you.',
      ],
      nl: [
        'Open een populaire productiviteitsapp en tel het aantal interactieve elementen op het eerste scherm dat je ziet. Menu\'s, knoppen, iconen, toggles, tabbladen, zijbalken, inline-acties — het gemiddelde ligt ergens tussen de 40 en 80 afzonderlijke klikbare elementen. En toch vragen we ons af waarom mensen zich overweldigd voelen.',
        'De cognitieve belastingstheorie, ontwikkeld door onderwijspsycholoog John Sweller in de jaren tachtig, vertelt ons dat het werkgeheugen een harde limiet heeft. We kunnen ruwweg vier stukjes informatie tegelijk vasthouden voordat onze verwerking achteruitgaat. Wanneer een interface die drempel overschrijdt — wat de meeste doen — vertragen gebruikers niet alleen. Ze maken fouten, ze geven het op en ze vertellen hun vrienden dat het product te ingewikkeld is.',
        'De wrede ironie is dat overweldigende interfaces meestal het resultaat zijn van goede bedoelingen. Teams voegen functies toe omdat gebruikers erom vragen. Ze voegen tooltips toe omdat gebruikers in de war raken. Ze voegen wizards en onboarding-flows toe omdat gebruikers niet weten waar ze moeten beginnen. Elke toevoeging voelt geïsoleerd gerechtvaardigd. Samen worden ze een ervaring die niemand bewust zou hebben ontworpen.',
        'Het tegengif is niet minimalisme op zich — alles verwijderen helpt niet als de dingen die je verwijderde eigenlijk nodig waren. Het tegengif is progressieve openbaring: complexiteit alleen tonen wanneer de gebruiker heeft aangetoond er klaar voor te zijn. Gmail doet dit goed. Het opstelvenster begint met drie zichtbare velden en verbergt de rest achter een kleine "Meer opties" link. De kracht is er; hij staat gewoon niet in de weg totdat je hem nodig hebt.',
        'Designers kunnen progressieve openbaring op elk niveau toepassen: op interactieniveau (formuliervelden op verzoek tonen), op navigatieniveau (zelden gebruikte secties samenvouwen) en op informatiestructuurniveau (beginner- en geavanceerde modi scheiden). De vaardigheid is weten wat je moet verbergen en wanneer — en dat komt van het kijken naar echte mensen die je product gebruiken, niet van het lezen over best practices.',
        'Als je team aan een complexe applicatie werkt, stel ik deze oefening voor: ga zitten met iemand die je product nog nooit heeft gebruikt en doe niets terwijl ze proberen een kerntaak te voltooien. Help ze niet. Kijk gewoon waar ze aarzelen, waar ze fouten maken en waar ze ophouden. Je zult meer inzicht krijgen in de cognitieve belasting van je interface dan enige heuristische evaluatie je kan geven.',
      ],
    },
  },
  {
    id: 'ai-ux-workflows',
    type: { en: 'Guide', nl: 'Gids' },
    readTime: { en: '7 min read', nl: '7 min lezen' },
    title: {
      en: 'How I Use AI in My UX Workflow (Without Losing the Design Thinking)',
      nl: 'Hoe Ik AI Gebruik in Mijn UX-Workflow (Zonder het Ontwerpdenken te Verliezen)',
    },
    date: '2025-02-03',
    tags: ['AI', 'UX', 'Workflow', 'Tools'],
    intro: {
      en: 'AI is everywhere in design tooling right now. Here\'s what actually moves the needle — and what\'s just hype.',
      nl: 'AI zit overal in designtools op dit moment. Dit is wat echt verschil maakt — en wat gewoon hype is.',
    },
    body: {
      en: [
        'About eighteen months ago I started keeping a running log of every time I used an AI tool during a UX project. Not to be evangelical about it, but because I wanted honest data on whether these tools were actually improving my work or just making me feel more productive. The results surprised me.',
        'The biggest gains weren\'t where I expected them. I assumed AI would shine in ideation — brainstorming concepts, generating interface variations, that sort of thing. And it does help there, somewhat. But the really significant time savings came from research synthesis. Turning 12 hours of user interview transcripts into a structured affinity map used to take me most of a day. With a well-designed prompting workflow, it now takes about two hours — and the output is, if anything, more rigorous because the AI doesn\'t get bored or start pattern-matching to what it expects to find.',
        'For writing, AI is most useful when I treat it as a thinking partner rather than a ghostwriter. I\'ll describe the UX problem I\'m solving, explain the constraints, and ask the AI to challenge my assumptions or suggest framings I haven\'t considered. The ideas it generates are rarely usable as-is, but they reliably unlock new directions for my own thinking.',
        'Where I\'ve learned to be cautious is in anything that requires genuine empathy or contextual judgment. AI will generate user personas for you — but those personas will reflect the biases in its training data, not the actual humans who use your product. If you\'re using AI-generated personas to make design decisions, you\'re not doing UX research; you\'re doing high-tech guessing.',
        'The workflow I\'ve settled on looks like this: use AI early in research to help structure and synthesise qualitative data; use it in ideation to pressure-test concepts and generate unexpected angles; use it for writing microcopy at scale; avoid it for anything that requires the lived experience of a real user. Design thinking — the patient, iterative, human-centred kind — doesn\'t get replaced by AI. It gets amplified by it, if you\'re careful.',
        'The designers I worry about are the ones who use AI to skip the messy middle of the design process — the uncomfortable phase where you don\'t know the answer yet and have to sit with the uncertainty. That\'s where the real design thinking happens. AI can help you move faster on either side of that phase, but it can\'t do the phase itself. Not yet.',
      ],
      nl: [
        'Ongeveer achttien maanden geleden begon ik een lopend logboek bij te houden van elke keer dat ik een AI-tool gebruikte tijdens een UX-project. Niet om er evangelisch over te zijn, maar omdat ik eerlijke data wilde over of deze tools mijn werk daadwerkelijk verbeterden of me gewoon productiever lieten voelen. De resultaten verrasten me.',
        'De grootste winsten waren niet waar ik ze verwachtte. Ik veronderstelde dat AI zou uitblinken in ideeontwikkeling — concepten brainstormen, interfacevariaties genereren, dat soort dingen. En het helpt daar enigszins. Maar de echt significante tijdsbesparing kwam van onderzoekssynthese. Het omzetten van 12 uur gebruikersinterviewtranscripten in een gestructureerde affiniteitskaart kostte me vroeger het grootste deel van een dag. Met een goed ontworpen promptingworkflow duurt het nu ongeveer twee uur — en de output is, als het überhaupt iets is, grondiger omdat de AI zich niet verveelt of patronen begint te matchen aan wat het verwacht te vinden.',
        'Voor schrijven is AI het meest nuttig wanneer ik het behandel als een denkpartner in plaats van een ghostwriter. Ik beschrijf het UX-probleem dat ik aan het oplossen ben, leg de beperkingen uit en vraag de AI mijn aannames te betwisten of frames voor te stellen die ik niet heb overwogen. De ideeën die het genereert zijn zelden zo bruikbaar, maar ze ontgrendelen betrouwbaar nieuwe richtingen voor mijn eigen denken.',
        'Waar ik voorzichtig ben geworden is in alles dat echte empathie of contextueel oordeel vereist. AI genereert gebruikerspersona\'s voor je — maar die persona\'s weerspiegelen de vooroordelen in zijn trainingsdata, niet de echte mensen die je product gebruiken. Als je AI-gegenereerde persona\'s gebruikt voor ontwerpbeslissingen, doe je geen UX-onderzoek; je doet high-tech gissen.',
        'De workflow die ik heb vastgesteld ziet er zo uit: gebruik AI vroeg in onderzoek om kwalitatieve data te structureren en te synthetiseren; gebruik het in ideeontwikkeling om concepten te testen en onverwachte invalshoeken te genereren; gebruik het voor het schrijven van microcopy op schaal; vermijd het voor alles dat de leefervaring van een echte gebruiker vereist. Ontwerpdenken — het geduldige, iteratieve, mensgerichte soort — wordt niet vervangen door AI. Het wordt er door versterkt, als je voorzichtig bent.',
        'De designers over wie ik me zorgen maak zijn degenen die AI gebruiken om de rommelige middenfase van het ontwerpproces over te slaan — de ongemakkelijke fase waar je het antwoord nog niet weet en met de onzekerheid moet zitten. Daar vindt het echte ontwerpdenken plaats. AI kan je helpen sneller te bewegen aan beide kanten van die fase, maar het kan de fase zelf niet doen. Nog niet.',
      ],
    },
  },
  {
    id: 'responsive-wrong',
    type: { en: 'Opinion', nl: 'Mening' },
    readTime: { en: '4 min read', nl: '4 min lezen' },
    title: {
      en: 'We\'ve Been Thinking About Responsive Design Wrong',
      nl: 'We Hebben Responsief Design Verkeerd Begrepen',
    },
    date: '2025-01-15',
    tags: ['CSS', 'Responsive', 'Frontend', 'Layout'],
    intro: {
      en: 'Breakpoints are a workaround, not a solution. Here\'s why the industry is finally — slowly — figuring that out.',
      nl: 'Breekpunten zijn een noodoplossing, geen oplossing. Dit is waarom de industrie dat eindelijk — langzaam — begint te begrijpen.',
    },
    body: {
      en: [
        'Responsive web design turned fifteen this year. Ethan Marcotte\'s original article gave us a framework that worked brilliantly for its moment: flexible grids, flexible images, and media queries. In 2010, when most websites had a desktop version and maybe a separate mobile site, this was genuinely revolutionary.',
        'Fifteen years later, we\'re still largely building responsive layouts the same way. We define breakpoints — usually at arbitrary pixel values borrowed from popular device dimensions — and we write media queries that shift the layout at each one. It works. It\'s also increasingly the wrong way to think about it.',
        'The problem with breakpoint-first thinking is that it ties your layout to specific viewport sizes rather than to the content itself. A card component that looks great at 1280px and 375px might look terrible at 820px — not because of any flaw in the component, but because 820px just happened to fall between your breakpoints. You end up writing more and more edge-case queries to patch the gaps, and your CSS becomes a maintenance nightmare.',
        'The alternative is what some call intrinsic web design: letting content determine layout. CSS Grid\'s auto-fill and minmax() let you write a single rule that creates a column layout adapting gracefully from two columns to eight without a single media query. Clamp() gives you typography that scales smoothly across the entire viewport range. Container queries let components respond to their own available space, not the viewport — so a sidebar card and a full-width card can be the same component without any hack.',
        'These aren\'t new ideas — Grid has been widely supported since 2017, clamp() since 2020, and container queries since 2023. But adoption lags, partly because these features require a different mental model and partly because they\'re not always well-taught. Many developers learned responsive design with Bootstrap, then adapted to utility-class frameworks that still encode the breakpoint-first model. Unlearning that pattern takes deliberate effort.',
        'I\'m not arguing that media queries are dead — there are still cases where you genuinely need to change layout based on viewport size. But for most layout problems, if you find yourself reaching for a breakpoint, it\'s worth asking whether the layout you\'ve designed is actually intrinsic, or whether you\'re compensating for a rigid structure with patches. More often than not, a well-designed grid or a well-sized component eliminates the need for the query entirely.',
      ],
      nl: [
        'Responsief webdesign werd dit jaar vijftien jaar oud. Ethan Marcotte\'s originele artikel gaf ons een kader dat briljant werkte voor zijn tijd: flexibele grids, flexibele afbeeldingen en mediaquery\'s. In 2010, toen de meeste websites een desktopversie hadden en misschien een aparte mobiele site, was dit werkelijk revolutionair.',
        'Vijftien jaar later bouwen we nog steeds grotendeels responsieve layouts op dezelfde manier. We definiëren breekpunten — meestal op willekeurige pixelwaarden ontleend aan populaire apparaatafmetingen — en we schrijven mediaquery\'s die de layout bij elk punt verschuiven. Het werkt. Het is ook steeds meer de verkeerde manier om erover na te denken.',
        'Het probleem met breekpunt-eerste denken is dat het je layout koppelt aan specifieke viewportgroottes in plaats van aan de inhoud zelf. Een kaartcomponent dat er geweldig uitziet bij 1280px en 375px kan er verschrikkelijk uitzien bij 820px — niet vanwege enige fout in het component, maar omdat 820px toevallig tussen je breekpunten viel. Je eindigt met het schrijven van meer en meer randgevallen queries om de gaten te dichten, en je CSS wordt een onderhoudsnachtmerrie.',
        'Het alternatief is wat sommigen intrinsiek webdesign noemen: inhoud de layout laten bepalen. CSS Grid\'s auto-fill en minmax() laten je een enkele regel schrijven die een kolomlayout maakt die soepel aanpast van twee kolommen naar acht zonder een enkele mediaquery. Clamp() geeft je typografie die soepel schaalt over het hele viewportbereik. Container queries laten componenten reageren op hun eigen beschikbare ruimte, niet op de viewport — zodat een sidebarkaart en een breedte-kaart hetzelfde component kunnen zijn zonder enige hack.',
        'Dit zijn geen nieuwe ideeën — Grid wordt breed ondersteund sinds 2017, clamp() sinds 2020 en container queries sinds 2023. Maar adoptie loopt achter, deels omdat deze functies een ander mentaal model vereisen en deels omdat ze niet altijd goed worden onderwezen. Veel developers leerden responsief design met Bootstrap, en pasten zich vervolgens aan aan utility-class frameworks die nog steeds het breekpunt-eerste model coderen. Dat patroon afleren vereist bewuste inspanning.',
        'Ik beweer niet dat mediaquery\'s dood zijn — er zijn nog steeds gevallen waar je layout echt moet veranderen op basis van viewportgrootte. Maar voor de meeste layoutproblemen, als je merkt dat je naar een breekpunt grijpt, is het de moeite waard te vragen of de layout die je hebt ontworpen werkelijk intrinsiek is, of dat je compenseert voor een rigide structuur met patches. Vaker dan niet elimineert een goed ontworpen grid of een goed opgemaak component de noodzaak voor de query volledig.',
      ],
    },
  },
  {
    id: 'frontend-non-devs',
    type: { en: 'Guide', nl: 'Gids' },
    readTime: { en: '6 min read', nl: '6 min lezen' },
    title: {
      en: 'Teaching Frontend to Non-Developers: What Actually Works',
      nl: 'Frontend Onderwijzen aan Niet-Developers: Wat Echt Werkt',
    },
    date: '2024-11-28',
    tags: ['Education', 'Frontend', 'Teaching', 'UX'],
    intro: {
      en: 'After teaching dozens of designers and researchers to write HTML and CSS, I\'ve learned what separates the approaches that click from the ones that don\'t.',
      nl: 'Na tientallen designers en onderzoekers te hebben geleerd HTML en CSS te schrijven, heb ik geleerd wat de aanpakken die werken onderscheidt van de aanpakken die dat niet doen.',
    },
    body: {
      en: [
        'The most common mistake in teaching frontend to non-developers is starting with syntax. You open a code editor, show someone a div tag, and immediately their eyes glaze over. The abstraction is too far from anything they care about. You\'ve lost them before you\'ve started.',
        'What works instead is starting with intent. What is this person trying to make? A personal website? An interactive prototype? A portfolio? Start there, and let the code emerge from the goal. When someone writes their first CSS rule to change the color of their name on a page they care about, something clicks that no amount of abstract instruction can achieve.',
        'The second thing that makes a huge difference is the feedback loop. Professional developers have learned to tolerate a long delay between writing code and seeing its effect — they\'ve learned to hold a mental model of how the browser will interpret what they write. Beginners don\'t have that model yet. They need to see the result immediately. This is why I always teach with a live-reloading setup from day one. The browser updates as you type, so you learn causality — this code causes that visual change — without having to memorise it first.',
        'I also spend a lot of time teaching how to read error messages. This sounds mundane, but it\'s transformative. The single biggest barrier to a beginner\'s progress isn\'t writing code — it\'s being stuck after writing code that doesn\'t work and not knowing how to diagnose why. When someone learns that a red wavy underline in VS Code means "syntax error" and an open DevTools panel can tell them which property isn\'t working, they become dramatically more self-sufficient.',
        'One more thing I\'ve learned: non-developers often have a stronger intuition for the end result than the developers teaching them. A designer learning CSS already knows exactly how they want something to look. The code is just the tool to get there. Framing learning as "translating your visual intent into a language the browser understands" — rather than "learning to program" — reduces anxiety enormously and speeds up progress.',
        'The goal of these sessions isn\'t to turn designers into developers. It\'s to give them enough fluency that they can prototype their own ideas, have more informed conversations with their engineering teammates, and appreciate the constraints and affordances of the medium they\'re designing for. That limited goal is achievable in a single day if you structure the teaching well. The key is to never let the syntax get in front of the meaning.',
      ],
      nl: [
        'De meest voorkomende fout bij het onderwijzen van frontend aan niet-developers is beginnen met syntaxis. Je opent een code-editor, toont iemand een div-tag en onmiddellijk glazen hun ogen over. De abstractie is te ver verwijderd van alles waar ze om geven. Je bent hen kwijt voordat je begonnen bent.',
        'Wat in plaats daarvan werkt is beginnen met intentie. Wat probeert deze persoon te maken? Een persoonlijke website? Een interactief prototype? Een portfolio? Begin daar, en laat de code voortkomen uit het doel. Wanneer iemand zijn eerste CSS-regel schrijft om de kleur van zijn naam te veranderen op een pagina die hem interesseert, klikt er iets wat geen hoeveelheid abstracte instructie kan bereiken.',
        'Het tweede dat een enorm verschil maakt is de feedbacklus. Professionele developers hebben geleerd een lange vertraging te tolereren tussen het schrijven van code en het zien van het effect — ze hebben geleerd een mentaal model bij te houden van hoe de browser zal interpreteren wat ze schrijven. Beginners hebben dat model nog niet. Ze moeten het resultaat onmiddellijk zien. Daarom onderricht ik altijd met een live-reloadende setup vanaf dag één. De browser werkt bij terwijl je typt, zodat je causaliteit leert — deze code veroorzaakt die visuele verandering — zonder het eerst te hoeven memoriseren.',
        'Ik besteed ook veel tijd aan het leren lezen van foutmeldingen. Dit klinkt alledaags, maar het is transformatief. De grootste barrière voor de vooruitgang van een beginner is niet het schrijven van code — het is vastlopen na het schrijven van code die niet werkt en niet weten hoe te diagnosticeren waarom. Wanneer iemand leert dat een rode kronkellijn in VS Code "syntaxisfout" betekent en een open DevTools-paneel hem kan vertellen welke eigenschap niet werkt, wordt hij dramatisch zelfredzamer.',
        'Nog iets wat ik heb geleerd: niet-developers hebben vaak een sterkere intuïtie voor het eindresultaat dan de developers die hen onderwijzen. Een designer die CSS leert weet al precies hoe ze iets er uit wil laten zien. De code is slechts het gereedschap om er te komen. Het leren framen als "je visuele intentie vertalen naar een taal die de browser begrijpt" — in plaats van "leren programmeren" — vermindert angst enorm en versnelt de vooruitgang.',
        'Het doel van deze sessies is niet om designers in developers te veranderen. Het is om hen genoeg vloeiendheid te geven dat ze hun eigen ideeën kunnen prototypen, meer geïnformeerde gesprekken kunnen voeren met hun engineeringteamgenoten en de beperkingen en mogelijkheden van het medium waarvoor ze ontwerpen kunnen waarderen. Dat beperkte doel is haalbaar in een enkele dag als je het onderwijs goed structureert. De sleutel is om nooit de syntaxis voor de betekenis te laten komen.',
      ],
    },
  },
];

export default insights;
