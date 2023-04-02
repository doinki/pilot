import type { FC } from 'react';
import { useState } from 'react';

const RandomNumbers: FC = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  return (
    <article className="space-y-6 rounded-md border p-4">
      <header className="flex flex-wrap justify-between">
        <h1 className="text-4xl">자동 번호</h1>
        <button
          className="inline-flex items-center justify-center rounded-md border px-4 py-2"
          type="button"
          onClick={() => {
            const randomNumbers = new Set<number>();

            while (randomNumbers.size < 6) {
              const randomNumber = Math.floor(Math.random() * 45 + 1);

              if (!randomNumbers.has(randomNumber)) {
                randomNumbers.add(randomNumber);
              }
            }

            setRandomNumbers(Array.from(randomNumbers).sort((a, b) => a - b));
          }}
        >
          생성
        </button>
      </header>
      <strong className="flex flex-wrap gap-4">
        {randomNumbers.map((randomNumber) => (
          <span
            key={randomNumber}
            className="inline-flex h-16 w-16 items-center justify-center rounded-full border"
          >
            {randomNumber}
          </span>
        ))}
      </strong>
    </article>
  );
};

export default RandomNumbers;
