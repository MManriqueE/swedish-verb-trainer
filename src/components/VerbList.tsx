import { useState } from 'react';
import { VerbConjugation } from '@/data/verbs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Search, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

interface VerbListProps {
  verbs: VerbConjugation[];
  isCustomVerb: (infinitive: string) => boolean;
  onRemoveVerb?: (infinitive: string) => void;
}

export function VerbList({ verbs, isCustomVerb, onRemoveVerb }: VerbListProps) {
  const [search, setSearch] = useState('');
  const [expandedVerb, setExpandedVerb] = useState<string | null>(null);

  const filteredVerbs = verbs.filter(verb => 
    verb.infinitive.toLowerCase().includes(search.toLowerCase()) ||
    verb.translation.toLowerCase().includes(search.toLowerCase())
  );

  const toggleExpand = (infinitive: string) => {
    setExpandedVerb(prev => prev === infinitive ? null : infinitive);
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search verbs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats */}
      <div className="flex gap-2 text-sm text-muted-foreground">
        <span>{filteredVerbs.length} verbs</span>
        {search && <span>matching "{search}"</span>}
      </div>

      {/* Verb List */}
      <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
        {filteredVerbs.map((verb) => {
          const isExpanded = expandedVerb === verb.infinitive;
          const isCustom = isCustomVerb(verb.infinitive);

          return (
            <div
              key={verb.infinitive}
              className={cn(
                "border rounded-xl p-4 transition-all",
                isCustom ? "border-accent bg-accent/5" : "border-border bg-card",
                isExpanded && "ring-2 ring-primary/20"
              )}
            >
              {/* Header */}
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(verb.infinitive)}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <span className="font-semibold text-lg">{verb.infinitive}</span>
                    <span className="text-muted-foreground ml-2">({verb.translation})</span>
                  </div>
                  {isCustom && (
                    <Badge variant="secondary" className="text-xs">Custom</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {isCustom && onRemoveVerb && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveVerb(verb.infinitive);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </div>

              {/* Expanded conjugations */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Presens</span>
                    <p className="font-medium">{verb.presens}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Preteritum</span>
                    <p className="font-medium">{verb.preteritum}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Perfekt</span>
                    <p className="font-medium">{verb.perfekt}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Futurum</span>
                    <p className="font-medium">{verb.futurum}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Imperativ</span>
                    <p className="font-medium">{verb.imperativ}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredVerbs.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No verbs found matching "{search}"
          </div>
        )}
      </div>
    </div>
  );
}
