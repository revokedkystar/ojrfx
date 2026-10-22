import React from 'react';
import { Target, BookOpen, UserCheck, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import TiltCard from './TiltCard';

export default function GrowWithMe() {
  return (
    <section className="py-20 border-b border-gray-200 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#0E5C59] font-bold">
            <span className="w-1.5 h-1.5 bg-[#C5A059]" />
            <span>Philosophy &amp; Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070A0A] leading-tight">
            No Illusions. No Ego. Just Relentless Execution.
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed">
            I do not claim decades on Wall Street, nor do I hide behind rented supercars. I am a dedicated trader actively honing an institutional scalp model every single market session. I am already generating tangible results—and I invite you to invest and grow alongside me.
          </p>
        </div>

        {/* The Two Approaches Comparison Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: What You Commonly See (The False Industry) */}
          <TiltCard className="bg-white border border-gray-300 p-8 shadow-sm flex flex-col justify-between" style={{ borderRadius: '2px' }}>
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  The Typical Industry Paradigm
                </span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 font-medium">
                  High Noise
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Opulence Over Execution
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Most signal providers sell an illusion of effortless millions. They conceal their drawdown, delete losing calls, and offer zero protection when volatility spikes. You absorb 100% of the downside while they pocket monthly subscription fees.
              </p>

              <ul className="mt-6 space-y-3 text-xs text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Fabricated P&amp;L screenshots without entry logs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Unrealistic 100% win-rate promises that defy statistics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Zero accountability or risk reversal when an account fails</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-500 italic">
              Result: Disillusioned clients bearing unmanaged portfolio risk.
            </div>
          </TiltCard>

          {/* Card 2: The Grow With Me Principle */}
          <TiltCard className="bg-[#083836] border-2 border-[#C5A059] p-8 shadow-md text-white flex flex-col justify-between" style={{ borderRadius: '2px' }}>
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/20">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DFC793]">
                  The &ldquo;Grow With Me&rdquo; Standard
                </span>
                <span className="text-xs px-2.5 py-0.5 bg-[#C5A059] text-[#070A0A] font-bold">
                  Total Alignment
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Candid Practice &amp; Disciplined Scalping
              </h3>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                As an up-and-coming trader at OJR Trades FX, my reputation is made or broken on every trade I publish. I treat your capital with the same discipline as my own. I focus strictly on high-probability scalp setups, compound month-by-month, and guarantee the test account.
              </p>

              <ul className="mt-6 space-y-3 text-xs text-gray-200">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C5A059] font-bold">✓</span>
                  <span>100% public journaling on Instagram, wins and losses alike</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C5A059] font-bold">✓</span>
                  <span>Target 8–10% monthly compounding without reckless over-leveraging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C5A059] font-bold">✓</span>
                  <span>Complete risk-reversal: full refund if 3 trades lose in succession</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#DFC793]">
              <span>Mutual skin-in-the-game</span>
              <span className="font-bold">Invest &amp; Grow Alongside Us</span>
            </div>
          </TiltCard>

        </div>

        {/* 3 Core Pillars of the Partnership */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltCard className="bg-white border border-gray-200 p-6 shadow-sm" style={{ borderRadius: '2px' }}>
            <div className="w-10 h-10 bg-[#F0F7F7] border border-[#ADD5D3] flex items-center justify-center text-[#0E5C59]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="mt-4 text-base font-bold text-[#070A0A]">
              Obsessive Market Study
            </h4>
            <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
              Every London and New York session is backtested and journaled. Continuous learning means agile adjustments to real market volatility.
            </p>
          </TiltCard>

          <TiltCard className="bg-white border border-gray-200 p-6 shadow-sm" style={{ borderRadius: '2px' }}>
            <div className="w-10 h-10 bg-[#FAF8F2] border border-[#C5A059] flex items-center justify-center text-[#8C6E2D]">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="mt-4 text-base font-bold text-[#070A0A]">
              Precise Scalp Entries
            </h4>
            <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
              We trade tight ranges with strict stop-losses. Our goal is weekly consistency, capturing clean pips without holding through overnight news shock.
            </p>
          </TiltCard>

          <TiltCard className="bg-white border border-gray-200 p-6 shadow-sm" style={{ borderRadius: '2px' }}>
            <div className="w-10 h-10 bg-[#F0F7F7] border border-[#ADD5D3] flex items-center justify-center text-[#0E5C59]">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="mt-4 text-base font-bold text-[#070A0A]">
              Direct Client Transparency
            </h4>
            <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
              With 15 clients overall and 10 active traders, you receive direct communication, timely alerts, and full visibility into each setup rationale.
            </p>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
