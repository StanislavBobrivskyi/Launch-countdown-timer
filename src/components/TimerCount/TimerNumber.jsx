// import React, { useState, useEffect } from 'react';
// import {
//   TimerNumberContainer,
//   TimerNumberFlip,
//   TimerNumberFront,
//   TimerNumberBack,
// } from './TimerCount.styled'; // Імпорт стилів, які ви визначите

// export function TimerNumber({ number }) {
//   const [flip, setFlip] = useState(false);

//   useEffect(() => {
//     setFlip(true);

//     const flipTimeout = setTimeout(() => {
//       setFlip(false);
//     }, 500); // Час анімації (0.5 секунди)

//     return () => clearTimeout(flipTimeout);
//   }, [number]);

//   return (
//     <TimerNumberContainer>
//       <TimerNumberFlip flip={flip}>
//         <TimerNumberFront>{number}</TimerNumberFront>
//         <TimerNumberBack>{number}</TimerNumberBack>
//       </TimerNumberFlip>
//     </TimerNumberContainer>
//   );
// }

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  TimerNumberContainer,
  TimerNumberFront,
  TimerNumberBack,
} from './TimerCount.styled';

const flipVariant = {
  true: {
    rotateY: 180,
    perspective: '1500px', // Зміна перспективи
    backgroundColor: 'black', // Зміна кольору заднього фону на чорний
  },
  false: {
    rotateY: 0,
    perspective: '1000px', // Повернення перспективи до початкового значення
    backgroundColor: 'transparent', // Повернення заднього фону до початкового значення
  },
};

export function TimerNumber({ number }) {
  const [prevNumber, setPrevNumber] = useState(number);

  useEffect(() => {
    if (number !== prevNumber) {
      // Змінюємо стан тільки коли number змінилося
      setPrevNumber(number);
    }
  }, [number, prevNumber]);

  return (
    <TimerNumberContainer>
      <motion.div
        variants={flipVariant}
        initial="false"
        animate={number !== prevNumber ? 'true' : 'false'}
        transition={{ duration: 0.5 }}
        style={{
          perspective: '1000px', // Початкове значення перспективи
          backgroundColor: 'transparent', // Початкове значення заднього фону
        }}
      >
        <TimerNumberFront>{number}</TimerNumberFront>
        <TimerNumberBack>{number}</TimerNumberBack>
      </motion.div>
    </TimerNumberContainer>
  );
}
