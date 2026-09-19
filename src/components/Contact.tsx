import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, BookOpen, Clock, AlertCircle, ExternalLink, Copy, Check } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  prefilledProject?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledProject }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    bookTitle: prefilledProject || '',
    genre: '',
    publishingStage: 'Pre-Launch (1-3 mo)',
    marketingBudgetTier: 'Full Launch Campaign',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [preparedLinks, setPreparedLinks] = useState<{
    mailto: string;
    gmail: string;
    body: string;
    subject: string;
  }>({ mailto: '', gmail: '', body: '', subject: '' });

  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        bookTitle: prev.bookTitle || prefilledProject,
        message: prev.message 
          ? `${prev.message}\n[Regarding: ${prefilledProject}]`
          : `I am inquiring about: ${prefilledProject}. Please let me know your availability and recommendations.`
      }));
    }
  }, [prefilledProject]);

  const compileEmail = (data: ContactFormData) => {
    const subject = `Author Campaign Inquiry: ${data.bookTitle ? `"${data.bookTitle}" - ` : ''}${data.name}`;
    const body = `AUTHOR CAMPAIGN STRATEGY & MANUSCRIPT INQUIRY
======================================================
Author Name: ${data.name}
Author Email: ${data.email}
Book Title: ${data.bookTitle || 'Not specified'}
Genre / Subject: ${data.genre || 'Not specified'}
Publishing Stage: ${data.publishingStage}
Campaign Focus: ${data.marketingBudgetTier}

Manuscript Overview & Promotional Goals:
${data.message}

======================================================
Recipient: ElliotShepherdCreative@aol.com
Portal: Elliot Shepherd Creative Advisory
Date: ${new Date().toLocaleString()}`;

    const mailto = `mailto:ElliotShepherdCreative@aol.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=ElliotShepherdCreative@aol.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return { subject, body, mailto, gmail };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message before submitting.');
      return;
    }

    setIsSubmitting(true);

    const compiled = compileEmail(formData);
    setPreparedLinks(compiled);

    // Save to local persistence
    try {
      const stored = localStorage.getItem('esc_author_inquiries');
      const inquiries = stored ? JSON.parse(stored) : [];
      inquiries.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('esc_author_inquiries', JSON.stringify(inquiries));
    } catch {
      // Fallback if local storage restricted
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger user's email client directly
      try {
        window.location.href = compiled.mailto;
      } catch {
        // Handled in success UI
      }
    }, 600);
  };

  const handleCopyMessage = () => {
    if (!preparedLinks.body) return;
    navigator.clipboard.writeText(preparedLinks.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCopied(false);
    setFormData({
      name: '',
      email: '',
      bookTitle: '',
      genre: '',
      publishingStage: 'Pre-Launch (1-3 mo)',
      marketingBudgetTier: 'Full Launch Campaign',
      message: ''
    });
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8E4B28] mb-3">
              Direct Author Consultation
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191614] font-normal tracking-tight mb-6">
              Initiate Your Campaign Inquiry
            </h2>
            <div className="w-12 h-0.5 bg-[#8E4B28] mb-8" />

            <p className="text-base text-[#5C554E] leading-relaxed mb-8">
              Share details about your book, target genre, and release timeframe. Submissions are delivered directly to our lead strategist's desk for thorough individual review.
            </p>

            <div className="space-y-6 pt-4 border-t border-[#E8E4DF]">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-[#E8E4DF] flex items-center justify-center text-[#8E4B28] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#191614]">
                    Prompt Author Response
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    We review and reply with strategic recommendations within 24 to 48 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-[#E8E4DF] flex items-center justify-center text-[#8E4B28] shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#191614]">
                    Manuscript Confidentiality
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Your book details, synopsis, and unpublished materials remain strictly confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-[#E8E4DF] flex items-center justify-center text-[#8E4B28] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#191614]">
                    Direct Inboxes
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 mb-2">
                    Inquiries are received directly at:
                  </p>
                  <div className="space-y-1.5 font-mono text-xs">
                    <div>
                      <span className="text-stone-400 text-[11px] block">Agency Address:</span>
                      <a
                        href="mailto:ElliotShepherdCreative@aol.com?subject=Direct%20Author%20Inquiry"
                        className="font-semibold text-[#8E4B28] hover:underline"
                      >
                        ElliotShepherdCreative@aol.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm border border-[#E8E4DF] p-8 sm:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)]">
              {isSubmitted ? (
                <div className="py-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#191614] mb-2">
                    Inquiry Prepared & Forwarded
                  </h3>
                  <p className="text-sm text-[#5C554E] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-stone-800">{formData.name}</strong>. Your campaign message is addressed directly to <strong className="text-[#8E4B28]">ElliotShepherdCreative@aol.com</strong>.
                  </p>

                  {/* Direct Delivery Actions */}
                  <div className="bg-stone-50 border border-[#E8E4DF] rounded-sm p-4 text-left mb-6 space-y-3">
                    <p className="text-xs font-serif font-bold text-stone-700 uppercase tracking-wider">
                      Message Dispatch Hub:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={preparedLinks.gmail}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-sm bg-[#191614] text-white text-xs font-semibold hover:bg-stone-800 transition-colors shadow-sm"
                      >
                        <Mail className="w-4 h-4 mr-2 text-amber-400" />
                        <span>Send via Gmail Web</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                      </a>

                      <a
                        href={preparedLinks.mailto}
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-sm bg-stone-200 text-[#191614] text-xs font-semibold hover:bg-stone-300 transition-colors"
                      >
                        <Send className="w-4 h-4 mr-2 text-stone-700" />
                        <span>Send via Mail App</span>
                      </a>
                    </div>

                    <button
                      onClick={handleCopyMessage}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-sm border border-stone-300 text-stone-700 hover:bg-white text-xs transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                          <span className="font-semibold text-emerald-700">Copied Message to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 mr-1.5 text-stone-500" />
                          <span>Copy Message Text to Clipboard</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Summary Box */}
                  <div className="text-left bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm p-4 mb-6 text-xs text-stone-600 space-y-1.5 font-mono">
                    <p><strong>To:</strong> ElliotShepherdCreative@aol.com</p>
                    <p><strong>Book:</strong> {formData.bookTitle || 'Untitled / In Development'}</p>
                    <p><strong>Category:</strong> {formData.genre || 'General'}</p>
                    <p><strong>Focus:</strong> {formData.marketingBudgetTier}</p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 hover:underline transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="book-marketing-contact-form">
                  {errorMessage && (
                    <div className="p-4 rounded-sm bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label 
                        htmlFor="author-name-input"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="author-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Author name or pen name"
                        className="w-full text-sm px-4 py-3 bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614] transition-colors"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="author-email-input"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="author-email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@authorwebsite.com"
                        className="w-full text-sm px-4 py-3 bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Book Title and Genre */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label 
                        htmlFor="book-title-input"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
                      >
                        Book Title (or Working Title)
                      </label>
                      <input
                        id="book-title-input"
                        type="text"
                        value={formData.bookTitle}
                        onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                        placeholder="e.g. The Architecture of Silence"
                        className="w-full text-sm px-4 py-3 bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614] transition-colors"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="book-genre-input"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
                      >
                        Genre / Subject
                      </label>
                      <input
                        id="book-genre-input"
                        type="text"
                        value={formData.genre}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                        placeholder="e.g. Literary Fiction, Thriller, Memoir"
                        className="w-full text-sm px-4 py-3 bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Publishing Stage Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label 
                        htmlFor="publishing-stage-select"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
                      >
                        Current Publishing Stage
                      </label>
                      <select
                        id="publishing-stage-select"
                        value={formData.publishingStage}
                        onChange={(e) => setFormData({ ...formData, publishingStage: e.target.value as any })}
                        className="w-full text-sm px-4 py-3 bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614] transition-colors text-stone-800"
                      >
                        <option value="Pre-Launch (1-3 mo)">Pre-Launch (1-3 months out)</option>
                        <option value="Manuscript Completed">Manuscript Completed / In Production</option>
                        <option value="Newly Released">Newly Released (Last 30 days)</option>
                        <option value="Backlist Title">Existing Backlist Title</option>
                        <option value="Multi-Book Series">Multi-Book Series Promotion</option>
                      </select>
                    </div>

                    <div>
                      <label 
                        htmlFor="campaign-tier-select"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
                      >
                        Campaign Focus
                      </label>
                      <select
                        id="campaign-tier-select"
                        value={formData.marketingBudgetTier}
                        onChange={(e) => setFormData({ ...formData, marketingBudgetTier: e.target.value })}
                        className="w-full text-sm px-4 py-3 bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614] transition-colors text-stone-800"
                      >
                        <option value="Full Launch Campaign">Full Release & Visibility Campaign</option>
                        <option value="Media & Press Discovery">Targeted Media, Reviews & Press Outreach</option>
                        <option value="Social & Community Growth">BookTok / Bookstagram Community Building</option>
                        <option value="Author Brand Architecture">Author Branding & Platform Foundation</option>
                        <option value="Backlist Revitalization">Backlist Revival & Reader Funnel</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="author-message-textarea"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
                    >
                      Project Details & Promotional Goals *
                    </label>
                    <textarea
                      id="author-message-textarea"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your book, your ideal reader demographic, any previous marketing efforts, and what you hope to achieve with this campaign..."
                      className="w-full text-sm px-4 py-3 bg-[#FAF9F6] border border-[#E8E4DF] rounded-sm focus:outline-none focus:border-[#191614] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-campaign-inquiry-btn"
                      className="w-full inline-flex items-center justify-center px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#191614] text-[#FAF9F6] hover:bg-[#2C241E] disabled:opacity-50 transition-all shadow-md hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <span>Compiling & Dispatching Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit & Send to ElliotShepherdCreative@aol.com</span>
                          <Send className="w-4 h-4 ml-2.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-stone-500 mt-2">
                      Inquiries are delivered directly to <span className="font-mono text-stone-700">ElliotShepherdCreative@aol.com</span>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
