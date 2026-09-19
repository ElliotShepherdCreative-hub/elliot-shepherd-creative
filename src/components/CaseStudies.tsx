import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DETAILED_CASE_STUDIES, DetailedCaseStudy, CaseStudyMilestone } from '../data/caseStudiesData';
import { BookCover } from './BookCover';
import { 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Quote, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Sparkles, 
  ChevronRight,
  Library,
  Layers,
  Calendar
} from 'lucide-react';

interface CaseStudiesProps {
  onInquireCampaign?: (studyTitle: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onInquireCampaign }) => {
  const [activeStudyIndex, setActiveStudyIndex] = useState<number>(0);
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const currentStudy: DetailedCaseStudy = DETAILED_CASE_STUDIES[activeStudyIndex];
  const currentPhase: CaseStudyMilestone = currentStudy.timeline[activePhaseIndex] || currentStudy.timeline[0];

  const handleStudyChange = (index: number) => {
    setActiveStudyIndex(index);
    setActivePhaseIndex(0); // Reset to Phase 1 when switching studies
  };

  return (
    <section 
      className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#E8E4DF] relative overflow-hidden" 
      id="case-studies"
      aria-label="Editorial Case Studies and Campaign Journeys"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8E4B28]/10 text-[#8E4B28] text-xs font-semibold uppercase tracking-widest mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Empirical Campaign Dossiers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191614] font-normal tracking-tight">
            Anatomy of a Literary Bestseller
          </h2>
          
          <div className="w-12 h-0.5 bg-[#8E4B28] mt-4 mb-4" />

          <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed">
            Deconstructing the exact chronological trajectory, audience growth architecture, and qualitative outcomes that transform distinguished manuscripts from unnoticed galleys into celebrated national bestsellers.
          </p>
        </motion.div>

        {/* Case Study Archetype Switcher */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-6 border-b border-[#E8E4DF]">
          {DETAILED_CASE_STUDIES.map((study, idx) => {
            const isSelected = activeStudyIndex === idx;
            return (
              <button
                key={study.id}
                onClick={() => handleStudyChange(idx)}
                className={`px-4 py-3 rounded-sm text-xs font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-2 text-left ${
                  isSelected
                    ? 'bg-[#191614] text-[#FAF9F6] shadow-md ring-1 ring-black'
                    : 'bg-white text-stone-700 hover:text-black border border-[#E8E4DF] hover:border-stone-400'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#D48255]' : 'bg-stone-300'}`} />
                <div>
                  <span className="block font-bold">{study.tagline}</span>
                  <span className={`text-[10px] font-mono normal-case block ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                    {study.bookTitle} ({study.pubYear})
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Master Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Top Showcase: Book Presentation, Challenge & Strategic Thesis */}
            <div className="bg-white rounded-sm border border-[#E8E4DF] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Book Presentation Column */}
                <div className="lg:col-span-4 bg-[#181412] p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-800">
                  <div className="w-full flex flex-col items-center z-10">
                    <div className="w-full max-w-[210px] aspect-[3/4.5] shadow-2xl rounded-sm overflow-hidden mb-6">
                      <BookCover
                        title={currentStudy.bookTitle}
                        authorName={currentStudy.authorName}
                        imageUrl={currentStudy.imageUrl}
                        category={currentStudy.genre}
                        coverBgColor={currentStudy.coverBgColor}
                      />
                    </div>
                    <div className="text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/10 text-stone-200 border border-white/15">
                        {currentStudy.publisher}
                      </span>
                      <h4 className="text-white font-serif text-lg mt-2 font-medium">
                        {currentStudy.bookTitle}
                      </h4>
                      <p className="text-xs text-stone-400 font-serif italic">
                        by {currentStudy.authorName}
                      </p>
                    </div>
                  </div>

                  {/* Quick Stat Strip */}
                  <div className="w-full z-10 pt-6 mt-6 border-t border-white/10 grid grid-cols-2 gap-2 text-center">
                    <div className="p-2 bg-white/5 rounded border border-white/5">
                      <div className="text-xs font-mono font-bold text-amber-300">
                        {currentStudy.quantitativeImpact[0].value}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-stone-400">
                        {currentStudy.quantitativeImpact[0].label}
                      </div>
                    </div>
                    <div className="p-2 bg-white/5 rounded border border-white/5">
                      <div className="text-xs font-mono font-bold text-amber-300">
                        {currentStudy.quantitativeImpact[1].value}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-stone-400">
                        {currentStudy.quantitativeImpact[1].label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Strategy Dossier Column */}
                <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8E4B28] mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentStudy.tagline}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-[#191614] font-normal leading-tight mb-4">
                      {currentStudy.title}
                    </h3>

                    {/* Challenge Box */}
                    <div className="mb-6 p-4 rounded-sm bg-stone-50 border-l-3 border-stone-400 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="text-stone-900 block font-serif uppercase tracking-wider text-[11px] mb-1">
                        Initial Strategic Challenge:
                      </strong>
                      {currentStudy.challenge}
                    </div>

                    {/* Strategic Thesis */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                        Campaign Architecture & Strategic Thesis
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                        {currentStudy.strategySummary}
                      </p>
                    </div>
                  </div>

                  {/* Quantitative Impact Highlights Grid */}
                  <div className="pt-6 border-t border-[#E8E4DF] grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {currentStudy.quantitativeImpact.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-[#FAF9F6] p-3 rounded border border-[#E8E4DF]">
                        <div className="text-lg sm:text-xl font-serif font-bold text-[#191614]">
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E4B28] font-semibold mt-0.5">
                          {metric.label}
                        </div>
                        <div className="text-[10px] text-stone-500 line-clamp-2 mt-1">
                          {metric.subtext}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section: The Chronological Milestone Journey (Phase by Phase) */}
            <div className="bg-white rounded-sm border border-[#E8E4DF] p-6 sm:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8E4DF]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8E4B28] mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Chronological Execution Path</span>
                  </div>
                  <h4 className="font-serif text-2xl text-[#191614] font-normal">
                    Campaign Timeline & Critical Milestones
                  </h4>
                </div>

                {/* Phase Selection Tabs */}
                <div className="flex flex-wrap gap-1.5">
                  {currentStudy.timeline.map((phase, pIdx) => {
                    const isPhaseActive = activePhaseIndex === pIdx;
                    return (
                      <button
                        key={phase.phase}
                        onClick={() => setActivePhaseIndex(pIdx)}
                        className={`px-3.5 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                          isPhaseActive
                            ? 'bg-[#191614] text-[#FAF9F6] shadow-sm font-semibold'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                        }`}
                      >
                        <span>{phase.phase}</span>
                        <span className="text-[10px] opacity-70">({phase.timeframe})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Phase Deep Dive */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhase.phase}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                  {/* Left Column: Focus & Tactics */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#8E4B28] block mb-1">
                        {currentPhase.timeframe} • {currentPhase.phase}
                      </span>
                      <h5 className="font-serif text-xl sm:text-2xl text-[#191614] font-medium mb-3">
                        {currentPhase.phaseTitle}
                      </h5>
                      <p className="text-xs sm:text-sm text-stone-600 bg-stone-50 p-3.5 rounded border-l-2 border-[#8E4B28] leading-relaxed">
                        <strong>Core Objective:</strong> {currentPhase.focus}
                      </p>
                    </div>

                    <div>
                      <h6 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">
                        Strategic Tactics Deployed
                      </h6>
                      <ul className="space-y-2.5">
                        {currentPhase.tactics.map((tactic, tIdx) => (
                          <li key={tIdx} className="flex items-start text-xs sm:text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-[#8E4B28] shrink-0 mr-2.5 mt-0.5" />
                            <span>{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Key Milestones Reached & Metrics Snapshot */}
                  <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-sm border border-[#E8E4DF] flex flex-col justify-between">
                    <div>
                      <h6 className="text-xs font-mono uppercase tracking-wider text-[#191614] font-bold mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#8E4B28]" />
                        <span>Key Milestones Captured</span>
                      </h6>
                      <div className="space-y-3">
                        {currentPhase.keyMilestones.map((ms, mIdx) => (
                          <div key={mIdx} className="p-3 bg-white rounded border border-[#E8E4DF] text-xs text-stone-700 leading-snug">
                            <span className="font-serif font-bold text-[#8E4B28] mr-1.5">✓</span>
                            {ms}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Snapshot Metrics */}
                    <div className="pt-6 mt-6 border-t border-[#E8E4DF]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-2">
                        Phase Metrics Snapshot
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {currentPhase.metricsSnapshot.map((metric, sIdx) => (
                          <div key={sIdx} className="bg-white p-2.5 rounded border border-[#E8E4DF] text-center">
                            <div className="font-serif font-bold text-xs sm:text-sm text-[#191614]">
                              {metric.value}
                            </div>
                            <div className="text-[9px] font-mono text-stone-500 uppercase tracking-tighter truncate mt-0.5">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Audience Growth Pillars & Qualitative Outcomes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Audience Growth Pillars (6 cols) */}
              <div className="lg:col-span-6 bg-white rounded-sm border border-[#E8E4DF] p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8E4B28] mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Reach Multipliers</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#191614] mb-6">
                  Audience Growth Architecture
                </h4>

                <div className="space-y-4">
                  {currentStudy.audienceGrowthPillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="p-4 rounded-sm bg-[#FAF9F6] border border-[#E8E4DF]">
                      <div className="flex items-center justify-between mb-1.5">
                        <h5 className="font-serif text-sm font-bold text-[#191614]">
                          {pillar.title}
                        </h5>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-[#8E4B28] border border-[#E8E4DF]">
                          {pillar.stat}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualitative Accolades & Institutional Stature (6 cols) */}
              <div className="lg:col-span-6 bg-white rounded-sm border border-[#E8E4DF] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8E4B28] mb-1">
                    <Library className="w-3.5 h-3.5" />
                    <span>Critical Prestige</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#191614] mb-6">
                    Qualitative Outcomes & Recognition
                  </h4>

                  {/* Selected Critical Quotes */}
                  <div className="space-y-3 mb-6">
                    {currentStudy.qualitativeOutcomes.criticalPraise.map((praise, prIdx) => (
                      <div key={prIdx} className="p-3.5 rounded bg-stone-50 border-l-2 border-[#8E4B28] text-xs text-stone-700 italic">
                        <strong className="text-stone-900 not-italic block font-serif text-[11px] mb-1">
                          {praise.publication}:
                        </strong>
                        "{praise.quote}"
                      </div>
                    ))}
                  </div>

                  {/* Honors & Institutional Adoptions list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#FAF9F6] p-3.5 rounded border border-[#E8E4DF]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block mb-2">
                        Honors & Awards
                      </span>
                      <ul className="space-y-1.5 text-[11px] text-stone-700">
                        {currentStudy.qualitativeOutcomes.honorsAndAwards.slice(0, 3).map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5">
                            <span className="text-[#8E4B28] font-bold">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#FAF9F6] p-3.5 rounded border border-[#E8E4DF]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block mb-2">
                        Institutional Adoptions
                      </span>
                      <ul className="space-y-1.5 text-[11px] text-stone-700">
                        {currentStudy.qualitativeOutcomes.institutionalAdoptions.map((ad, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-1.5">
                            <span className="text-[#8E4B28] font-bold">•</span>
                            <span>{ad}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Author Testimonial Quote */}
                <div className="mt-6 pt-6 border-t border-[#E8E4DF]">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-[#8E4B28] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-stone-600 italic leading-relaxed mb-2">
                        "{currentStudy.authorTestimonial.quote}"
                      </p>
                      <p className="text-xs font-serif font-bold text-[#191614]">
                        {currentStudy.authorTestimonial.author}
                      </p>
                      <p className="text-[10px] font-mono text-stone-500">
                        {currentStudy.authorTestimonial.titleOrRole}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Strategic Action Banner */}
            <div className="bg-[#191614] rounded-sm p-6 sm:p-8 text-stone-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <span className="text-amber-400 text-xs font-mono uppercase tracking-widest block mb-1">
                  Blueprint for Your Manuscript
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  Ready to architect a comparable trajectory for your upcoming title?
                </h4>
                <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
                  Every book possesses unique critical levers. We map out advance trade seeding, indie bookstore advocacy, and algorithmic velocity tailored to your release window.
                </p>
              </div>

              <button
                onClick={() => {
                  if (onInquireCampaign) {
                    onInquireCampaign(`Case Study Strategy Request: ${currentStudy.bookTitle} (${currentStudy.tagline})`);
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-[#FAF9F6] text-[#191614] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm gap-2"
              >
                <span>Inquire for Similar Campaign</span>
                <ArrowRight className="w-4 h-4 text-[#8E4B28]" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
