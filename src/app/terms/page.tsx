import React from 'react';
import Link from 'next/link';
import { FileText, ShieldAlert, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | OJR Trades FX',
  description: 'Standard terms and conditions governing test accounts, signals delivery, risk-reversal refund guarantees, and client obligations.',
};

export default function TermsPage() {
  return (
    <div className="font-serif">
      {/* Header */}
      <section className="bg-[#083836] text-white py-16 border-b border-[#C5A059]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs text-[#DFC793] hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Return to Home</span>
          </Link>
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 bg-[#0B4845] border border-[#C5A059] text-[11px] uppercase tracking-widest text-[#DFC793] font-bold">
            <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Terms and Conditions
          </h1>
          <p className="text-xs text-gray-300">
            Last updated: 13 October 2026 • Governing Law: United Kingdom
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#4B5563] space-y-10 leading-relaxed">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              1. Introduction and Acceptance of Terms
            </h2>
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) and OJR Trades FX (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), governing your purchase and use of our trading signals, educational materials, test account allocations, and related digital advisory channels.
            </p>
            <p>
              By purchasing a test account, subscribing to our signal alerts, or accessing our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms in full. If you do not agree with any provision herein, you must cease use of our services immediately.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3" id="risk-disclosure">
            <h2 className="text-xl font-bold text-[#070A0A]">
              2. Nature of Services and Financial Disclaimer
            </h2>
            <div className="p-4 bg-[#FAF8F2] border-l-4 border-[#C5A059] text-xs text-[#8C6E2D] space-y-1">
              <strong className="text-[#070A0A] font-bold block">Regulatory Risk Disclosure:</strong>
              Financial instrument trading, foreign exchange transactions, and derivative contracts involve substantial risks of financial loss. Past performance, backtested simulations, and historical profit targets (such as our target 8–10% monthly portfolio gain) are not reliable indicators or guarantees of future yields.
            </div>
            <p>
              Our signals, market commentary, scalp setups, and trade parameters are provided strictly for informational and educational purposes. We do not act as licensed financial advisors, portfolio custodians, or broker-dealers under the Financial Conduct Authority (FCA). You bear ultimate responsibility for determining the suitability of any trade entered on your private brokerage account.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3" id="refund-policy">
            <h2 className="text-xl font-bold text-[#070A0A]">
              3. Test Accounts and the Risk-Reversal Refund Guarantee
            </h2>
            <p>
              To provide prospective clients with verifiable confidence, we offer a dedicated introductory &ldquo;Test Account&rdquo; model.
            </p>
            <div className="p-4 bg-[#F8F9FA] border border-gray-300 space-y-2 text-xs text-[#070A0A]">
              <p className="font-bold text-sm text-[#083836]">
                The Guarantee Clause:
              </p>
              <p>
                &ldquo;If the trader loses 3 trades in a row or loses the account, the customer gets a full refund.&rdquo;
              </p>
            </div>
            <p>
              <strong>Scope of Application:</strong> This guarantee applies <span className="underline font-bold text-[#070A0A]">strictly and solely to the introductory Test Account phase</span>.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#4B5563]">
              <li>
                A &ldquo;trade loss&rdquo; is defined as a published scalp alert where the recorded price hits the prescribed stop-loss level before attaining the minimum take-profit boundary.
              </li>
              <li>
                Three (3) consecutive losing trade alerts within the client&apos;s active test account window automatically entitles the client to a 100% refund of the test account fee paid.
              </li>
              <li>
                A test account failure or maximum total drawdown breach under our guidance qualifies for the same 100% full reimbursement.
              </li>
              <li>
                Refunds will be processed within two (2) working days to the original payment method upon verification against our public Instagram journal logs.
              </li>
              <li>
                Once the test account passes and transitions into a mature, active signals account, this risk-reversal guarantee lapses, and conventional market risks apply.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              4. Account Maturation and Professional Signals
            </h2>
            <p>
              Upon successfully passing the evaluation criteria set forth during the test account period, the client&apos;s account graduates into our active signals pool.
            </p>
            <p>
              Active signals are dispatched in real time via private communication channels (e.g., Telegram or direct alerts). Clients are expected to maintain adequate connectivity to execute entries in synchrony with published London and New York session scalp setups.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              5. Intellectual Property and Non-Redistribution
            </h2>
            <p>
              All trade notifications, proprietary indicators, market annotations, and educational guides are the intellectual property of OJR Trades FX. You agree not to copy, forward, rebroadcast, resell, or distribute signals to any third party. Any breach of this covenant results in immediate termination of service with forfeiture of all fees.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law in the United Kingdom, OJR Trades FX shall not be held liable for any direct, indirect, incidental, punitive, or consequential damages resulting from slippage, broker execution delays, technical connectivity failure, or market spread widening during live sessions.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              7. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes) shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction over any proceedings.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#070A0A]">
              8. Contact and Enquiries
            </h2>
            <p className="text-xs">
              For any questions concerning these Terms, verification logs, or refund processing, please message our official desk via Instagram at <a href="https://instagram.com/ojrtradesfx" target="_blank" rel="noopener noreferrer" className="text-[#083836] font-bold underline">@ojrtradesfx</a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
