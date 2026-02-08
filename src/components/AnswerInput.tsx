import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';

interface AnswerInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onNext: () => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
  disabled?: boolean;
}

export function AnswerInput({ 
  value, 
  onChange, 
  onSubmit, 
  onNext,
  isAnswered, 
  isCorrect,
  disabled 
}: AnswerInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isAnswered && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAnswered]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (isAnswered) {
        onNext();
      } else {
        onSubmit();
      }
    }
  };

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled || isAnswered}
          placeholder="Type your answer..."
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className={cn(
            "w-full h-16 px-6 text-xl text-center font-semibold rounded-2xl border-2 transition-all duration-300",
            "bg-card focus:outline-none focus:ring-4 focus:ring-primary/20",
            isAnswered && isCorrect && "border-success bg-success/10 animate-pulse-success",
            isAnswered && !isCorrect && "border-destructive bg-destructive/10 animate-shake",
            !isAnswered && "border-border hover:border-primary/50 focus:border-primary"
          )}
        />
      </div>

      {!isAnswered ? (
        <Button 
          onClick={onSubmit} 
          disabled={!value.trim() || disabled}
          size="xl"
          className="w-full"
        >
          <Check className="mr-2" />
          Check Answer
        </Button>
      ) : (
        <Button 
          onClick={onNext}
          size="xl"
          variant={isCorrect ? "success" : "default"}
          className="w-full"
        >
          Continue
          <ArrowRight className="ml-2" />
        </Button>
      )}
    </div>
  );
}
