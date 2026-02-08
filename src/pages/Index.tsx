import { useState } from 'react';
import { HomeScreen } from '@/components/HomeScreen';
import { PracticeScreen } from '@/components/PracticeScreen';
import { VerbManagerScreen } from '@/components/VerbManagerScreen';
import { Tense } from '@/data/verbs';

type Screen = 'home' | 'practice' | 'verbs';

const Index = () => {
  const [screen, setScreen] = useState<Screen>('home');
  const [selectedTense, setSelectedTense] = useState<Tense>('presens');

  const handleStart = (tense: Tense) => {
    setSelectedTense(tense);
    setScreen('practice');
  };

  const handleBack = () => {
    setScreen('home');
  };

  const handleOpenVerbs = () => {
    setScreen('verbs');
  };

  return (
    <>
      {screen === 'home' && (
        <HomeScreen onStart={handleStart} onOpenVerbs={handleOpenVerbs} />
      )}
      {screen === 'practice' && (
        <PracticeScreen 
          initialTense={selectedTense} 
          onBack={handleBack} 
        />
      )}
      {screen === 'verbs' && (
        <VerbManagerScreen onBack={handleBack} />
      )}
    </>
  );
};

export default Index;
