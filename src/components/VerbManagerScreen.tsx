import { Button } from '@/components/ui/button';
import { VerbList } from '@/components/VerbList';
import { AddVerbForm } from '@/components/AddVerbForm';
import { useVerbStore } from '@/hooks/useVerbStore';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

interface VerbManagerScreenProps {
  onBack: () => void;
}

export function VerbManagerScreen({ onBack }: VerbManagerScreenProps) {
  const { 
    allVerbs, 
    defaultVerbCount, 
    customVerbCount,
    addVerb, 
    removeCustomVerb, 
    isCustomVerb,
    verbExists 
  } = useVerbStore();

  const handleAddVerb = (verb: Parameters<typeof addVerb>[0]) => {
    addVerb(verb);
    toast.success(`Added "${verb.infinitive}" to your custom verbs!`);
  };

  const handleRemoveVerb = (infinitive: string) => {
    removeCustomVerb(infinitive);
    toast.success(`Removed "${infinitive}" from your custom verbs`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="p-4 md:p-6 border-b">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline">Back</span>
          </Button>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">Verb Library</span>
          </div>
          
          <div className="w-[72px]" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">{defaultVerbCount}</div>
              <div className="text-sm text-muted-foreground">Built-in Verbs</div>
            </div>
            <div className="bg-card border rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-accent">{customVerbCount}</div>
              <div className="text-sm text-muted-foreground">Custom Verbs</div>
            </div>
          </div>

          {/* Add Verb Form */}
          <AddVerbForm onAdd={handleAddVerb} verbExists={verbExists} />

          {/* Verb List */}
          <VerbList 
            verbs={allVerbs} 
            isCustomVerb={isCustomVerb}
            onRemoveVerb={handleRemoveVerb}
          />
        </div>
      </main>
    </div>
  );
}
