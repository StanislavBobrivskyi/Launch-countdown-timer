import React, { useState } from 'react';
import { ButtonCount } from './ButtonCount/ButtonCount';

import { TimerCount } from './TimerCount/TimerCount';
import { Wrapper } from './App.styled';
export function App() {
  const [timerDuration, setTimerDuration] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  // const updateTimer = duration => {
  //   setTimerDuration(duration);
  //   setIsButtonVisible(duration > 0);
  // };

  const resetTimer = () => {
    setTimerDuration(0);
    setIsButtonVisible(true);
  };

  return (
    <Wrapper>
      <h1>Мій додаток з івентами і таймером</h1>
      <TimerCount
        timerDuration={timerDuration}
        onResetTimer={resetTimer}
        isVisible={isButtonVisible}
      />
      <ButtonCount isVisible={isButtonVisible} onResetTimer={resetTimer} />
    </Wrapper>
  );
}
