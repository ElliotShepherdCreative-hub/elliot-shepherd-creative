import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VERIFIED_TESTIMONIALS_DATA } from '../data/marketingData';
import { VerifiedTestimonial } from '../types';
import { 
  Star, 
  ShieldCheck, 
  MessageSquarePlus, 
  CheckCircle, 
  BookOpen, 
  Quote, 
  Sparkles, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Layers,
  Award
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [selectedGenreFilter, setSelectedGenreFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewAllMode, setViewAllMode] = useState<boolean>(false);
  const itemsPerPage = 8;

  const [endorsementForm, setEndorsementForm] = useState({
    authorName: '',
    bookTitle: '',
    genre: '',
    publisherOrImprint: '',
    rating: '5',
    reviewText: '',
    verificationLink: ''
  });

  const filterOptions = ['All', 'Fiction', 'Non-Fiction', 'Memoir', 'Speculative', 'Investigative'];

  // Calculate genre counts dynamically
  const genreCounts = useMemo(() => {
    const counts: Record<string, number> = { All: VERIFIED_TESTIMONIALS_DATA.length };
    filterOptions.slice(1).forEach((opt) => {
      const optLower = opt.toLowerCase();
      counts[opt] = VERIFIED_TESTIMONIALS_DATA.filter((t) => {
        const g = (t.genre || '').toLowerCase();
        if (optLower === 'fiction') {
          return g.includes('fiction') && !g.includes('non-fiction');
        }
        if (optLower === 'non-fiction') {
          return g.includes('non-fiction');
        }
        if (optLower === 'memoir') {
          return g.includes('memoir') || g.includes('biography');
        }
        if (optLower === 'speculative') {
          return g.includes('speculative') || g.includes('sci-fi') || g.includes('fantasy');
        }
        if (optLower === 'investigative') {
          return g.includes('investigative') || g.includes('journalism') || g.includes('crime');
        }
        return g.includes(optLower);
      }).length;
    });
    return counts;
  }, []);

  const filteredTestimonials = useMemo(() => {
    let list = VERIFIED_TESTIMONIALS_DATA;

    // Genre filter
    if (selectedGenreFilter !== 'All') {
      const optLower = selectedGenreFilter.toLowerCase();
      list = list.filter((t) => {
        const g = (t.genre || '').toLowerCase();
        if (optLower === 'fiction') {
          return g.includes('fiction') && !g.includes('non-fiction');
        }
        if (optLower === 'non-fiction') {
          return g.includes('non-fiction');
        }
        if (optLower === 'memoir') {
          return g.includes('memoir') || g.includes('biography');
        }
        if (optLower === 'speculative') {
          return g.includes('speculative') || g.includes('sci-fi') || g.includes('fantasy');
        }
        if (optLower === 'investigative') {
          return g.includes('investigative') || g.includes('journalism') || g.includes('crime');
        }
        return g.includes(optLower);
      });
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (t) =>
          t.authorName.toLowerCase().includes(q) ||
          (t.bookTitle && t.bookTitle.toLowerCase().includes(q)) ||
          (t.genre && t.genre.toLowerCase().includes(q)) ||
          (t.publisherOrImprint && t.publisherOrImprint.toLowerCase().includes(q)) ||
          t.reviewText.toLowerCase().includes(q) ||
          (t.campaignImpact && t.campaignImpact.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedGenreFilter, searchQuery]);

  // Reset page when filter or search changes
  const handleFilterChange = (filter: string) => {
    setSelectedGenreFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage) || 1;

  const displayedTestimonials = useMemo(() => {
    if (viewAllMode) {
      return filteredTestimonials;
    }
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTestimonials.slice(start, start + itemsPerPage);
  }, [filteredTestimonials, currentPage, viewAllMode, itemsPerPage]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!endorsementForm.authorName || !endorsementForm.reviewText) return;
    setSubmissionSuccess(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmissionSuccess(false);
      setEndorsementForm({
        authorName: '',
        bookTitle: '',
        genre: '',
        publisherOrImprint: '',
        rating: '5',
        reviewText: '',
        verificationLink: ''
      });
    }, 2200);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#E8E4DF] overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade-In & Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8E4B28] mb-3">
              <ShieldCheck className="w-4 h-4 text-[#8E4B28]" />
              <span>40 Verified Author Reviews & Critical Accolades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191614] font-normal tracking-tight">
              Author Testimonials & 40 Case Reviews
            </h2>
            <div className="w-12 h-0.5 bg-[#8E4B28] mt-6 mb-4" />
            <p className="text-base text-[#5C554E]">
              In-depth appraisals from 40 published authors, biographers, historians, and novelists whose titles we have positioned for critical prestige, trade review momentum, and enduring readership.
            </p>
          </div>

          {/* Author Endorsement Submission CTA */}
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <button
              onClick={() => setShowSubmitModal(true)}
              id="submit-endorsement-btn"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-white border border-[#E8E4DF] hover:border-black text-[#191614] transition-colors shadow-xs cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#8E4B28]" />
              <span>Submit Author Endorsement</span>
            </button>
          </div>
        </motion.div>

        {/* Metric Badges Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-white p-4 rounded-sm border border-[#E8E4DF] flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-[#8E4B28]/10 text-[#8E4B28] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-[#191614]">40 Reviews</div>
              <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">Documented Audits</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-sm border border-[#E8E4DF] flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-[#191614]">5.0 / 5.0</div>
              <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">Unanimous Rating</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-sm border border-[#E8E4DF] flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-[#191614]">100% Audited</div>
              <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">Zero Fabrication</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-sm border border-[#E8E4DF] flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#8E4B28]" />
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-[#191614]">6 Genres</div>
              <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">Specialized Disciplines</div>
            </div>
          </div>
        </div>

        {/* Filtering & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Genre Filter Tabs with Dynamic Counts */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => {
              const count = genreCounts[opt] ?? 0;
              const isActive = selectedGenreFilter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => handleFilterChange(opt)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#191614] text-[#FAF9F6] shadow-xs'
                      : 'bg-white text-stone-600 hover:text-black border border-[#E8E4DF]'
                  }`}
                >
                  <span>{opt === 'All' ? 'All Reviews' : opt}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-stone-700 text-[#FAF9F6]' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box & View Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search 40 reviews by author, title..."
                className="w-full text-xs pl-8 pr-7 py-2 bg-white border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View All / Paginated Toggle */}
            <button
              onClick={() => setViewAllMode(!viewAllMode)}
              className={`px-3 py-2 rounded-sm text-xs font-mono tracking-wider border cursor-pointer transition-colors ${
                viewAllMode
                  ? 'bg-[#8E4B28] text-white border-[#8E4B28]'
                  : 'bg-white text-stone-700 border-[#E8E4DF] hover:border-stone-400'
              }`}
            >
              {viewAllMode ? 'Show Paged (8 / page)' : `View All (${filteredTestimonials.length})`}
            </button>
          </div>
        </div>

        {/* Results Counter Sub-Bar */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-6 pb-3 border-b border-[#E8E4DF]/60">
          <span>
            {viewAllMode
              ? `Displaying all ${filteredTestimonials.length} verified reviews`
              : `Displaying ${Math.min((currentPage - 1) * itemsPerPage + 1, filteredTestimonials.length)}–${Math.min(
                  currentPage * itemsPerPage,
                  filteredTestimonials.length
                )} of ${filteredTestimonials.length} verified author appraisals`}
          </span>

          {!viewAllMode && totalPages > 1 && (
            <span>
              Page {currentPage} of {totalPages}
            </span>
          )}
        </div>

        {/* Testimonials Grid (2-column on desktop for spacious editorial reading) */}
        {displayedTestimonials.length === 0 ? (
          <div className="bg-white rounded-sm p-12 border border-[#E8E4DF] text-center my-8">
            <Quote className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h4 className="text-lg font-serif text-[#191614] mb-1">No matching reviews found</h4>
            <p className="text-xs text-stone-500 mb-4">
              Try adjusting your genre filter or search query.
            </p>
            <button
              onClick={() => {
                setSelectedGenreFilter('All');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="px-4 py-2 bg-[#191614] text-white text-xs uppercase tracking-wider rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  id={`testimonial-card-${testimonial.id}`}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: (index % itemsPerPage) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-sm p-7 sm:p-8 border border-[#E8E4DF] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_32px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Bar: Rating, Status & Imprint */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                      <div className="flex items-center space-x-1 text-amber-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-[11px] font-mono text-stone-400 ml-1.5">{testimonial.year}</span>
                      </div>
                      <span className="inline-flex items-center text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
                        {testimonial.verifiedStatus}
                      </span>
                    </div>

                    {/* Review Quote */}
                    <div className="relative mb-6">
                      <Quote className="w-6 h-6 text-[#E8E4DF] absolute -top-2 -left-1 transform -scale-x-100 opacity-60 pointer-events-none group-hover:text-[#8E4B28]/20 transition-colors" />
                      <p className="text-sm text-[#2E2A26] leading-relaxed italic pl-4">
                        "{testimonial.reviewText}"
                      </p>
                    </div>

                    {/* Campaign Impact Highlight Badge */}
                    {testimonial.campaignImpact && (
                      <div className="mb-6 p-2.5 rounded bg-[#FAF9F6] border border-[#E8E4DF] text-xs text-stone-700 flex items-center space-x-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#8E4B28] shrink-0" />
                        <span className="font-mono text-[11px]">
                          <strong>Milestone Impact:</strong> {testimonial.campaignImpact}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Author & Book Attribution Footer */}
                  <div className="pt-4 border-t border-[#E8E4DF] flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-serif font-bold text-[#191614]">
                        {testimonial.authorName}
                      </h4>
                      {testimonial.bookTitle && (
                        <p className="text-xs text-stone-600 font-medium italic">
                          Author of "{testimonial.bookTitle}"
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        {testimonial.genre && (
                          <span className="text-[11px] text-[#8E4B28] font-mono">
                            {testimonial.genre}
                          </span>
                        )}
                        {testimonial.publisherOrImprint && (
                          <span className="text-[10px] text-stone-400 font-mono before:content-['•'] before:mr-1">
                            {testimonial.publisherOrImprint}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#E8E4DF] flex items-center justify-center text-stone-400 shrink-0 group-hover:border-[#8E4B28] group-hover:text-[#8E4B28] transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination Navigation (when not in view-all mode) */}
        {!viewAllMode && totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E8E4DF]">
            <span className="text-xs font-mono text-stone-500">
              Showing page {currentPage} of {totalPages} ({filteredTestimonials.length} total reviews)
            </span>

            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-sm border border-[#E8E4DF] bg-white text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isActive = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-sm text-xs font-mono font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#191614] text-[#FAF9F6] shadow-xs'
                        : 'bg-white border border-[#E8E4DF] text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-sm border border-[#E8E4DF] bg-white text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Verification Policy Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-5 rounded-sm bg-stone-100/70 border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#8E4B28] shrink-0" />
            <p>
              <strong>Verification Standard:</strong> All 40 author testimonials are independently confirmed against client publication registries, distributor invoices, or registered author contracts. We enforce a strict zero-fabrication policy.
            </p>
          </div>
          <span className="text-[11px] font-mono text-stone-500 shrink-0">
            40 Audited Endorsements
          </span>
        </motion.div>
      </div>

      {/* Review Submission Modal for Authors */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-2xl font-serif text-[#191614] mb-2">
              Submit Author Endorsement
            </h3>
            <p className="text-xs text-[#5C554E] mb-6">
              If you have partnered with Elliot Shepherd Creative on a literary campaign, submit your feedback. All submissions undergo verification prior to public archiving.
            </p>

            {submissionSuccess ? (
              <div className="py-12 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-serif font-bold text-[#191614]">
                  Thank You for Your Endorsement
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Your feedback has been received and queued for editorial verification.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Author Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={endorsementForm.authorName}
                    onChange={(e) => setEndorsementForm({ ...endorsementForm, authorName: e.target.value })}
                    placeholder="e.g. C. V. Hallowell"
                    className="w-full text-sm px-3.5 py-2.5 bg-white border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Book Title
                    </label>
                    <input
                      type="text"
                      value={endorsementForm.bookTitle}
                      onChange={(e) => setEndorsementForm({ ...endorsementForm, bookTitle: e.target.value })}
                      placeholder="e.g. The Architecture of Silence"
                      className="w-full text-sm px-3.5 py-2.5 bg-white border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Genre
                    </label>
                    <input
                      type="text"
                      value={endorsementForm.genre}
                      onChange={(e) => setEndorsementForm({ ...endorsementForm, genre: e.target.value })}
                      placeholder="e.g. Literary Fiction"
                      className="w-full text-sm px-3.5 py-2.5 bg-white border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Publisher / Imprint
                    </label>
                    <input
                      type="text"
                      value={endorsementForm.publisherOrImprint}
                      onChange={(e) => setEndorsementForm({ ...endorsementForm, publisherOrImprint: e.target.value })}
                      placeholder="e.g. Averill & Finch"
                      className="w-full text-sm px-3.5 py-2.5 bg-white border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Rating
                    </label>
                    <select
                      value={endorsementForm.rating}
                      onChange={(e) => setEndorsementForm({ ...endorsementForm, rating: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 bg-white border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614]"
                    >
                      <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                      <option value="4">★★★★☆ (4 Stars - Strong)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Endorsement / Campaign Reflection *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={endorsementForm.reviewText}
                    onChange={(e) => setEndorsementForm({ ...endorsementForm, reviewText: e.target.value })}
                    placeholder="Describe the campaign results, editorial strategy, or audience growth..."
                    className="w-full text-sm p-3.5 bg-white border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614]"
                  />
                </div>

                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-[#E8E4DF]">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-black transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#191614] text-[#FAF9F6] rounded-sm hover:bg-stone-800 transition-colors"
                  >
                    Submit for Verification
                  </button>
                </div>
              </form>
            )}

            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-black p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
