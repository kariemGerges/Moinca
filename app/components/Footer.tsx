"use client";

interface FooterProps {
  isVisible: { [key: string]: boolean };
  setSectionRef: (id: string) => (el: HTMLDivElement | null) => void;
}

export default function Footer({ isVisible, setSectionRef }: FooterProps) {
  const navItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#work", label: "PORTFOLIO" },
    { href: "#mojo", label: "MOJO NODNARB" },
    { href: "#contact", label: "CONTACT" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Dribbble", href: "#" },
  ];

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer 
      className="relative py-16 px-6 sm:px-8 lg:px-12 border-t border-white/10 bg-[#0D0D0D] overflow-hidden"
      ref={setSectionRef("footer")}
      data-section-id="footer"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-10">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-500 via-pink-500 to-purple-500 animate-gradient-x"></div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Simple Horizontal Layout */}
        <div 
          className={`flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-12 transition-all duration-1000 ${
            isVisible["footer"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-white/50 hover:text-white transition-colors duration-300 text-xs tracking-wider uppercase"
                style={{ 
                  fontFamily: '"Michroma", sans-serif'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white/50 hover:text-white transition-colors duration-300 text-xs tracking-wider uppercase"
                style={{ 
                  fontFamily: '"Michroma", sans-serif'
                }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Simple Divider */}
        <div 
          className={`h-px bg-white/10 mb-8 transition-all duration-1000 delay-200 ${
            isVisible["footer"] ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Bottom Section */}
        <div 
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-300 ${
            isVisible["footer"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-white/40 text-xs text-center sm:text-left" style={{ fontFamily: '"Michroma", sans-serif' }}>
            © 2024 Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white/50 text-xs" style={{ fontFamily: '"Michroma", sans-serif' }}>
              Made with ❤️ by Kariem
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

