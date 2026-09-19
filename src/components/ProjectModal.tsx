import React from 'react';
import { PortfolioProject } from '../types';
import { X, CheckCircle2, ArrowRight, Tag, Bookmark, Star, ExternalLink, Award } from 'lucide-react';
import { BookCover } from './BookCover';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#FAF9F6] rounded-sm shadow-2xl border border-[#E8E4DF]"
        onClick={(e) => e.stopPropagation()}
        id="project-detail-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-stone-700 hover:text-black border border-stone-200 transition-colors shadow-sm"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Realistic Book Presentation & Goodreads/Amazon Badges */}
          <div className="md:col-span-5 bg-[#171412] p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-stone-800">
            {/* Background luxury gradient & spine accent */}
            <div className="absolute inset-0 bg-radial from-stone-800/20 via-transparent to-black pointer-events-none" />

            <div className="w-full flex flex-col items-center z-10">
              <div className="relative w-full max-w-[210px] aspect-[3/4.5] shadow-2xl rounded-sm overflow-hidden mb-5">
                <BookCover
                  title={project.title}
                  authorName={project.authorName}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  coverBgColor={project.coverBgColor}
                  goodreadsRating={project.goodreadsRating}
                />
              </div>

              {/* Publisher & Year Details */}
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white/10 text-stone-200 border border-white/15">
                  {project.category} • {project.releaseWindow}
                </span>
                {project.publisher && (
                  <p className="text-xs text-stone-300 mt-2 font-mono">
                    {project.publisher} {project.year ? `(${project.year})` : ''}
                  </p>
                )}
                <p className="text-[11px] text-stone-400 mt-0.5 font-mono">{project.format}</p>
              </div>
            </div>

            {/* Goodreads & Amazon Quick Links */}
            <div className="w-full z-10 pt-4 border-t border-white/10 space-y-2">
              {project.goodreadsRating && (
                <div className="flex items-center justify-between text-xs bg-stone-900/90 px-3 py-2 rounded-sm border border-stone-800">
                  <span className="flex items-center text-amber-300 font-semibold gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>{project.goodreadsRating} / 5.0</span>
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {project.goodreadsRatingsCount || 'Goodreads Choice'}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 pt-1">
                {project.goodreadsUrl && (
                  <a
                    href={project.goodreadsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-2.5 py-2 text-[11px] font-medium rounded-sm bg-[#523F31] hover:bg-[#684F3D] text-[#F3EFE6] transition-colors gap-1 shadow-sm"
                  >
                    <span>Goodreads</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.amazonUrl && (
                  <a
                    href={project.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-2.5 py-2 text-[11px] font-medium rounded-sm bg-[#232F3E] hover:bg-[#324357] text-[#FF9900] transition-colors gap-1 shadow-sm"
                  >
                    <span>Amazon</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Campaign Dossier & Strategic Details */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#8E4B28] mb-1">
                <Bookmark className="w-3.5 h-3.5" />
                <span>Literary Campaign Dossier</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif text-[#191614] mb-1 font-bold leading-tight">
                {project.title}
              </h3>
              {project.authorName && (
                <p className="text-sm font-serif text-stone-600 italic mb-2">
                  by {project.authorName}
                </p>
              )}

              {/* Amazon / Acclaimed Recognition Badge */}
              {project.amazonRankOrAward && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium mb-4">
                  <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{project.amazonRankOrAward}</span>
                </div>
              )}

              <p className="text-xs sm:text-sm font-medium text-[#8E4B28] mb-4 pb-3 border-b border-[#E8E4DF]">
                {project.campaignType}
              </p>

              {project.criticalReception && (
                <div className="mb-5 p-3.5 rounded bg-stone-100 border-l-2 border-[#8E4B28] text-xs text-stone-700 italic leading-relaxed">
                  <strong className="text-stone-900 not-italic block mb-0.5">Critical Accolade:</strong>
                  "{project.criticalReception}"
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Campaign Architecture & Positioning
                </h4>
                <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Strategic Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Strategic Scope & Execution
                </h4>
                <ul className="space-y-2">
                  {project.strategicHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-xs text-stone-700 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-[#8E4B28] shrink-0 mr-2 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Promotional Channels Deployed */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Activated Channels
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.channels.map((channel, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-flex items-center px-2.5 py-1 rounded bg-stone-100 text-stone-700 text-xs border border-stone-200"
                    >
                      <Tag className="w-3 h-3 mr-1 text-[#8E4B28]" />
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E8E4DF] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full inline-flex justify-center items-center px-5 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#191614] text-[#FAF9F6] hover:bg-[#2C241E] transition-colors shadow-sm"
              >
                <span>Inquire for Similar Campaign</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-black border border-stone-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

