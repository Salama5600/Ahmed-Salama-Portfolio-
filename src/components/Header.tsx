import { useState, useEffect } from 'react';
import Monogram from './Monogram';
import { PROFILE } from '../data';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Questions', href: '#questions' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 h-[72px] w-full transition-all duration-200 bg-[#F7F3EC]/92 backdrop-blur-md ${
        isScrolled ? 'border-b border-[#A9BDB0]/60 shadow-[0_2px_8px_rgba(31,49,38,0.03)]' : ''
      }`}
    >
      <div className="max-w-[1120px] h-full mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup */}
        <a
          href="#"
          onClick={scrollToTop}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] rounded-md py-1"
          aria-label="Ahmed Salama - Return to top"
        >
          <Monogram size={40} className="transition-transform group-hover:scale-105 duration-200" />
          <div className="flex flex-col text-left">
            <span className="font-serif text-[17px] font-semibold text-[#1F3126] tracking-tight leading-snug">
              {PROFILE.name}
            </span>
            <span className="text-[12px] font-medium text-[#6B8874] tracking-normal leading-none">
              {PROFILE.title}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#1F3126]" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative py-1 transition-colors hover:text-[#3D5A47] whitespace-nowrap shrink-0 ${
                  isActive ? 'text-[#3D5A47] font-semibold' : 'text-[#1F3126]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A46A] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Desktop) */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={PROFILE.whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[44px] px-6 inline-flex items-center justify-center text-[15px] font-medium text-[#F7F3EC] bg-[#3D5A47] hover:bg-[#2C4234] active:translate-y-[1px] rounded-full transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] focus-visible:ring-offset-2"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1F3126] hover:text-[#3D5A47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#A9BDB0]/60 bg-[#F7F3EC] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 mb-6" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-[17px] font-medium text-[#1F3126] hover:text-[#3D5A47] py-2 border-b border-[#A9BDB0]/20 flex items-center justify-between"
              >
                <span>{item.label}</span>
                {activeSection === item.href.replace('#', '') && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A46A]" />
                )}
              </a>
            ))}
          </nav>
          <a
            href={PROFILE.whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[48px] inline-flex items-center justify-center text-[15px] font-medium text-[#F7F3EC] bg-[#3D5A47] hover:bg-[#2C4234] rounded-full transition-colors"
          >
            Message me on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
