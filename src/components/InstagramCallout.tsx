import React from 'react';
import { ArrowUpRight, Instagram, ShieldCheck, CheckCircle2, Bookmark, Flame, BarChart3 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function InstagramCallout() {
  const highlights = [
    {
      category: 'Session Scalps',
      title: 'London & NY Forex Pairs',
      notes: 'Entry price, stop level, and tick-by-tick execution clips posted within 15 minutes of session close.',
      tag: 'Live Stories',
    },
    {
      category: 'Audit Log',
      title: 'Weekly P&L Summaries',
      notes: 'Unfiltered weekly performance recaps including winning trades and managed scratch losses.',
      tag: 'Highlight Reel 01',
    },
    {
      category: 'Risk Reversal',
      title: 'Test Account Verifications',
      notes: 'Logged milestones showing accounts passing from test phase to mature active signals channels.',
      tag: 'Highlight Reel 02',
    },
  ];

  return (
    <section className="py-20 border-b border-gray-200 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#0E5C59] font-bold">
              <Instagram className="w-4 h-4 text-[#C5A059]" />
              <span>Public Social Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#070A0A]">
              Audited in Real Time on Instagram
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              We maintain a 100% public trade journal. Before acquiring a test account, review every trade call, every risk decision, and every client update archived on our official profile.
            </p>
          </div>

          <div>
            <a
              href="https://instagram.com/ojrtradesfx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center space-x-2 shadow-sm"
              style={{ borderRadius: '2px' }}
            >
              <span>Follow @ojrtradesfx</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
            </a>
          </div>
        </div>

        {/* 3 Story Highlight Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <TiltCard
              key={item.title}
              className="bg-white border border-gray-300 p-6 flex flex-col justify-between shadow-sm hover:border-[#083836] transition-colors"
              style={{ borderRadius: '2px' }}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E5C59]">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#F0F7F7] text-[#083836] border border-[#ADD5D3]">
                    {item.tag}
                  </span>
                </div>

                {/* Simulated Chart/Story Graphic Block */}
                <div className="mt-4 h-28 bg-[#083836] border border-[#0B4845] p-3 flex flex-col justify-between relative overflow-hidden" style={{ borderRadius: '2px' }}>
                  <div className="flex items-center justify-between text-[11px] text-[#DFC793]">
                    <span className="font-mono">GBPUSD / EURUSD</span>
                    <span className="text-[#C5A059] font-bold">Scalp Session</span>
                  </div>
                  {/* Geometric chart lines */}
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <div className="h-1 bg-[#C5A059] w-2/3" />
                      <div className="h-1 bg-white/30 w-1/3" />
                    </div>
                    <div className="text-[10px] text-gray-300 font-mono">
                      Target 8–10% Monthly Model
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-white/70">
                    <span>Logged on Stories</span>
                    <span className="text-[#C5A059]">Verified Journal</span>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold text-[#070A0A] font-serif">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                  {item.notes}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#083836] font-semibold">
                <span className="hover:underline">Inspect on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
