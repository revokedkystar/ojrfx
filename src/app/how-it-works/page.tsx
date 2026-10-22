import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, AlertCircle, TrendingUp, Clock, Target, Layers } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'How It Works | OJR Trades FX',
  description: 'Understand the three-step signals onboarding framework: from test account purchase and guarantee to mature portfolio compounding.',
};

export default function HowItWorksPage() {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <AnimatedSection direction="fade">
      <section className="bg-[#083836] text-white py-16 sm:py-20 border-b border-[#C5A059]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B4845] border border-[#C5A059] text-xs uppercase tracking-widest text-[#DFC793] font-bold">
              <span>Operational Blueprint</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              The Architecture of Consistent Scalp Trading.
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              We eliminate guesswork with a structured three-step progression. We start by proving our execution on a fully protected test account before compounding capital inside our primary signals channel.
            </p>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Deep Step-by-Step Breakdown */}
      <AnimatedSection>
        <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Phase 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-gray-200 pb-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-4xl font-bold text-[#C5A059] block">01</span>
              <h2 className="text-2xl font-bold text-[#070A0A]">
                Acquire the Protected Test Account
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#0E5C59] font-semibold">
                Phase One: Verification Under Full Guarantee
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-5 text-sm text-[#4B5563] leading-relaxed">
              <p>
                Before managing significant capital, every new client enters via an introductory test account. This ensures you experience our trade alerting velocity, entry precision, and session routines first-hand without incurring unhedged financial risk.
              </p>
              
              <div className="bg-[#FAF8F2] border-l-4 border-[#C5A059] p-5 text-xs text-[#8C6E2D] space-y-2">
                <div className="flex items-center space-x-2 font-bold text-[#070A0A]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>The Test Account Risk Reversal:</span>
                </div>
                <p>
                  If the trader loses 3 trades in a row or loses the test account during this trial window, you receive a full 100% refund of your test account acquisition fee. This guarantee is legally binding and applies strictly to the test account phase.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 border border-gray-200 bg-[#F8F9FA]">
                  <strong className="block text-[#070A0A] font-bold mb-1">What You Receive:</strong>
                  <span>Direct signal access, exact lot size calculation guidelines, and live Telegram/private alert channel entry.</span>
                </div>
                <div className="p-4 border border-gray-200 bg-[#F8F9FA]">
                  <strong className="block text-[#070A0A] font-bold mb-1">Pass Criteria:</strong>
                  <span>Reaching the agreed benchmark target while respecting strict daily loss parameters.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-gray-200 pb-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-4xl font-bold text-[#0E5C59] block">02</span>
              <h2 className="text-2xl font-bold text-[#070A0A]">
                Test Evaluation Passes &amp; Matures
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#0E5C59] font-semibold">
                Phase Two: Seamless Upgrade to Active Portfolio
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-5 text-sm text-[#4B5563] leading-relaxed">
              <p>
                Once the test account passes evaluation, your account status is immediately elevated. Your profile matures into an active signals member with elevated portfolio sizing privileges and dedicated trade execution support.
              </p>
              <p>
                You do not pay recurring setup penalties or redundant onboarding charges. Having proved capability in phase one, our alignment shifts toward compounding returns week after week.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 border border-gray-200 bg-[#F8F9FA]">
                  <strong className="block text-[#070A0A] font-bold mb-1">Priority Signal Transmission:</strong>
                  <span>Sub-second alert dispatch for London and New York session scalp entries.</span>
                </div>
                <div className="p-4 border border-gray-200 bg-[#F8F9FA]">
                  <strong className="block text-[#070A0A] font-bold mb-1">Personal Portfolio Desk:</strong>
                  <span>Direct contact with the trader to clarify exposure rules and position management.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-4xl font-bold text-[#C5A059] block">03</span>
              <h2 className="text-2xl font-bold text-[#070A0A]">
                Realise 8–10% Monthly Compounding
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#0E5C59] font-semibold">
                Phase Three: Steady Execution &amp; Long-Term Yield
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-5 text-sm text-[#4B5563] leading-relaxed">
              <p>
                Phase three is about discipline and compounding. We aim for a steady 8–10% monthly profit expansion by harvesting high-probability weekly scalp moves on major liquid currency pairs and indices.
              </p>
              <p>
                We prioritize capital preservation over reckless thrills. Every position is governed by a predetermined stop-loss and take-profit ratio, preventing emotional errors or catastrophic market drawdowns.
              </p>

              <div className="bg-[#083836] text-white p-6 border border-[#C5A059]" style={{ borderRadius: '2px' }}>
                <h4 className="text-base font-bold text-[#DFC793] mb-2 font-serif">
                  The Compounding Formula
                </h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  An account compounding at an average of 8–10% each month doubles capital efficiently without ever requiring reckless position exposure. This disciplined pace allows our 10 active traders to remain stress-free.
                </p>
              </div>
            </div>
          </div>

        </div>
        </section>
      </AnimatedSection>

      {/* Technical FAQ Section */}
      <AnimatedSection delay={150}>
        <section className="py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#070A0A]">
              Frequently Asked Execution Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Clear, transparent answers to practical trading questions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 p-6 shadow-sm" style={{ borderRadius: '2px' }}>
              <h4 className="text-base font-bold text-[#070A0A] mb-2">
                What instruments do we trade?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                We focus strictly on high-liquidity assets: GBP/USD, EUR/USD, and selected major equity index futures during the London and early New York sessions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 shadow-sm" style={{ borderRadius: '2px' }}>
              <h4 className="text-base font-bold text-[#070A0A] mb-2">
                How is the 3-consecutive-loss guarantee verified?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                All trade entries and outcomes are time-stamped and recorded on our verified trade journal and Instagram stories. If three published scalp calls hit their stop-losses consecutively on your test account, your refund is issued with zero friction.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 shadow-sm" style={{ borderRadius: '2px' }}>
              <h4 className="text-base font-bold text-[#070A0A] mb-2">
                How many clients do you accept at one time?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                We maintain an intimate roster: 15 clients overall and 10 active traders. We deliberately cap our group size so every participant receives prompt support and personal risk oversight.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <Link
              href="/#test-account"
              className="px-8 py-3.5 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2 shadow-sm"
              style={{ borderRadius: '2px' }}
            >
              <span>Begin Your Test Account</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </div>
  );
}
