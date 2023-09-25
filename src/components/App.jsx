import React, { useState } from 'react';
import { ButtonCount } from './ButtonCount/ButtonCount';

import { TimerCount } from './TimerCount/TimerCount';

// export function App() {
//   const [timerDuration, setTimerDuration] = useState(0);
//   const [isButtonVisible, setIsButtonVisible] = useState(true);

//   const updateTimer = duration => {
//     setTimerDuration(duration);
//     setIsButtonVisible(duration > 0);
//   };
//   const resetTimer = () => {
//     setTimerDuration(0);
//   };
//   return (
//     <div>
//       <h1>Мій додаток з івентами і таймером</h1>

//       <TimerCount initialTime={timerDuration} />
//       <ButtonCount isVisible={isButtonVisible} onResetTimer={resetTimer} />
//     </div>
//   );
// }
export function App() {
  const [timerDuration, setTimerDuration] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const updateTimer = duration => {
    setTimerDuration(duration);
    setIsButtonVisible(duration > 0);
  };
  const onReset = () => {
    setTimerDuration(0);
  };
  const resetTimer = () => {
    setTimerDuration(0);
    setIsButtonVisible(true);
  };

  return (
    <div>
      <h1>Мій додаток з івентами і таймером</h1>
      <TimerCount
        timerDuration={timerDuration}
        onResetTimer={resetTimer}
        isVisible={isButtonVisible}
      />
      <ButtonCount isVisible={isButtonVisible} onResetTimer={resetTimer} />
    </div>
  );
}
