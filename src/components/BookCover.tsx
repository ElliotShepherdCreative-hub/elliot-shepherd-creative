import React, { useState } from 'react';
import { BookOpen, Star } from 'lucide-react';

interface BookCoverProps {
  title: string;
  authorName?: string;
  imageUrl?: string;
  category?: string;
  coverBgColor?: string;
  className?: string;
  goodreadsRating?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({
  title,
  authorName,
  imageUrl,
  category,
  coverBgColor = '#241F1C',
  className = '',
  goodreadsRating
}) => {
  const [imgError, setImgError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-full rounded-sm overflow-hidden shadow-2xl flex flex-col justify-between select-none ${className}`}
      style={{ backgroundColor: coverBgColor }}
    >
      {/* Real Cover Image if provided and not errored */}
      {imageUrl && !imgError && (
        <img
          src={imageUrl}
          alt={`Book cover of ${title} by ${authorName || 'Author'}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Elegant Hardcover Cloth Jacket Presentation (Visible while loading or as fallback) */}
      <div 
        className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-stone-100 z-0"
        style={{
          background: `linear-gradient(135deg, ${coverBgColor} 0%, #12100E 100%)`,
        }}
      >
        {/* Embossed book spine shadow line on left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
        {/* Subtle decorative inner border */}
        <div className="absolute inset-2 sm:inset-2.5 border border-amber-500/20 rounded-sm pointer-events-none" />

        {/* Top bar: Category & rating */}
        <div className="relative z-10 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-amber-300/80">
          <span>{category || 'Editorial Work'}</span>
          {goodreadsRating && (
            <span className="flex items-center gap-0.5">
              <Star className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
              <span>{goodreadsRating}</span>
            </span>
          )}
        </div>

        {/* Center: Title & Author in distinguished serif */}
        <div className="relative z-10 text-center my-auto px-2">
          <h4 className="font-serif text-sm sm:text-base font-bold text-[#FAF9F6] tracking-tight leading-snug line-clamp-3 mb-1.5 drop-shadow-sm">
            {title}
          </h4>
          <div className="w-8 h-0.5 bg-amber-400/50 mx-auto my-1.5" />
          {authorName && (
            <p className="font-serif italic text-[11px] sm:text-xs text-stone-300 line-clamp-1">
              {authorName}
            </p>
          )}
        </div>

        {/* Bottom bar: Publisher insignia / Book motif */}
        <div className="relative z-10 flex items-center justify-center pt-2 border-t border-white/10">
          <div className="flex items-center gap-1 text-[8px] font-mono tracking-wider uppercase text-stone-400">
            <BookOpen className="w-2.5 h-2.5 text-amber-300/70" />
            <span>Elliot Shepherd Creative</span>
          </div>
        </div>
      </div>
    </div>
  );
};
