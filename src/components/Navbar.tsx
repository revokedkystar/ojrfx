'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Menu, Search, X } from 'lucide-react';
import logo from '../../logo.svg';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Results', href: '/#profit-examples' },
  { label: 'Reviews', href: '/evidence' },
  { label: 'Guarantee', href: '/guarantee' },
];

const instagramUrl = 'https://instagram.com/o24zzz';
const testAccountUrl = '/#test-account';

function SearchForm({ onSubmit }: { onSubmit?: () => void }) {
  return (
    <form
      action="/search"
      method="get"
      role="search"
      onSubmit={onSubmit}
      className="flex h-10 min-w-0 items-center gap-2 border border-gray-200 bg-white px-3 transition-colors focus-within:border-[#C5A059]"
    >
      <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-400" />
      <input
        type="search"
        name="q"
        aria-label="Search the website"
        placeholder="Search"
        className="min-w-0 w-full bg-transparent font-sans text-sm text-[#083836] outline-none placeholder:text-gray-400"
      />
      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-[0_2px_12px_rgba(7,10,10,0.04)] backdrop-blur-md">
        <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="OJR Trades FX home"
            className="flex shrink-0 items-center"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={logo}
              alt="OJR Trades FX"
              priority
              className="h-20 w-20 object-contain"
            />
          </Link>

          <div className="absolute left-1/2 hidden w-96 -translate-x-1/2 xl:block">
            <SearchForm />
          </div>

          <div className="ml-auto hidden shrink-0 items-center gap-4 xl:flex">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OJR Trades FX on Instagram"
              className="text-[#083836] transition-colors hover:text-[#C5A059]"
            >
              <Instagram aria-hidden="true" className="h-5 w-5" />
            </a>
            <Link
              href={testAccountUrl}
              className="inline-flex h-11 items-center justify-center whitespace-nowrap border border-[#083836] bg-[#083836] px-5 font-sans text-sm font-semibold text-white transition-colors hover:border-[#C5A059] hover:bg-[#0B4845]"
            >
              Start Test Account
            </Link>
            <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="navigation-menu"
            className="inline-flex h-10 w-10 items-center justify-center border border-gray-200 text-[#083836] transition-colors hover:border-[#C5A059] hover:bg-gray-50"
            >
            {isOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
            </button>
          </div>

          <div className="ml-auto flex items-center gap-4 xl:hidden">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OJR Trades FX on Instagram"
              className="text-[#083836] transition-colors hover:text-[#C5A059]"
            >
              <Instagram aria-hidden="true" className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="navigation-menu"
              className="inline-flex h-10 w-10 items-center justify-center border border-gray-200 text-[#083836] transition-colors hover:border-[#C5A059] hover:bg-gray-50"
            >
              {isOpen ? (
                <X aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Menu aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav
            id="navigation-menu"
            aria-label="Site navigation"
            className="absolute inset-x-0 top-full border-t border-gray-100 bg-white px-4 pb-5 pt-2 font-sans shadow-[0_8px_16px_rgba(7,10,10,0.06)] sm:px-6 xl:inset-x-auto xl:right-8 xl:w-64 xl:border xl:px-5"
          >
            <div className="pb-2 pt-1 xl:hidden">
              <SearchForm onSubmit={() => setIsOpen(false)} />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`block border-b border-gray-100 py-3 text-sm transition-colors ${
                  isActive(link.href)
                    ? 'font-semibold text-[#083836]'
                    : 'text-gray-600 hover:text-[#083836]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 xl:hidden">
              <Link
                href={testAccountUrl}
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center whitespace-nowrap border border-[#083836] bg-[#083836] px-5 text-sm font-semibold text-white transition-colors hover:border-[#C5A059] hover:bg-[#0B4845]"
              >
                Start Test Account
              </Link>
            </div>
          </nav>
        )}
      </header>
      <div aria-hidden="true" className="h-[72px] shrink-0" />
    </>
  );
}
