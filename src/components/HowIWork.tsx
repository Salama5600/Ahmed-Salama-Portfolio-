import { PROCESS_STEPS, PROMISES } from '../data';

export default function HowIWork() {
  return (
    <section id="process" className="w-full bg-[#3D5A47] text-[#F7F3EC] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[720px] mb-16 md:mb-20">
          <span className="text-[14px] font-medium text-[#C9A46A] tracking-wide block mb-3">
            Process
          </span>
          <h2 className="font-serif text-[30px] md:text-[40px] leading-[1.2] font-semibold text-[#F7F3EC] tracking-tight mb-4">
            How I work
          </h2>
          <p className="text-[17px] leading-[1.65] text-[#F7F3EC]/90">
            The same five steps on every project, so you always know what happens next.
          </p>
        </div>

        {/* 5 Steps: Connected horizontally on desktop, vertical on mobile */}
        <div className="relative mb-20 md:mb-24">
          {/* Subtle connecting line across steps on desktop */}
          <div
            className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-[#A9BDB0]/30 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col">
                {/* Step Number in Gold 500 */}
                <div className="w-14 h-14 rounded-full bg-[#2C4234] border border-[#A9BDB0]/40 flex items-center justify-center font-serif text-[22px] font-semibold text-[#C9A46A] mb-4 shadow-sm">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-[20px] font-semibold text-[#F7F3EC] mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[14px] leading-[1.6] text-[#F7F3EC]/80">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Promises: NOT cards, just large bold typography side-by-side with sentence under each */}
        <div className="pt-12 border-t border-[#A9BDB0]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {PROMISES.map((promise) => (
              <div key={promise.title} className="flex flex-col">
                <span className="font-serif text-[26px] md:text-[30px] font-semibold text-[#F7F3EC] tracking-tight mb-2">
                  {promise.title}.
                </span>
                <p className="text-[15px] leading-[1.6] text-[#F7F3EC]/80">
                  {promise.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
