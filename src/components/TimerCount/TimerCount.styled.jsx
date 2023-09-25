import styled from 'styled-components';

export const TimerNumberContainer = styled.div`
  perspective: 1000px;
  width: 40px;
  height: 40px;
  margin: 5px;
`;

export const TimerNumberFlip = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
`;

export const TimerNumberFront = styled.div`
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transform: rotateY(0deg);
  backface-visibility: hidden;
`;

export const TimerNumberBack = styled.div`
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
