"use client";

import Image from "next/image";

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const navItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#work", label: "PORTFOLIO" },
    { href: "#mojo", label: "MOJO NODNARB" },
    { href: "#contact", label: "CONTACT" },
  ];

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0D0D0D] overflow-hidden">
      {/* Portrait Image with Parallax */}
      <div className="absolute inset-0 flex items-center justify-center sm:justify-end pr-0 sm:pr-8 md:pr-16 lg:pr-24">
        <div 
          className="relative w-full sm:w-[70%] md:w-[60%] lg:w-[55%] h-full flex items-center justify-center sm:justify-end transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <Image
            src="/monica.jpeg"
            alt="Monica"
            fill
            className="object-cover object-center sm:object-right"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, 55vw"
          />
        </div>
      </div>

      {/* Name at Top Center with Fade In */}
      <div className="absolute top-8 sm:top-12 md:top-16 left-0 right-0 z-20">
        <h1 
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-normal animate-fade-in-up"
          style={{ fontFamily: '"Italiana", system-ui' }}
        >
          MONICA
        </h1>
      </div>

      {/* Navigation Menu - Bottom Left with Stagger Animation */}
      <nav className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-6 sm:left-8 md:left-12 lg:left-16 z-20">
        <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          {navItems.map((item, index) => (
            <li 
              key={item.href}
              className="animate-fade-in-left"
              style={{ animationDelay: `${index * 100 + 300}ms`, animationFillMode: "both" }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-white text-xs sm:text-sm md:text-base font-normal tracking-normal hover:opacity-80 transition-all duration-300 hover:translate-x-2 inline-block"
                style={{ fontFamily: '"Michroma", sans-serif' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

