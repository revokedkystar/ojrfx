'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: 'up' | 'fade';
}

export default function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'opacity-100 translate-y-0 scale-100';
    if (direction === 'up') return 'opacity-0 translate-y-12 scale-[0.99]';
    return 'opacity-0';
  };

  return (
    <div
      ref={ref}
      id={id}
      style={{
        transitionDuration: '850ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all will-change-transform motion-reduce:transition-none ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}
