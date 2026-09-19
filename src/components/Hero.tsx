import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookMarked, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/marketingData';

interface HeroProps {
  onWorkWithMeClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWorkWithMeClick, onViewWorkClick }) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#12100E]" id="hero">
      {/* Background Image Container with Luxury Editorial Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury literary workspace with hardcover volumes"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform motion-safe:transition-transform motion-safe:duration-10000 hover:scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Vignette & Scrim for Optimal Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/70 to-[#12100E]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12100E]/90 via-[#12100E]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 md:py-40">
        <div className="max-w-3xl">
          {/* Subtle Credibility Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-stone-400/25 bg-stone-900/60 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-xs font-medium tracking-widest uppercase text-stone-200">
              Elliot Shepherd Creative • Literary Eminence & Editorial Campaign Direction
            </span>
          </motion.div>

          {/* Strong Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#FAF9F6] font-normal tracking-tight leading-[1.15] mb-6"
          >
            Elevating Books Into <span className="italic font-light text-stone-200">Enduring</span> Literary Success.
          </motion.h1>

          {/* Short Professional Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-2xl mb-10"
          >
            Bespoke marketing campaigns, targeted reader visibility, and strategic branding crafted exclusively for authors ready to expand their readership and sustain long-term book sales.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
          >
            <button
              onClick={onWorkWithMeClick}
              id="hero-cta-work-with-me"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase bg-[#FAF9F6] text-[#191614] hover:bg-stone-200 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <span>Work With Me</span>
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onViewWorkClick}
              id="hero-cta-view-work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase text-[#FAF9F6] border border-stone-400/40 hover:border-white hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
            >
              <BookMarked className="w-4 h-4 mr-2.5 text-stone-300" />
              <span>View My Work</span>
            </button>
          </motion.div>

          {/* Quiet Trust Metrics Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-stone-700/40 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400">Campaign Focus</p>
              <p className="text-sm font-medium text-stone-200 mt-1">Fiction, Non-Fiction & Memoirs</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400">Strategy Model</p>
              <p className="text-sm font-medium text-stone-200 mt-1">Tailored Author Roadmaps</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs uppercase tracking-widest text-stone-400">Readership Approach</p>
              <p className="text-sm font-medium text-stone-200 mt-1">Direct-to-Reader Retention</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
