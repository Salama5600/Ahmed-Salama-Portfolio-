import { HERO_DATA, PROFILE } from '../data';
import SketchYourSite from './SketchYourSite';

export default function Hero() {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="w-full bg-[#F7F3EC] pt-12 pb-16 md:py-24 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: 55% (~7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label (Clean unboxed text, no pill) */}
            <div className="text-[14px] font-medium text-[#6B8874] tracking-wide mb-4">
              {HERO_DATA.smallLabel}
            </div>

            {/* H1 Heading (Lora 600, 56px desktop / 38px mobile) */}
            <h1 className="font-serif text-[38px] md:text-[50px] lg:text-[56px] leading-[1.12] font-semibold text-[#1F3126] tracking-tight mb-6 text-balance">
              {HERO_DATA.h1}
            </h1>

            {/* Body Paragraph (17px, line height 1.65, max ~62 chars) */}
            <p className="text-[17px] leading-[1.65] text-[#1F3126] max-w-[580px] mb-8">
              {HERO_DATA.paragraph}
            </p>

            {/* Actions: Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-4">
              <a
                href={PROFILE.whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[48px] px-7 inline-flex items-center justify-center text-[15px] font-medium text-[#F7F3EC] bg-[#3D5A47] hover:bg-[#2C4234] active:translate-y-[1px] rounded-full transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] focus-visible:ring-offset-2"
              >
                {HERO_DATA.primaryButtonText}
              </a>
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="h-[48px] px-7 inline-flex items-center justify-center text-[15px] font-medium text-[#3D5A47] bg-transparent border-[1.5px] border-[#3D5A47] hover:bg-[#E3EAE5] active:translate-y-[1px] rounded-full transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A]"
              >
                {HERO_DATA.secondaryButtonText}
              </a>
            </div>

            {/* Under buttons note */}
            <p className="text-[13px] text-[#6B8874] mb-8">
              {HERO_DATA.underButtonsText}
            </p>

            {/* Facts line (Plain text with dots, NO counters or chips) */}
            <div className="pt-6 border-t border-[#A9BDB0]/60 text-[14px] text-[#6B8874] font-medium">
              <span>{HERO_DATA.factsLine}</span>
            </div>
          </div>

          {/* Right Column: 45% (~5 cols) - Interactive Sketch Tool */}
          <div className="lg:col-span-5 w-full">
            <SketchYourSite />
          </div>
        </div>
      </div>
    </section>
  );
}
