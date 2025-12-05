"use client";

interface AboutSectionProps {
  isVisible: { [key: string]: boolean };
  setSectionRef: (id: string) => (el: HTMLDivElement | null) => void;
}

export default function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] border-t border-white/10">
      <div 
        className="max-w-4xl mx-auto"
        ref={setSectionRef("about")}
        data-section-id="about"
      >
        <h2 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal mb-12 text-center transition-all duration-1000 ${
            isVisible["about"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: '"Boldonse", system-ui' }}
        >
          ABOUT
        </h2>
        <div className="space-y-6">
          <p 
            className={`text-white/70 text-lg sm:text-xl leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible["about"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            I'm a passionate graphic designer and artist dedicated to creating
            visually stunning and meaningful designs. With a keen eye for
            detail and a love for experimentation, I bring creative visions to
            life through thoughtful design solutions.
          </p>
          <p 
            className={`text-white/70 text-lg sm:text-xl leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible["about"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            My work spans across branding, digital art, typography, and web
            design, always pushing boundaries and exploring new creative
            possibilities.
          </p>
        </div>
      </div>
    </section>
  );
}

