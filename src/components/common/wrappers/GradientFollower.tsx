'use client';

import { useEffect, useRef } from 'react';

export default function GradientFollower() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gradientRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        gradientRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, #56ebbb30, transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={gradientRef}
      className="pointer-events-none hidden dark:block fixed h-screen inset-0 z-30 transition duration-300 lg:fixed top-0 left-0"
    />
  );
}
