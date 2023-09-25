import React from 'react';

export function IventSecond({ updateTimer }) {
  return (
    <button
      onClick={() => {
        // Оновлюємо час на 7 днів (7 днів * 24 години * 60 хвилини * 60 секунд)
        updateTimer(7 * 24 * 60 * 60);
      }}
    >
      Другий івент
    </button>
  );
}
