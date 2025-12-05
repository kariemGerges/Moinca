"use client";

import { PortfolioItem } from "./types";

interface SEOStructuredDataProps {
  portfolioItems: PortfolioItem[];
}

export default function SEOStructuredData({ portfolioItems }: SEOStructuredDataProps) {
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Graphic Design Portfolio",
    "description": "Collection of graphic design projects including brand identity, digital art, typography, and web design",
    "itemListElement": portfolioItems.map((item, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": item.title,
      "description": item.description,
      "genre": item.category,
      "creator": {
        "@type": "Person",
        "name": "Monica"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />
    </>
  );
}

