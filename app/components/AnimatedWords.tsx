"use client";

import { useMemo, useState } from "react";

const words = [
  "explorer",
  "gymbro",
  "runner",
  "hip-hop head",
  "designer",
  "student",
];

export default function AnimatedWords() {
  const [animating, setAnimating] = useState(false);
  const [startIndex, setStartIndex] = useState<number>(0);

  const window = useMemo(() => {
    const start = startIndex % words.length;
    const end = (start + 2) % words.length;
    if (end > start) {
      return words.slice(start, end);
    } else {
      return [...words.slice(start), ...words.slice(0, end)];
    }
  }, [startIndex]);

  function nextWord() {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setStartIndex(startIndex + 1);
    }, 150);
  }

  return (
    <>
      <span aria-live="polite" className="hidden">
        {window?.[0] ?? words[0]}
      </span>
      <div className="flex gap-4 items-center">
        <ul
          className="h-[30px] items overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 5%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, transparent 95%)",
          }}
        >
          {window?.map((word, i) => (
            <li
              key={word}
              className={`font-semibold text-xl transition-all transform-gpu ${
                i === 0
                  ? animating
                    ? "-mt-7 opacity-0"
                    : "mt-0 opacity-100"
                  : animating
                  ? "opacity-100"
                  : "opacity-0 invisible"
              }`}
            >
              <p> {word}</p>
            </li>
          ))}
        </ul>

        <button
          disabled={animating}
          onClick={nextWord}
          className="font-medium underline text-blue-600 text-sm"
        >
          Next word
        </button>
      </div>
    </>
  );
}
