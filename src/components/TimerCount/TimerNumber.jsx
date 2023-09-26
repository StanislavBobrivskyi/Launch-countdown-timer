import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TimerContainer = styled.div`
  width: 100px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Saira Extra Condensed', sans-serif;
  font-size: 48px;
  color: ;
`;

const TimerNumberWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerNumberFront = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  backface-visibility: hidden;
  background-color: #3498db;
  padding: 4px;
  border-radius: 20px;
  justify-content: center;
`;

const flipVariants = {
  front: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.4,
    },
  },
  back: {
    opacity: 0.5,
    rotateZ: 90,

    transition: {
      duration: 0.4,
    },
  },
};

const numberVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.2, 1],
  },
};

function TimerNumber({ number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(true);

    const flipTimeout = setTimeout(() => {
      setIsFlipped(false);
    }, 400);

    return () => clearTimeout(flipTimeout);
  }, [number]);

  return (
    <TimerContainer>
      <TimerNumberWrapper
        variants={flipVariants}
        initial="front"
        animate={isFlipped ? 'back' : 'front'}
      >
        <motion.div
          variants={numberVariants}
          initial="initial"
          animate="animate"
          key={number}
        >
          <TimerNumberFront>{number}</TimerNumberFront>
        </motion.div>
      </TimerNumberWrapper>
    </TimerContainer>
  );
}

export default TimerNumber;
