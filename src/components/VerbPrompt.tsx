import { VerbConjugation, Tense, tenseInfo } from '@/data/verbs';

interface VerbPromptProps {
  verb: VerbConjugation;
  tense: Tense;
}

export function VerbPrompt({ verb, tense }: VerbPromptProps) {
  const info = tenseInfo[tense];
  
  return (
    <div className="text-center space-y-4 animate-bounce-in">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-semibold">
        <span>{info.emoji}</span>
        <span>Conjugate in {info.name}</span>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          {verb.infinitive}
        </h2>
        <p className="text-lg text-muted-foreground">
          ({verb.translation})
        </p>
      </div>
    </div>
  );
}
