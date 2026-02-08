import { useState, useEffect, useCallback } from 'react';
import { VerbConjugation, verbs as defaultVerbs } from '@/data/verbs';

const CUSTOM_VERBS_KEY = 'swedish-verb-trainer-custom-verbs';

function loadCustomVerbs(): VerbConjugation[] {
  try {
    const stored = localStorage.getItem(CUSTOM_VERBS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCustomVerbs(verbs: VerbConjugation[]): void {
  localStorage.setItem(CUSTOM_VERBS_KEY, JSON.stringify(verbs));
}

export function useVerbStore() {
  const [customVerbs, setCustomVerbs] = useState<VerbConjugation[]>(() => loadCustomVerbs());

  const allVerbs = [...defaultVerbs, ...customVerbs];

  const addVerb = useCallback((verb: VerbConjugation) => {
    setCustomVerbs(prev => {
      const updated = [...prev, verb];
      saveCustomVerbs(updated);
      return updated;
    });
  }, []);

  const removeCustomVerb = useCallback((infinitive: string) => {
    setCustomVerbs(prev => {
      const updated = prev.filter(v => v.infinitive !== infinitive);
      saveCustomVerbs(updated);
      return updated;
    });
  }, []);

  const isCustomVerb = useCallback((infinitive: string) => {
    return customVerbs.some(v => v.infinitive === infinitive);
  }, [customVerbs]);

  const verbExists = useCallback((infinitive: string) => {
    return allVerbs.some(v => v.infinitive.toLowerCase() === infinitive.toLowerCase());
  }, [allVerbs]);

  return {
    allVerbs,
    customVerbs,
    defaultVerbCount: defaultVerbs.length,
    customVerbCount: customVerbs.length,
    addVerb,
    removeCustomVerb,
    isCustomVerb,
    verbExists,
  };
}
