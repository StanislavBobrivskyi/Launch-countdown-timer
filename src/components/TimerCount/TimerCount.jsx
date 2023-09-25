// import React, { useState, useEffect } from 'react';

// function calculateTime(seconds) {
//   const days = Math.floor(seconds / (3600 * 24));
//   const hours = Math.floor((seconds % (3600 * 24)) / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

//   return {
//     days,
//     hours,
//     minutes,
//     seconds: remainingSeconds,
//   };
// }

// export function TimerCount() {
//   const [totalSeconds, setTotalSeconds] = useState(0); // Початкова кількість секунд
//   const [time, setTime] = useState(calculateTime(totalSeconds)); // Стан для поточного часу

//   // Ефект для оновлення часу кожну секунду
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTotalSeconds(prevSeconds => prevSeconds + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   // Ефект для оновлення відображення часу
//   useEffect(() => {
//     setTime(calculateTime(totalSeconds));
//   }, [totalSeconds]);

//   return (
//     <div>
//       <p>Days: {time.days}</p>
//       <p>Hours: {time.hours}</p>
//       <p>Minutes: {time.minutes}</p>
//       <p>Seconds: {time.seconds}</p>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';

export function TimerCount() {
  //   const [initialTime, setInitialTime] = useState(0); // Початковий час у секундах
  const [timeLeft, setTimeLeft] = useState(0);

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

  // Перетворюємо секунди у дні, години, хвилини, і секунди
  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h2>Таймер зворотнього відліку</h2>
      {timeLeft > 0 ? (
        <div>
          <p>
            Залишилося: {days} днів, {hours} годин, {minutes} хвилин, {seconds}{' '}
            секунд
          </p>
        </div>
      ) : (
        <p>Час вийшов!</p>
      )}
    </div>
  );
}
