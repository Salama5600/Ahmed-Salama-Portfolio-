import { SERVICES } from '../data';

export default function WhatIBuild() {
  const whatsappServicesUrl =
    'https://wa.me/201508502069?text=' +
    encodeURIComponent("Hi Ahmed, I'd like to talk about a project for my business.");

  return (
    <section id="services" className="w-full bg-[#F7F3EC] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[720px] mb-14 md:mb-16">
          <span className="text-[14px] font-medium text-[#6B8874] tracking-wide block mb-3">
            Services
          </span>
          <h2 className="font-serif text-[30px] md:text-[40px] leading-[1.2] font-semibold text-[#1F3126] tracking-tight mb-4">
            What I build
          </h2>
          <p className="text-[17px] leading-[1.65] text-[#1F3126]">
            I work with restaurants, hotels, clinics and local businesses, and with larger companies in the Gulf.
          </p>
        </div>

        {/* Numbered List (Vertical numbered list, NOT cards, NO generic icons) */}
        <div className="border-t border-[#A9BDB0]/60 divide-y divide-[#A9BDB0]/60 mb-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
            >
              {/* Number: Lora 40px in Sage 500 */}
              <div className="md:col-span-2">
                <span className="font-serif text-[32px] md:text-[40px] font-normal text-[#6B8874] leading-none select-none">
                  {service.number}
                </span>
              </div>

              {/* Title: 4 cols desktop */}
              <div className="md:col-span-4">
                <h3 className="font-serif text-[20px] md:text-[22px] font-semibold text-[#1F3126] tracking-tight">
                  {service.title}
                </h3>
              </div>

              {/* Description: 6 cols desktop */}
              <div className="md:col-span-6">
                <p className="text-[16px] leading-[1.65] text-[#1F3126]">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Single Text Link at the end of section: "Tell me what you need" */}
        <div className="pt-2">
          <a
            href={whatsappServicesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-medium text-[16px] text-[#3D5A47] underline decoration-[#C9A46A] decoration-2 underline-offset-4 hover:decoration-[3px] hover:text-[#2C4234] transition-all"
          >
            Tell me what you need →
          </a>
        </div>
      </div>
    </section>
  );
}
