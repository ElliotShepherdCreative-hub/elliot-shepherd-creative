import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { 
  BookOpen, 
  ShieldCheck, 
  ArrowUp, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Globe,
  Clock,
  Compass
} from 'lucide-react';

interface PublishingHub {
  city: string;
  zone: string;
  country: string;
  timeZone: string;
}

const PUBLISHING_HUBS: PublishingHub[] = [
  { city: 'London', zone: 'GMT', country: 'UK', timeZone: 'Europe/London' },
  { city: 'New York', zone: 'EST', country: 'US', timeZone: 'America/New_York' },
  { city: 'Paris', zone: 'CET', country: 'EU', timeZone: 'Europe/Paris' },
  { city: 'Sydney', zone: 'AEST', country: 'AU', timeZone: 'Australia/Sydney' },
];

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const [hubTimes, setHubTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const current: Record<string, string> = {};
      PUBLISHING_HUBS.forEach((hub) => {
        try {
          current[hub.city] = new Intl.DateTimeFormat('en-US', {
            timeZone: hub.timeZone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          }).format(new Date());
        } catch {
          current[hub.city] = '';
        }
      });
      setHubTimes(current);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim() || !emailRegex.test(newsletterEmail.trim())) {
      setNewsletterError('Please enter a valid author email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const stored = localStorage.getItem('esc_editorial_briefs_subscribers');
        const subscribers = stored ? JSON.parse(stored) : [];
        if (!subscribers.includes(newsletterEmail.trim())) {
          subscribers.push(newsletterEmail.trim());
          localStorage.setItem('esc_editorial_briefs_subscribers', JSON.stringify(subscribers));
        }
      } catch {
        // Safe fallback if local storage is restricted
      }

      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 600);
  };

  return (
    <footer className="bg-[#12100E] text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Discreet, Premium Newsletter Sign-up Section: Editorial Briefs */}
        <div className="mb-14 pb-12 border-b border-stone-800">
          <div className="bg-[#181512] border border-stone-800/90 rounded-sm p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-stone-400 bg-stone-900/80 px-2.5 py-1 rounded-sm border border-stone-700/60 mb-3">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Private Editorial Dispatch</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white font-normal mb-2 tracking-tight">
                  Editorial Briefs & Literary Market Insights
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-xl">
                  A discreet, quarterly dispatch received by published novelists, biographers, and literary strategists. Curated intelligence on algorithmic book discovery, critical review timing, and enduring readership architecture.
                </p>
              </div>

              <div className="lg:col-span-5">
                {isSubscribed ? (
                  <div className="p-4 rounded-sm bg-stone-900/90 border border-stone-700 text-stone-200 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-serif font-bold text-white uppercase tracking-wider">
                        Subscription Confirmed
                      </h4>
                      <p className="text-xs text-stone-400 mt-1">
                        You are enrolled to receive the next quarterly edition of <em>Editorial Briefs</em> at <strong className="text-stone-300">{newsletterEmail}</strong>.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubscribed(false);
                          setNewsletterEmail('');
                        }}
                        className="text-[11px] font-mono text-stone-400 hover:text-white underline mt-2 inline-block"
                      >
                        Register another email
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3" id="editorial-briefs-form">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <Mail className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder="author@literarypress.org"
                          required
                          className="w-full pl-10 pr-4 py-2.5 bg-[#100E0D] border border-stone-700 text-stone-200 placeholder-stone-500 text-xs rounded-sm focus:outline-none focus:border-stone-400 transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-stone-200 text-[#12100E] hover:bg-white transition-colors disabled:opacity-50 shrink-0 font-mono"
                      >
                        {isSubmitting ? (
                          <span>Enrolling...</span>
                        ) : (
                          <>
                            <span>Receive Briefs</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                          </>
                        )}
                      </button>
                    </div>

                    {newsletterError && (
                      <p className="text-xs text-red-400 font-mono">{newsletterError}</p>
                    )}

                    <div className="flex items-center justify-between text-[11px] text-stone-500">
                      <span>Strictly confidential. Quarterly monographs only.</span>
                      <span>Zero commercial spam.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-stone-800">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded bg-white/10 text-white border border-white/15">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-lg font-serif font-bold tracking-wider uppercase text-white">
                Elliot Shepherd Creative
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm mb-6">
              Bespoke literary eminence, editorial campaign direction, and cultural visibility architecture for distinguished authors. Dedicated to connecting exceptional manuscripts with discerning readers.
            </p>
            <div className="inline-flex items-center space-x-2 text-[11px] text-stone-400 bg-stone-900 px-3 py-1.5 rounded border border-stone-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bespoke Literary Campaign Direction Advisory</span>
            </div>
          </div>

          {/* Quick Links / 6 Pillars */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100 mb-4 font-mono">
              Strategic Pillars (45 Services)
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Launch & Release Architecture</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Critical Press & Cultural Media</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Retail Discovery & Algorithmic Indexing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Literary Societies & Book Clubs</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Direct Reader Platforms & IP</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Backlist Revitalization & Rights</a>
              </li>
              <li className="pt-1 border-t border-stone-800 space-y-1.5">
                <a href="#case-studies" className="text-stone-300 hover:text-white transition-colors flex items-center gap-1 font-medium">
                  <span>Anatomy of a Bestseller (Case Studies)</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <a href="#faq" className="text-amber-300 hover:text-white transition-colors flex items-center gap-1 font-medium">
                  <span>Editorial Insights FAQ</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication & Standards */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100 mb-4 font-mono">
              Direct Strategic Inquiries
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Inquiries regarding manuscript representation, launch direction, and critical press campaigns are reviewed personally.
            </p>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="p-3 bg-stone-900/80 rounded border border-stone-800">
                <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1">
                  Direct Inquiries & Submissions:
                </p>
                <div className="space-y-1 font-mono">
                  <div>
                    <a 
                      href="mailto:ElliotShepherdCreative@aol.com?subject=Author%20Campaign%20Inquiry%20-%20Elliot%20Shepherd%20Creative" 
                      className="text-stone-200 hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-stone-400" />
                      <span>ElliotShepherdCreative@aol.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Advisory Reach & Time Zone Availability Banner */}
        <div 
          className="my-10 p-6 sm:p-7 rounded-sm bg-[#161311] border border-stone-800 shadow-inner"
          id="global-advisory-reach"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-[#8E4B28]/20 text-[#D48255]">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D48255] font-semibold">
                  Global Author Reach & Advisory
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Consultations Active Worldwide</span>
                </span>
              </div>

              <h4 className="text-white font-serif text-base sm:text-lg font-normal mb-1">
                International Author Representation Across Global Time Zones
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Advising authors, historians, and literary estates across North America, the UK, Europe, and Australasia. Private campaign briefings, manuscript evaluations, and launch reviews are coordinated to honor your local writing rhythm.
              </p>
            </div>

            {/* Publishing Hubs Live Time Indicators */}
            <div className="w-full lg:w-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PUBLISHING_HUBS.map((hub) => (
                  <div
                    key={hub.city}
                    className="px-3 py-2 rounded bg-stone-900/90 border border-stone-800 text-left min-w-[110px]"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-0.5">
                      <span className="font-semibold text-stone-200">{hub.city}</span>
                      <span className="text-[9px] text-stone-500">{hub.zone}</span>
                    </div>
                    <div className="text-xs font-mono font-bold text-amber-300">
                      {hubTimes[hub.city] || '--:--'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1 text-stone-400">
                  <Clock className="w-3 h-3 text-[#D48255]" />
                  <span>Cross-border scheduling available</span>
                </span>
                <a
                  href="#contact"
                  className="text-amber-400 hover:text-white transition-colors inline-flex items-center gap-1 font-medium text-xs hover:underline"
                >
                  <span>Book Global Session</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Elliot Shepherd Creative. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-stone-400">Atmosphere:</span>
              <ThemeToggle />
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center text-xs text-stone-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
