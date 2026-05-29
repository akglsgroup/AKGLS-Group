import React from "react";

interface JsonLdProps {
  initialPage: string;
  title: string;
  description: string;
  url: string;
}

export default function JsonLd({ initialPage, title, description, url }: JsonLdProps) {
  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com/",
    "logo": "https://akglsgroup.com/images/logo.png",
    "image": "https://akglsgroup.com/images/og-main.jpg",
    "description": "Enterprise digital marketing and AI SEO agency portal featuring modern Next.js server-side pre-rendered pages, highly optimized mega navigation, strategic diagnostics, and ROI estimators.",
    "telephone": "+91-88000-00000",
    "sameAs": [
      "https://www.linkedin.com/company/akgls-group",
      "https://twitter.com/akglsgroup"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 62, Electronic City",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    }
  };

  // 2. LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AKGLS Group",
    "image": "https://akglsgroup.com/images/og-main.jpg",
    "@id": "https://akglsgroup.com/#localbusiness",
    "url": "https://akglsgroup.com/",
    "telephone": "+91-88000-00000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 62, Electronic City",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6273,
      "longitude": 77.3725
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // 3. FAQPage Schema (5 common questions about our SEO services)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What SEO services does AKGLS Group offer in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AKGLS Group provides comprehensive organic search solutions including Technical SEO, semantic On-Page optimization, Link Building outreach, Local GBP optimization, and strategic enterprise-scale campaigns tailored to secure high-intent search visibility."
        }
      },
      {
        "@type": "Question",
        "name": "How does Generative Engine Optimization (GEO) differ from traditional SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional SEO targets index ranking lists, whereas Generative Engine Optimization (GEO) aligns content models with conversational AI retrieval systems. We optimize entity definitions and syntax structure to secure citation features across ChatGPT Search, Perplexity, Gemini, and Google’s AI Overviews."
        }
      },
      {
        "@type": "Question",
        "name": "Where is AKGLS Group located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AKGLS Group is a premier offshore digital marketing agency headquartered in Electronic City Noida, Uttar Pradesh, India, providing performance search marketing and custom web solutions globally."
        }
      },
      {
        "@type": "Question",
        "name": "Does AKGLS Group offer customizable pricing for campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide fully customized pricing retainers, outcome-linked digital packages, and flexible pricing structures designed to suit the growth targets of startups, B2B manufacturing firms, SaaS platforms, and global enterprises."
        }
      },
      {
        "@type": "Question",
        "name": "How can I request a digital marketing proposal or SEO audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can generate an interactive campaign proposal immediately using our on-page Proposal Generator or contact our search architects to schedule a custom deep-dive website sitemap scan and crawl diagnostics audit."
        }
      }
    ]
  };

  // List of pages that do not qualify for a Service schema
  const nonServicePages = ["home", "about", "contact", "blog", "learning-hub", "internship-program", "seo-case-studies", "ecommerce-seo-case-study", "local-seo-case-study", "ppc-case-study", "ai-optimization-case-study", "proposal-generator", "tools"];
  const isServicePage = !nonServicePages.includes(initialPage);

  // 4. Service Schema
  const serviceSchema = isServicePage ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "url": url,
    "provider": {
      "@type": "LocalBusiness",
      "name": "AKGLS Group",
      "image": "https://akglsgroup.com/images/og-main.jpg",
      "telephone": "+91-88000-00000",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 62, Electronic City",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      }
    },
    "areaServed": ["IN", "US", "GB", "CA", "AU"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AKGLS Search & SEO Performance Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative Engine Optimization (GEO)",
            "description": "Align entity mapping and conversational syntax to secure features in ChatGPT Search and Perplexity retrieval models."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Organic Search SEO Services India",
            "description": "High-impact semantic link structures, site crawler resolution, and technical crawl diagnostics scaling organic transactions."
          }
        }
      ]
    }
  } : null;

  return (
    <>
      {/* Organization schema on all pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* LocalBusiness schema on key corporate/location pages */}
      {(initialPage === "home" || initialPage === "contact" || initialPage === "about") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      {/* FAQ schema on search services landing pages */}
      {(initialPage === "home" || initialPage === "services" || initialPage === "seo") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Service schema on service pages */}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </>
  );
}
