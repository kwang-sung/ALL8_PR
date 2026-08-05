import React, { useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { SpeakerProfileSection } from './components/SpeakerProfileSection';
import { LastOneStorySection } from './components/LastOneStorySection';
import { MarketScaleSection } from './components/MarketScaleSection';
import { DualMarketCurriculum } from './components/DualMarketCurriculum';
import { AttendeeBenefitsSection } from './components/AttendeeBenefitsSection';
import { BottomCTASection } from './components/BottomCTASection';
import { Footer } from './components/Footer';

export default function App() {
  const [seatsLeft] = useState<number>(12);

  const handleApply = () => {
    window.open('https://open.kakao.com/o/gKWnrBDg', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-orange-500 selection:text-zinc-950">
      {/* Sticky Header Navigation */}
      <HeaderBanner onApplyClick={handleApply} seatsLeft={seatsLeft} />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onApplyClick={handleApply} />

        {/* STEP 01 & 02: Special Lecture Intro & Brand Resell Concept */}
        <ProblemSolutionSection />

        {/* Guest Speaker Profile Card matching uploaded portrait */}
        <SpeakerProfileSection onApplyClick={handleApply} />

        {/* STEP 03: 55세 다시 시작한 이야기 & 누적 100억 Growth Graph */}
        <LastOneStorySection />

        {/* STEP 04, 05, 06: Global Market Expansion & Market Scale Chart */}
        <MarketScaleSection />

        {/* STEP 07 & 08: Realtime Execution & Dual Market Strategy */}
        <DualMarketCurriculum />

        {/* STEP 09: Attendee Benefits & Free Program Access */}
        <AttendeeBenefitsSection onApplyClick={handleApply} />

        {/* Final CTA Section */}
        <BottomCTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
