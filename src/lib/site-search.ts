export type SearchResult = {
  title: string;
  href: string;
  description: string;
  keywords: string;
};

const searchIndex: SearchResult[] = [
  {
    title: 'OJR Trades FX — Home',
    href: '/',
    description: 'An introduction to transparent forex scalping, trade journaling, and the OJR approach.',
    keywords: 'ojr trades fx forex signals transparent scalping trading journal philosophy invest grow',
  },
  {
    title: 'Profit examples and monthly targets',
    href: '/#profit-examples',
    description: 'Explore the 8–10% monthly target, example returns, and compounded growth estimates.',
    keywords: 'results profit examples returns 8 10 monthly target compounding capital £10k account',
  },
  {
    title: 'How it Works',
    href: '/how-it-works',
    description: 'Learn about the test account, signals, risk parameters, alerts, and onboarding process.',
    keywords: 'signals process how works test account london new york sessions telegram lot size alerts',
  },
  {
    title: 'Trade Evidence and Reviews',
    href: '/evidence',
    description: 'Review logged trades, entries, exits, pips, journal evidence, and client testimonials.',
    keywords: 'reviews evidence trade journal verified log entry exit stop loss take profit pips testimonials',
  },
  {
    title: 'Test Account Guarantee',
    href: '/guarantee',
    description: 'Read the test-account refund conditions, including the three consecutive losing trades policy.',
    keywords: 'guarantee refund risk reversal test account three 3 consecutive losses account failure reimbursement',
  },
  {
    title: 'Test Account Enquiry',
    href: '/#test-account',
    description: 'Find the next steps for enquiring about a protected test account.',
    keywords: 'start join enquire contact test account protected account',
  },
  {
    title: 'Terms and Conditions',
    href: '/terms',
    description: 'Read the service terms, risk disclosure, refund policy, and account conditions.',
    keywords: 'terms conditions legal risk disclosure refund policy trading market risk',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
    description: 'Learn how personal, financial, and transaction data is handled and protected.',
    keywords: 'privacy personal data financial transaction information records security',
  },
  {
    title: 'Instagram Trade Journal',
    href: 'https://instagram.com/ojrtradesfx',
    description: 'Visit the public Instagram journal for trade highlights and session updates.',
    keywords: 'instagram social verified journal highlights stories updates',
  },
];

function normalize(value: string) {
  return value.toLocaleLowerCase().replace(/[^a-z0-9%£]+/g, ' ').trim();
}

export function searchSite(query: string): SearchResult[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return searchIndex
    .map((result) => {
      const title = normalize(result.title);
      const content = normalize(`${result.description} ${result.keywords}`);
      const matches = terms.every((term) => title.includes(term) || content.includes(term));
      const score = terms.reduce(
        (total, term) => total + (title.includes(term) ? 2 : content.includes(term) ? 1 : 0),
        0,
      );
      return { result, matches, score };
    })
    .filter(({ matches }) => matches)
    .sort((a, b) => b.score - a.score)
    .map(({ result }) => result);
}
