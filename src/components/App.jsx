// import { IventFirst } from './Ivents/IventFirst';
// import { IventSecond } from './Ivents/IventSecond';
// import { TimerCount } from './TimerCount/TimerCount';

// export const App = () => {
//   return (
//     <div>
//       React homework template
//       <TimerCount />
//       <IventFirst />
//       <IventSecond />
//     </div>
//   );
// };

import React, { useState } from 'react';
import { IventFirst } from './Ivents/IventFirst';
import { IventSecond } from './Ivents/IventSecond';
import { TimerCount } from './TimerCount/TimerCount';

export function App() {
  const [timerDuration, setTimerDuration] = useState(0);

  const updateTimer = duration => {
    setTimerDuration(duration);
  };

  return (
    <div>
      <h1>Мій додаток з івентами і таймером</h1>
      <IventFirst updateTimer={updateTimer} />
      <IventSecond updateTimer={updateTimer} />
      <TimerCount initialTime={timerDuration} />
    </div>
  );
}
