import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const boldonse = localFont({
  src: "../fonts/Boldonse/Boldonse-Regular.ttf",
  variable: "--font-boldonse",
  weight: "400",
  display: "swap",
});

const italiana = localFont({
  src: "../fonts/Italiana/Italiana-Regular.ttf",
  variable: "--font-italiana",
  weight: "400",
  display: "swap",
});

const michroma = localFont({
  src: "../fonts/Michroma/Michroma-Regular.ttf",
  variable: "--font-michroma",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Monica - Graphic Designer & Creative Artist | Portfolio",
    template: "%s | Monica - Graphic Designer"
  },
  description: "Professional graphic designer and creative artist specializing in brand identity, digital art, typography, and web design. Explore innovative design solutions and creative portfolio.",
  keywords: [
    "graphic designer",
    "brand identity designer",
    "digital artist",
    "typography designer",
    "web designer",
    "UI/UX designer",
    "creative portfolio",
    "visual identity",
    "graphic design portfolio",
    "art director",
    "design studio",
    "creative agency",
    "branding designer",
    "illustration",
    "visual design"
  ],
  authors: [{ name: "Monica" }],
  creator: "Monica",
  publisher: "Monica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://moinca.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monica-portfolio.com", // Update with your actual domain
    title: "Monica - Graphic Designer & Creative Artist | Portfolio",
    description: "Professional graphic designer and creative artist specializing in brand identity, digital art, typography, and web design.",
    siteName: "Monica Portfolio",
    images: [
      {
        url: "/monica.jpeg",
        width: 1200,
        height: 630,
        alt: "Monica - Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monica - Graphic Designer & Creative Artist",
    description: "Professional graphic designer and creative artist specializing in brand identity, digital art, typography, and web design.",
    images: ["/monica.jpeg"],
    creator: "@monica", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Monica",
    "jobTitle": "Graphic Designer & Creative Artist",
    "description": "Professional graphic designer and creative artist specializing in brand identity, digital art, typography, and web design.",
    "url": "https://monica-portfolio.com", // Update with your actual domain
    "image": "https://monica-portfolio.com/monica.jpeg", // Update with your actual domain
    "sameAs": [
      // Add your social media profiles
      // "https://www.instagram.com/monica",
      // "https://www.behance.net/monica",
      // "https://dribbble.com/monica"
    ],
    "knowsAbout": [
      "Graphic Design",
      "Brand Identity",
      "Digital Art",
      "Typography",
      "Web Design",
      "UI/UX Design",
      "Illustration",
      "Visual Identity"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Graphic Designer",
      "occupationLocation": {
        "@type": "City",
        "name": "Your City" // Update with your location
      }
    }
  };

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Monica Portfolio",
    "description": "Portfolio showcasing graphic design work including brand identity, digital art, typography, and web design projects.",
    "creator": {
      "@type": "Person",
      "name": "Monica"
    },
    "about": {
      "@type": "Thing",
      "name": "Graphic Design"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
        />
        <link rel="canonical" href="https://monica-portfolio.com" /> {/* Update with your actual domain */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${boldonse.variable} ${italiana.variable} ${michroma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
