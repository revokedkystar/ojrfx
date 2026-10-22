import React from 'react';
import Link from 'next/link';
import { ShoppingCart, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Process() {
  const steps = [
    {
      stepNumber: '01',
      title: 'Acquire a Test Account',
      tagline: 'Underwritten by Our 100% Guarantee',
      description:
        'Purchase your introductory test account to experience our signals execution with complete capital security. We set up your alerts and trade rules immediately.',
      guaranteeNote:
        'Test Account Guarantee Included: If the trader loses 3 trades in a row or loses the account, you receive a full 100% refund immediately.',
      icon: ShoppingCart,
      isPrimary: false,
    },
    {
      stepNumber: '02',
      title: 'Test Passes & Account Matures',
      tagline: 'Transition to Professional Signals',
      description:
        'Through disciplined session scalping, we clear the benchmark profit target. The test passes, and your profile is formally upgraded to our fully managed professional signals network.',
      guaranteeNote:
        'Seamless handover: zero restart fees once validated, granting uninterrupted private room execution.',
      icon: CheckCircle2,
      isPrimary: true,
    },
    {
      stepNumber: '03',
      title: 'Realise 8–10% Monthly Growth',
      tagline: 'Strategic Long-Term Compounding',
      description:
        'Enjoy compounding weekly scalp trades delivering a steady 8–10% monthly portfolio increase. Protect principal, minimise drawdowns, and grow your wealth alongside us.',
      guaranteeNote:
        'Disciplined lot sizing and strict stop losses protect compounding gains throughout every market cycle.',
      icon: TrendingUp,
      isPrimary: false,
    },
  ];

  return (
    <section id="process" className="py-20 border-b border-gray-200 font-serif scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#0E5C59] font-bold">
            <span className="w-1.5 h-1.5 bg-[#C5A059]" />
            <span>The Clear Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070A0A]">
            How We Grow Your Capital: Step-by-Step
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed">
            Our onboarding structure is intentionally conservative. We validate execution on a protected test account before you transition to our primary signals portfolio.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <TiltCard
                key={step.stepNumber}
                className={`flex flex-col justify-between p-8 border transition-all duration-200 ${
                  step.isPrimary
                    ? 'bg-[#083836] text-white border-[#C5A059] shadow-lg relative'
                    : 'bg-white text-[#070A0A] border-gray-300 shadow-sm'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {step.isPrimary && (
                  <div className="absolute -top-3.5 left-8 bg-[#C5A059] text-[#070A0A] text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 border border-[#8C6E2D]">
                    Milestone Transition
                  </div>
                )}

                <div>
                  {/* Step Top */}
                  <div className="flex items-center justify-between pb-6 border-b border-current/10">
                    <span
                      className={`text-3xl font-bold font-serif ${
                        step.isPrimary ? 'text-[#DFC793]' : 'text-[#083836]'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <div
                      className={`p-2.5 border ${
                        step.isPrimary
                          ? 'border-[#C5A059] bg-[#0B4845] text-[#C5A059]'
                          : 'border-gray-200 bg-[#F8F9FA] text-[#0E5C59]'
                      }`}
                      style={{ borderRadius: '2px' }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Tagline */}
                  <div className="mt-6">
                    <span
                      className={`text-xs uppercase tracking-widest font-semibold block ${
                        step.isPrimary ? 'text-[#DFC793]' : 'text-[#0E5C59]'
                      }`}
                    >
                      {step.tagline}
                    </span>
                    <h3 className="text-xl font-bold mt-1 font-serif">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p
                    className={`mt-4 text-xs sm:text-sm leading-relaxed ${
                      step.isPrimary ? 'text-gray-200' : 'text-[#4B5563]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Step Guarantee Call-out */}
                <div
                  className={`mt-8 p-3.5 border text-xs leading-relaxed flex items-start space-x-2.5 ${
                    step.isPrimary
                      ? 'bg-[#0B4845] border-[#C5A059]/40 text-[#DFC793]'
                      : 'bg-[#FAF8F2] border-[#C5A059] text-[#8C6E2D]'
                  }`}
                  style={{ borderRadius: '2px' }}
                >
                  <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{step.guaranteeNote}</span>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom Detailed Callout */}
        <div id="test-account" className="mt-14 bg-white border border-gray-300 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderRadius: '2px' }}>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-[#070A0A]">
              Ready to Initiate Step 1?
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-2xl leading-relaxed">
              Test accounts are limited to ensure direct risk management oversight for each client. Purchase your test account today, trade under our guidance, and progress with zero downside fee risk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/guarantee"
              className="w-full sm:w-auto px-6 py-3 bg-white text-[#083836] border border-gray-300 hover:border-[#083836] text-xs font-bold uppercase tracking-wider text-center"
              style={{ borderRadius: '2px' }}
            >
              Review Full Guarantee Terms
            </Link>
            <a
              href="https://instagram.com/ojrtradesfx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider text-center inline-flex items-center justify-center space-x-1.5"
              style={{ borderRadius: '2px' }}
            >
              <span>Enquire via @ojrtradesfx</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
