"use client";

import { PortfolioItem } from "./types";

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
  isVisible: { [key: string]: boolean };
  setSectionRef: (id: string) => (el: HTMLDivElement | null) => void;
}

export default function PortfolioSection({ 
  portfolioItems, 
  isVisible, 
  setSectionRef 
}: PortfolioSectionProps) {
  return (
    <section id="work" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-16"
          ref={setSectionRef("work-header")}
          data-section-id="work-header"
        >
          <h2 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal mb-6 transition-all duration-1000 ${
              isVisible["work-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ fontFamily: '"Boldonse", system-ui' }}
          >
            PORTFOLIO
          </h2>
          <p 
            className={`text-white/70 text-sm sm:text-base transition-all duration-1000 delay-200 ${
              isVisible["work-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            A selection of recent creative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={setSectionRef(`work-item-${item.id}`)}
              data-section-id={`work-item-${item.id}`}
              className={`group relative overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-700 cursor-pointer ${
                isVisible[`work-item-${item.id}`] 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-20 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 transition-all duration-500" />
              <div className="p-8 sm:p-12 min-h-[400px] flex flex-col justify-between relative z-10">
                <div className="relative z-10">
                  <span className="inline-block px-4 py-2 text-xs tracking-widest text-white/60 border border-white/20 mb-6 uppercase transition-all duration-300 group-hover:text-white group-hover:border-white/40" style={{ fontFamily: '"Michroma", sans-serif' }}>
                    {item.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-4 transition-all duration-300 group-hover:translate-x-2" style={{ fontFamily: '"Boldonse", system-ui' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed transition-all duration-300 group-hover:text-white/90">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8">
                  <div className="flex items-center gap-3 text-white group-hover:translate-x-2 transition-transform duration-300" style={{ fontFamily: '"Michroma", sans-serif' }}>
                    <span className="text-xs tracking-widest uppercase">View Project</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

