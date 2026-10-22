import React from 'react';
import Link from 'next/link';
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, Scale, RefreshCw, FileText } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'The Risk-Reversal Guarantee | OJR Trades FX',
  description: 'Full terms of our 100% refund guarantee on test accounts. If the trader loses 3 trades in a row or loses the account, you receive a full refund.',
};

export default function GuaranteePage() {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <AnimatedSection direction="fade">
      <section className="bg-[#083836] text-white py-16 sm:py-20 border-b border-[#C5A059]/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B4845] border border-[#C5A059] text-xs uppercase tracking-widest text-[#DFC793] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Consumer Protection Policy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              The Test Account Risk-Reversal Guarantee.
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              We remove the trial risk for new clients. If our signals model fails to execute with discipline, you are not out of pocket.
            </p>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Core Guarantee Statement & Legal Boundaries */}
      <AnimatedSection>
        <section className="py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Statement Box */}
          <div className="bg-[#FAF8F2] border-2 border-[#C5A059] p-8 sm:p-10 shadow-sm space-y-4" style={{ borderRadius: '2px' }}>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6E2D]">
              Official Policy Statement
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#070A0A] leading-snug">
              &ldquo;If the trader loses 3 trades in a row or loses the account, the customer gets a full refund.&rdquo;
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              This statement constitutes our solemn operational commitment to every prospective client. When you purchase a test account, you are protected by this exact criteria from day one.
            </p>
          </div>

          {/* Strict Limitation Callout */}
          <div className="bg-[#083836] text-white p-6 sm:p-8 border-l-4 border-[#C5A059] space-y-3" style={{ borderRadius: '2px' }}>
            <div className="flex items-center space-x-2 text-[#DFC793] font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-[#C5A059]" />
              <span>Crucial Scope Limitation: Test Accounts Only</span>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              Please note with absolute clarity: <strong className="text-white underline decoration-[#C5A059]">this guarantee applies solely and exclusively to the Test Account phase</strong>. 
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Once an account has satisfied test requirements, graduated, and matured into an active live signals membership targeting 8–10% monthly compounding, capital is deployed in live markets where normal market risks and individual broker conditions prevail. Standard market risk rules apply thereafter.
            </p>
          </div>

          {/* Detailed Criteria Checklist */}
          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-bold text-[#070A0A]">
              Conditions That Trigger a 100% Full Refund
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 bg-[#F8F9FA] space-y-3" style={{ borderRadius: '2px' }}>
                <div className="w-8 h-8 bg-[#083836] text-[#C5A059] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="text-base font-bold text-[#070A0A]">
                  Three Consecutive Stop-Loss Hits
                </h4>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  If three consecutive scalp trades published by the trader during your test account period reach their stop-loss boundaries in succession without an intervening profitable trade, the guarantee triggers immediately.
                </p>
              </div>

              <div className="p-6 border border-gray-200 bg-[#F8F9FA] space-y-3" style={{ borderRadius: '2px' }}>
                <div className="w-8 h-8 bg-[#083836] text-[#C5A059] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="text-base font-bold text-[#070A0A]">
                  Test Account Max Drawdown Breach
                </h4>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  If the test account breaches maximum total drawdown or fails the evaluation threshold while following the trader&apos;s published signals, your entire test account fee is reimbursed.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Process Walkthrough */}
          <div className="border-t border-gray-200 pt-10 space-y-6">
            <h3 className="text-2xl font-bold text-[#070A0A]">
              How Refunds Are Processed
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0E5C59] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#070A0A]">Automated Journal Cross-Referencing:</strong>{' '}
                  Because every trade is logged publicly on our Instagram and internal signal feed, zero debate is required. The timestamp and trade receipts verify the condition instantly.
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0E5C59] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#070A0A]">Zero Deductions or Rollover Penalties:</strong>{' '}
                  You receive 100% of the funds originally paid for your test account access, returned directly to your debit card, bank transfer, or original payment gateway.
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0E5C59] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#070A0A]">Rapid 48-Hour Reimbursement:</strong>{' '}
                  Upon verification of the 3-loss sequence or account failure, our desk processes the reimbursement within two working days under UK consumer finance standards.
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="https://instagram.com/o24zzz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#083836] text-white hover:bg-[#0B4845] border border-[#083836] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider text-center inline-flex items-center justify-center space-x-2 shadow-sm"
              style={{ borderRadius: '2px' }}
            >
              <span>Connect on Instagram</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </a>

            <Link
              href="/terms#refund-policy"
              className="text-xs text-[#083836] hover:text-[#C5A059] underline font-serif font-semibold"
            >
              Consult Legal Terms &amp; Conditions
            </Link>
          </div>

        </div>
      </section>
      </AnimatedSection>
    </div>
  );
}
