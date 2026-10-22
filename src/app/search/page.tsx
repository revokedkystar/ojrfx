import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchResults from './SearchResults';

export const metadata: Metadata = {
  title: 'Search | OJR Trades FX',
  description: 'Search information, trading results, reviews, and policies across OJR Trades FX.',
};

export default function SearchPage() {
  return (
    <section className="min-h-[60vh] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0E5C59]">
            OJR Trades FX
          </p>
          <h1 className="font-sans text-3xl font-semibold tracking-tight text-[#070A0A] sm:text-4xl">
            Search the website
          </h1>
        </div>
        <Suspense fallback={<SearchFallback />}>
          <SearchResults />
        </Suspense>
      </div>
    </section>
  );
}

function SearchFallback() {
  return (
    <div className="border border-gray-200 bg-white p-6 font-sans text-sm text-gray-600">
      Enter a search term in the navbar to find results, trade evidence, and site information.
    </div>
  );
}
