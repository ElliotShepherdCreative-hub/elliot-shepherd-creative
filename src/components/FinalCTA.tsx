import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onStartCampaignClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartCampaignClick }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#191614] text-[#FAF9F6] overflow-hidden">
      {/* Editorial Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8E4B28]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-stone-700 bg-stone-900/90 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-xs font-medium tracking-widest uppercase text-stone-300">
            Accepting Selected Author Campaigns
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          Ready to Give Your Book the Visibility It Deserves?
        </h2>

        <p className="text-base sm:text-xl text-stone-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Let’s discuss your manuscript, release timeline, and target readership to build a promotional roadmap tailored to your goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartCampaignClick}
            id="final-cta-start-campaign-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-sm text-sm font-semibold uppercase tracking-wider bg-[#FAF9F6] text-[#191614] hover:bg-stone-200 transition-all shadow-xl hover:shadow-2xl group"
          >
            <span>Start Your Campaign</span>
            <ArrowRight className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-stone-400">
          <span className="flex items-center">
            <BookOpen className="w-3.5 h-3.5 mr-1.5 text-stone-400" />
            No obligation initial assessment
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Direct response within 24-48 business hours</span>
        </div>
      </div>
    </section>
  );
};
