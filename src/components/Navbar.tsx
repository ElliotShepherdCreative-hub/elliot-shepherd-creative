import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Recent Work', href: '#portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Approach', href: '#approach' },
    { name: 'Endorsements', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Insights FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E8E4DF]'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 group"
            id="brand-logo-link"
          >
            <div className={`p-2 rounded border transition-colors ${
              isScrolled 
                ? 'bg-[#191614] text-[#FAF9F6] border-[#191614]' 
                : 'bg-white/10 backdrop-blur-md text-white border-white/20'
            }`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-lg font-serif font-bold tracking-wider uppercase ${
                isScrolled ? 'text-[#191614]' : 'text-white'
              }`}>
                Elliot Shepherd Creative
              </span>
              <span className={`text-[10px] tracking-widest uppercase -mt-0.5 ${
                isScrolled ? 'text-[#5C554E]' : 'text-stone-300'
              }`}>
                Literary Eminence & Editorial Campaign Direction
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? 'text-[#5C554E] hover:text-[#191614]'
                    : 'text-stone-200 hover:text-white'
                }`}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={onContactClick}
              id="nav-cta-work-with-me"
              className={`inline-flex items-center px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm ${
                isScrolled
                  ? 'bg-[#191614] text-[#FAF9F6] hover:bg-[#2C241E]'
                  : 'bg-white text-[#191614] hover:bg-stone-100'
              }`}
            >
              Work With Me
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle & Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle variant="compact" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-[#191614]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E8E4DF] px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="pb-3 mb-2 flex items-center justify-between border-b border-stone-200/60">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Editorial Atmosphere
            </span>
            <ThemeToggle />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block py-2 text-base font-medium text-[#191614] hover:text-[#8E4B28] border-b border-stone-200/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full inline-flex justify-center items-center px-5 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#191614] text-[#FAF9F6] hover:bg-[#2C241E]"
            >
              Work With Me
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
