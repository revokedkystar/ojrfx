import React from 'react';
import Hero from '@/components/Hero';
import GrowWithMe from '@/components/GrowWithMe';
import ProfitExamples from '@/components/ProfitExamples';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Guarantee from '@/components/Guarantee';
import InstagramCallout from '@/components/InstagramCallout';
import AnimatedSection from '@/components/AnimatedSection';
import ScrollVideo from '@/components/ScrollVideo';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollVideo />

      {/* Hero Section */}
      <AnimatedSection direction="fade">
        <Hero />
      </AnimatedSection>

      {/* Grow With Me Philosophy */}
      <AnimatedSection delay={100}>
        <GrowWithMe />
      </AnimatedSection>

      {/* Interactive Capital Scrubber & Profit Examples */}
      <AnimatedSection delay={150}>
        <ProfitExamples />
      </AnimatedSection>

      {/* Exact Verified Operating Stats */}
      <AnimatedSection delay={100}>
        <Stats />
      </AnimatedSection>

      {/* Three-Step Onboarding Process */}
      <AnimatedSection delay={150}>
        <Process />
      </AnimatedSection>

      {/* Risk-Reversal Test Account Guarantee */}
      <AnimatedSection delay={100}>
        <Guarantee />
      </AnimatedSection>

      {/* Public Instagram Verification & Highlight Reel */}
      <AnimatedSection delay={150}>
        <InstagramCallout />
      </AnimatedSection>
    </div>
  );
}
