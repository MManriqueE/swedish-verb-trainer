export type Tense = 'presens' | 'preteritum' | 'perfekt' | 'futurum' | 'imperativ' | 'alla';
export type PracticeTense = Exclude<Tense, 'alla'>;

export const practiceTenses: PracticeTense[] = ['presens', 'preteritum', 'perfekt', 'futurum', 'imperativ'];

export function getRandomPracticeTense(): PracticeTense {
  return practiceTenses[Math.floor(Math.random() * practiceTenses.length)];
}

export interface VerbConjugation {
  infinitive: string;
  translation: string;
  presens: string;
  preteritum: string;
  perfekt: string;
  futurum: string;
  imperativ: string;
}

// Common Swedish verbs with their conjugations
export const verbs: VerbConjugation[] = [
  // Essential verbs
  { infinitive: "att vara", translation: "to be", presens: "är", preteritum: "var", perfekt: "har varit", futurum: "ska vara", imperativ: "var" },
  { infinitive: "att ha", translation: "to have", presens: "har", preteritum: "hade", perfekt: "har haft", futurum: "ska ha", imperativ: "ha" },
  { infinitive: "att göra", translation: "to do/make", presens: "gör", preteritum: "gjorde", perfekt: "har gjort", futurum: "ska göra", imperativ: "gör" },
  { infinitive: "att kunna", translation: "to be able to", presens: "kan", preteritum: "kunde", perfekt: "har kunnat", futurum: "ska kunna", imperativ: "-" },
  { infinitive: "att vilja", translation: "to want", presens: "vill", preteritum: "ville", perfekt: "har velat", futurum: "ska vilja", imperativ: "-" },
  { infinitive: "att få", translation: "to get/may", presens: "får", preteritum: "fick", perfekt: "har fått", futurum: "ska få", imperativ: "få" },
  { infinitive: "att ska", translation: "shall/will", presens: "ska", preteritum: "skulle", perfekt: "har skolat", futurum: "ska ska", imperativ: "-" },
  { infinitive: "att måste", translation: "must/have to", presens: "måste", preteritum: "måste", perfekt: "har måst", futurum: "ska måste", imperativ: "-" },
  { infinitive: "att bli", translation: "to become", presens: "blir", preteritum: "blev", perfekt: "har blivit", futurum: "ska bli", imperativ: "bli" },
  { infinitive: "att veta", translation: "to know (fact)", presens: "vet", preteritum: "visste", perfekt: "har vetat", futurum: "ska veta", imperativ: "vet" },

  // Movement verbs
  { infinitive: "att gå", translation: "to go/walk", presens: "går", preteritum: "gick", perfekt: "har gått", futurum: "ska gå", imperativ: "gå" },
  { infinitive: "att komma", translation: "to come", presens: "kommer", preteritum: "kom", perfekt: "har kommit", futurum: "ska komma", imperativ: "kom" },
  { infinitive: "att springa", translation: "to run", presens: "springer", preteritum: "sprang", perfekt: "har sprungit", futurum: "ska springa", imperativ: "spring" },
  { infinitive: "att simma", translation: "to swim", presens: "simmar", preteritum: "simmade", perfekt: "har simmat", futurum: "ska simma", imperativ: "simma" },
  { infinitive: "att cykla", translation: "to cycle", presens: "cyklar", preteritum: "cyklade", perfekt: "har cyklat", futurum: "ska cykla", imperativ: "cykla" },
  { infinitive: "att åka", translation: "to travel/go", presens: "åker", preteritum: "åkte", perfekt: "har åkt", futurum: "ska åka", imperativ: "åk" },
  { infinitive: "att flyga", translation: "to fly", presens: "flyger", preteritum: "flög", perfekt: "har flugit", futurum: "ska flyga", imperativ: "flyg" },
  { infinitive: "att falla", translation: "to fall", presens: "faller", preteritum: "föll", perfekt: "har fallit", futurum: "ska falla", imperativ: "fall" },
  { infinitive: "att stanna", translation: "to stay", presens: "stannar", preteritum: "stannade", perfekt: "har stannat", futurum: "ska stanna", imperativ: "stanna" },
  { infinitive: "att resa", translation: "to travel", presens: "reser", preteritum: "reste", perfekt: "har rest", futurum: "ska resa", imperativ: "res" },

  // Eating/drinking
  { infinitive: "att äta", translation: "to eat", presens: "äter", preteritum: "åt", perfekt: "har ätit", futurum: "ska äta", imperativ: "ät" },
  { infinitive: "att dricka", translation: "to drink", presens: "dricker", preteritum: "drack", perfekt: "har druckit", futurum: "ska dricka", imperativ: "drick" },
  { infinitive: "att laga", translation: "to cook/fix", presens: "lagar", preteritum: "lagade", perfekt: "har lagat", futurum: "ska laga", imperativ: "laga" },
  { infinitive: "att baka", translation: "to bake", presens: "bakar", preteritum: "bakade", perfekt: "har bakat", futurum: "ska baka", imperativ: "baka" },

  // Communication
  { infinitive: "att tala", translation: "to speak", presens: "talar", preteritum: "talade", perfekt: "har talat", futurum: "ska tala", imperativ: "tala" },
  { infinitive: "att säga", translation: "to say", presens: "säger", preteritum: "sa/sade", perfekt: "har sagt", futurum: "ska säga", imperativ: "säg" },
  { infinitive: "att prata", translation: "to talk", presens: "pratar", preteritum: "pratade", perfekt: "har pratat", futurum: "ska prata", imperativ: "prata" },
  { infinitive: "att fråga", translation: "to ask", presens: "frågar", preteritum: "frågade", perfekt: "har frågat", futurum: "ska fråga", imperativ: "fråga" },
  { infinitive: "att svara", translation: "to answer", presens: "svarar", preteritum: "svarade", perfekt: "har svarat", futurum: "ska svara", imperativ: "svara" },
  { infinitive: "att ringa", translation: "to call/ring", presens: "ringer", preteritum: "ringde", perfekt: "har ringt", futurum: "ska ringa", imperativ: "ring" },
  { infinitive: "att berätta", translation: "to tell", presens: "berättar", preteritum: "berättade", perfekt: "har berättat", futurum: "ska berätta", imperativ: "berätta" },

  // Senses
  { infinitive: "att se", translation: "to see", presens: "ser", preteritum: "såg", perfekt: "har sett", futurum: "ska se", imperativ: "se" },
  { infinitive: "att höra", translation: "to hear", presens: "hör", preteritum: "hörde", perfekt: "har hört", futurum: "ska höra", imperativ: "hör" },
  { infinitive: "att känna", translation: "to feel/know", presens: "känner", preteritum: "kände", perfekt: "har känt", futurum: "ska känna", imperativ: "känn" },
  { infinitive: "att lukta", translation: "to smell", presens: "luktar", preteritum: "luktade", perfekt: "har luktat", futurum: "ska lukta", imperativ: "lukta" },
  { infinitive: "att smaka", translation: "to taste", presens: "smakar", preteritum: "smakade", perfekt: "har smakat", futurum: "ska smaka", imperativ: "smaka" },
  { infinitive: "att titta", translation: "to look", presens: "tittar", preteritum: "tittade", perfekt: "har tittat", futurum: "ska titta", imperativ: "titta" },
  { infinitive: "att lyssna", translation: "to listen", presens: "lyssnar", preteritum: "lyssnade", perfekt: "har lyssnat", futurum: "ska lyssna", imperativ: "lyssna" },

  // Reading/writing
  { infinitive: "att skriva", translation: "to write", presens: "skriver", preteritum: "skrev", perfekt: "har skrivit", futurum: "ska skriva", imperativ: "skriv" },
  { infinitive: "att läsa", translation: "to read", presens: "läser", preteritum: "läste", perfekt: "har läst", futurum: "ska läsa", imperativ: "läs" },
  { infinitive: "att lära", translation: "to teach/learn", presens: "lär", preteritum: "lärde", perfekt: "har lärt", futurum: "ska lära", imperativ: "lär" },
  { infinitive: "att studera", translation: "to study", presens: "studerar", preteritum: "studerade", perfekt: "har studerat", futurum: "ska studera", imperativ: "studera" },
  { infinitive: "att förstå", translation: "to understand", presens: "förstår", preteritum: "förstod", perfekt: "har förstått", futurum: "ska förstå", imperativ: "förstå" },

  // Work/activities
  { infinitive: "att arbeta", translation: "to work", presens: "arbetar", preteritum: "arbetade", perfekt: "har arbetat", futurum: "ska arbeta", imperativ: "arbeta" },
  { infinitive: "att jobba", translation: "to work", presens: "jobbar", preteritum: "jobbade", perfekt: "har jobbat", futurum: "ska jobba", imperativ: "jobba" },
  { infinitive: "att spela", translation: "to play", presens: "spelar", preteritum: "spelade", perfekt: "har spelat", futurum: "ska spela", imperativ: "spela" },
  { infinitive: "att sjunga", translation: "to sing", presens: "sjunger", preteritum: "sjöng", perfekt: "har sjungit", futurum: "ska sjunga", imperativ: "sjung" },
  { infinitive: "att dansa", translation: "to dance", presens: "dansar", preteritum: "dansade", perfekt: "har dansat", futurum: "ska dansa", imperativ: "dansa" },
  { infinitive: "att måla", translation: "to paint", presens: "målar", preteritum: "målade", perfekt: "har målat", futurum: "ska måla", imperativ: "måla" },
  { infinitive: "att bygga", translation: "to build", presens: "bygger", preteritum: "byggde", perfekt: "har byggt", futurum: "ska bygga", imperativ: "bygg" },

  // Daily life
  { infinitive: "att sova", translation: "to sleep", presens: "sover", preteritum: "sov", perfekt: "har sovit", futurum: "ska sova", imperativ: "sov" },
  { infinitive: "att vakna", translation: "to wake up", presens: "vaknar", preteritum: "vaknade", perfekt: "har vaknat", futurum: "ska vakna", imperativ: "vakna" },
  { infinitive: "att duscha", translation: "to shower", presens: "duschar", preteritum: "duschade", perfekt: "har duschat", futurum: "ska duscha", imperativ: "duscha" },
  { infinitive: "att klä", translation: "to dress", presens: "klär", preteritum: "klädde", perfekt: "har klätt", futurum: "ska klä", imperativ: "klä" },
  { infinitive: "att städa", translation: "to clean", presens: "städar", preteritum: "städade", perfekt: "har städat", futurum: "ska städa", imperativ: "städa" },
  { infinitive: "att tvätta", translation: "to wash", presens: "tvättar", preteritum: "tvättade", perfekt: "har tvättat", futurum: "ska tvätta", imperativ: "tvätta" },
  { infinitive: "att handla", translation: "to shop", presens: "handlar", preteritum: "handlade", perfekt: "har handlat", futurum: "ska handla", imperativ: "handla" },

  // Shopping/money
  { infinitive: "att köpa", translation: "to buy", presens: "köper", preteritum: "köpte", perfekt: "har köpt", futurum: "ska köpa", imperativ: "köp" },
  { infinitive: "att sälja", translation: "to sell", presens: "säljer", preteritum: "sålde", perfekt: "har sålt", futurum: "ska sälja", imperativ: "sälj" },
  { infinitive: "att betala", translation: "to pay", presens: "betalar", preteritum: "betalade", perfekt: "har betalat", futurum: "ska betala", imperativ: "betala" },
  { infinitive: "att kosta", translation: "to cost", presens: "kostar", preteritum: "kostade", perfekt: "har kostat", futurum: "ska kosta", imperativ: "-" },

  // Emotions
  { infinitive: "att älska", translation: "to love", presens: "älskar", preteritum: "älskade", perfekt: "har älskat", futurum: "ska älska", imperativ: "älska" },
  { infinitive: "att hata", translation: "to hate", presens: "hatar", preteritum: "hatade", perfekt: "har hatat", futurum: "ska hata", imperativ: "hata" },
  { infinitive: "att tycka", translation: "to think/like", presens: "tycker", preteritum: "tyckte", perfekt: "har tyckt", futurum: "ska tycka", imperativ: "tyck" },
  { infinitive: "att tro", translation: "to believe", presens: "tror", preteritum: "trodde", perfekt: "har trott", futurum: "ska tro", imperativ: "tro" },
  { infinitive: "att hoppas", translation: "to hope", presens: "hoppas", preteritum: "hoppades", perfekt: "har hoppats", futurum: "ska hoppas", imperativ: "hoppas" },
  { infinitive: "att oroa", translation: "to worry", presens: "oroar", preteritum: "oroade", perfekt: "har oroat", futurum: "ska oroa", imperativ: "oroa" },
  { infinitive: "att skratta", translation: "to laugh", presens: "skrattar", preteritum: "skrattade", perfekt: "har skrattat", futurum: "ska skratta", imperativ: "skratta" },
  { infinitive: "att gråta", translation: "to cry", presens: "gråter", preteritum: "grät", perfekt: "har gråtit", futurum: "ska gråta", imperativ: "gråt" },
  { infinitive: "att le", translation: "to smile", presens: "ler", preteritum: "log", perfekt: "har lett", futurum: "ska le", imperativ: "le" },

  // Thinking
  { infinitive: "att tänka", translation: "to think", presens: "tänker", preteritum: "tänkte", perfekt: "har tänkt", futurum: "ska tänka", imperativ: "tänk" },
  { infinitive: "att minnas", translation: "to remember", presens: "minns", preteritum: "mindes", perfekt: "har mints", futurum: "ska minnas", imperativ: "minns" },
  { infinitive: "att glömma", translation: "to forget", presens: "glömmer", preteritum: "glömde", perfekt: "har glömt", futurum: "ska glömma", imperativ: "glöm" },
  { infinitive: "att bestämma", translation: "to decide", presens: "bestämmer", preteritum: "bestämde", perfekt: "har bestämt", futurum: "ska bestämma", imperativ: "bestäm" },
  { infinitive: "att välja", translation: "to choose", presens: "väljer", preteritum: "valde", perfekt: "har valt", futurum: "ska välja", imperativ: "välj" },

  // Physical actions
  { infinitive: "att ta", translation: "to take", presens: "tar", preteritum: "tog", perfekt: "har tagit", futurum: "ska ta", imperativ: "ta" },
  { infinitive: "att ge", translation: "to give", presens: "ger", preteritum: "gav", perfekt: "har gett/givit", futurum: "ska ge", imperativ: "ge" },
  { infinitive: "att lägga", translation: "to put/lay", presens: "lägger", preteritum: "la/lade", perfekt: "har lagt", futurum: "ska lägga", imperativ: "lägg" },
  { infinitive: "att sätta", translation: "to set/put", presens: "sätter", preteritum: "satte", perfekt: "har satt", futurum: "ska sätta", imperativ: "sätt" },
  { infinitive: "att stå", translation: "to stand", presens: "står", preteritum: "stod", perfekt: "har stått", futurum: "ska stå", imperativ: "stå" },
  { infinitive: "att sitta", translation: "to sit", presens: "sitter", preteritum: "satt", perfekt: "har suttit", futurum: "ska sitta", imperativ: "sitt" },
  { infinitive: "att ligga", translation: "to lie", presens: "ligger", preteritum: "låg", perfekt: "har legat", futurum: "ska ligga", imperativ: "ligg" },
  { infinitive: "att bära", translation: "to carry", presens: "bär", preteritum: "bar", perfekt: "har burit", futurum: "ska bära", imperativ: "bär" },
  { infinitive: "att dra", translation: "to pull", presens: "drar", preteritum: "drog", perfekt: "har dragit", futurum: "ska dra", imperativ: "dra" },
  { infinitive: "att slå", translation: "to hit", presens: "slår", preteritum: "slog", perfekt: "har slagit", futurum: "ska slå", imperativ: "slå" },
  { infinitive: "att hålla", translation: "to hold", presens: "håller", preteritum: "höll", perfekt: "har hållit", futurum: "ska hålla", imperativ: "håll" },
  { infinitive: "att öppna", translation: "to open", presens: "öppnar", preteritum: "öppnade", perfekt: "har öppnat", futurum: "ska öppna", imperativ: "öppna" },
  { infinitive: "att stänga", translation: "to close", presens: "stänger", preteritum: "stängde", perfekt: "har stängt", futurum: "ska stänga", imperativ: "stäng" },

  // Social
  { infinitive: "att möta", translation: "to meet", presens: "möter", preteritum: "mötte", perfekt: "har mött", futurum: "ska möta", imperativ: "möt" },
  { infinitive: "att träffa", translation: "to meet", presens: "träffar", preteritum: "träffade", perfekt: "har träffat", futurum: "ska träffa", imperativ: "träffa" },
  { infinitive: "att hjälpa", translation: "to help", presens: "hjälper", preteritum: "hjälpte", perfekt: "har hjälpt", futurum: "ska hjälpa", imperativ: "hjälp" },
  { infinitive: "att vänta", translation: "to wait", presens: "väntar", preteritum: "väntade", perfekt: "har väntat", futurum: "ska vänta", imperativ: "vänta" },
  { infinitive: "att börja", translation: "to begin", presens: "börjar", preteritum: "började", perfekt: "har börjat", futurum: "ska börja", imperativ: "börja" },
  { infinitive: "att sluta", translation: "to stop/end", presens: "slutar", preteritum: "slutade", perfekt: "har slutat", futurum: "ska sluta", imperativ: "sluta" },
  { infinitive: "att hälsa", translation: "to greet", presens: "hälsar", preteritum: "hälsade", perfekt: "har hälsat", futurum: "ska hälsa", imperativ: "hälsa" },
  { infinitive: "att tacka", translation: "to thank", presens: "tackar", preteritum: "tackade", perfekt: "har tackat", futurum: "ska tacka", imperativ: "tacka" },

  // Misc common verbs
  { infinitive: "att leva", translation: "to live", presens: "lever", preteritum: "levde", perfekt: "har levt", futurum: "ska leva", imperativ: "lev" },
  { infinitive: "att bo", translation: "to live/reside", presens: "bor", preteritum: "bodde", perfekt: "har bott", futurum: "ska bo", imperativ: "bo" },
  { infinitive: "att dö", translation: "to die", presens: "dör", preteritum: "dog", perfekt: "har dött", futurum: "ska dö", imperativ: "-" },
  { infinitive: "att finnas", translation: "to exist", presens: "finns", preteritum: "fanns", perfekt: "har funnits", futurum: "ska finnas", imperativ: "-" },
  { infinitive: "att behöva", translation: "to need", presens: "behöver", preteritum: "behövde", perfekt: "har behövt", futurum: "ska behöva", imperativ: "behöv" },
  { infinitive: "att använda", translation: "to use", presens: "använder", preteritum: "använde", perfekt: "har använt", futurum: "ska använda", imperativ: "använd" },
  { infinitive: "att försöka", translation: "to try", presens: "försöker", preteritum: "försökte", perfekt: "har försökt", futurum: "ska försöka", imperativ: "försök" },
  { infinitive: "att hitta", translation: "to find", presens: "hittar", preteritum: "hittade", perfekt: "har hittat", futurum: "ska hitta", imperativ: "hitta" },
  { infinitive: "att söka", translation: "to search", presens: "söker", preteritum: "sökte", perfekt: "har sökt", futurum: "ska söka", imperativ: "sök" },
  { infinitive: "att visa", translation: "to show", presens: "visar", preteritum: "visade", perfekt: "har visat", futurum: "ska visa", imperativ: "visa" },
  { infinitive: "att hända", translation: "to happen", presens: "händer", preteritum: "hände", perfekt: "har hänt", futurum: "ska hända", imperativ: "-" },
  { infinitive: "att betyda", translation: "to mean", presens: "betyder", preteritum: "betydde", perfekt: "har betytt", futurum: "ska betyda", imperativ: "-" },
  { infinitive: "att låta", translation: "to sound/let", presens: "låter", preteritum: "lät", perfekt: "har låtit", futurum: "ska låta", imperativ: "låt" },
  { infinitive: "att verka", translation: "to seem", presens: "verkar", preteritum: "verkade", perfekt: "har verkat", futurum: "ska verka", imperativ: "-" },
];

export const tenseInfo: Record<Tense, { name: string; description: string; emoji: string }> = {
  presens: {
    name: "Presens",
    description: "Present tense",
    emoji: "🎯",
  },
  preteritum: {
    name: "Preteritum", 
    description: "Simple past",
    emoji: "⏮️",
  },
  perfekt: {
    name: "Perfekt",
    description: "Perfect tense",
    emoji: "✅",
  },
  futurum: {
    name: "Futurum",
    description: "Future tense", 
    emoji: "🚀",
  },
  imperativ: {
    name: "Imperativ",
    description: "Imperative",
    emoji: "👆",
  },
  alla: {
    name: "Alla",
    description: "Mixed practice",
    emoji: "🔀",
  },
};

export function getRandomVerb(): VerbConjugation {
  return verbs[Math.floor(Math.random() * verbs.length)];
}

export function getRandomVerbExcluding(excludeInfinitive: string): VerbConjugation {
  const available = verbs.filter(v => v.infinitive !== excludeInfinitive);
  return available[Math.floor(Math.random() * available.length)];
}
