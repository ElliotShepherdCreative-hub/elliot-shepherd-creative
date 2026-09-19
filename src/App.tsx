import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CaseStudies } from './components/CaseStudies';
import { FeaturedReview } from './components/FeaturedReview';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { ResultsImpact } from './components/ResultsImpact';
import { EditorialFAQ } from './components/EditorialFAQ';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [selectedProjectForContact, setSelectedProjectForContact] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedProjectForContact(`Inquiry for Service: ${service.title}`);
    scrollToSection('contact');
  };

  const handleInquireProject = (projectTitle: string) => {
    setSelectedProjectForContact(`Campaign Strategy Inquiry: ${projectTitle}`);
    scrollToSection('contact');
  };

  const handleInquireTopic = (topic: string) => {
    setSelectedProjectForContact(`Editorial Strategy Inquiry: ${topic}`);
    scrollToSection('contact');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF9F6] text-[#191614] flex flex-col font-sans selection:bg-[#2C241E] selection:text-[#FAF9F6] transition-colors duration-300">
        {/* Viewport Scroll Progress Bar */}
        <ScrollProgress />

        {/* Navigation Header */}
        <Navbar onContactClick={() => scrollToSection('contact')} />

        {/* 1. Hero / Main Banner */}
        <Hero
          onWorkWithMeClick={() => scrollToSection('contact')}
          onViewWorkClick={() => scrollToSection('portfolio')}
        />

        {/* 2. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Recent Work / Portfolio Gallery */}
        <Portfolio onInquireProject={handleInquireProject} />

        {/* 3b. Detailed Case Studies (Launch-to-Bestseller Trajectory) */}
        <CaseStudies onInquireCampaign={handleInquireTopic} />

        {/* 5. Featured Review Spotlight (Recreated from design & review reference) */}
        <FeaturedReview />

        {/* 4. Author Testimonials (Dedicated Section) */}
        <Testimonials />

        {/* 6. About Section */}
        <About />

        {/* 7. Results / Impact (Factual Strategic Deliverables & Methodology) */}
        <ResultsImpact />

        {/* 8. Editorial Insights FAQ (Authority Building & Strategic Clarity) */}
        <EditorialFAQ onInquireTopic={handleInquireTopic} />

        {/* 9. Final CTA Banner */}
        <FinalCTA onStartCampaignClick={() => scrollToSection('contact')} />

        {/* 10. Contact Section */}
        <Contact prefilledProject={selectedProjectForContact} />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
