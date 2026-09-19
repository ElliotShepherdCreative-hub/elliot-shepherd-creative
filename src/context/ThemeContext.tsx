import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'warm-ivory' | 'midnight';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'esc-editorial-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'midnight' || saved === 'warm-ivory') {
        return saved;
      }
      // Check system preference if no stored theme
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'midnight';
      }
    }
    return 'warm-ivory';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'midnight') {
      root.classList.add('dark');
      root.classList.add('midnight-editorial');
      root.setAttribute('data-theme', 'midnight');
    } else {
      root.classList.remove('dark');
      root.classList.remove('midnight-editorial');
      root.setAttribute('data-theme', 'warm-ivory');
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'warm-ivory' ? 'midnight' : 'warm-ivory'));
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isDark: theme === 'midnight' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
