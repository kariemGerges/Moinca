"use client";

interface MojoSectionProps {
  isVisible: { [key: string]: boolean };
  setSectionRef: (id: string) => (el: HTMLDivElement | null) => void;
}

export default function MojoSection({ isVisible, setSectionRef }: MojoSectionProps) {
  return (
    <section id="mojo" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] border-t border-white/10">
      <div 
        className="max-w-4xl mx-auto text-center"
        ref={setSectionRef("mojo")}
        data-section-id="mojo"
      >
        <h2 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal mb-8 transition-all duration-1000 ${
            isVisible["mojo"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: '"Boldonse", system-ui' }}
        >
          MOJO NODNARB
        </h2>
        <p 
          className={`text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible["mojo"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          A creative space for artistic expression and design innovation.
        </p>
      </div>
    </section>
  );
}

