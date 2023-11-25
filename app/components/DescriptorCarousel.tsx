"use client";

import { useMemo, useState } from "react";
import {
  Icon,
  AirplaneTilt,
  Camera,
  SneakerMove,
  Barbell,
  Headphones,
} from "@phosphor-icons/react";
import { useInterval } from "react-use";

interface Descriptor {
  word: string;
  icon: Icon;
}

const descriptors: Descriptor[] = [
  {
    word: "explorer",
    icon: AirplaneTilt,
  },
  {
    word: "photographer",
    icon: Camera,
  },
  {
    word: "runner",
    icon: SneakerMove,
  },
  {
    word: "weightlifter",
    icon: Barbell,
  },
  {
    word: "musichead",
    icon: Headphones,
  },
];
export default function DescriptorCarousel() {
  const [animating, setAnimating] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);

  const window = useMemo(() => {
    const start = startIndex % descriptors.length;
    const end = (start + 2) % descriptors.length;
    if (end > start) {
      return descriptors.slice(start, end);
    } else {
      return [...descriptors.slice(start), ...descriptors.slice(0, end)];
    }
  }, [startIndex]);

  useInterval(() => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setStartIndex(startIndex + 1);
    }, 150);
  }, 3500);

  return (
    <>
      <span aria-live="polite" className="hidden">
        {window?.[0].word ?? descriptors[0].word}
      </span>
      <div className="flex gap-4 items-center">
        <ul
          className="h-[30px] overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 5%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, transparent 95%)",
          }}
        >
          {window?.map((descriptor, i) => (
            <li
              key={descriptor.word}
              className={`font-semibold text-xl transition-all flex gap-1.5 items-center transform-gpu ${
                i === 0
                  ? animating
                    ? "-mt-7 opacity-0"
                    : "mt-0 opacity-100"
                  : animating
                  ? "opacity-100"
                  : "opacity-0 invisible"
              }`}
            >
              <p> {descriptor.word}</p>
              <descriptor.icon weight="fill" className=" text-2xl" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
