import React from 'react';
import { METHODOLOGY_STEPS } from '../data/marketingData';
import { CheckSquare2, FileText, Target, Users, BookMarked, Layers } from 'lucide-react';

export const ResultsImpact: React.FC = () => {
  const factualDeliverables = [
    {
      title: 'Targeted Media & Literary Outreach',
      description: 'Curated pitch delivery to verified literary podcasts, book bloggers, culture reviewers, and regional press.',
      icon: Target
    },
    {
      title: 'Genre Newsletter Features',
      description: 'Dedicated placements across verified reader newsletter networks with genuine book buyers.',
      icon: FileText
    },
    {
      title: 'Retail Search & Discovery Indexing',
      description: 'Category restructuring and algorithmic optimization across major book retailers and search indexes.',
      icon: BookMarked
    },
    {
      title: 'Advance Reader Copy (ARC) Mobilization',
      description: 'Coordinated ARC reviewer distribution to ensure verified launch reviews and early reader advocacy.',
      icon: Users
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#E8E4DF]" id="approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8E4B28] mb-3">
            <Layers className="w-4 h-4 text-[#8E4B28]" />
            <span>Methodology & Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191614] font-normal tracking-tight">
            How Campaigns Achieve Real Book Visibility
          </h2>
          <div className="w-12 h-0.5 bg-[#8E4B28] mx-auto mt-6 mb-6" />
          <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed">
            We do not promise artificial shortcuts or manufactured virality. Instead, we execute a disciplined, four-phase campaign architecture engineered for sustainable reader discovery.
          </p>
        </div>

        {/* 4-Step Strategic Methodology Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-sm p-7 border border-[#E8E4DF] shadow-[0_4px_16px_-8px_rgba(0,0,0,0.05)] relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-serif text-[#8E4B28] block mb-4">
                  {step.step}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#191614] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E4DF] text-[10px] font-mono uppercase tracking-wider text-stone-400">
                Phase {step.step} Objective
              </div>
            </div>
          ))}
        </div>

        {/* Concrete Campaign Deliverables Grid */}
        <div className="bg-white rounded-sm border border-[#E8E4DF] p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4B28] block mb-1">
              Factual Scope & Transparency
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#191614]">
              Every Campaign Delivers Concrete, Auditable Assets
            </h3>
            <p className="text-sm text-[#5C554E] mt-2">
              All promotional activities are tracked and reported with full author visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factualDeliverables.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-5 rounded-sm bg-[#FAF9F6] border border-[#E8E4DF]">
                  <div className="w-10 h-10 rounded-sm bg-white border border-[#E8E4DF] flex items-center justify-center text-[#8E4B28] mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-[#191614] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5C554E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
