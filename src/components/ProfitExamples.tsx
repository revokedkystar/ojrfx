'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  SlidersHorizontal, 
  Info,
  Plus,
  Minus,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProfitExamples() {
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [compoundMonths, setCompoundMonths] = useState<number>(6);
  const capitalSliderId = useId();
  const timelineSliderId = useId();

  // Compounding calculation helper
  const calculateCompound = (principal: number, monthlyRate: number, months: number) => {
    return Math.round(principal * Math.pow(1 + monthlyRate, months));
  };

  const minMonthlyGain = Math.round(accountSize * 0.08);
  const maxMonthlyGain = Math.round(accountSize * 0.10);
  const minWeeklyGain = Math.round(accountSize * 0.02);
  const maxWeeklyGain = Math.round(accountSize * 0.025);

  const minCompoundedTotal = calculateCompound(accountSize, 0.08, compoundMonths);
  const maxCompoundedTotal = calculateCompound(accountSize, 0.10, compoundMonths);
  const minCompoundedProfit = minCompoundedTotal - accountSize;
  const maxCompoundedProfit = maxCompoundedTotal - accountSize;

  const presets = [
    { label: '£5k Trial', value: 5000 },
    { label: '£10k Standard', value: 10000, isFeatured: true },
    { label: '£25k Growth', value: 25000 },
    { label: '£50k Private', value: 50000 },
    { label: '£100k Institutional', value: 100000 },
  ];

  // Helper step controls
  const adjustCapital = (delta: number) => {
    setAccountSize((prev) => Math.max(2500, Math.min(100000, prev + delta)));
  };

  const adjustMonths = (delta: number) => {
    setCompoundMonths((prev) => Math.max(1, Math.min(12, prev + delta)));
  };

  // Calculate percentage of slider for gold gradient track
  const capitalPercent = ((accountSize - 2500) / (100000 - 2500)) * 100;
  const timelinePercent = ((compoundMonths - 1) / (12 - 1)) * 100;

  return (
    <section id="profit-examples" className="py-20 border-b border-gray-200 font-serif scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#0E5C59] font-bold">
            <span className="w-1.5 h-1.5 bg-[#C5A059]" />
            <span>Interactive Compounding Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070A0A]">
            Examples of Money Being Made: 8–10% Profit
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed">
            Consistent scalping compounds wealth systematically. Drag the interactive scrubber below to test your exact account size or view our benchmark £10,000 portfolio projection.
          </p>
        </div>

        {/* Featured Showcase: Dynamically responds to Scrubber */}
        <div className="mt-12 bg-[#083836] border-2 border-[#C5A059] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden" style={{ borderRadius: '2px' }}>
          {/* Subtle watermark background geometry */}
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 pointer-events-none text-[#C5A059]">
            <TrendingUp className="w-96 h-96" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            
            {/* Left Narrative */}
            <div className="max-w-xl space-y-4">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B4845] border border-[#C5A059] text-[11px] uppercase tracking-wider text-[#DFC793] font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{accountSize === 10000 ? 'Core Benchmark Account' : `Live Scrubber: £${accountSize.toLocaleString('en-GB')}`}</span>
                </span>
                {accountSize !== 10000 && (
                  <button
                    onClick={() => setAccountSize(10000)}
                    className="text-xs text-[#DFC793] hover:text-white underline flex items-center space-x-1"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    <span>Reset to £10k</span>
                  </button>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {accountSize === 10000
                  ? 'The £10,000 Portfolio Example'
                  : `The £${accountSize.toLocaleString('en-GB')} Portfolio Breakdown`}
              </h3>

              <p className="text-sm text-gray-200 leading-relaxed">
                At our target 8–10% monthly model, an account of <strong className="text-[#DFC793]">£{accountSize.toLocaleString('en-GB')}</strong> generates an immediate return of <strong className="text-[#DFC793]">£{minMonthlyGain.toLocaleString('en-GB')} to £{maxMonthlyGain.toLocaleString('en-GB')} profit every single month</strong> without overleveraging.
              </p>

              <div className="pt-2 flex items-center space-x-2 text-xs text-[#DFC793]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Underwritten by OJR Trades FX test account risk reversal guarantee.</span>
              </div>
            </div>

            {/* Right Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <TiltCard className="bg-[#052625] border border-[#C5A059]/40 p-4 text-center" style={{ borderRadius: '2px' }}>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-sans">1 Month Return</span>
                <span className="text-xl sm:text-2xl font-bold text-[#DFC793] mt-1 block">
                  £{minMonthlyGain.toLocaleString('en-GB')} – £{maxMonthlyGain.toLocaleString('en-GB')}
                </span>
                <span className="text-[10px] text-gray-400 mt-1 block">8% to 10% monthly</span>
              </TiltCard>

              <TiltCard className="bg-[#052625] border border-[#C5A059]/40 p-4 text-center" style={{ borderRadius: '2px' }}>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-sans">6 Months Compounded</span>
                <span className="text-xl sm:text-2xl font-bold text-[#DFC793] mt-1 block">
                  £{calculateCompound(accountSize, 0.08, 6).toLocaleString('en-GB')} – £{calculateCompound(accountSize, 0.10, 6).toLocaleString('en-GB')}
                </span>
                <span className="text-[10px] text-gray-400 mt-1 block">
                  +£{(calculateCompound(accountSize, 0.08, 6) - accountSize).toLocaleString('en-GB')} to +£{(calculateCompound(accountSize, 0.10, 6) - accountSize).toLocaleString('en-GB')}
                </span>
              </TiltCard>

              <TiltCard className="bg-[#052625] border border-[#C5A059]/40 p-4 text-center" style={{ borderRadius: '2px' }}>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-sans">12 Months Compounded</span>
                <span className="text-xl sm:text-2xl font-bold text-[#DFC793] mt-1 block">
                  £{calculateCompound(accountSize, 0.08, 12).toLocaleString('en-GB')} – £{calculateCompound(accountSize, 0.10, 12).toLocaleString('en-GB')}
                </span>
                <span className="text-[10px] text-gray-400 mt-1 block">
                  +£{(calculateCompound(accountSize, 0.08, 12) - accountSize).toLocaleString('en-GB')} to +£{(calculateCompound(accountSize, 0.10, 12) - accountSize).toLocaleString('en-GB')}
                </span>
              </TiltCard>
            </div>

          </div>
        </div>

        {/* Interactive Luxury Scrubber Control Station */}
        <div className="mt-12 bg-[#F8F9FA] border border-gray-300 p-8 sm:p-10 shadow-sm" style={{ borderRadius: '2px' }}>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-200 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#083836]">
                <SlidersHorizontal className="w-4 h-4 text-[#C5A059]" />
                <span>Tactile Capital Scrubber</span>
              </div>
              <h4 className="text-xl font-bold text-[#070A0A] mt-1">
                Scrub Portfolio Size &amp; Compounding Horizon
              </h4>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-500 mr-1 hidden sm:inline">Presets:</span>
              {presets.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setAccountSize(preset.value)}
                  className={`px-3 py-1.5 text-xs font-serif transition-all border ${
                    accountSize === preset.value
                      ? 'bg-[#083836] text-[#DFC793] border-[#083836] font-bold shadow-sm ring-1 ring-[#C5A059]'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#C5A059]'
                  }`}
                  style={{ borderRadius: '2px' }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrubbing Sliders Controls */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Control 1: Capital Size Scrubber */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor={capitalSliderId} className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Scrub Capital Amount:
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => adjustCapital(-2500)}
                    disabled={accountSize <= 2500}
                    className="p-1 border border-gray-300 hover:bg-white disabled:opacity-30 text-[#083836]"
                    style={{ borderRadius: '2px' }}
                    aria-label="Decrease capital by £2,500"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-2xl font-bold text-[#083836] font-serif min-w-[120px] text-right">
                    £{accountSize.toLocaleString('en-GB')}
                  </span>
                  <button
                    onClick={() => adjustCapital(2500)}
                    disabled={accountSize >= 100000}
                    className="p-1 border border-gray-300 hover:bg-white disabled:opacity-30 text-[#083836]"
                    style={{ borderRadius: '2px' }}
                    aria-label="Increase capital by £2,500"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Slider Track with Dynamic Antique Gold Fill */}
              <div className="relative pt-2">
                <input
                  id={capitalSliderId}
                  type="range"
                  min="2500"
                  max="100000"
                  step="2500"
                  value={accountSize}
                  onChange={(e) => setAccountSize(Number(e.target.value))}
                  className="luxury-slider"
                  style={{
                    background: `linear-gradient(to right, #C5A059 0%, #C5A059 ${capitalPercent}%, #E5E7EB ${capitalPercent}%, #E5E7EB 100%)`,
                  }}
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-2 font-mono">
                  <span>£2.5k</span>
                  <span>£25k</span>
                  <span>£50k</span>
                  <span>£75k</span>
                  <span>£100k</span>
                </div>
              </div>

              {/* Quick Adjustment Pills */}
              <div className="flex items-center space-x-2 pt-1 text-xs">
                <span className="text-gray-500 text-[11px]">Quick Step:</span>
                <button
                  onClick={() => adjustCapital(-5000)}
                  disabled={accountSize <= 5000}
                  className="px-2 py-0.5 bg-white border border-gray-300 text-[11px] hover:border-[#083836] disabled:opacity-40"
                  style={{ borderRadius: '2px' }}
                >
                  -£5k
                </button>
                <button
                  onClick={() => adjustCapital(5000)}
                  disabled={accountSize >= 95000}
                  className="px-2 py-0.5 bg-white border border-gray-300 text-[11px] hover:border-[#083836] disabled:opacity-40"
                  style={{ borderRadius: '2px' }}
                >
                  +£5k
                </button>
                <button
                  onClick={() => setAccountSize(10000)}
                  className="px-2 py-0.5 bg-[#FAF8F2] border border-[#C5A059] text-[11px] text-[#8C6E2D] font-bold"
                  style={{ borderRadius: '2px' }}
                >
                  Set £10k
                </button>
              </div>

              <div className="p-3 bg-white border border-gray-200 text-xs text-gray-600 space-y-1">
                <div className="flex items-center space-x-1.5 font-semibold text-[#070A0A]">
                  <Info className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Conservative Risk Rule at £{accountSize.toLocaleString('en-GB')}:</span>
                </div>
                <p>
                  Max risk per trade is strictly capped at 1.0% (£{(accountSize * 0.01).toFixed(0)} max risk per scalp). 
                  Target risk-to-reward ratio: 1:2 to 1:3.
                </p>
              </div>
            </div>

            {/* Control 2: Timeline Horizon Scrubber */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor={timelineSliderId} className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Scrub Compounding Horizon:
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => adjustMonths(-1)}
                    disabled={compoundMonths <= 1}
                    className="p-1 border border-gray-300 hover:bg-white disabled:opacity-30 text-[#083836]"
                    style={{ borderRadius: '2px' }}
                    aria-label="Decrease horizon by 1 month"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-2xl font-bold text-[#083836] font-serif min-w-[100px] text-right">
                    {compoundMonths} {compoundMonths === 1 ? 'Month' : 'Months'}
                  </span>
                  <button
                    onClick={() => adjustMonths(1)}
                    disabled={compoundMonths >= 12}
                    className="p-1 border border-gray-300 hover:bg-white disabled:opacity-30 text-[#083836]"
                    style={{ borderRadius: '2px' }}
                    aria-label="Increase horizon by 1 month"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Slider Track with Dynamic Antique Gold Fill */}
              <div className="relative pt-2">
                <input
                  id={timelineSliderId}
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={compoundMonths}
                  onChange={(e) => setCompoundMonths(Number(e.target.value))}
                  className="luxury-slider"
                  style={{
                    background: `linear-gradient(to right, #083836 0%, #083836 ${timelinePercent}%, #E5E7EB ${timelinePercent}%, #E5E7EB 100%)`,
                  }}
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-2 font-mono">
                  <span>1 Mo</span>
                  <span>3 Mo</span>
                  <span>6 Mo</span>
                  <span>9 Mo</span>
                  <span>12 Mo</span>
                </div>
              </div>

              {/* Timeline Preset Buttons */}
              <div className="flex items-center space-x-2 pt-1 text-xs">
                <span className="text-gray-500 text-[11px]">Quick Term:</span>
                {[3, 6, 12].map((m) => (
                  <button
                    key={m}
                    onClick={() => setCompoundMonths(m)}
                    className={`px-2 py-0.5 border text-[11px] transition-colors ${
                      compoundMonths === m
                        ? 'bg-[#083836] text-[#DFC793] border-[#083836] font-bold'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#083836]'
                    }`}
                    style={{ borderRadius: '2px' }}
                  >
                    {m} Months
                  </button>
                ))}
              </div>

              <div className="p-3 bg-white border border-gray-200 text-xs text-gray-600 space-y-1">
                <div className="flex items-center space-x-1.5 font-semibold text-[#070A0A]">
                  <TrendingUp className="w-3.5 h-3.5 text-[#0E5C59]" />
                  <span>Compounding Power:</span>
                </div>
                <p>
                  At 8–10% monthly growth, profits compounded over {compoundMonths} months turn £{accountSize.toLocaleString('en-GB')} into up to £{maxCompoundedTotal.toLocaleString('en-GB')}.
                </p>
              </div>
            </div>

          </div>

          {/* Dynamic Result Summary Cards */}
          <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <TiltCard className="bg-white p-5 border border-gray-200 shadow-sm" style={{ borderRadius: '2px' }}>
              <span className="text-[11px] uppercase tracking-wider text-[#0E5C59] font-bold block">
                Weekly Scalp Target
              </span>
              <span className="text-2xl font-bold text-[#070A0A] mt-2 block">
                £{minWeeklyGain.toLocaleString('en-GB')} – £{maxWeeklyGain.toLocaleString('en-GB')}
              </span>
              <span className="text-xs text-gray-500 mt-1 block">
                ~2.0% – 2.5% per week
              </span>
            </TiltCard>

            <TiltCard className="bg-white p-5 border border-gray-200 shadow-sm" style={{ borderRadius: '2px' }}>
              <span className="text-[11px] uppercase tracking-wider text-[#0E5C59] font-bold block">
                Monthly Profit (8–10%)
              </span>
              <span className="text-2xl font-bold text-[#083836] mt-2 block">
                £{minMonthlyGain.toLocaleString('en-GB')} – £{maxMonthlyGain.toLocaleString('en-GB')}
              </span>
              <span className="text-xs text-gray-500 mt-1 block">
                Base monthly target
              </span>
            </TiltCard>

            <TiltCard className="bg-[#FAF8F2] p-5 border-2 border-[#C5A059] shadow-sm sm:col-span-2 lg:col-span-2" style={{ borderRadius: '2px' }}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#8C6E2D] font-bold block">
                  Projected Capital After {compoundMonths} {compoundMonths === 1 ? 'Month' : 'Months'}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#083836] text-[#DFC793]">
                  Compounded Total
                </span>
              </div>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline sm:space-x-3">
                <span className="text-3xl font-bold text-[#083836]">
                  £{minCompoundedTotal.toLocaleString('en-GB')} – £{maxCompoundedTotal.toLocaleString('en-GB')}
                </span>
                <span className="text-xs text-[#0E5C59] font-bold mt-1 sm:mt-0">
                  (+£{minCompoundedProfit.toLocaleString('en-GB')} to +£{maxCompoundedProfit.toLocaleString('en-GB')} net profit)
                </span>
              </div>
              
              {/* Visual Compounding Bar Indicator */}
              <div className="mt-3 w-full bg-gray-200 h-2 overflow-hidden" style={{ borderRadius: '1px' }}>
                <div 
                  className="bg-gradient-to-r from-[#083836] via-[#0E5C59] to-[#C5A059] h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (minCompoundedTotal / (accountSize * 2.5)) * 100)}%` }}
                />
              </div>

              <p className="text-[11px] text-gray-600 mt-2">
                Compounding projection assumes reinvestment of the target 8% to 10% monthly yield.
              </p>
            </TiltCard>

          </div>

          {/* Action CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 text-xs">
            <span className="text-gray-500">
              *Past performance does not guarantee future results. Test account covered by full 3-loss refund guarantee.
            </span>
            <Link
              href="/#test-account"
              className="px-6 py-3 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] font-bold uppercase tracking-wider inline-flex items-center space-x-2 shadow-sm"
              style={{ borderRadius: '2px' }}
            >
              <span>Test This System On a Protected Account</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
