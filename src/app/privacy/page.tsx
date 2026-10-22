import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft, Eye } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | OJR Trades FX',
  description: 'Learn how OJR Trades FX protects and processes personal data under the UK Data Protection Act 2018 and UK GDPR.',
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>UK GDPR Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-300">
            Last updated: 13 October 2026 • Jurisdiction: United Kingdom
          </p>
        </div>
      </section>

      {/* Main Privacy Policy Text */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#4B5563] space-y-10 leading-relaxed">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              1. Overview and Data Controller
            </h2>
            <p>
              OJR Trades FX (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy, confidentiality, and security of our clients&apos; personal information. This Privacy Policy outlines our standards regarding the collection, storage, and processing of your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p>
              For the purposes of data protection legislation, OJR Trades FX acts as the Data Controller with respect to personal data collected via this website and our associated signal dispatch channels.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              2. Information We Collect
            </h2>
            <p>
              We collect only the personal information strictly necessary to administer test accounts, dispatch real-time trading signals, and process refunds.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li>
                <strong className="text-[#070A0A]">Identity and Contact Data:</strong> Name, email address, social media handle (e.g. Instagram username or Telegram ID) used to transmit trade notifications.
              </li>
              <li>
                <strong className="text-[#070A0A]">Financial and Transaction Data:</strong> Details of payments for test account purchases, billing references, and records of any refund payouts disbursed under our guarantee. Note: Full payment card details are tokenised and processed directly by regulated payment gateways; we never store raw card numbers.
              </li>
              <li>
                <strong className="text-[#070A0A]">Communication Records:</strong> Direct correspondence with our trading desk, queries regarding trade entries, and confirmation receipts.
              </li>
              <li>
                <strong className="text-[#070A0A]">Technical Data:</strong> IP addresses, browser types, and access timestamps collected automatically for system security and fraud prevention.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              3. Lawful Basis for Processing
            </h2>
            <p>
              Under UK GDPR Article 6, we process your personal data under the following legal bases:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 border border-gray-200 bg-[#F8F9FA]">
                <strong className="block text-[#070A0A] font-bold mb-1">Performance of a Contract:</strong>
                <span>Processing required to provide signals alerts, onboard your test account, and administer refund policies.</span>
              </div>
              <div className="p-4 border border-gray-200 bg-[#F8F9FA]">
                <strong className="block text-[#070A0A] font-bold mb-1">Legitimate Interests:</strong>
                <span>Maintaining network security, preventing fraudulent chargebacks, and ensuring client roster caps are respected.</span>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              4. How We Use Your Data
            </h2>
            <p>Your information is used strictly to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Deliver time-sensitive scalp signals and market commentary.</li>
              <li>Validate test account milestones and process 100% refunds in the event of 3 consecutive trade losses or account failures.</li>
              <li>Maintain our verified client roster (15 clients overall, 10 active traders).</li>
              <li>Comply with UK accounting and tax record-keeping requirements.</li>
            </ul>
            <p className="text-xs italic text-[#083836]">
              We do not sell, rent, or trade your personal data to any third-party marketing companies. Ever.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              5. Third-Party Data Processors
            </h2>
            <p>
              To maintain operational excellence, we share data solely with trusted third-party service providers bound by strict data processing agreements:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Regulated payment gateways for secure checkout processing.</li>
              <li>Encrypted messaging networks (e.g. Telegram / Meta platforms) for signal dissemination.</li>
              <li>Secure UK/EU cloud hosting providers for site infrastructure.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              6. Your Statutory Rights Under UK GDPR
            </h2>
            <p>
              As a resident of the United Kingdom or European Economic Area, you enjoy comprehensive statutory rights:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 border border-gray-200 bg-[#F8F9FA]">
                <strong className="block text-[#070A0A] font-bold">Right to Access</strong>
                <span>Request copies of all personal records we hold regarding your account.</span>
              </div>
              <div className="p-3 border border-gray-200 bg-[#F8F9FA]">
                <strong className="block text-[#070A0A] font-bold">Right to Erasure</strong>
                <span>Request deletion of your data when no longer needed for contractual or statutory compliance.</span>
              </div>
              <div className="p-3 border border-gray-200 bg-[#F8F9FA]">
                <strong className="block text-[#070A0A] font-bold">Right to Rectification</strong>
                <span>Correct any inaccurate contact details or alert addresses on file.</span>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#070A0A]">
              7. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was gathered, including satisfying any legal, accounting, or reporting duties under UK law (typically 6 years for transaction records).
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#070A0A]">
              8. Contacting Our Data Protection Officer
            </h2>
            <p className="text-xs">
              To exercise any of your rights or request clarification regarding our data management standards, please contact our administrative desk via our official Instagram handle at{' '}
              <a href="https://instagram.com/ojrtradesfx" target="_blank" rel="noopener noreferrer" className="text-[#083836] font-bold underline">
                @ojrtradesfx
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
