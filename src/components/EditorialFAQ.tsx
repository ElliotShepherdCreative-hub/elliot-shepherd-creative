import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  X, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Award, 
  Compass, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export interface FAQItem {
  id: string;
  category: 'Campaign Strategy' | 'Visibility Architecture' | 'Literary Positioning' | 'Working Engagements';
  question: string;
  answer: string;
  keyTakeaways?: string[];
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Campaign Strategy',
    question: 'When is the optimal time to begin campaign direction prior to publication?',
    answer: 'The ideal window begins 6 to 9 months before your scheduled release date. Literary media organs (such as Kirkus, Publishers Weekly, and Library Journal) adhere to strict 3-to-4-month advance deadlines for bound galleys. Concurrently, securing peer blurbs from respected novelists or biographers, priming independent bookseller ambassadors, and coordinating pre-order momentum require structured, unhurried runway. For authors launching within 60 to 90 days, we execute an accelerated critical-velocity protocol prioritizing digital galleys, bookstagram tastemakers, and immediate retail metadata optimization.',
    keyTakeaways: [
      '6–9 Months Prior: Standard arc for advance trade reviews, blurb acquisition, and broadsheet pitches',
      '3–4 Months Prior: Bookstore ARC distribution, reading club primers, and Goodreads shelf building',
      'Launch Month & Beyond: Sustaining review velocity, media appearances, and backlist retention'
    ]
  },
  {
    id: 'faq-2',
    category: 'Literary Positioning',
    question: 'How does high-touch literary campaign direction differ from standard digital marketing?',
    answer: 'Standard digital marketing treats books like transient consumable commodities—burning ad budgets on fleeting click-through impressions that rarely yield dedicated lifelong readers. In contrast, literary campaign direction builds cultural permanence. We focus on intellectual resonance: securing coverage in literary quarterlies and reputable broadsheets, organizing university and library acquisitions, activating indie bookstore hand-sellers, and curating thoughtful reading group companions. The outcome is not a temporary algorithmic spike that collapses in week three, but an enduring backlist asset that sustains readership for years.',
    keyTakeaways: [
      'Cultural capital and critical credibility over disposable advertising clicks',
      'Curated indie bookseller hand-selling programs across regional bookstore networks',
      'Substantive reader-advocate development yielding organic word-of-mouth momentum'
    ]
  },
  {
    id: 'faq-3',
    category: 'Visibility Architecture',
    question: 'How do you strategically navigate Goodreads and Amazon without cheapening an author’s stature?',
    answer: 'We view retail algorithms not as something to "game" with vanity tricks, but as responsive systems that mirror organic cultural signals. Our visibility architecture engineers precise BISAC category placement to help books capture legitimate category benchmark honors. On Goodreads, we activate authentic reader circles—deploying Advance Review Copies (ARCs) exclusively to verified readers of your specific sub-genre—generating thoughtful, multi-paragraph reviews rather than automated star dumps. This establishes a high review conversion rate that search algorithms recognize as genuine demand, elevating organic discovery without compromising your literary integrity.',
    keyTakeaways: [
      'Niche BISAC category curation positioning manuscripts for authentic #1 New Release velocity',
      'High-stature ARC distribution yielding thoughtful, qualitative Goodreads community reviews',
      'Algorithmic SEO tailored specifically to literary reader search behavior and comparison titles'
    ]
  },
  {
    id: 'faq-4',
    category: 'Working Engagements',
    question: 'I am traditionally published with a Big Five house. Why do I need independent campaign direction?',
    answer: 'Major publishing houses produce extraordinary books, but their in-house publicists frequently manage 10 to 15 titles simultaneously per season. House publicity resources are inevitably front-loaded onto the first 4 to 6 weeks of publication before attention shifts to the next catalog cycle. We work collaboratively with your publisher\'s team to extend and amplify that runway—orchestrating long-lead editorial features, cultivating non-traditional institutional relationships, and designing sustained post-launch visibility that keeps your title top-of-mind long after the internal house window has concluded.',
    keyTakeaways: [
      'Seamless collaboration with publisher publicity teams to fill operational gaps',
      'Protection against the standard "6-week publicity cliff" common to major houses',
      'Long-tail campaign strategy that protects the author\'s platform and royalty trajectory'
    ]
  },
  {
    id: 'faq-5',
    category: 'Literary Positioning',
    question: 'What strategic roadmap is deployed for a debut author with no pre-existing platform?',
    answer: 'A debut author does not need a massive social media following to achieve critical prominence; they need an unmistakable thematic hook and curated peer validation. We begin by distilling your manuscript’s cultural zeitgeist—its unique intersection of human conflict, philosophical inquiry, or historical revelation. We then construct an advance praise dossier, placing the galley into the hands of established authors whose work shares your stylistic DNA. When debut titles arrive backed by starred trade reviews and enthusiastic endorsements from recognized names, bookstores, media gatekeepers, and readers treat the book as an essential new voice.',
    keyTakeaways: [
      'Identification of the manuscript\'s core cultural thesis and media-relevant angles',
      'Strategic blurb cultivation linking your debut to esteemed benchmark authors',
      'Curated literary journal excerpts and serialized previews establishing stylistic eminence'
    ]
  },
  {
    id: 'faq-6',
    category: 'Visibility Architecture',
    question: 'Can you revitalize an older backlist title that missed its initial promotional momentum?',
    answer: 'Absolutely. Backlist revitalization is one of the most rewarding dimensions of our work. Many exceptional books simply suffered from poor release timing, an unfocused original cover concept, or lack of sustained post-launch advocacy. We conduct an exhaustive metadata audit, re-align BISAC categories, design targeted reader magnets, craft fresh discussion guides for reading societies, and pitch relevant anniversaries or contemporary news hooks to cultural outlets. A book published three or five years ago can easily find its prime readership when repositioned with intentionality.',
    keyTakeaways: [
      'Comprehensive metadata, category, and retail display optimization audit',
      'Re-engagement with book clubs, academic course syllabi, and topical podcasts',
      'Cultural peg identification connecting older themes to current societal dialogues'
    ]
  },
  {
    id: 'faq-7',
    category: 'Campaign Strategy',
    question: 'How are Advance Review Copy (ARC) circles curated and managed?',
    answer: 'We reject generic ARC mass-blasts. Spray-and-pray reviewer distribution often produces indifferent or low-effort feedback that harms algorithmic trust. Instead, we maintain a boutique circle of vetted literary advocates, independent booksellers, literary podcast producers, and specialized bookstagrammers. Each recipient receives a customized reader dossier explaining why this specific manuscript speaks to their critical tastes. This deliberate curation produces thoughtful, passionate early reviews that establish high credibility upon launch week.',
    keyTakeaways: [
      'Vetted, genre-specific reader circles rather than indiscriminate public dumps',
      'Customized reader dossiers accompanying every digital and physical galley',
      'Strict adherence to embargo dates, retail review guidelines, and editorial ethics'
    ]
  },
  {
    id: 'faq-8',
    category: 'Working Engagements',
    question: 'How do you measure campaign impact and author visibility success?',
    answer: 'We evaluate campaign impact through a multi-tiered matrix combining qualitative prestige with quantitative velocity. Qualitative indicators include starred reviews across major trade organs (Kirkus, PW, Booklist), features in literary quarterlies and national broadsheets, invitations to keynote panels, and adoption by respected reading societies. Quantitative metrics encompass sustained pre-order rank, category benchmark status, organic Goodreads ratings trajectory, and direct reader subscriber acquisition that builds an author’s permanent independence.',
    keyTakeaways: [
      'Qualitative Prestige: Trade starred reviews, critical broadsheet features, and institutional citations',
      'Quantitative Velocity: Pre-order conversion, category top-rankings, and Goodreads shelf additions',
      'Platform Sovereignty: Growth of the author\'s direct, un-algorithm-mediated reader base'
    ]
  }
];

interface EditorialFAQProps {
  onInquireTopic?: (topic: string) => void;
}

export const EditorialFAQ: React.FC<EditorialFAQProps> = ({ onInquireTopic }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // Open the first item by default for immediate engagement
    'faq-2': false,
  });
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Campaign Strategy',
    'Visibility Architecture',
    'Literary Positioning',
    'Working Engagements'
  ] as const;

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_ITEMS.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keyTakeaways?.some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <section 
      className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#E8E4DF] relative overflow-hidden" 
      id="faq"
      aria-label="Editorial Insights and Frequently Asked Questions"
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E8E4DF_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8E4B28]/10 text-[#8E4B28] text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Editorial Intelligence & Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191614] font-normal tracking-tight">
            Editorial Insights FAQ
          </h2>
          
          <div className="w-12 h-0.5 bg-[#8E4B28] mx-auto mt-5 mb-5" />

          <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed">
            Essential clarity on campaign horizons, algorithmic architecture, critical trade reviews, and how bespoke literary direction secures enduring authority for your manuscript.
          </p>
        </motion.div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8E4DF]">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? FAQ_ITEMS.length 
                : FAQ_ITEMS.filter((f) => f.category === cat).length;
              const isSelected = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-sm text-xs font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#191614] text-[#FAF9F6] shadow-sm'
                      : 'bg-white text-stone-600 hover:text-black border border-[#E8E4DF]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box & Expand/Collapse Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search inquiries or topics..."
                className="w-full pl-8 pr-8 py-2 bg-white border border-[#E8E4DF] rounded-sm text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#8E4B28] focus:ring-1 focus:ring-[#8E4B28] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={Object.values(openItems).some(Boolean) ? collapseAll : expandAll}
              className="hidden lg:inline-flex shrink-0 px-3 py-2 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-900 bg-white border border-[#E8E4DF] rounded-sm transition-colors"
            >
              {Object.values(openItems).some(Boolean) ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-sm border border-[#E8E4DF] p-8 max-w-md mx-auto">
            <HelpCircle className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h4 className="font-serif text-lg text-stone-800 mb-1">No Matching Inquiries</h4>
            <p className="text-xs text-stone-500 mb-4">
              We couldn't find an answer matching "{searchQuery}". Try browsing by category or inquire directly below.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#191614] text-[#FAF9F6] rounded-sm"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item, index) => {
              const isOpen = !!openItems[item.id];

              return (
                <motion.div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bg-white rounded-sm border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-[#8E4B28]/50 shadow-md ring-1 ring-[#8E4B28]/10' 
                      : 'border-[#E8E4DF] hover:border-stone-400/60 shadow-sm'
                  }`}
                >
                  {/* Question Header Button */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 select-none focus:outline-none focus-visible:bg-stone-50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E4B28] px-2 py-0.5 rounded bg-[#8E4B28]/10 border border-[#8E4B28]/15">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">
                          {item.id.replace('faq-', 'Insight #0')}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl text-[#191614] font-medium leading-snug group-hover:text-[#8E4B28] transition-colors">
                        {item.question}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-sm transition-transform duration-200 shrink-0 mt-1 ${
                      isOpen ? 'bg-[#191614] text-[#FAF9F6] rotate-180' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Collapsible Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-[#E8E4DF]/70">
                          <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed mb-5 font-sans">
                            {item.answer}
                          </p>

                          {/* Key Strategic Takeaways */}
                          {item.keyTakeaways && item.keyTakeaways.length > 0 && (
                            <div className="bg-[#FAF9F6] p-4 rounded-sm border border-[#E8E4DF] mb-5">
                              <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#191614] font-bold mb-2.5 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-[#8E4B28]" />
                                <span>Strategic Pillars</span>
                              </h4>
                              <ul className="space-y-1.5">
                                {item.keyTakeaways.map((takeaway, tIdx) => (
                                  <li key={tIdx} className="text-xs text-stone-700 flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E4B28] mt-1.5 shrink-0" />
                                    <span>{takeaway}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Contextual Action Link */}
                          {onInquireTopic && (
                            <div className="flex items-center justify-between pt-2">
                              <span className="text-xs text-stone-400 italic">
                                Have specific questions about your manuscript's timeline?
                              </span>
                              <button
                                onClick={() => onInquireTopic(item.question)}
                                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#8E4B28] hover:text-[#5C2E15] transition-colors gap-1"
                              >
                                <span>Discuss This Strategy</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom Authority Consultation Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#191614] rounded-sm p-8 sm:p-10 text-stone-100 relative overflow-hidden shadow-xl"
        >
          {/* Subtle warm glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8E4B28]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Confidential Editorial Assessment</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                Have an unlisted question regarding your upcoming title?
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Every manuscript brings a distinct publishing history, timeline, and artistic ambition. We welcome direct, confidential correspondence to examine your title's strategic landscape.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => {
                  if (onInquireTopic) {
                    onInquireTopic('General Editorial Inquiries & Campaign Assessment');
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-sm bg-[#FAF9F6] text-[#191614] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md gap-2"
              >
                <span>Request Strategic Briefing</span>
                <ArrowRight className="w-4 h-4 text-[#8E4B28]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
