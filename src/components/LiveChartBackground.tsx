'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Decorative, semi-transparent "live" candlestick chart for the hero background.
 * Candles scroll left like a live trading terminal, the forming candle ticks in
 * real time, and the series carries an upward bias so the trend keeps climbing.
 */

type Candle = { o: number; h: number; l: number; c: number };

const UP = '14, 92, 89'; // teal-600
const DOWN = '197, 160, 89'; // gold accent
const CANDLE_MS = 1400; // time for one candle to form
const MA_PERIOD = 12;

function nextCandle(prevClose: number): Candle {
  // Upward drift with realistic-looking noise and occasional pullbacks
  const drift = 0.55;
  const move = drift + (Math.random() - 0.42) * 3.2;
  const o = prevClose;
  const c = o + move;
  const h = Math.max(o, c) + Math.random() * 1.4;
  const l = Math.min(o, c) - Math.random() * 1.4;
  return { o, h, l, c };
}

export default function LiveChartBackground({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let spacing = 18;
    let bodyW = 10;
    let visible = 0;

    const candles: Candle[] = [];
    let live: Candle = { o: 100, h: 100, l: 100, c: 100 };
    let liveTarget = 100;
    let lastRoll = performance.now();

    // Smoothed y-axis range so the chart rescales gently instead of jumping
    let yMin = 0;
    let yMax = 0;
    let rangeReady = false;

    const seed = (count: number) => {
      candles.length = 0;
      let close = 100;
      for (let i = 0; i < count; i++) {
        const k = nextCandle(close);
        candles.push(k);
        close = k.c;
      }
      live = { o: close, h: close, l: close, c: close };
      liveTarget = close + 0.6;
      rangeReady = false;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      spacing = width < 640 ? 13 : 18;
      bodyW = Math.round(spacing * 0.55);
      visible = Math.ceil(width / spacing) + 3;
      if (candles.length < visible + MA_PERIOD) seed(visible + MA_PERIOD + 10);
    };

    const ma = (series: Candle[], i: number) => {
      let sum = 0;
      for (let j = i - MA_PERIOD + 1; j <= i; j++) sum += series[j].c;
      return sum / MA_PERIOD;
    };

    const draw = (now: number) => {
      // Roll a new candle once the current one has finished forming
      let progress = (now - lastRoll) / CANDLE_MS;
      if (progress >= 1) {
        candles.push(live);
        if (candles.length > visible + MA_PERIOD + 40) candles.splice(0, candles.length - (visible + MA_PERIOD + 40));
        const n = nextCandle(live.c);
        live = { o: live.c, h: live.c, l: live.c, c: live.c };
        liveTarget = n.c;
        lastRoll = now;
        progress = 0;
      }

      // Tick the forming candle toward its target with jitter
      const jitter = (Math.random() - 0.5) * 0.9;
      live.c += (liveTarget - live.c) * 0.06 + jitter * 0.25;
      live.h = Math.max(live.h, live.c);
      live.l = Math.min(live.l, live.c);

      const series = [...candles, live];
      const start = Math.max(0, series.length - visible);
      const view = series.slice(start);

      // Target y-range from visible candles, with headroom
      let lo = Infinity;
      let hi = -Infinity;
      for (const k of view) {
        if (k.l < lo) lo = k.l;
        if (k.h > hi) hi = k.h;
      }
      const pad = (hi - lo) * 0.18 || 1;
      const tMin = lo - pad;
      const tMax = hi + pad;
      if (!rangeReady) {
        yMin = tMin;
        yMax = tMax;
        rangeReady = true;
      } else {
        yMin += (tMin - yMin) * 0.04;
        yMax += (tMax - yMax) * 0.04;
      }

      // Leave a little room on the right for the price tag
      const rightPad = width < 640 ? 24 : 64;
      const shift = progress * spacing; // smooth leftward scroll
      const xAt = (idx: number) => width - rightPad - (view.length - 1 - idx) * spacing - shift + spacing;
      const yAt = (v: number) => height - ((v - yMin) / (yMax - yMin)) * height;

      ctx.clearRect(0, 0, width, height);

      // Horizontal grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(8, 56, 54, 0.06)';
      const rows = 6;
      for (let r = 1; r < rows; r++) {
        const y = Math.round((height / rows) * r) + 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Moving average + gradient area
      const maPts: [number, number][] = [];
      for (let i = 0; i < view.length; i++) {
        const gi = start + i;
        if (gi < MA_PERIOD - 1) continue;
        maPts.push([xAt(i), yAt(ma(series, gi))]);
      }
      if (maPts.length > 1) {
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, `rgba(${UP}, 0.16)`);
        grad.addColorStop(1, `rgba(${UP}, 0)`);
        ctx.beginPath();
        ctx.moveTo(maPts[0][0], height);
        for (const [x, y] of maPts) ctx.lineTo(x, y);
        ctx.lineTo(maPts[maPts.length - 1][0], height);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        maPts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.strokeStyle = `rgba(${DOWN}, 0.55)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Candles
      for (let i = 0; i < view.length; i++) {
        const k = view[i];
        const x = xAt(i);
        if (x < -spacing || x > width + spacing) continue;
        const up = k.c >= k.o;
        const color = up ? UP : DOWN;
        ctx.strokeStyle = `rgba(${color}, 0.55)`;
        ctx.fillStyle = `rgba(${color}, ${up ? 0.4 : 0.45})`;
        ctx.lineWidth = 1;

        const cx = Math.round(x) + 0.5;
        ctx.beginPath();
        ctx.moveTo(cx, yAt(k.h));
        ctx.lineTo(cx, yAt(k.l));
        ctx.stroke();

        const top = yAt(Math.max(k.o, k.c));
        const bh = Math.max(1, yAt(Math.min(k.o, k.c)) - top);
        ctx.fillRect(Math.round(x - bodyW / 2), top, bodyW, bh);
      }

      // Live price line + tag
      const py = Math.round(yAt(live.c)) + 0.5;
      const liveUp = live.c >= live.o;
      const tagColor = liveUp ? UP : DOWN;
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = `rgba(${tagColor}, 0.5)`;
      ctx.beginPath();
      ctx.moveTo(0, py);
      ctx.lineTo(width, py);
      ctx.stroke();
      ctx.setLineDash([]);

      if (width >= 640) {
        const label = (live.c * 0.0125 + 1).toFixed(5);
        ctx.font = '600 11px ui-monospace, SFMono-Regular, Menlo, monospace';
        const tw = ctx.measureText(label).width + 12;
        ctx.fillStyle = `rgba(${tagColor}, 0.75)`;
        ctx.fillRect(width - tw, py - 9, tw, 18);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, width - tw + 6, py + 0.5);
      }
    };

    resize();

    let raf = 0;
    let running = false;
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      lastRoll = performance.now() - ((performance.now() - lastRoll) % CANDLE_MS);
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // Static frame for reduced motion (and first paint)
    draw(performance.now());

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw(performance.now());
    });
    ro.observe(canvas);

    // Only animate while the hero is on screen
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{
        // Fade out at the edges and soften behind the headline for legibility
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, #000 22%, #000 85%, transparent 100%), linear-gradient(to right, transparent 0%, #000 12%, #000 100%)',
        WebkitMaskComposite: 'source-in',
        maskImage:
          'linear-gradient(to bottom, transparent 0%, #000 22%, #000 85%, transparent 100%), linear-gradient(to right, transparent 0%, #000 12%, #000 100%)',
        maskComposite: 'intersect',
      }}
    />
  );
}
