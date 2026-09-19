import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  className?: string;
  variant?: 'compact' | 'full' | 'pill';
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'full',
  showLabel = true,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'compact') {
    return (
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-sm border transition-all duration-300 relative group flex items-center justify-center ${
          isDark
            ? 'bg-[#1C1815] border-[#38302A] text-[#E09F75] hover:border-[#8E4B28] hover:text-[#FAF8F5]'
            : 'bg-white/90 border-[#E8E4DF] text-stone-700 hover:border-stone-400 hover:text-black shadow-xs'
        } ${className}`}
        aria-label={`Switch to ${isDark ? 'Warm Ivory' : 'Midnight Editorial'} theme`}
        title={`Current: ${isDark ? 'Midnight Editorial' : 'Warm Ivory'} (Click to switch)`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </motion.div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      id="theme-switcher-toggle"
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border text-xs font-mono tracking-wider transition-all duration-300 select-none group cursor-pointer ${
        isDark
          ? 'bg-[#171412] border-[#38302A] text-stone-200 hover:border-[#8E4B28] hover:bg-[#201B18] shadow-xs'
          : 'bg-white border-[#E8E4DF] text-stone-700 hover:border-stone-400 hover:text-stone-900 shadow-xs'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'Warm Ivory' : 'Midnight Editorial'} theme`}
      title={`Switch to ${isDark ? 'Warm Ivory' : 'Midnight Editorial'} reading mode`}
    >
      <div className="relative flex items-center justify-center w-4 h-4">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-[#E09F75]" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-[#8E4B28]" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="hidden sm:inline-block font-sans text-[11px] uppercase tracking-wider font-semibold">
          {isDark ? (
            <span className="text-[#E09F75] flex items-center gap-1">
              Midnight <span className="text-stone-400 font-normal">Mode</span>
            </span>
          ) : (
            <span className="text-stone-800 flex items-center gap-1">
              Warm Ivory <span className="text-stone-500 font-normal">Mode</span>
            </span>
          )}
        </span>
      )}

      {/* Subtle indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isDark ? 'bg-[#E09F75] shadow-[0_0_6px_#E09F75]' : 'bg-[#8E4B28]'
        }`}
      />
    </button>
  );
};
