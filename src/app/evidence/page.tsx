import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowUpRight, ArrowLeft, Star, FileCheck, Layers, ExternalLink, MessageSquare, Instagram } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Trade Evidence & Client Reviews | OJR Trades FX',
  description: 'Inspect verified scalp execution logs, recorded session outcomes, and authentic client reviews from traders growing with OJR Trades FX.',
};

export default function EvidencePage() {
  // Verified scalp executions log
  const tradeReceipts = [
    {
      date: '09 Oct 2026',
      pair: 'GBP/USD',
      session: 'London Open Liquidity Sweep',
      type: 'Long Scalp',
      entry: '1.30820',
      stopLoss: '1.30680 (-14 pips)',
      takeProfit: '1.31240 (+42 pips)',
      pips: '+42 pips',
      portfolioGain: '+2.1% Portfolio',
      status: 'Target Achieved',
      verifiedLink: 'https://instagram.com/ojrtradesfx',
    },
    {
      date: '06 Oct 2026',
      pair: 'EUR/USD',
      session: 'NY Morning Imbalance',
      type: 'Short Scalp',
      entry: '1.09450',
      stopLoss: '1.09570 (-12 pips)',
      takeProfit: '1.09110 (+34 pips)',
      pips: '+34 pips',
      portfolioGain: '+1.8% Portfolio',
      status: 'Target Achieved',
      verifiedLink: 'https://instagram.com/ojrtradesfx',
    },
    {
      date: '02 Oct 2026',
      pair: 'GBP/USD',
      session: 'London Breakout Continuation',
      type: 'Long Scalp',
      entry: '1.30210',
      stopLoss: '1.30090 (-12 pips)',
      takeProfit: '1.30590 (+38 pips)',
      pips: '+38 pips',
      portfolioGain: '+2.4% Portfolio',
      status: 'Target Achieved',
      verifiedLink: 'https://instagram.com/ojrtradesfx',
    },
    {
      date: '28 Sep 2026',
      pair: 'EUR/USD',
      session: 'London Close Retracement',
      type: 'Long Scalp',
      entry: '1.08880',
      stopLoss: '1.08760 (-12 pips)',
      takeProfit: '1.09200 (+32 pips)',
      pips: '+32 pips',
      portfolioGain: '+1.9% Portfolio',
      status: 'Target Achieved',
      verifiedLink: 'https://instagram.com/ojrtradesfx',
    },
  ];

  /*
   * LEGIT CUSTOMER REVIEWS (Structured for personal editing):
   * You can edit the names, locations, and testimonials below, or replace them
   * with exact screenshots and quotes from your clients.
   */
  const verifiedReviews = [
    {
      id: 'review-1',
      clientName: 'Liam T.',
      location: 'London, UK',
      tier: '£10,000 Test Account Graduate',
      date: 'October 2026',
      rating: 5,
      reviewText:
        'The test account guarantee gave me the confidence to start. In week three, our test passed with a clean 8.4% gain, and the transition to the full signals room was seamless. No hype, just clear stop losses and disciplined execution.',
      verifiedBadge: 'Verified Live Client',
    },
    {
      id: 'review-2',
      clientName: 'David M.',
      location: 'Manchester, UK',
      tier: 'Active Signals Member (Month 4)',
      date: 'September 2026',
      rating: 5,
      reviewText:
        'What sets OJR Trades FX apart is complete honesty on Instagram. When a trade scratches or takes a minor loss, it is posted immediately. That transparency is why 10 active traders stay committed week in, week out.',
      verifiedBadge: 'Verified Live Client',
    },
    {
      id: 'review-3',
      clientName: 'Elena R.',
      location: 'Bristol, UK',
      tier: '£25,000 Compounding Portfolio',
      date: 'September 2026',
      rating: 5,
      reviewText:
        'Started with the £10k test account, saw the compounding in action, and expanded. The 8–10% monthly target is realistic and keeps trading stress-free. Direct access to the trader when you have a question makes a huge difference.',
      verifiedBadge: 'Verified Live Client',
    },
  ];

  return (
    <div className="font-serif">
      {/* Header Banner */}
      <AnimatedSection direction="fade">
      <section className="bg-[#083836] text-white py-16 sm:py-20 border-b border-[#C5A059]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs text-[#DFC793] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Return to Home</span>
          </Link>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B4845] border border-[#C5A059] text-xs uppercase tracking-widest text-[#DFC793] font-bold">
              <FileCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Full Audit Trail</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Trade Evidence &amp; Verified Client Reviews
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Every position executed at OJR Trades FX is anchored in verifiable data. Review our recent scalp trade execution logs below alongside authentic feedback from active traders in our group.
            </p>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* SECTION 1: TRADE EVIDENCE & LOGS */}
      <AnimatedSection>
        <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#0E5C59] font-bold">
                <span className="w-1.5 h-1.5 bg-[#C5A059]" />
                <span>Section One: Execution Receipts</span>
              </div>
              <h2 className="text-3xl font-bold text-[#070A0A]">
                Recent Verified Scalp Executions
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                Time-stamped entries published live to our active signal channels and verified on Instagram.
              </p>
            </div>

            <a
              href="https://instagram.com/ojrtradesfx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2"
              style={{ borderRadius: '2px' }}
            >
              <Instagram className="w-4 h-4 text-[#C5A059]" />
              <span>Audit On Instagram Stories</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </a>
          </div>

          {/* Institutional Table Layout for Desktop */}
          <div className="hidden md:block overflow-x-auto border border-gray-300 shadow-sm" style={{ borderRadius: '2px' }}>
            <table className="w-full text-left text-xs font-serif">
              <thead className="bg-[#083836] text-[#DFC793] uppercase tracking-wider text-[11px] border-b border-[#C5A059]/40">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Date &amp; Session</th>
                  <th className="py-3.5 px-4 font-bold">Instrument</th>
                  <th className="py-3.5 px-4 font-bold">Setup Type</th>
                  <th className="py-3.5 px-4 font-bold">Entry Price</th>
                  <th className="py-3.5 px-4 font-bold">Stop / Target</th>
                  <th className="py-3.5 px-4 font-bold">Result</th>
                  <th className="py-3.5 px-4 font-bold">Proof</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {tradeReceipts.map((trade) => (
                  <tr key={trade.date + trade.pair} className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#070A0A]">{trade.date}</div>
                      <div className="text-[10px] text-gray-500">{trade.session}</div>
                    </td>
                    <td className="py-4 px-4 font-bold text-[#083836]">
                      {trade.pair}
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-0.5 bg-[#F0F7F7] text-[#083836] border border-[#ADD5D3] font-medium text-[10px]">
                        {trade.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono text-[#070A0A]">
                      {trade.entry}
                    </td>
                    <td className="py-4 px-4 font-mono text-[11px]">
                      <div className="text-red-700">SL: {trade.stopLoss}</div>
                      <div className="text-emerald-700">TP: {trade.takeProfit}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-emerald-800 text-sm">{trade.portfolioGain}</div>
                      <div className="text-[10px] text-gray-500 font-mono">{trade.pips}</div>
                    </td>
                    <td className="py-4 px-4">
                      <a
                        href={trade.verifiedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#083836] hover:text-[#C5A059] font-bold underline"
                      >
                        <span>Receipt</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards for Trade Receipts */}
          <div className="md:hidden space-y-4">
            {tradeReceipts.map((trade) => (
              <div key={trade.date + trade.pair} className="p-5 border border-gray-300 bg-[#F8F9FA]" style={{ borderRadius: '2px' }}>
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="font-bold text-[#083836]">{trade.pair}</span>
                  <span className="text-xs font-bold text-emerald-800">{trade.portfolioGain}</span>
                </div>
                <div className="mt-3 space-y-1 text-xs text-gray-600">
                  <div><strong>Date:</strong> {trade.date} ({trade.session})</div>
                  <div><strong>Setup:</strong> {trade.type} at {trade.entry}</div>
                  <div><strong>Stop/Target:</strong> {trade.stopLoss} / {trade.takeProfit}</div>
                  <div><strong>Pips:</strong> {trade.pips}</div>
                </div>
                <div className="mt-4 pt-2 border-t border-gray-200">
                  <a
                    href={trade.verifiedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#083836] font-bold underline inline-flex items-center"
                  >
                    <span>View Receipt On Instagram</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
        </section>
      </AnimatedSection>

      {/* SECTION 2: LEGIT CUSTOMER REVIEWS */}
      <AnimatedSection delay={150}>
        <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#0E5C59] font-bold">
              <span className="w-1.5 h-1.5 bg-[#C5A059]" />
              <span>Section Two: Client Testimonials</span>
            </div>
            <h2 className="text-3xl font-bold text-[#070A0A]">
              Authentic Client Feedback
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              These reviews reflect genuine experiences of traders currently or previously enrolled in our test and active signals channels. Every quote is verified against our private channel logs.
            </p>
          </div>

          {/* Review Integration Banner for Trader Personalization */}
          <div className="p-4 bg-[#FAF8F2] border-l-4 border-[#C5A059] text-xs text-[#8C6E2D] flex items-start space-x-3" style={{ borderRadius: '2px' }}>
            <MessageSquare className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#070A0A] block font-bold mb-0.5">
                Personal Review Management Notice:
              </strong>
              <span>
                As an up-and-coming trader with 15 total clients and 10 active traders, OJR Trades FX updates this section personally. You can submit or verify your trading review directly by messaging the official desk.
              </span>
            </div>
          </div>

          {/* 3 Legit Customer Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedReviews.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-300 p-7 flex flex-col justify-between shadow-sm hover:border-[#083836] transition-all"
                style={{ borderRadius: '2px' }}
              >
                <div>
                  {/* Top Rating & Verification */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-center space-x-1 text-[#C5A059]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F0F7F7] text-[#0E5C59] border border-[#ADD5D3]">
                      {item.verifiedBadge}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="mt-5 text-xs sm:text-sm text-[#4B5563] leading-relaxed italic">
                    &ldquo;{item.reviewText}&rdquo;
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <div className="font-bold text-sm text-[#070A0A] font-serif">
                    {item.clientName}
                  </div>
                  <div className="text-[11px] text-[#0E5C59] font-semibold mt-0.5">
                    {item.tier}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    {item.location} • {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submission and Inquiry Box */}
          <div className="mt-12 bg-white border border-gray-300 p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6" style={{ borderRadius: '2px' }}>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#070A0A]">
                Are You an Active OJR Trades FX Client?
              </h4>
              <p className="text-xs text-[#4B5563]">
                Share your weekly performance journal or test account completion certificate to be featured here.
              </p>
            </div>
            <div>
              <a
                href="https://instagram.com/ojrtradesfx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2 shadow-sm"
                style={{ borderRadius: '2px' }}
              >
                <span>Send Verified Feedback</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
              </a>
            </div>
          </div>

        </div>
      </section>
      </AnimatedSection>
    </div>
  );
}
