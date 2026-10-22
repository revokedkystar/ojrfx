import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Check, Sparkles, TrendingUp, Calculator, FileCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden border-b border-gray-200 font-serif">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center">
          <div 
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#F8F9FA] border border-[#C5A059] text-xs uppercase tracking-widest text-[#083836] font-semibold shadow-sm"
            style={{ borderRadius: '2px' }}
          >
            <span className="w-2 h-2 bg-[#C5A059]" />
            <span>OJR TRADES FX • Transparent Scalping Practice</span>
          </div>
        </div>

        {/* Headline and Narrative */}
        <div className="text-center mt-6 max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#070A0A] leading-[1.15]">
            Grow Your Capital Alongside an Active, Transparent Signals Trader.
          </h1>
          
          <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            I do not offer empty promises or theoretical systems. At OJR Trades FX, I execute disciplined weekly scalp trades, share precise entries and stop losses, and target a steady 8–10% monthly portfolio gain. Test our execution with full downside protection.
          </p>

          {/* Quick Pillars */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#083836]">
            <div className="flex items-center space-x-1.5 bg-[#F0F7F7] px-3 py-1.5 border border-[#ADD5D3]">
              <Check className="w-3.5 h-3.5 text-[#0E5C59]" />
              <span>Target 8–10% Monthly Return</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#FAF8F2] px-3 py-1.5 border border-[#C5A059]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8C6E2D]" />
              <span>Test Account 100% Refund Guarantee</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#F0F7F7] px-3 py-1.5 border border-[#ADD5D3]">
              <TrendingUp className="w-3.5 h-3.5 text-[#0E5C59]" />
              <span>Weekly Scalp Executions</span>
            </div>
          </div>
        </div>

        {/* Call to Action Actions Below Video */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/#profit-examples"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm"
            style={{ borderRadius: '2px' }}
          >
            <Calculator className="w-4 h-4 text-[#C5A059]" />
            <span>See £10k Profit Example</span>
          </Link>

          <Link
            href="/evidence"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#083836] hover:bg-[#FAF8F2] border border-[#C5A059] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2"
            style={{ borderRadius: '2px' }}
          >
            <FileCheck className="w-4 h-4 text-[#C5A059]" />
            <span>View Trade Evidence &amp; Reviews</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
