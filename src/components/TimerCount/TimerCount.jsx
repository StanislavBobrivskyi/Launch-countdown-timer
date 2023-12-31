import React, { useState, useEffect } from 'react';
import TimerNumber from './TimerNumber';
import { CountWrapper, CountNumbers, Button } from './TimerCount.styled';
export function TimerCount({ timerDuration, onResetTimer }) {
  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const [buttonClicked, setButtonClicked] = useState(null);

  useEffect(() => {
    if (timeLeft <= 0) {
      // Таймер закінчився, можливо, ви хочете виконати якісь дії тут
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeLeft]);

  useEffect(() => {
    if (buttonClicked === 'eventFirst') {
      setTimeLeft(14 * 24 * 60 * 60); // 14 днів у секундах
      onResetTimer();
    } else if (buttonClicked === 'eventSecond') {
      setTimeLeft(7 * 24 * 60 * 60); // 7 днів у секундах
      onResetTimer();
    }
  }, [buttonClicked, onResetTimer]);

  // Перетворюємо секунди у дні, години, хвилини, і секунди
  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <CountWrapper>
      <h2>Таймер зворотнього відліку</h2>
      <p>Left for connection</p>
      <CountNumbers>
        <TimerNumber number={days} />
        <TimerNumber number={hours} />
        <TimerNumber number={minutes} />
        <TimerNumber number={seconds} />
      </CountNumbers>
      <div>
        {
          <Button onClick={() => setButtonClicked('eventFirst')}>
            Подія 1 (14 днів)
          </Button>
        }
        {
          <Button onClick={() => setButtonClicked('eventSecond')}>
            Подія 2 (7 днів)
          </Button>
        }
      </div>
    </CountWrapper>
  );
}

/* <p>
        Залишилося: {days} днів, {hours} годин, {minutes} хвилин, {seconds}{' '}
        секунд
      </p> */
