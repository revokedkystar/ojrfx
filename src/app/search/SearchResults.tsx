'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { searchSite } from '@/lib/site-search';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = (searchParams.get('q') ?? '').trim().slice(0, 120);
  const results = searchSite(query);

  if (!query) {
    return (
      <div className="border border-gray-200 bg-white p-6 font-sans text-sm text-gray-600">
        Enter a search term in the navbar to find results, trade evidence, and site information.
      </div>
    );
  }

  return (
    <>
      <p className="mb-4 font-sans text-sm text-gray-600">
        {results.length
          ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${query}”`
          : `No results found for “${query}”.`}
      </p>
      {results.length > 0 ? (
        <ul className="divide-y divide-gray-200 border-y border-gray-200 bg-white">
          {results.map((result) => {
            const isExternal = result.href.startsWith('https://');
            return (
              <li key={result.href}>
                <Link
                  href={result.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 p-5 transition-colors hover:bg-[#F8F9FA] sm:p-6"
                >
                  <Search
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-[#C5A059]"
                  />
                  <span>
                    <span className="block font-sans text-base font-semibold text-[#083836] group-hover:text-[#0E5C59]">
                      {result.title}
                    </span>
                    <span className="mt-1 block font-sans text-sm leading-6 text-gray-600">
                      {result.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="border border-gray-200 bg-white p-6 font-sans text-sm text-gray-600">
          Try a different term, such as “results”, “refund”, “reviews”, or “signals”.
        </div>
      )}
    </>
  );
}