import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowUpRight, Scale, Lock, TrendingUp, FileCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#052625] text-white border-t border-[#C5A059]/40 font-serif">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#0B4845] border border-[#C5A059] flex items-center justify-center">
                <span className="font-serif font-bold text-xs tracking-tighter text-[#C5A059]">OJR</span>
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-white">
                OJR TRADES FX by @h4tfi3ld
              </span>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              A private signals trading practice rooted in disciplined risk management, transparent scalping strategies, and mutual alignment. We execute calculated market positions and target steady 8–10% monthly compounding.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-[#DFC793]">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>Full test account refund policy backed by our 3-consecutive-loss guarantee.</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] pb-1 border-b border-white/10">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#DFC793] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#DFC793] transition-colors">
                  The Three-Step Process
                </Link>
              </li>
              <li>
                <Link href="/#profit-examples" className="hover:text-[#DFC793] transition-colors">
                  Profit Examples (10k Account)
                </Link>
              </li>
              <li>
                <Link href="/evidence" className="hover:text-[#DFC793] transition-colors inline-flex items-center">
                  <span>Trade Evidence &amp; Reviews</span>
                  <FileCheck className="w-3 h-3 ml-1 text-[#C5A059]" />
                </Link>
              </li>
              <li>
                <Link href="/guarantee" className="hover:text-[#DFC793] transition-colors">
                  Risk-Reversal Guarantee
                </Link>
              </li>
              <li>
                <a 
                  href="https://instagram.com/ojrtradesfx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-[#DFC793] transition-colors"
                >
                  <span>Instagram @ojrtradesfx</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 text-[#C5A059]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] pb-1 border-b border-white/10">
              Regulatory &amp; Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/terms" className="hover:text-[#DFC793] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#DFC793] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms#risk-disclosure" className="hover:text-[#DFC793] transition-colors">
                  Risk Disclosure Notice
                </Link>
              </li>
              <li>
                <Link href="/terms#refund-policy" className="hover:text-[#DFC793] transition-colors">
                  Test Account Refund Terms
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Financial Risk Warning */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-gray-400 leading-relaxed space-y-3">
          <p className="font-semibold text-gray-300">
            Regulatory Risk Warning &amp; Disclaimer:
          </p>
          <p>
            Trading financial instruments, foreign exchange contracts, indices, and derivative assets carries a substantial level of risk and may not be suitable for all private individuals. Past performance does not guarantee future results. Target metrics referenced (such as 8–10% monthly portfolio gains) reflect structured scalp trading models executed under rigorous risk controls and are not unconditional guarantees of permanent future yields.
          </p>
          <p>
            The formal refund policy applies exclusively to the designated Test Account programme: if the trader loses three consecutive scalp trades or loses the account under agreed parameters, the initial test account fee is refunded in full to the client.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <div>
            &copy; {currentYear} OJR Trades FX. All rights reserved. Registered under United Kingdom jurisdiction.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-6">
            <Link href="/terms" className="hover:text-[#DFC793] transition-colors">
              Terms
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/privacy" className="hover:text-[#DFC793] transition-colors">
              Privacy
            </Link>
            <span className="text-gray-600">•</span>
            <a 
              href="https://instagram.com/ojrtradesfx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#DFC793] hover:underline"
            >
              Instagram @ojrtradesfx
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
