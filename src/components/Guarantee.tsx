import React from 'react';
import Link from 'next/link';
import { ShieldCheck, AlertOctagon, Check, ArrowRight, FileText, Scale } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 border-b border-gray-200 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Guarantee Banner */}
        <div 
          className="bg-[#083836] border-2 border-[#C5A059] p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden"
          style={{ borderRadius: '2px' }}
        >
          {/* Subtle watermark geometry */}
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 pointer-events-none text-white">
            <ShieldCheck className="w-96 h-96" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B4845] border border-[#C5A059] text-xs uppercase tracking-widest text-[#DFC793] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Full Risk Reversal Policy</span>
            </div>

            {/* Core Offer Statement */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              &ldquo;If the trader loses 3 trades in a row or loses the account, the customer gets a full refund.&rdquo;
            </h2>

            {/* Crucial Explicit Limitation */}
            <div 
              className="p-4 bg-[#052625] border-l-4 border-[#C5A059] text-xs sm:text-sm text-[#DFC793] leading-relaxed"
              style={{ borderRadius: '2px' }}
            >
              <strong className="text-white block font-bold mb-1 uppercase tracking-wider text-xs">
                Important Regulatory Notice:
              </strong>
              This risk-reversal guarantee applies <span className="underline decoration-[#C5A059] decoration-2 font-bold text-white">strictly and exclusively to the Test Account phase</span>. Once the test passes and the portfolio matures into an active signals account, standard market risk policies apply.
            </div>

            {/* Explanation of Why This Exists */}
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              We offer this guarantee because we back our setup criteria. If our strategy encounters an uncharacteristic streak of three consecutive stopped-out scalps or fails the account drawdown threshold, you do not pay for our learning curve. Your test account fee is returned to your original payment method in full.
            </p>

            {/* Three Safeguard Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#0B4845] p-4 border border-white/10" style={{ borderRadius: '2px' }}>
                <div className="flex items-center space-x-2 text-[#C5A059] font-bold mb-1">
                  <Check className="w-4 h-4" />
                  <span>3 Consecutive Losses</span>
                </div>
                <p className="text-gray-300 leading-normal">
                  Three back-to-back losses on your test signals instantly triggers an automated refund review.
                </p>
              </div>

              <div className="bg-[#0B4845] p-4 border border-white/10" style={{ borderRadius: '2px' }}>
                <div className="flex items-center space-x-2 text-[#C5A059] font-bold mb-1">
                  <Check className="w-4 h-4" />
                  <span>Account Failure</span>
                </div>
                <p className="text-gray-300 leading-normal">
                  Should the test account breach maximum drawdown before passing, 100% of your fee is reimbursed.
                </p>
              </div>

              <div className="bg-[#0B4845] p-4 border border-white/10" style={{ borderRadius: '2px' }}>
                <div className="flex items-center space-x-2 text-[#C5A059] font-bold mb-1">
                  <Check className="w-4 h-4" />
                  <span>Zero Hidden Clauses</span>
                </div>
                <p className="text-gray-300 leading-normal">
                  No complex rollover obligations or deductions. Our execution log serves as the single source of truth.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/guarantee"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] text-[#070A0A] hover:bg-[#DFC793] text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center inline-flex items-center justify-center space-x-2 shadow-md"
                style={{ borderRadius: '2px' }}
              >
                <span>Read Full Legal Guarantee Protocol</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/terms#refund-policy"
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/30 hover:border-white text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 text-center inline-flex items-center justify-center space-x-2"
                style={{ borderRadius: '2px' }}
              >
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <span>View Refund Terms</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
