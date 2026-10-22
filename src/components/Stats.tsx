import React from 'react';
import Link from 'next/link';
import { Percent, Users, UserCheck, Zap, ArrowUpRight, Instagram, ShieldCheck } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Stats() {
  const verifiedMetrics = [
    {
      figure: '8–10%',
      label: 'Monthly Profit',
      description: 'Strategic portfolio gains targeted and achieved through disciplined session scalping.',
      icon: Percent,
      highlight: true,
    },
    {
      figure: '15',
      label: 'Clients Overall',
      description: 'Total private accounts onboarded and guided through the structured testing process.',
      icon: Users,
      highlight: false,
    },
    {
      figure: '10',
      label: 'Active Traders Trusting The System',
      description: 'Currently trading live capital with real-time execution alerts and portfolio guidance.',
      icon: UserCheck,
      highlight: false,
    },
    {
      figure: 'Weekly',
      label: 'Scalp Trades with Guaranteed Profits',
      description: 'High-conviction positions executed during peak liquidity windows, underpinned by our test guarantee.',
      icon: Zap,
      highlight: true,
    },
  ];

  return (
    <section className="py-20 border-b border-gray-200 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#0E5C59] font-bold">
            <span className="w-1.5 h-1.5 bg-[#C5A059]" />
            <span>Exact Operating Data</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070A0A]">
            Real Metrics. Zero Inflation.
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed">
            At OJR Trades FX, we do not manufacture hyperbole or quote astronomical numbers. These are our factual, verified operating metrics, documented and audited trade-by-trade on our official channels.
          </p>
        </div>

        {/* 4 Exact Metrics Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <TiltCard
                key={metric.label}
                className={`p-7 flex flex-col justify-between border transition-shadow duration-200 ${
                  metric.highlight
                    ? 'bg-[#083836] text-white border-[#C5A059] shadow-md'
                    : 'bg-[#F8F9FA] text-[#070A0A] border-gray-200 shadow-sm'
                }`}
                style={{ borderRadius: '2px' }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-3xl sm:text-4xl font-bold tracking-tight font-serif ${
                        metric.highlight ? 'text-[#DFC793]' : 'text-[#083836]'
                      }`}
                    >
                      {metric.figure}
                    </span>
                    <div
                      className={`p-2 border ${
                        metric.highlight
                          ? 'border-[#C5A059]/40 bg-[#0B4845] text-[#C5A059]'
                          : 'border-gray-300 bg-white text-[#0E5C59]'
                      }`}
                      style={{ borderRadius: '2px' }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`mt-4 text-base font-bold leading-snug font-serif ${
                      metric.highlight ? 'text-white' : 'text-[#070A0A]'
                    }`}
                  >
                    {metric.label}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      metric.highlight ? 'text-gray-300' : 'text-[#4B5563]'
                    }`}
                  >
                    {metric.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-3 text-[11px] uppercase tracking-wider font-semibold border-t ${
                    metric.highlight ? 'border-white/10 text-[#DFC793]' : 'border-gray-200 text-[#0E5C59]'
                  }`}
                >
                  Verified Trading Journal
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Instagram Verification Call-out Card */}
        <div 
          className="mt-12 bg-[#FAF8F2] border-2 border-[#C5A059] p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderRadius: '2px' }}
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#083836] text-[#C5A059] border border-[#C5A059] flex-shrink-0" style={{ borderRadius: '2px' }}>
              <Instagram className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6E2D]">
                  Public Verification Channel
                </span>
                <span className="text-xs px-2 py-0.5 bg-[#083836] text-[#DFC793] font-mono">
                  @ojrtradesfx
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#070A0A]">
                Inspect Every Scalp Execution On Instagram
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-2xl">
                Every trade entry, stop-loss trigger, and closed P&amp;L receipt is published directly to our Instagram story highlights. You can audit every single trade before deciding to purchase a test account.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              href="https://instagram.com/ojrtradesfx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3.5 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center space-x-2 shadow-sm"
              style={{ borderRadius: '2px' }}
            >
              <span>View Trade Highlights</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
