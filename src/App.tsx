/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { InteractiveBanner } from './components/InteractiveBanner';
import { AppSimulatorSection } from './components/AppSimulatorSection';
import { FeaturedLinks } from './components/FeaturedLinks';
import { WhatsAppCard } from './components/WhatsAppCard';
import { AboutEasyByz } from './components/AboutEasyByz';
import { PartnersSection } from './components/PartnersSection';
import { CustomSystemsSection } from './components/CustomSystemsSection';
import { BusinessRulesComparison } from './components/BusinessRulesComparison';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { SimulatorModal } from './components/SimulatorModal';
import { DiagnosticModal } from './components/DiagnosticModal';
import { AboutModal } from './components/AboutModal';
import { SchoolPartnershipSection } from './components/SchoolPartnershipSection';
import { SimulationApp } from './types';

export default function App() {
  const [selectedApp, setSelectedApp] = useState<SimulationApp | null>(null);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleScrollToApps = () => {
    const el = document.getElementById('simuladores-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070e17] text-[#e2e8f0] relative selection:bg-[#00f0ff] selection:text-black font-sans py-0 sm:py-6 md:py-10">
      {/* Background ambient lighting for desktop view */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[160px]" />
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#00ddff]/6 rounded-full blur-[170px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[650px] h-[500px] bg-[#00f0ff]/8 rounded-full blur-[150px]" />
      </div>

      {/* Main Centered Mobile-First Frame (with border/contour and dedicated deep black-blue card background on desktop) */}
      <main className="relative z-10 w-full max-w-[500px] mx-auto min-h-screen sm:min-h-0 rounded-none sm:rounded-[36px] bg-[#030303] sm:border-2 sm:border-[#00f0ff]/25 sm:shadow-[0_0_50px_-12px_rgba(0,240,255,0.25)] flex flex-col justify-between overflow-hidden">
        <div className="w-full">
          {/* Top Profile Header */}
          <Header onOpenAbout={() => setIsAboutOpen(true)} />

          {/* Interactive Recommendation / Diagnostic Banner */}
          <InteractiveBanner
            onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
            onScrollToApps={handleScrollToApps}
          />

          {/* Strategic School & Mentor Partnerships Block */}
          <SchoolPartnershipSection />

          {/* Highlighted Partners in Circular Spotlight */}
          <PartnersSection />

          {/* Apps for Simulation (8 custom apps) */}
          <AppSimulatorSection onSelectApp={(app) => setSelectedApp(app)} />

          {/* Custom Tailored Systems & Apps Section */}
          <CustomSystemsSection />

          {/* Business Rules Comparison (Seu Negócio, Suas Regras) */}
          <BusinessRulesComparison />

          {/* Featured Resources & Primary Links */}
          <FeaturedLinks />

          {/* High-Impact WhatsApp Contact Card */}
          <WhatsAppCard />

          {/* Instagram Posts / Visual Feed Spotlight */}
          <InstagramFeed />

          {/* About Easy Byz Creator & Founder Profile */}
          <AboutEasyByz />
        </div>

        {/* Developed By Footer with Centered Logo */}
        <Footer />
      </main>

      {/* Modals & PWA Banner */}
      <SimulatorModal
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
      />

      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onSelectApp={(app) => setSelectedApp(app)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
