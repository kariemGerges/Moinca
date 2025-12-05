"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 border border-white/5 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Main 404 Text */}
        <div className="mb-8">
          <h1 
            className="text-9xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem] text-white/10 font-normal leading-none select-none"
            style={{ fontFamily: '"Boldonse", system-ui' }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal animate-fade-in-up"
              style={{ fontFamily: '"Boldonse", system-ui' }}
            >
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Artistic Message */}
        <div className="mb-12 space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <p 
            className="text-white/70 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: '"Italiana", sans-serif' }}
          >
            Sometimes the best designs come from unexpected paths.
          </p>
          <p 
            className="text-white/50 text-sm sm:text-base"
            style={{ fontFamily: '"Michroma", sans-serif' }}
          >
            The page you're looking for doesn't exist, but creativity never ends.
          </p>
        </div>

        {/* Navigation Options */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href="/"
            className="group relative px-8 py-4 border border-white/20 hover:border-white/40 text-white transition-all duration-300 inline-block"
            style={{ fontFamily: '"Michroma", sans-serif' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <span className="text-xs tracking-widest uppercase relative z-10">Return Home</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/#work"
            className="group relative px-8 py-4 border border-white/20 hover:border-white/40 text-white transition-all duration-300 inline-block"
            style={{ fontFamily: '"Michroma", sans-serif' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <span className="text-xs tracking-widest uppercase relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-16 h-16 border border-white/5 rotate-45 animate-float" />
        <div className="absolute bottom-1/4 right-10 w-12 h-12 border border-white/5 rotate-12 animate-float-delayed" />
        <div className="absolute top-1/2 right-1/4 w-8 h-8 border border-white/5 rotate-45 animate-float-slow" />
      </div>
    </div>
  );
}

