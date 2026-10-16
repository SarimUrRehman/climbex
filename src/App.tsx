/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { BeforeAfterGallery } from './components/BeforeAfterGallery.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { ServiceAreaMap } from './components/ServiceAreaMap.tsx';
import { QuoteContactSection } from './components/QuoteContactSection.tsx';
import { FinalCtaBanner } from './components/FinalCtaBanner.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileFloatingBar } from './components/MobileFloatingBar.tsx';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('Residential Window Cleaning');

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-[#070D19] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Sticky Navbar */}
      <Navbar onQuoteClick={scrollToQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onQuoteClick={scrollToQuote} />

        {/* 3. Trust Bar with Animated Counters */}
        <TrustBar />

        {/* 4. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs onQuoteClick={scrollToQuote} />

        {/* 6. Before & After Gallery */}
        <BeforeAfterGallery />

        {/* 7. Google 5.0 Reviews Section */}
        <ReviewsSection />

        {/* 8. Service Area & Toronto Map */}
        <ServiceAreaMap onQuoteClick={scrollToQuote} />

        {/* 9. Quote & Contact Form */}
        <QuoteContactSection preselectedService={preselectedService} />

        {/* 10. Final CTA Banner */}
        <FinalCtaBanner onQuoteClick={scrollToQuote} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Call & Quote Action on Mobile */}
      <MobileFloatingBar onQuoteClick={scrollToQuote} />
    </div>
  );
}
