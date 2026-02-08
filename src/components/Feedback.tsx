import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';

interface FeedbackProps {
  isCorrect: boolean;
  correctAnswer: string;
  userAnswer: string;
}

const encouragements = [
  "Amazing! 🎉",
  "You got it! ⭐",
  "Fantastic! 🌟",
  "Brilliant! 💫",
  "Perfect! 🎯",
  "Excellent! 🏆",
];

const tryAgainMessages = [
  "Almost there! 💪",
  "Keep practicing! 📚",
  "You'll get it next time! 🌈",
  "Don't give up! 🔥",
];

function getRandomMessage(messages: string[]) {
  return messages[Math.floor(Math.random() * messages.length)];
}

export function Feedback({ isCorrect, correctAnswer, userAnswer }: FeedbackProps) {
  const message = isCorrect 
    ? getRandomMessage(encouragements) 
    : getRandomMessage(tryAgainMessages);

  return (
    <div className={cn(
      "p-6 rounded-2xl animate-bounce-in",
      isCorrect ? "bg-success/10 border-2 border-success" : "bg-destructive/10 border-2 border-destructive"
    )}>
      <div className="flex items-center gap-3 mb-4">
        {isCorrect ? (
          <CheckCircle2 className="w-8 h-8 text-success" />
        ) : (
          <XCircle className="w-8 h-8 text-destructive" />
        )}
        <span className={cn(
          "text-xl font-bold",
          isCorrect ? "text-success" : "text-destructive"
        )}>
          {message}
        </span>
        {isCorrect && <Sparkles className="w-5 h-5 text-accent animate-float" />}
      </div>

      {!isCorrect && (
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Your answer:</span>
            <span className="font-semibold text-destructive line-through">{userAnswer}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Correct answer:</span>
            <span className="font-bold text-success text-lg">{correctAnswer}</span>
          </div>
        </div>
      )}

      {isCorrect && (
        <p className="text-success font-semibold">
          {correctAnswer}
        </p>
      )}
    </div>
  );
}
