import { useState } from 'react';
import { PROFILE } from '../data';
import Monogram from './Monogram';
import { MessageSquare, Mail, Copy, Check, ArrowUp } from 'lucide-react';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Questions', href: '#questions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="w-full bg-[#2C4234] text-[#F7F3EC] pt-24 pb-16">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        {/* Contact Section: Centered, max-width 640px */}
        <div className="max-w-[640px] mx-auto text-center mb-24">
          <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] font-semibold text-[#F7F3EC] tracking-tight mb-4 text-balance">
            Tell me about your business.
          </h2>

          <p className="text-[17px] leading-[1.65] text-[#F7F3EC]/85 mb-8">
            The quickest way is WhatsApp. Email works too. I reply as fast as I can, and within 24 hours at the latest.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Primary Button: WhatsApp (Cream background, Sage 800 text) */}
            <a
              href={PROFILE.whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-[48px] px-8 inline-flex items-center justify-center gap-2.5 text-[15px] font-medium text-[#2C4234] bg-[#F7F3EC] hover:bg-white active:translate-y-[1px] rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A]"
            >
              <MessageSquare size={17} />
              <span>Message me on WhatsApp</span>
            </a>

            {/* Secondary Button: Email me */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="w-full sm:w-auto h-[48px] px-8 inline-flex items-center justify-center gap-2.5 text-[15px] font-medium text-[#F7F3EC] bg-transparent border-[1.5px] border-[#F7F3EC] hover:bg-white/10 active:translate-y-[1px] rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A]"
            >
              <Mail size={17} />
              <span>Email me</span>
            </a>
          </div>

          {/* Text Links under buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-[#A9BDB0]">
            <a
              href={PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7F3EC] transition-colors underline underline-offset-4 decoration-[#C9A46A]/60 hover:decoration-[#C9A46A]"
            >
              Instagram {PROFILE.instagramHandle}
            </a>

            <span className="text-[#A9BDB0]/40" aria-hidden="true">·</span>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 hover:text-[#F7F3EC] transition-colors underline underline-offset-4 decoration-[#C9A46A]/60 hover:decoration-[#C9A46A] cursor-pointer"
            >
              {copied ? <Check size={14} className="text-[#C9A46A]" /> : <Copy size={14} />}
              <span>{copied ? 'Email copied!' : 'Copy email'}</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#A9BDB0]/25 pt-16 flex flex-col items-center text-center">
          {/* Monogram 56px */}
          <div className="mb-5">
            <Monogram size={56} />
          </div>

          {/* Name & Title */}
          <div className="font-serif text-[20px] font-semibold text-[#F7F3EC] mb-1">
            {PROFILE.name} · {PROFILE.title}
          </div>

          {/* Subtitle */}
          <p className="text-[14px] text-[#A9BDB0] mb-8">
            Based in Egypt · Working with clients in the Gulf and abroad
          </p>

          {/* Links Row */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-[14px] text-[#A9BDB0]" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F7F3EC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Note about concept projects */}
          <p className="text-[13px] text-[#A9BDB0]/80 italic mb-6">
            Note: The five projects shown are concept projects.
          </p>

          {/* Copyright & Back to Top */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#A9BDB0]/20 text-[13px] text-[#A9BDB0]">
            <div>© 2026 {PROFILE.name}</div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[13px] text-[#A9BDB0] hover:text-[#F7F3EC] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46A] rounded px-2 py-1"
            >
              <ArrowUp size={13} />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification (Shows for 2.5s when email is copied) */}
      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#1F3126] border border-[#C9A46A] text-[#F7F3EC] px-5 py-3 rounded-lg shadow-xl text-[14px] font-medium flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <Check size={16} className="text-[#C9A46A]" />
          <span>Email copied: {PROFILE.email}</span>
        </div>
      )}
    </footer>
  );
}
