export function ButtonCount({ isVisible, onResetTimer }) {
  const handleResetClick = () => {
    onResetTimer();

    console.log('Button clicked');
  };

  return isVisible ? (
    <button onClick={handleResetClick}>Обнулити таймер</button>
  ) : null;
}
