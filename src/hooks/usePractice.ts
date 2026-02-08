import { useState, useCallback } from 'react';
import { Tense, PracticeTense, VerbConjugation, getRandomVerb, getRandomVerbExcluding, getRandomPracticeTense } from '@/data/verbs';

export interface PracticeState {
  currentVerb: VerbConjugation;
  selectedTense: Tense;
  currentPracticeTense: PracticeTense;
  userAnswer: string;
  isAnswered: boolean;
  isCorrect: boolean | null;
  streak: number;
  totalCorrect: number;
  totalAnswered: number;
}

function getInitialPracticeTense(tense: Tense): PracticeTense {
  return tense === 'alla' ? getRandomPracticeTense() : tense;
}

export function usePractice(initialTense: Tense) {
  const [state, setState] = useState<PracticeState>(() => ({
    currentVerb: getRandomVerb(),
    selectedTense: initialTense,
    currentPracticeTense: getInitialPracticeTense(initialTense),
    userAnswer: '',
    isAnswered: false,
    isCorrect: null,
    streak: 0,
    totalCorrect: 0,
    totalAnswered: 0,
  }));

  const checkAnswer = useCallback(() => {
    const correctAnswer = state.currentVerb[state.currentPracticeTense].toLowerCase().trim();
    const userAnswerNormalized = state.userAnswer.toLowerCase().trim();
    const isCorrect = userAnswerNormalized === correctAnswer;

    setState(prev => ({
      ...prev,
      isAnswered: true,
      isCorrect,
      streak: isCorrect ? prev.streak + 1 : 0,
      totalCorrect: isCorrect ? prev.totalCorrect + 1 : prev.totalCorrect,
      totalAnswered: prev.totalAnswered + 1,
    }));
  }, [state.currentVerb, state.currentPracticeTense, state.userAnswer]);

  const nextQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentVerb: getRandomVerbExcluding(prev.currentVerb.infinitive),
      currentPracticeTense: prev.selectedTense === 'alla' ? getRandomPracticeTense() : prev.selectedTense,
      userAnswer: '',
      isAnswered: false,
      isCorrect: null,
    }));
  }, []);

  const setUserAnswer = useCallback((answer: string) => {
    setState(prev => ({ ...prev, userAnswer: answer }));
  }, []);

  const setTense = useCallback((tense: Tense) => {
    setState(prev => ({
      ...prev,
      selectedTense: tense,
      currentPracticeTense: tense === 'alla' ? getRandomPracticeTense() : tense,
      currentVerb: getRandomVerb(),
      userAnswer: '',
      isAnswered: false,
      isCorrect: null,
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setState(prev => ({
      ...prev,
      streak: 0,
      totalCorrect: 0,
      totalAnswered: 0,
      currentVerb: getRandomVerb(),
      currentPracticeTense: prev.selectedTense === 'alla' ? getRandomPracticeTense() : prev.selectedTense,
      userAnswer: '',
      isAnswered: false,
      isCorrect: null,
    }));
  }, []);

  const accuracy = state.totalAnswered > 0 
    ? Math.round((state.totalCorrect / state.totalAnswered) * 100) 
    : 0;

  return {
    ...state,
    accuracy,
    checkAnswer,
    nextQuestion,
    setUserAnswer,
    setTense,
    resetProgress,
  };
}
