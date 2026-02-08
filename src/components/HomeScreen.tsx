import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TenseCard } from '@/components/TenseCard';
import { Tense } from '@/data/verbs';
import { Play, BookOpen } from 'lucide-react';

interface HomeScreenProps {
  onStart: (tense: Tense) => void;
}

const tenses: Tense[] = ['presens', 'preteritum', 'perfekt', 'futurum', 'imperativ', 'alla'];

export function HomeScreen({ onStart }: HomeScreenProps) {
  const [selectedTense, setSelectedTense] = useState<Tense>('presens');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-muted/30">
      <div className="w-full max-w-2xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-primary shadow-button mb-4">
            <BookOpen className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Swedish Verb<br />
            <span className="text-gradient-primary">Trainer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Master Swedish verb conjugations with fun, interactive practice sessions
          </p>
        </div>

        {/* Tense Selection */}
        <div className="space-y-4">
          <h2 className="text-center text-lg font-semibold text-foreground">
            Choose a tense to practice
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tenses.map((tense) => (
              <TenseCard
                key={tense}
                tense={tense}
                isSelected={selectedTense === tense}
                onSelect={setSelectedTense}
              />
            ))}
          </div>
        </div>

        {/* Start Button */}
        <div className="flex justify-center">
          <Button 
            size="xl" 
            onClick={() => onStart(selectedTense)}
            className="min-w-[200px]"
          >
            <Play className="mr-2 w-6 h-6" />
            Start Practice
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          25 common verbs • Instant feedback • Track your progress
        </p>
      </div>
    </div>
  );
}
