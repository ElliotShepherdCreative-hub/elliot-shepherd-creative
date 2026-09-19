import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, SERVICE_PILLARS } from '../data/marketingData';
import { ServiceItem } from '../types';
import {
  Compass, BookOpen, TrendingUp, Sparkles, Layers, Award, Feather, Globe,
  FileText, Mic, Newspaper, Radio, FolderArchive, PenTool, Video, Trophy,
  Search, BarChart3, LayoutGrid, CheckSquare, ShoppingBag, Percent, Store,
  Users, Instagram, MailCheck, MessageSquare, GraduationCap, Library, MapPin,
  Magnet, Monitor, Send, Crown, Package, Headphones, Film, Palette,
  RefreshCw, Box, Image, Globe2, BookOpenCheck, Shield, Infinity as InfinityIcon,
  CheckCircle2, ArrowRight, SlidersHorizontal, Check, X
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewAll, setViewAll] = useState<boolean>(false);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Feather': return <Feather className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Mic': return <Mic className="w-5 h-5" />;
      case 'Newspaper': return <Newspaper className="w-5 h-5" />;
      case 'Radio': return <Radio className="w-5 h-5" />;
      case 'FolderArchive': return <FolderArchive className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Percent': return <Percent className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Instagram': return <Instagram className="w-5 h-5" />;
      case 'MailCheck': return <MailCheck className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Library': return <Library className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Magnet': return <Magnet className="w-5 h-5" />;
      case 'Monitor': return <Monitor className="w-5 h-5" />;
      case 'Send': return <Send className="w-5 h-5" />;
      case 'Crown': return <Crown className="w-5 h-5" />;
      case 'Package': return <Package className="w-5 h-5" />;
      case 'Headphones': return <Headphones className="w-5 h-5" />;
      case 'Film': return <Film className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5" />;
      case 'Box': return <Box className="w-5 h-5" />;
      case 'Image': return <Image className="w-5 h-5" />;
      case 'Globe2': return <Globe2 className="w-5 h-5" />;
      case 'BookOpenCheck': return <BookOpenCheck className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Infinity': return <InfinityIcon className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  // Filter logic
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesPillar = selectedPillar === 'all' || service.pillarId === selectedPillar;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        service.title.toLowerCase().includes(query) ||
        service.subtitle.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.pillar.toLowerCase().includes(query) ||
        service.features.some((f) => f.toLowerCase().includes(query));

      return matchesPillar && matchesSearch;
    });
  }, [selectedPillar, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const displayedServices = useMemo(() => {
    if (viewAll) return filteredServices;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredServices.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredServices, currentPage, itemsPerPage, viewAll]);

  const handlePillarChange = (pillarId: string) => {
    setSelectedPillar(pillarId);
    setCurrentPage(1);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#E8E4DF] overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white text-xs font-semibold tracking-widest uppercase text-[#8E4B28] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8E4B28]" />
            <span>45 Specialized Strategic Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191614] font-normal tracking-tight">
            Literary Eminence & Editorial Campaign Direction
          </h2>
          <div className="w-12 h-0.5 bg-[#8E4B28] mx-auto mt-6 mb-6" />
          <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed">
            A comprehensive compendium of 45 specialized advisory, media positioning, retail algorithmic, and readership acquisition services designed for distinguished authors.
          </p>
        </motion.div>

        {/* Search Bar & Controls */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="relative flex items-center shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search across all 45 specialized services (e.g. 'podcast', 'ARC', 'Goodreads', 'Amazon A9', 'rights', 'book club')..."
              className="w-full pl-12 pr-10 py-3.5 rounded-sm bg-white border border-[#E8E4DF] text-sm text-[#191614] placeholder-stone-400 focus:outline-none focus:border-[#8E4B28] focus:ring-1 focus:ring-[#8E4B28] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Pillar Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SERVICE_PILLARS.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => handlePillarChange(pillar.id)}
                id={`pillar-tab-${pillar.id}`}
                className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#191614] text-[#FAF9F6] shadow-sm'
                    : 'bg-white text-stone-600 hover:text-black border border-[#E8E4DF] hover:border-stone-300'
                }`}
              >
                {pillar.name}
              </button>
            );
          })}
        </div>

        {/* Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8E4DF] text-xs text-stone-500">
          <div className="flex items-center space-x-2">
            <span className="font-mono font-medium text-[#191614]">
              {filteredServices.length}
            </span>
            <span>of 45 specialized services found</span>
            {searchQuery && (
              <span className="text-[#8E4B28] italic">
                matching "{searchQuery}"
              </span>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setViewAll(!viewAll);
                setCurrentPage(1);
              }}
              id="toggle-view-all-services-btn"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#8E4B28] hover:text-[#6D391E] transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{viewAll ? 'Switch to Paginated View' : 'Show All 45 at Once'}</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: (index % 9) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#FFFFFF] rounded-sm p-8 border border-[#E8E4DF] hover:border-[#8E4B28]/40 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_32px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Icon & Pillar Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-sm bg-[#FAF9F6] border border-[#E8E4DF] flex items-center justify-center text-[#191614] group-hover:bg-[#191614] group-hover:text-[#FAF9F6] group-hover:border-[#191614] transition-colors duration-300">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[11px] font-mono text-stone-400 bg-stone-50 px-2 py-0.5 rounded border border-stone-200">
                      {service.id.replace('service-', 'No. ')}
                    </span>
                  </div>

                  {/* Pillar Category & Subtitle */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E4B28] block mb-1">
                    {service.pillar}
                  </span>
                  <h3 className="text-xl font-serif text-[#191614] mb-2 group-hover:text-[#8E4B28] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-600 mb-3 italic">
                    {service.subtitle}
                  </p>

                  {/* Short Explanation */}
                  <p className="text-xs text-[#5C554E] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-[#E8E4DF]/70">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8E4B28] shrink-0 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Deliverables & CTA */}
                <div className="pt-4 border-t border-[#E8E4DF] mt-2">
                  <p className="text-[11px] text-stone-500 italic mb-4 leading-normal">
                    <strong className="not-italic font-semibold text-stone-700">Deliverable:</strong> {service.deliverables}
                  </p>
                  <button
                    onClick={() => onSelectService(service)}
                    id={`service-btn-${service.id}`}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#191614] group-hover:text-[#8E4B28] transition-colors pt-2 border-t border-stone-100"
                  >
                    <span>Inquire for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20 bg-white rounded-sm border border-[#E8E4DF] p-8 max-w-xl mx-auto">
            <Search className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <h4 className="text-lg font-serif text-[#191614] mb-2">No services match your search</h4>
            <p className="text-xs text-stone-500 mb-6">
              Try searching with different keywords like 'review', 'press', 'Amazon', or select another pillar category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedPillar('all');
              }}
              className="px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#191614] text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination Controls (when not view-all and multiple pages exist) */}
        {!viewAll && totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider bg-white border border-[#E8E4DF] text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-sm text-xs font-mono font-medium transition-colors ${
                  currentPage === i + 1
                    ? 'bg-[#191614] text-[#FAF9F6]'
                    : 'bg-white text-stone-600 border border-[#E8E4DF] hover:bg-stone-50'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider bg-white border border-[#E8E4DF] text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
