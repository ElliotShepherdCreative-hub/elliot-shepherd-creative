import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { FEATURED_REVIEW_DATA } from '../data/marketingData';

export const FeaturedReview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#191614] text-[#FAF9F6] relative overflow-hidden" id="featured-review">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8E4B28]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade-In & Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-stone-700 bg-stone-900/80 backdrop-blur-md mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium tracking-widest uppercase text-stone-300">
              Verified Client Review Spotlight
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight text-white">
            Editorial Calibre & Trustworthy Execution
          </h2>
        </motion.div>

        {/* Featured Testimonial Card with Slide-Up */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#221E1B] border border-stone-700/60 rounded-sm p-8 sm:p-12 md:p-14 shadow-2xl"
          id="featured-testimonial-card"
        >
          {/* Decorative Quote Icon */}
          <div className="absolute top-6 right-8 text-stone-700/40 select-none">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10">
            {/* Rating Stars & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-800">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-stone-300">
                  5.0 / 5.0 Rating
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{FEATURED_REVIEW_DATA.dateVerified}</span>
              </div>
            </div>

            {/* Primary Quote */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-stone-100 leading-relaxed sm:leading-relaxed mb-8">
              "{FEATURED_REVIEW_DATA.quote}"
            </blockquote>

            {/* Attribution & Campaign Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-stone-800">
              <div>
                <p className="text-base font-serif font-semibold text-white">
                  {FEATURED_REVIEW_DATA.authorAttribution}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  {FEATURED_REVIEW_DATA.subtext}
                </p>
                <p className="text-xs font-mono text-[#8E4B28] mt-2">
                  Scope: {FEATURED_REVIEW_DATA.campaignScope}
                </p>
              </div>

              {/* Delivery Pillars Checklist */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Verified Campaign Standards
                </p>
                {FEATURED_REVIEW_DATA.deliveryPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
