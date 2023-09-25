import React from 'react';

export function IventFirst({ updateTimer }) {
  return (
    <button
      onClick={() => {
        // Оновлюємо час на 14 днів (14 днів * 24 години * 60 хвилини * 60 секунд)
        updateTimer(14 * 24 * 60 * 60);
      }}
    >
      Перший івент
    </button>
  );
}
