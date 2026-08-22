'use client';

import { useEffect, useState } from 'react';

const words = ['Impact', 'Discuss', 'Sport', 'Camp', 'Dev'];

export default function JongText() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className='text-5xl font-bold flex items-center'>
      Jong{' '}
      <span className='inline-block min-w-[200px] h-[60px] overflow-hidden relative ml-2'>
        <span
          className={`absolute left-0 transition-all duration-500 ease-in-out ${
            isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          {words[index]}
        </span>
        <span
          className={`absolute left-0 transition-all duration-500 ease-in-out ${
            isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          {words[(index + 1) % words.length]}
        </span>
      </span>
    </h1>
  );
}
