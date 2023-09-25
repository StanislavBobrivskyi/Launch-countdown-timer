import React, { useState, useEffect } from 'react';
import {
  TimerNumberContainer,
  TimerNumberFlip,
  TimerNumberFront,
  TimerNumberBack,
} from './TimerCount.styled'; // Імпорт стилів, які ви визначите

export function TimerNumber({ number }) {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    setFlip(true);

    const flipTimeout = setTimeout(() => {
      setFlip(false);
    }, 500); // Час анімації (0.5 секунди)

    return () => clearTimeout(flipTimeout);
  }, [number]);

  return (
    <TimerNumberContainer>
      <TimerNumberFlip flip={flip}>
        <TimerNumberFront>{number}</TimerNumberFront>
        <TimerNumberBack>{number}</TimerNumberBack>
      </TimerNumberFlip>
    </TimerNumberContainer>
  );
}
