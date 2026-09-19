import React from 'react';
import { ABOUT_IMAGE } from '../data/marketingData';
import { BookMarked, Compass, CheckCircle2, Award, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#E8E4DF]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Editorial Offset Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-[#E8E4DF]">
              <img
                src={ABOUT_IMAGE}
                alt="Editorial publishing consultation desk with manuscript proofs"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Background Decorative Framing */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-full h-full border-2 border-[#8E4B28]/20 rounded-sm -z-0" />

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-[#191614] text-[#FAF9F6] p-4 sm:p-5 rounded-sm shadow-xl z-20 max-w-[220px]">
              <div className="flex items-center space-x-2 text-amber-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-[11px] font-mono uppercase tracking-wider">Literary Distinction</span>
              </div>
              <p className="text-xs text-stone-300 font-serif leading-snug">
                Dedicated exclusively to authors and independent publishing excellence.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8E4B28] mb-3">
              <Compass className="w-4 h-4 text-[#8E4B28]" />
              <span>About Elliot Shepherd Creative</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191614] font-normal tracking-tight mb-6">
              A Bespoke Advisory for Literary Eminence & Campaign Direction.
            </h2>

            <div className="w-12 h-0.5 bg-[#8E4B28] mb-8" />

            <div className="space-y-5 text-base sm:text-lg text-[#5C554E] leading-relaxed">
              <p>
                Writing a book is an act of prolonged intellectual courage. Yet in today's crowded publishing landscape, remarkable works frequently go unnoticed simply because they lack strategic, dignified promotional execution.
              </p>
              <p>
                At <strong>Elliot Shepherd Creative</strong>, we bridge that divide. We do not apply generic commercial gimmicks or vanity social boosts. Instead, we treat your title with the same editorial respect with which you authored it—architecting intelligent, reader-focused campaigns across 45 specialized disciplines that cultivate critical visibility, algorithmic discovery, and sustained readership.
              </p>
              <p>
                Whether you are launching a debut literary novel, releasing an investigative non-fiction monograph, or seeking to revitalize a dormant backlist catalogue, we provide peerless strategic clarity and hands-on campaign execution.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="mt-10 pt-8 border-t border-[#E8E4DF] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#8E4B28] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#191614]">
                    Genre-Targeted Strategy
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Custom reader profiles calibrated specifically for your genre, avoiding wasted broadcast marketing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#8E4B28] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#191614]">
                    Direct Reader Ownership
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Building subscriber lists and reader relationships you own indefinitely, independent of social algorithms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#8E4B28] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#191614]">
                    Pristine Editorial Aesthetics
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Every press release, social asset, and review pitch mirrors the typography and sophistication of your book.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#8E4B28] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#191614]">
                    Complete Transparency
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Clear weekly campaign milestones, placement records, and honest assessments of timeline and traction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
