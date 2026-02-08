import { Tense, tenseInfo } from '@/data/verbs';
import { cn } from '@/lib/utils';

interface TenseCardProps {
  tense: Tense;
  isSelected: boolean;
  onSelect: (tense: Tense) => void;
}

export function TenseCard({ tense, isSelected, onSelect }: TenseCardProps) {
  const info = tenseInfo[tense];
  
  return (
    <button
      onClick={() => onSelect(tense)}
      className={cn(
        "group relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 min-h-[140px]",
        "hover:-translate-y-1 hover:shadow-lift",
        isSelected 
          ? "bg-primary text-primary-foreground border-primary shadow-button" 
          : "bg-card text-card-foreground border-border shadow-card hover:border-primary"
      )}
    >
      <span className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
        {info.emoji}
      </span>
      <span className="text-lg font-bold">{info.name}</span>
      <span className={cn(
        "text-sm mt-1",
        isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        {info.description}
      </span>
    </button>
  );
}
