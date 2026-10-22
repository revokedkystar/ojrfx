'use client';

import { useEffect, useRef } from 'react';

const NAVBAR_HEIGHT = 72;

export default function ScrollVideo() {
  const trackRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const promptRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    const frame = frameRef.current;
    const heading = headingRef.current;
    const prompt = promptRef.current;
    if (!track || !sticky || !frame || !heading || !prompt) return;

    let animationFrame = 0;

    const updateFrame = () => {
      animationFrame = 0;

      const trackBounds = track.getBoundingClientRect();
      const stickyHeight = sticky.getBoundingClientRect().height;
      const scrollDistance = Math.max(1, track.offsetHeight - stickyHeight);

      // Progress is 0 when the track reaches the sticky navbar offset and 1
      // when the track has scrolled by its full distance beyond the sticky stage.
      const progress = Math.min(
        1,
        Math.max(0, (NAVBAR_HEIGHT - trackBounds.top) / scrollDistance),
      );

      const viewportWidth = window.innerWidth;
      const initialWidth =
        viewportWidth < 768 ? viewportWidth * 0.72 : viewportWidth * 0.4;
      const width = initialWidth + (viewportWidth - initialWidth) * progress;
      const initialHeight = (initialWidth * 9) / 16 + 56;
      const height = initialHeight + (stickyHeight - initialHeight) * progress;
      const borderRadius = 16 * (1 - progress);

      frame.style.width = `${width}px`;
      frame.style.height = `${height}px`;
      frame.style.borderRadius = `${borderRadius}px`;

      const labelOpacity = Math.max(0, 1 - progress / 0.18);
      heading.style.opacity = `${labelOpacity}`;
      prompt.style.opacity = `${labelOpacity}`;
    };

    const requestUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateFrame);
    };

    updateFrame();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={trackRef}
      aria-labelledby="scroll-video-heading"
      className="scroll-video-track"
    >
      <div ref={stickyRef} className="scroll-video-sticky">
        <h2
          ref={headingRef}
          id="scroll-video-heading"
          className="scroll-video-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-[#070A0A]"
        >
          Welcome, Meet your Trader!
        </h2>
        <div ref={frameRef} className="scroll-video-frame">
          <video
            className="scroll-video-content"
            controls
            playsInline
            preload="metadata"
            aria-label="OJR Trades FX introduction video"
          >
            <source src="/main-video.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
        <p ref={promptRef} className="scroll-video-prompt">
          Scroll to continue and expand the video
          <span aria-hidden="true"> ↓</span>
        </p>
      </div>
    </section>
  );
}
