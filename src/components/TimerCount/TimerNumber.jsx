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
  color: white;
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
`;

const TimerNumberBack = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #3498db;
  backface-visibility: hidden;
  transform: rotateX(180deg);
`;

const flipVariants = {
  front: {
    opacity: 1,
    rotateX: 180,
    transition: {
      duration: 1,
    },
  },
  back: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1,
    },
  },
};

function TimerNumber({ number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(true);

    const flipTimeout = setTimeout(() => {
      setIsFlipped(false);
    }, 1000);

    return () => clearTimeout(flipTimeout);
  }, [number]);

  return (
    <TimerContainer>
      <TimerNumberWrapper
        variants={flipVariants}
        initial="front"
        animate={isFlipped ? 'back' : 'front'}
      >
        <TimerNumberFront>{number}</TimerNumberFront>
        <TimerNumberBack>{number}</TimerNumberBack>
      </TimerNumberWrapper>
    </TimerContainer>
  );
}

export default TimerNumber;
