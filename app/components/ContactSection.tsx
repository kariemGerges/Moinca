"use client";

interface ContactSectionProps {
  isVisible: { [key: string]: boolean };
  setSectionRef: (id: string) => (el: HTMLDivElement | null) => void;
}

export default function ContactSection({ isVisible, setSectionRef }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] border-t border-white/10">
      <div 
        className="max-w-2xl mx-auto text-center"
        ref={setSectionRef("contact")}
        data-section-id="contact"
      >
        <h2 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal mb-8 transition-all duration-1000 ${
            isVisible["contact"] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
          style={{ fontFamily: '"Boldonse", system-ui' }}
        >
          CONTACT
        </h2>
        <p 
          className={`text-white/70 text-lg mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible["contact"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Have a project in mind? I'd love to hear about it.
        </p>
        <a
          href="mailto:hello@example.com"
          className={`inline-block px-8 py-4 border border-white/30 hover:border-white text-white transition-all duration-500 group ${
            isVisible["contact"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ 
            fontFamily: '"Michroma", sans-serif',
            transitionDelay: "400ms"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <span className="text-xs tracking-widest uppercase">Get in Touch</span>
          <svg
            className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
        </a>
      </div>
    </section>
  );
}

