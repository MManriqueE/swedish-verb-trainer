import { useState } from 'react';
import { HomeScreen } from '@/components/HomeScreen';
import { PracticeScreen } from '@/components/PracticeScreen';
import { Tense } from '@/data/verbs';

type Screen = 'home' | 'practice';

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

  return (
    <>
      {screen === 'home' && (
        <HomeScreen onStart={handleStart} />
      )}
      {screen === 'practice' && (
        <PracticeScreen 
          initialTense={selectedTense} 
          onBack={handleBack} 
        />
      )}
    </>
  );
};

export default Index;
