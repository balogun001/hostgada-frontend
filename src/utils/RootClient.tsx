'use client';

import { useState, useRef, useEffect } from 'react';

export default function RootClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    setIsScrolling(true);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // 1 second timeout
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolling
          ? 'scrollbar-thin scrollbar-thumb-orange-700'
          : 'scrollbar-none'
      } min-h-screen overflow-auto`}
    >
      {children}
    </div>
  );
}
