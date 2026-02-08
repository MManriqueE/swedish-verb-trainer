import { VerbPrompt } from '@/components/VerbPrompt';
import { AnswerInput } from '@/components/AnswerInput';
import { Feedback } from '@/components/Feedback';
import { ProgressBar } from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { usePractice } from '@/hooks/usePractice';
import { Tense, tenseInfo } from '@/data/verbs';
import { ArrowLeft, RotateCcw } from 'lucide-react';

interface PracticeScreenProps {
  initialTense: Tense;
  onBack: () => void;
}

export function PracticeScreen({ initialTense, onBack }: PracticeScreenProps) {
  const {
    currentVerb,
    selectedTense,
    userAnswer,
    isAnswered,
    isCorrect,
    streak,
    totalCorrect,
    totalAnswered,
    accuracy,
    checkAnswer,
    nextQuestion,
    setUserAnswer,
    resetProgress,
  } = usePractice(initialTense);

  const correctAnswer = currentVerb[selectedTense];
  const tense = tenseInfo[selectedTense];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="p-4 md:p-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline">Back</span>
          </Button>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-xl">{tense.emoji}</span>
            <span className="font-bold text-primary">{tense.name}</span>
          </div>
          
          <Button variant="ghost" onClick={resetProgress} className="gap-2">
            <RotateCcw className="w-5 h-5" />
            <span className="hidden md:inline">Reset</span>
          </Button>
        </div>
      </header>

      {/* Progress */}
      <div className="px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <ProgressBar 
            streak={streak}
            totalCorrect={totalCorrect}
            totalAnswered={totalAnswered}
            accuracy={accuracy}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 gap-8">
        <div className="w-full max-w-md space-y-8">
          {/* Verb Prompt */}
          <VerbPrompt verb={currentVerb} tense={selectedTense} />

          {/* Answer Input */}
          <AnswerInput
            value={userAnswer}
            onChange={setUserAnswer}
            onSubmit={checkAnswer}
            onNext={nextQuestion}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
          />

          {/* Feedback */}
          {isAnswered && isCorrect !== null && (
            <Feedback
              isCorrect={isCorrect}
              correctAnswer={correctAnswer}
              userAnswer={userAnswer}
            />
          )}
        </div>
      </main>

      {/* Footer hint */}
      <footer className="p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Press <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Enter</kbd> to submit or continue
        </p>
      </footer>
    </div>
  );
}
