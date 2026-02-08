import { Flame, Target, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  streak: number;
  totalCorrect: number;
  totalAnswered: number;
  accuracy: number;
}

export function ProgressBar({ streak, totalCorrect, totalAnswered, accuracy }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 p-4 bg-card rounded-2xl shadow-card">
      <div className="flex items-center gap-2">
        <div className={cn(
          "p-2 rounded-xl",
          streak > 0 ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
        )}>
          <Flame className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-xs text-muted-foreground font-medium">Streak</p>
          <p className={cn(
            "text-lg font-bold",
            streak > 0 ? "text-accent" : "text-foreground"
          )}>
            {streak}
          </p>
        </div>
      </div>

      <div className="w-px h-10 bg-border" />

      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-success/20 text-success">
          <Target className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-xs text-muted-foreground font-medium">Correct</p>
          <p className="text-lg font-bold text-foreground">
            {totalCorrect}/{totalAnswered}
          </p>
        </div>
      </div>

      <div className="w-px h-10 bg-border" />

      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-secondary/20 text-secondary">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-xs text-muted-foreground font-medium">Accuracy</p>
          <p className="text-lg font-bold text-foreground">
            {accuracy}%
          </p>
        </div>
      </div>
    </div>
  );
}
