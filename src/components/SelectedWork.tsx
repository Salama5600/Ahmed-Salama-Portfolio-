import { PROJECTS, Project } from '../data';
import { ExternalLink, MessageSquare, Check } from 'lucide-react';

export default function SelectedWork() {
  return (
    <section id="work" className="w-full bg-[#EDE6D8] py-20 md:py-28 border-t border-b border-[#A9BDB0]/60">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[720px] mb-14 md:mb-16">
          <span className="text-[14px] font-medium text-[#6B8874] tracking-wide block mb-3">
            Selected work
          </span>
          <h2 className="font-serif text-[30px] md:text-[40px] leading-[1.2] font-semibold text-[#1F3126] tracking-tight mb-4">
            Five concept sites for businesses like yours
          </h2>
          <p className="text-[17px] leading-[1.65] text-[#1F3126]">
            These are concept projects. I built each one to show how a real business site could work. Every one has a live preview you can open.
          </p>
        </div>

        {/* Project Cards Grid: 2 columns desktop, 1 mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project, index) => {
            const isLastSingle = index === PROJECTS.length - 1;
            return (
              <div
                key={project.id}
                className={`group bg-[#EDE6D8] border border-[#A9BDB0] hover:border-[#6B8874] rounded-[10px] overflow-hidden flex flex-col justify-between transition-colors duration-200 shadow-[0_2px_12px_rgba(31,49,38,0.03)] ${
                  isLastSingle ? 'lg:col-span-2 lg:max-w-[700px] lg:mx-auto w-full' : ''
                }`}
              >
                {/* 1. Image Thumbnail (16:10 aspect ratio) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E3EAE5] border-b border-[#A9BDB0]/60">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback in case of image load delay
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Subtle scrim for contrast */}
                  <div className="absolute inset-0 bg-[#1F3126]/5 pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* 2. Tags line: JetBrains Mono 13px */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-mono text-[12px] font-medium text-[#2C4234] bg-[#E3EAE5] px-2.5 py-0.5 rounded-full">
                        {project.tag}
                      </span>
                    </div>

                    {/* 3. Title: Lora 24px */}
                    <h3 className="font-serif text-[24px] font-semibold text-[#1F3126] tracking-tight mb-3">
                      {project.title}
                    </h3>

                    {/* 4. Description: 2-3 lines */}
                    <p className="text-[15px] leading-[1.65] text-[#1F3126] mb-5">
                      {project.description}
                    </p>

                    {/* 5. Three Bullet Points */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((bullet) => (
                        <li key={bullet} className="flex items-start text-[14px] text-[#2C4234] leading-snug">
                          <span className="mr-2.5 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3D5A47] shrink-0" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* 6. Technology Chips */}
                    <div className="pt-4 border-t border-[#A9BDB0]/50 mb-6 flex flex-wrap items-center gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[12px] font-medium text-[#2C4234] bg-[#F7F3EC] border border-[#A9BDB0]/60 px-2.5 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 7. Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      {/* Primary Button: Live Preview */}
                      <a
                        href={project.livePreviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-[44px] px-5 flex-1 inline-flex items-center justify-center gap-2 text-[14px] font-medium text-[#F7F3EC] bg-[#3D5A47] hover:bg-[#2C4234] active:translate-y-[1px] rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A]"
                      >
                        <span>Live preview</span>
                        <ExternalLink size={14} className="shrink-0" />
                      </a>

                      {/* Secondary Button: Contact Me */}
                      <a
                        href={project.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-[44px] px-5 flex-1 inline-flex items-center justify-center gap-2 text-[14px] font-medium text-[#3D5A47] bg-transparent border-[1.5px] border-[#3D5A47] hover:bg-[#E3EAE5] active:translate-y-[1px] rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A]"
                      >
                        <MessageSquare size={14} className="shrink-0" />
                        <span>Contact me</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
