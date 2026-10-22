'use client';

import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className: string;
  style?: CSSProperties;
}

export default function TiltCard({ children, className, style }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const horizontalPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
    const verticalPosition = (event.clientY - bounds.top) / bounds.height - 0.5;
    const rotateX = -verticalPosition * 6;
    const rotateY = horizontalPosition * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handlePointerLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`card-tilt ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
