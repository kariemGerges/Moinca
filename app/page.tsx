"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import MojoSection from "./components/MojoSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { PortfolioItem } from "./components/types";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-section-id");
          if (id) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Brand Identity",
      category: "Branding",
      description: "Modern visual identity system",
    },
    {
      id: 2,
      title: "Digital Art",
      category: "Illustration",
      description: "Abstract digital compositions",
    },
    {
      id: 3,
      title: "Typography",
      category: "Design",
      description: "Experimental type design",
    },
    {
      id: 4,
      title: "Web Design",
      category: "UI/UX",
      description: "User-centered interfaces",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] overflow-hidden">
      <main className="relative z-10">
        <HeroSection scrollY={scrollY} />

        <PortfolioSection 
          portfolioItems={portfolioItems}
          isVisible={isVisible}
          setSectionRef={setSectionRef}
        />
        <MojoSection 
          isVisible={isVisible}
          setSectionRef={setSectionRef}
        />
        <AboutSection 
          isVisible={isVisible}
          setSectionRef={setSectionRef}
        />
        <ContactSection 
          isVisible={isVisible}
          setSectionRef={setSectionRef}
        />
        <Footer 
          isVisible={isVisible}
          setSectionRef={setSectionRef}
        />

      </main>

    </div>
  );

}
