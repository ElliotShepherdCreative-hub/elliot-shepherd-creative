import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/marketingData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { BookCover } from './BookCover';
import { 
  BookOpen, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Search, 
  X, 
  Star, 
  Award, 
  Filter 
} from 'lucide-react';

interface PortfolioProps {
  onInquireProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayCount, setDisplayCount] = useState<number>(9);
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Memoir', 'Speculative', 'Investigative'] as const;

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PORTFOLIO_DATA.length };
    PORTFOLIO_DATA.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & Search
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(q) ||
        (project.authorName && project.authorName.toLowerCase().includes(q)) ||
        (project.publisher && project.publisher.toLowerCase().includes(q)) ||
        (project.amazonRankOrAward && project.amazonRankOrAward.toLowerCase().includes(q)) ||
        project.description.toLowerCase().includes(q) ||
        project.campaignType.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  // When searching, show all matching; otherwise respect displayCount
  const visibleProjects = searchQuery.trim() || selectedCategory !== 'All' 
    ? filteredProjects 
    : filteredProjects.slice(0, displayCount);

  const hasMore = selectedCategory === 'All' && !searchQuery.trim() && displayCount < filteredProjects.length;

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#E8E4DF] overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8E4B28]/10 text-[#8E4B28] text-xs font-semibold uppercase tracking-widest mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>25 Acclaimed Works • Goodreads & Amazon Benchmark</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191614] font-normal tracking-tight">
                Distinguished Literary Campaigns
              </h2>
              <div className="w-12 h-0.5 bg-[#8E4B28] mt-4 mb-4" />
              <p className="text-base text-[#5C554E] leading-relaxed">
                A showcase of 25 landmark titles spanning Pulitzer Prize winners, National Book Award honorees, and Goodreads Choice champions across Fiction, Memoir, Popular Science, and Investigative Nonfiction.
              </p>
            </div>

            {/* Quick Stat Bar */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-sm border border-[#E8E4DF] text-xs text-[#5C554E] shrink-0 shadow-sm">
              <div className="text-center px-2 border-r border-[#E8E4DF]">
                <div className="font-serif text-lg font-bold text-[#191614]">25</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400">Featured Books</div>
              </div>
              <div className="text-center px-2 border-r border-[#E8E4DF]">
                <div className="font-serif text-lg font-bold text-amber-700">4.3+ ★</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400">Avg Goodreads</div>
              </div>
              <div className="text-center px-2">
                <div className="font-serif text-lg font-bold text-[#191614]">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400">Verified Titles</div>
              </div>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 pt-8 border-t border-[#E8E4DF] flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => {
                const count = categoryCounts[cat] || 0;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                    }}
                    id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
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

            {/* Search Input Field */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, author, or award..."
                className="w-full pl-9 pr-8 py-2 bg-white border border-[#E8E4DF] rounded-sm text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#8E4B28] focus:ring-1 focus:ring-[#8E4B28] transition-all"
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
          </div>

          {/* Active Search & Result Feedback */}
          {(searchQuery || selectedCategory !== 'All') && (
            <div className="mt-4 flex items-center justify-between text-xs text-stone-500 bg-white/60 px-3 py-2 rounded border border-[#E8E4DF]">
              <span>
                Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'book' : 'books'}
                {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
                {searchQuery ? ` matching "${searchQuery}"` : ''}
              </span>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-[#8E4B28] hover:underline text-xs font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Portfolio Gallery Grid with Staggered Fade-in */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-sm border border-[#E8E4DF] p-8">
            <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h4 className="font-serif text-lg text-stone-800 mb-1">No Matching Titles Found</h4>
            <p className="text-xs text-stone-500 max-w-md mx-auto mb-4">
              No works matched your search query. Try searching for an author name (e.g. Kingsolver, Grann, Kuang) or a category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#191614] text-[#FAF9F6] rounded-sm"
            >
              Show All 25 Books
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={`portfolio-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white rounded-sm border border-[#E8E4DF] overflow-hidden hover:border-[#8E4B28]/50 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.14)] transition-all duration-300 flex flex-col"
                >
                  {/* Project Book Presentation Area with BookCover */}
                  <div 
                    className="relative aspect-[4/3] bg-gradient-to-b from-[#1F1B18] to-[#12100E] p-6 flex items-center justify-center overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(project)}
                  >
                    <div className="relative h-full max-h-[220px] aspect-[3/4.5] shadow-2xl rounded-sm overflow-hidden transform group-hover:scale-105 transition-transform duration-500 ease-out">
                      <BookCover
                        title={project.title}
                        authorName={project.authorName}
                        imageUrl={project.imageUrl}
                        category={project.category}
                        coverBgColor={project.coverBgColor}
                        goodreadsRating={project.goodreadsRating}
                      />
                    </div>

                    {/* Subtle Overlay Badge on Hover */}
                    <div className="absolute inset-0 bg-[#12100E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="inline-flex items-center px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase bg-[#FAF9F6] text-[#191614] shadow-lg gap-1.5">
                        <span>View Project Dossier</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Top Left: Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase bg-black/70 text-stone-200 backdrop-blur-md border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Top Right: Goodreads Rating Pill */}
                    {project.goodreadsRating && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-semibold tracking-wide bg-black/70 text-amber-300 backdrop-blur-md border border-amber-400/20">
                        <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                        <span>{project.goodreadsRating}</span>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Accolade / Bestseller Badge */}
                      {project.amazonRankOrAward && (
                        <div className="flex items-center gap-1 text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mb-2.5 line-clamp-1">
                          <Award className="w-3 h-3 shrink-0 text-amber-700" />
                          <span className="truncate">{project.amazonRankOrAward}</span>
                        </div>
                      )}

                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8E4B28] block mb-1">
                        {project.campaignType}
                      </span>
                      
                      <h3 
                        onClick={() => setActiveProject(project)}
                        className="text-xl sm:text-2xl font-serif text-[#191614] mb-1 group-hover:text-[#8E4B28] transition-colors cursor-pointer leading-snug"
                      >
                        {project.title}
                      </h3>
                      
                      {project.authorName && (
                        <p className="text-xs font-serif text-stone-500 italic mb-2">
                          by {project.authorName} {project.publisher ? `• ${project.publisher}` : ''}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-[#5C554E] line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Critical Reception Quote */}
                      {project.criticalReception && (
                        <div className="mb-4 p-2.5 rounded bg-[#FAF9F6] border-l-2 border-[#8E4B28] text-[11px] text-stone-600 italic line-clamp-2">
                          "{project.criticalReception}"
                        </div>
                      )}

                      {/* Highlight Channels */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.channels.slice(0, 3).map((ch, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#FAF9F6] text-stone-600 border border-[#E8E4DF]"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Area & Direct Goodreads / Amazon Links */}
                    <div className="pt-4 border-t border-[#E8E4DF] flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-stone-400">
                          {project.year ? `Pub. ${project.year}` : project.releaseWindow}
                        </span>
                        
                        <button
                          onClick={() => setActiveProject(project)}
                          id={`view-project-btn-${project.id}`}
                          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#191614] group-hover:text-[#8E4B28] transition-colors gap-1"
                        >
                          <span>View Dossier</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>

                      {/* Quick external links */}
                      <div className="flex items-center gap-2 pt-2 border-t border-dashed border-stone-200">
                        {project.goodreadsUrl && (
                          <a
                            href={project.goodreadsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-stone-500 hover:text-stone-900 inline-flex items-center gap-1 font-mono hover:underline"
                            title={`View ${project.title} on Goodreads`}
                          >
                            <span>Goodreads</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                        <span className="text-stone-300">•</span>
                        {project.amazonUrl && (
                          <a
                            href={project.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-amber-700 hover:text-amber-900 inline-flex items-center gap-1 font-mono hover:underline"
                            title={`View ${project.title} on Amazon`}
                          >
                            <span>Amazon</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Load More / Expand Button when viewing 'All' */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setDisplayCount(PORTFOLIO_DATA.length)}
              className="px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-white border border-stone-300 text-stone-900 hover:border-black hover:bg-stone-50 shadow-sm transition-all"
            >
              Show All 25 Acclaimed Works ({PORTFOLIO_DATA.length - visibleProjects.length} more)
            </button>
          </div>
        )}

        {/* Custom Campaign Note */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-8 rounded-sm bg-white border border-[#E8E4DF] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm text-[#8E4B28] shrink-0 mt-0.5">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-[#191614]">
                Preparing an upcoming release or reviving your existing backlist?
              </h4>
              <p className="text-xs sm:text-sm text-[#5C554E] mt-1">
                Every manuscript has distinct readerships. We tailor launch velocity, trade reviews, and Goodreads community advocacy specifically for your title.
              </p>
            </div>
          </div>
          <button
            onClick={() => onInquireProject('Custom Campaign Consultation')}
            className="shrink-0 px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#191614] text-[#FAF9F6] hover:bg-[#2C241E] transition-colors"
          >
            Request Campaign Assessment
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquire={(title) => onInquireProject(title)}
      />
    </section>
  );
};

