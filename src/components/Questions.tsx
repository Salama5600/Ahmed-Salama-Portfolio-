import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown } from 'lucide-react';

export default function Questions() {
  // Accordion: only one open at a time
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="questions" className="w-full bg-[#EDE6D8] py-20 md:py-28 border-t border-b border-[#A9BDB0]/60">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="max-w-[760px] mx-auto">
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <span className="text-[14px] font-medium text-[#6B8874] tracking-wide block mb-3">
              Questions
            </span>
            <h2 className="font-serif text-[30px] md:text-[40px] leading-[1.2] font-semibold text-[#1F3126] tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#F7F3EC] border border-[#A9BDB0] rounded-[10px] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A]"
                  >
                    <span className="font-serif text-[18px] md:text-[19px] font-semibold text-[#1F3126]">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#6B8874] shrink-0 transition-transform duration-250 ${
                        isOpen ? 'rotate-180 text-[#3D5A47]' : ''
                      }`}
                    />
                  </button>

                  {/* Smooth height transition content */}
                  <div
                    className={`grid transition-all duration-250 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-1 text-[15px] leading-[1.65] text-[#2C4234] border-t border-[#A9BDB0]/30">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
