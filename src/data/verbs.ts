export type Tense = 'presens' | 'preteritum' | 'perfekt' | 'futurum' | 'imperativ';

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
  {
    infinitive: "att vara",
    translation: "to be",
    presens: "är",
    preteritum: "var",
    perfekt: "har varit",
    futurum: "ska vara",
    imperativ: "var",
  },
  {
    infinitive: "att ha",
    translation: "to have",
    presens: "har",
    preteritum: "hade",
    perfekt: "har haft",
    futurum: "ska ha",
    imperativ: "ha",
  },
  {
    infinitive: "att gå",
    translation: "to go/walk",
    presens: "går",
    preteritum: "gick",
    perfekt: "har gått",
    futurum: "ska gå",
    imperativ: "gå",
  },
  {
    infinitive: "att äta",
    translation: "to eat",
    presens: "äter",
    preteritum: "åt",
    perfekt: "har ätit",
    futurum: "ska äta",
    imperativ: "ät",
  },
  {
    infinitive: "att dricka",
    translation: "to drink",
    presens: "dricker",
    preteritum: "drack",
    perfekt: "har druckit",
    futurum: "ska dricka",
    imperativ: "drick",
  },
  {
    infinitive: "att sova",
    translation: "to sleep",
    presens: "sover",
    preteritum: "sov",
    perfekt: "har sovit",
    futurum: "ska sova",
    imperativ: "sov",
  },
  {
    infinitive: "att tala",
    translation: "to speak",
    presens: "talar",
    preteritum: "talade",
    perfekt: "har talat",
    futurum: "ska tala",
    imperativ: "tala",
  },
  {
    infinitive: "att komma",
    translation: "to come",
    presens: "kommer",
    preteritum: "kom",
    perfekt: "har kommit",
    futurum: "ska komma",
    imperativ: "kom",
  },
  {
    infinitive: "att se",
    translation: "to see",
    presens: "ser",
    preteritum: "såg",
    perfekt: "har sett",
    futurum: "ska se",
    imperativ: "se",
  },
  {
    infinitive: "att höra",
    translation: "to hear",
    presens: "hör",
    preteritum: "hörde",
    perfekt: "har hört",
    futurum: "ska höra",
    imperativ: "hör",
  },
  {
    infinitive: "att skriva",
    translation: "to write",
    presens: "skriver",
    preteritum: "skrev",
    perfekt: "har skrivit",
    futurum: "ska skriva",
    imperativ: "skriv",
  },
  {
    infinitive: "att läsa",
    translation: "to read",
    presens: "läser",
    preteritum: "läste",
    perfekt: "har läst",
    futurum: "ska läsa",
    imperativ: "läs",
  },
  {
    infinitive: "att köpa",
    translation: "to buy",
    presens: "köper",
    preteritum: "köpte",
    perfekt: "har köpt",
    futurum: "ska köpa",
    imperativ: "köp",
  },
  {
    infinitive: "att sälja",
    translation: "to sell",
    presens: "säljer",
    preteritum: "sålde",
    perfekt: "har sålt",
    futurum: "ska sälja",
    imperativ: "sälj",
  },
  {
    infinitive: "att göra",
    translation: "to do/make",
    presens: "gör",
    preteritum: "gjorde",
    perfekt: "har gjort",
    futurum: "ska göra",
    imperativ: "gör",
  },
  {
    infinitive: "att veta",
    translation: "to know (fact)",
    presens: "vet",
    preteritum: "visste",
    perfekt: "har vetat",
    futurum: "ska veta",
    imperativ: "vet",
  },
  {
    infinitive: "att tänka",
    translation: "to think",
    presens: "tänker",
    preteritum: "tänkte",
    perfekt: "har tänkt",
    futurum: "ska tänka",
    imperativ: "tänk",
  },
  {
    infinitive: "att arbeta",
    translation: "to work",
    presens: "arbetar",
    preteritum: "arbetade",
    perfekt: "har arbetat",
    futurum: "ska arbeta",
    imperativ: "arbeta",
  },
  {
    infinitive: "att leva",
    translation: "to live",
    presens: "lever",
    preteritum: "levde",
    perfekt: "har levt",
    futurum: "ska leva",
    imperativ: "lev",
  },
  {
    infinitive: "att stanna",
    translation: "to stay",
    presens: "stannar",
    preteritum: "stannade",
    perfekt: "har stannat",
    futurum: "ska stanna",
    imperativ: "stanna",
  },
  {
    infinitive: "att springa",
    translation: "to run",
    presens: "springer",
    preteritum: "sprang",
    perfekt: "har sprungit",
    futurum: "ska springa",
    imperativ: "spring",
  },
  {
    infinitive: "att simma",
    translation: "to swim",
    presens: "simmar",
    preteritum: "simmade",
    perfekt: "har simmat",
    futurum: "ska simma",
    imperativ: "simma",
  },
  {
    infinitive: "att cykla",
    translation: "to cycle",
    presens: "cyklar",
    preteritum: "cyklade",
    perfekt: "har cyklat",
    futurum: "ska cykla",
    imperativ: "cykla",
  },
  {
    infinitive: "att älska",
    translation: "to love",
    presens: "älskar",
    preteritum: "älskade",
    perfekt: "har älskat",
    futurum: "ska älska",
    imperativ: "älska",
  },
  {
    infinitive: "att hata",
    translation: "to hate",
    presens: "hatar",
    preteritum: "hatade",
    perfekt: "har hatat",
    futurum: "ska hata",
    imperativ: "hata",
  },
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
};

export function getRandomVerb(): VerbConjugation {
  return verbs[Math.floor(Math.random() * verbs.length)];
}

export function getRandomVerbExcluding(excludeInfinitive: string): VerbConjugation {
  const available = verbs.filter(v => v.infinitive !== excludeInfinitive);
  return available[Math.floor(Math.random() * available.length)];
}
