import { ButtonReset } from './ButtonCount.styled';

export function ButtonCount({ isVisible, onResetTimer }) {
  const handleResetClick = () => {
    onResetTimer();

    console.log('Button clicked');
  };

  return isVisible ? (
    <ButtonReset onClick={handleResetClick}>Обнулити таймер</ButtonReset>
  ) : null;
}
