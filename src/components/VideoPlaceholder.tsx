'use client';

import React, { useState } from 'react';
import { Play, Pause, Volume2, Shield, Clock, CheckCircle2, Maximize2 } from 'lucide-react';

export default function VideoPlaceholder({ className = '' }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'transcript'>('video');

  return (
    <div className={`relative w-full max-w-4xl mx-auto border-2 border-[#0B4845] bg-[#070A0A] shadow-2xl p-1 sm:p-2 rounded-sm ${className}`}>
      {/* Decorative Golden Corner Accents */}
      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />

      {/* Main Video Viewport */}
      <div data-video-viewport className="relative aspect-video w-full bg-[#083836] overflow-hidden flex flex-col justify-between p-4 sm:p-8">
        {/* Subtle geometric chart grid overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-teal-mesh" />

        {/* Top Header inside Player */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-[#C5A059] animate-pulse" />
            <span className="text-xs font-serif uppercase tracking-widest text-[#DFC793]">
              Strategy Briefing • Transparent Execution
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs text-white/80 font-serif">
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>4 min 20 sec</span>
            </span>
            <span className="hidden sm:inline bg-white/10 px-2 py-0.5 text-[11px] border border-white/20">
              1080p HD
            </span>
          </div>
        </div>

        {/* Central Display */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6">
          {!isPlaying ? (
            <>
              <button
                onClick={() => setIsPlaying(true)}
                className="group relative flex items-center justify-center w-20 h-20 bg-[#070A0A]/90 border-2 border-[#C5A059] hover:bg-[#C5A059] transition-all duration-300 shadow-xl"
                style={{ borderRadius: '2px' }}
                aria-label="Play introduction video"
              >
                <Play className="w-8 h-8 text-[#C5A059] group-hover:text-[#070A0A] fill-current ml-1 transition-colors" />
              </button>
              
              <h3 className="mt-5 text-xl sm:text-2xl font-serif font-bold text-white max-w-lg">
                &ldquo;Who I Am, How We Scalp, and Why I Guarantee Your Test Account.&rdquo;
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-gray-300 font-serif max-w-md">
                Direct briefing from the desk: watch the exact execution strategy, London session setups, and strict capital preservation rules.
              </p>
            </>
          ) : (
            <div className="space-y-4 text-center max-w-lg">
              <div className="inline-flex items-center space-x-2 bg-[#0B4845] px-3 py-1.5 border border-[#C5A059] text-xs text-[#DFC793]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Video Briefing Active &amp; Streaming</span>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed italic">
                &ldquo;I started OJR Trades FX because I was tired of false promises. I trade daily, I record every single execution on Instagram @ojrtradesfx, and I protect your capital with a 3-loss full refund guarantee.&rdquo;
              </p>
              <button
                onClick={() => setIsPlaying(false)}
                className="text-xs uppercase tracking-wider text-[#C5A059] underline hover:text-white pt-2 font-serif"
              >
                Reset Player
              </button>
            </div>
          )}
        </div>

        {/* Video Control Bar */}
        <div className="relative z-10 bg-[#070A0A]/90 border border-white/10 p-2.5 flex items-center justify-between text-white text-xs font-serif">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 hover:text-[#C5A059] transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="w-24 sm:w-64 h-1.5 bg-white/20 relative overflow-hidden" style={{ borderRadius: '1px' }}>
              <div 
                className="h-full bg-[#C5A059] transition-all duration-300"
                style={{ width: isPlaying ? '64%' : '18%' }}
              />
            </div>
            <span className="text-[11px] text-gray-300">
              {isPlaying ? '02:46 / 04:20' : '00:48 / 04:20'}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-gray-300">
            <Volume2 className="w-4 h-4 hover:text-[#C5A059] cursor-pointer" />
            <span className="text-[11px] text-[#DFC793] hidden sm:inline">Trader Commentary: ON</span>
            <Maximize2 className="w-4 h-4 hover:text-[#C5A059] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Video Context Footnote */}
      <div className="bg-[#0B4845] px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-200 font-serif border-t border-[#C5A059]/30">
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-[#C5A059]" />
          <span>Verified desk footage and live session chart walk-through.</span>
        </div>
        <div className="mt-1 sm:mt-0 text-[#DFC793]">
          Updated for current UK trading quarter
        </div>
      </div>
    </div>
  );
}
