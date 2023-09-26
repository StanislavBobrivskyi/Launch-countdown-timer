import styled, { keyframes } from 'styled-components';

// Створюємо CSS анімацію обертання
const rotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

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
  animation: ${rotateAnimation} 5s linear infinite; // Додайте анімацію обертання
`;

export const TimerNumberFront = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transform: rotateY(0deg);
  backface-visibility: hidden;
  transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
`;

export const TimerNumberBack = styled.div`
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;
`;
export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CountNumbers = styled.div`
  display: flex;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  color: azure;
  margin-left: 10px;
  margin-right: 10px;
  background-color: blue;
  border: none;
  border-radius: 25px;
  padding: 6px 12px;
  box-shadow: 0 3px 15px 0 rgba(11, 99, 246, 1);
  transition: 0.7s;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 5px 30px 10px rgba(11, 99, 246, 1);
  }
`;
