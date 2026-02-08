import { useState } from 'react';
import { VerbConjugation } from '@/data/verbs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddVerbFormProps {
  onAdd: (verb: VerbConjugation) => void;
  verbExists: (infinitive: string) => boolean;
}

const emptyVerb: VerbConjugation = {
  infinitive: '',
  translation: '',
  presens: '',
  preteritum: '',
  perfekt: '',
  futurum: '',
  imperativ: '',
};

export function AddVerbForm({ onAdd, verbExists }: AddVerbFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [verb, setVerb] = useState<VerbConjugation>(emptyVerb);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof VerbConjugation, value: string) => {
    setVerb(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const infinitive = verb.infinitive.trim();
    if (!infinitive) {
      setError('Infinitive is required');
      return;
    }
    
    // Normalize infinitive format
    const normalizedInfinitive = infinitive.startsWith('att ') ? infinitive : `att ${infinitive}`;
    
    if (verbExists(normalizedInfinitive)) {
      setError('This verb already exists');
      return;
    }

    if (!verb.translation.trim()) {
      setError('Translation is required');
      return;
    }

    // Check all conjugations are filled
    const fields: (keyof VerbConjugation)[] = ['presens', 'preteritum', 'perfekt', 'futurum', 'imperativ'];
    for (const field of fields) {
      if (!verb[field].trim()) {
        setError(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
        return;
      }
    }

    onAdd({
      ...verb,
      infinitive: normalizedInfinitive,
      translation: verb.translation.trim(),
      presens: verb.presens.trim(),
      preteritum: verb.preteritum.trim(),
      perfekt: verb.perfekt.trim(),
      futurum: verb.futurum.trim(),
      imperativ: verb.imperativ.trim(),
    });

    setVerb(emptyVerb);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} className="w-full gap-2">
        <Plus className="w-5 h-5" />
        Add Custom Verb
      </Button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-2 border-primary/20 rounded-2xl p-6 space-y-6 bg-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Add New Verb</h3>
        <Button 
          type="button" 
          variant="ghost" 
          size="icon"
          onClick={() => {
            setIsOpen(false);
            setVerb(emptyVerb);
            setError(null);
          }}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
          {error}
        </div>
      )}

      {/* Basic info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="infinitive">Infinitive (e.g., "att skriva")</Label>
          <Input
            id="infinitive"
            value={verb.infinitive}
            onChange={(e) => handleChange('infinitive', e.target.value)}
            placeholder="att skriva"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="translation">English Translation</Label>
          <Input
            id="translation"
            value={verb.translation}
            onChange={(e) => handleChange('translation', e.target.value)}
            placeholder="to write"
          />
        </div>
      </div>

      {/* Conjugations */}
      <div className="space-y-4">
        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Conjugations</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="space-y-2">
            <Label htmlFor="presens">Presens</Label>
            <Input
              id="presens"
              value={verb.presens}
              onChange={(e) => handleChange('presens', e.target.value)}
              placeholder="skriver"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preteritum">Preteritum</Label>
            <Input
              id="preteritum"
              value={verb.preteritum}
              onChange={(e) => handleChange('preteritum', e.target.value)}
              placeholder="skrev"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="perfekt">Perfekt</Label>
            <Input
              id="perfekt"
              value={verb.perfekt}
              onChange={(e) => handleChange('perfekt', e.target.value)}
              placeholder="har skrivit"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="futurum">Futurum</Label>
            <Input
              id="futurum"
              value={verb.futurum}
              onChange={(e) => handleChange('futurum', e.target.value)}
              placeholder="ska skriva"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="imperativ">Imperativ</Label>
            <Input
              id="imperativ"
              value={verb.imperativ}
              onChange={(e) => handleChange('imperativ', e.target.value)}
              placeholder="skriv"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="submit" className="flex-1">
          <Plus className="w-4 h-4 mr-2" />
          Add Verb
        </Button>
        <Button 
          type="button" 
          variant="outline"
          onClick={() => {
            setIsOpen(false);
            setVerb(emptyVerb);
            setError(null);
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
