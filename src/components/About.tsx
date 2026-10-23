import { ABOUT_DATA, PROFILE } from '../data';
import Monogram from './Monogram';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#F7F3EC] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 7 cols - Copy, Bio, Facts & Stack */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="text-[14px] font-medium text-[#6B8874] tracking-wide block mb-3">
              {ABOUT_DATA.label}
            </span>
            <h2 className="font-serif text-[30px] md:text-[40px] leading-[1.2] font-semibold text-[#1F3126] tracking-tight mb-6">
              {ABOUT_DATA.h2}
            </h2>

            {/* 3 Paragraphs */}
            <div className="space-y-4 text-[17px] leading-[1.65] text-[#1F3126] mb-8">
              {ABOUT_DATA.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Facts list (Plain text list with separators, no counters) */}
            <div className="py-5 border-t border-b border-[#A9BDB0]/60 text-[14px] text-[#2C4234] font-medium mb-8">
              <p className="leading-relaxed">
                {ABOUT_DATA.facts.join('  ·  ')}
              </p>
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="font-serif text-[20px] font-semibold text-[#1F3126] mb-4">
                {ABOUT_DATA.toolsHeading}
              </h3>

              {/* Specialty: React, TypeScript, Tailwind CSS (Bigger, Sage 700 border, Sage 100 bg) */}
              <div className="mb-4">
                <span className="text-[12px] font-medium text-[#6B8874] block mb-2 uppercase tracking-wider font-mono">
                  Primary stack
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {ABOUT_DATA.specialtyStack.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[14px] font-semibold text-[#2C4234] bg-[#E3EAE5] border-[1.5px] border-[#3D5A47] px-4 py-1.5 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Also stack: Thinner border */}
              <div>
                <span className="text-[12px] font-medium text-[#6B8874] block mb-2 uppercase tracking-wider font-mono">
                  Also work with
                </span>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_DATA.alsoStack.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[13px] font-normal text-[#2C4234] bg-[#EDE6D8] border border-[#A9BDB0] px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 cols - Large Monogram with Location */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center p-8 md:p-12 bg-[#EDE6D8] border border-[#A9BDB0] rounded-[10px] text-center shadow-[0_4px_20px_rgba(31,49,38,0.03)]">
            {/* Desktop 240px, Mobile 120px */}
            <div className="hidden md:block mb-6">
              <Monogram size={220} />
            </div>
            <div className="block md:hidden mb-4">
              <Monogram size={120} />
            </div>

            <div className="font-serif text-[20px] font-semibold text-[#1F3126] mb-1">
              {PROFILE.name}
            </div>
            <div className="text-[14px] font-medium text-[#6B8874] mb-3">
              {PROFILE.title}
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EAE5] border border-[#A9BDB0]/60 text-[13px] font-mono text-[#2C4234]">
              <span>Based in Egypt · Egypt time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
