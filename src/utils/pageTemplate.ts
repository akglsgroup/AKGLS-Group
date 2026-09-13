import { AppRoute } from '../routesData';
import { renderSharedHeaderHtml, renderHeaderScript } from './headerTemplate';

export function renderPageHtml(route: AppRoute): string {
  const fullUrl = `https://www.akglsgroup.com${route.path.startsWith('/') ? route.path : '/' + route.path}`.replace(/\/+$/, '');
  const title = route.title || `${route.h1 || 'Digital Growth'} | AKGLS Group`;
  const description = route.description || route.leadParagraph || 'Enterprise SEO, GEO, and AI search optimization services by AKGLS Group.';
  const h1 = route.h1 || route.title.split('|')[0].trim();
  const highlight = route.highlight || 'By AKGLS Group';
  const leadParagraph = route.leadParagraph || route.description;
  const category = route.category || 'Services';

  const features = route.features && route.features.length > 0 ? route.features : [
    { title: "Algorithmic Precision", desc: "Engineered solutions backed by real-time ranking data and search performance analytics." },
    { title: "First-Mover AI Advantage", desc: "Direct optimization for ChatGPT, Perplexity, Claude, and Google AI Overviews." },
    { title: "Measurable Revenue ROI", desc: "Transparent tracking and attribution connecting search visibility directly to commercial pipeline." }
  ];

  const faqs = route.faqs && route.faqs.length > 0 ? route.faqs : [
    {
      q: `What are ${h1} by AKGLS Group?`,
      a: `${h1} encompass specialized strategic optimization, architecture governance, and technical execution designed to scale rankings, traffic, and high-intent customer acquisition.`
    },
    {
      q: "How quickly can we expect to see results?",
      a: "Initial technical optimizations and index corrections typically reflect within 2 to 4 weeks. Meaningful organic traffic lifts and citation gains compound over 60 to 90 days."
    },
    {
      q: "How do I get started?",
      a: "Contact our search architects directly at +91 831 811 4492 or submit your website URL in our audit form for an immediate consultation."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": h1,
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "AKGLS Group",
      "url": "https://www.akglsgroup.com",
      "telephone": "+918318114492",
      "email": "info@akglsgroup.com"
    },
    "areaServed": ["Worldwide", "United States", "India", "United Kingdom", "United Arab Emirates"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${h1} Deliverables`,
      "itemListElement": features.map((f, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": f.title,
          "description": f.desc
        }
      }))
    }
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MRPCQQN');</script>
    <!-- End Google Tag Manager -->

    <!-- Google tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FPG5D0GNNF"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FPG5D0GNNF');
    </script>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="qfDMo5MD2Sq1sBny_nq0o1lhXs-G0zDZS20K8MUM70w" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- Highly Optimized SEO Meta Tags -->
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${fullUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <!-- Open Graph (OG) Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="https://www.akglsgroup.com/assets/geo-og.png" />
    <meta property="og:site_name" content="AKGLS Group" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${fullUrl}" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="https://www.akglsgroup.com/assets/geo-og.png" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet">

    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              display: ['Space Grotesk', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
              brand: {
                dark: '#050b15',
                navy: '#0c121e',
                slate: '#05070a',
                indigo: '#3b82f6',
                purple: '#8b5cf6',
                teal: '#06b6d4',
                emerald: '#10b981',
                orange: '#f97316',
                card: '#0f1c35',
                border: '#1e2e4a',
                cyan: '#00d0ff',
                pink: '#ec4899',
              }
            }
          }
        }
      }
    </script>
    <style>
      body {
        background-color: #050b15;
        color: #f1f5f9;
      }
      .glow-teal {
        box-shadow: 0 0 40px -10px rgba(13, 242, 201, 0.25);
      }
      .glow-border {
        border: 1px solid rgba(13, 242, 201, 0.3);
      }
      .gradient-text-teal {
        background: linear-gradient(135deg, #0df2c9 0%, #00d0ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .gradient-text-orange {
        background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    </style>

    <!-- Schema.org Organization -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AKGLS Group",
      "url": "https://www.akglsgroup.com",
      "logo": "https://www.akglsgroup.com/favicon.svg",
      "telephone": "+918318114492",
      "email": "info@akglsgroup.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.linkedin.com/company/akgls-group",
        "https://twitter.com/akglsgroup",
        "https://www.facebook.com/akglsgroup"
      ]
    }
    </script>

    <!-- Schema.org WebSite -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AKGLS Group",
      "url": "https://www.akglsgroup.com"
    }
    </script>

    <!-- Schema.org Service -->
    <script type="application/ld+json">
    ${JSON.stringify(serviceSchema, null, 2)}
    </script>

    <!-- Schema.org FAQPage -->
    <script type="application/ld+json">
    ${JSON.stringify(faqSchema, null, 2)}
    </script>
  </head>
  <body class="min-h-screen bg-brand-dark text-slate-100 flex flex-col font-sans selection:bg-brand-teal selection:text-brand-dark">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRPCQQN"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

${renderSharedHeaderHtml(route.path)}

    <!-- Main Container -->
    <main class="flex-grow">
      <!-- Breadcrumb Bar -->
      <nav aria-label="Breadcrumbs" class="bg-brand-indigo/40 border-b border-brand-border/40 py-2.5 px-4 text-xs text-slate-400">
        <div class="max-w-7xl mx-auto flex items-center gap-2">
          <a href="/" class="hover:text-brand-teal transition-colors">Home</a>
          <span>/</span>
          <span class="text-slate-500">${escapeHtml(category)}</span>
          <span>/</span>
          <span class="text-slate-200 font-medium">${escapeHtml(h1)}</span>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative pt-12 pb-20 overflow-hidden border-b border-brand-border/40">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-teal/10 via-brand-dark to-brand-dark pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-teal/30 text-brand-teal text-xs font-semibold mb-6">
              <span class="w-2 h-2 rounded-full bg-brand-teal animate-ping"></span>
              <span>${escapeHtml(category.toUpperCase())} • 2026 ARCHITECTURE</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.1] mb-6">
              ${escapeHtml(h1)}
              <span class="block gradient-text-teal mt-1">${escapeHtml(highlight)}</span>
            </h1>
            <p class="text-lg text-slate-300 leading-relaxed mb-8">
              ${escapeHtml(leadParagraph)}
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <a href="tel:+918318114492" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-brand-teal text-brand-dark hover:bg-white transition-all shadow-lg shadow-brand-teal/20">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Direct: +91 831 811 4492
              </a>
              <a href="https://wa.me/918318114492" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-[#25D366] text-white hover:bg-emerald-600 transition-all">
                WhatsApp Us
              </a>
              <a href="#audit-form" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold border border-brand-border bg-brand-card/60 hover:bg-brand-card hover:border-brand-teal/50 text-slate-200 transition-all">
                Free SEO Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Metrics Bar -->
      <section class="py-8 bg-brand-indigo/30 border-b border-brand-border/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div class="text-2xl sm:text-3xl font-black font-display text-brand-teal">10+ Years</div>
            <div class="text-xs text-slate-400 mt-1 uppercase font-semibold">Search Experience</div>
          </div>
          <div>
            <div class="text-2xl sm:text-3xl font-black font-display text-brand-orange">100+ Brands</div>
            <div class="text-xs text-slate-400 mt-1 uppercase font-semibold">Scaled Organically</div>
          </div>
          <div>
            <div class="text-2xl sm:text-3xl font-black font-display text-emerald-400">98%</div>
            <div class="text-xs text-slate-400 mt-1 uppercase font-semibold">Client Retention</div>
          </div>
          <div>
            <div class="text-2xl sm:text-3xl font-black font-display text-brand-purple">#1 Rated</div>
            <div class="text-xs text-slate-400 mt-1 uppercase font-semibold">AI Search Agency</div>
          </div>
        </div>
      </section>

      <!-- Key Capabilities & Strategic Grid -->
      <section class="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-card text-brand-teal text-xs font-mono font-bold mb-3 border border-brand-teal/20">
            TECHNICAL BLUEPRINT
          </div>
          <h2 class="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
            How We Deliver Compounding Growth
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Every implementation is backed by mathematical precision, rigorous schema governance, and conversion engineering.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${features.map((f, i) => `
          <div class="p-8 rounded-2xl bg-brand-card/70 border border-brand-border hover:border-brand-teal/40 transition-all flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/20 flex items-center justify-center font-mono font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                0${i + 1}
              </div>
              <h3 class="text-xl font-bold text-white mb-3">${escapeHtml(f.title)}</h3>
              <p class="text-slate-300 text-sm leading-relaxed">${escapeHtml(f.desc)}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-brand-border/50 text-xs font-semibold text-brand-teal flex items-center gap-1">
              <span>Included in Scope</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
          </div>
          `).join('')}
        </div>
      </section>

      <!-- Interactive Lead Capture Form -->
      <section id="audit-form" class="py-16 sm:py-24 bg-gradient-to-b from-brand-indigo/30 via-brand-dark to-brand-dark border-y border-brand-border/60">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="p-8 sm:p-12 rounded-3xl bg-brand-card border border-brand-border glow-teal">
            <div class="text-center max-w-xl mx-auto mb-8">
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-teal/15 text-brand-teal border border-brand-teal/30">
                DIRECT STRATEGIST ACCESS
              </span>
              <h2 class="text-2xl sm:text-3xl font-black font-display text-white mt-3 mb-2">
                Request Your Custom Strategy & Audit
              </h2>
              <p class="text-slate-300 text-sm">
                Enter your website details to receive a complimentary technical breakdown and high-impact keyword opportunities within 24 hours.
              </p>
            </div>

            <form id="pageLeadForm" class="space-y-4">
              <input type="hidden" name="pageTitle" value="${escapeHtml(title)}" />
              <input type="hidden" name="pageAddress" value="${escapeHtml(fullUrl)}" />
              <input type="hidden" name="primaryGoal" value="${escapeHtml(h1)}" />

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                  <input type="text" name="name" required placeholder="Amrish Singh" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-teal focus:outline-none text-white text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Business Email *</label>
                  <input type="email" name="email" required placeholder="amrish@company.com" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-teal focus:outline-none text-white text-sm" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Website URL *</label>
                  <input type="url" name="websiteUrl" required placeholder="https://example.com" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-teal focus:outline-none text-white text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Phone / WhatsApp Number</label>
                  <input type="tel" name="phone" placeholder="+91 831 811 4492" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-teal focus:outline-none text-white text-sm" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Primary Growth Objective / Notes</label>
                <textarea name="notes" rows="3" placeholder="Tell us about your target keywords, competitors, or current organic challenges..." class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-teal focus:outline-none text-white text-sm"></textarea>
              </div>

              <button type="submit" id="submitLeadBtn" class="w-full py-4 rounded-xl font-display font-black text-sm uppercase tracking-wider bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-dark hover:shadow-lg hover:shadow-brand-teal/30 hover:scale-[1.01] transition-all">
                Submit Strategy Request
              </button>
            </form>

            <div id="leadSuccessMsg" class="hidden text-center py-8">
              <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Request Received!</h3>
              <p class="text-slate-300 text-sm max-w-md mx-auto">
                Thank you! Our search directors have received your project details and will follow up with your custom audit within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="text-3xl font-black font-display text-white mt-2">Common Questions About ${escapeHtml(h1)}</h2>
        </div>

        <div class="space-y-4">
          ${faqs.map((f, i) => `
          <div class="rounded-2xl bg-brand-card/60 border border-brand-border overflow-hidden">
            <button class="faq-toggle w-full px-6 py-4 text-left flex justify-between items-center text-white font-semibold hover:text-brand-teal transition-colors">
              <span>${escapeHtml(f.q)}</span>
              <svg class="w-5 h-5 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="faq-content hidden px-6 pb-4 text-slate-300 text-sm leading-relaxed border-t border-brand-border/40 pt-3">
              ${escapeHtml(f.a)}
            </div>
          </div>
          `).join('')}
        </div>
      </section>
    </main>

    <!-- CORPORATE MEGA FOOTER (Standard Unified Component Across All Pages) -->
    <footer class="bg-brand-dark border-t border-brand-border text-slate-400 text-sm mt-auto relative z-10">
      <!-- Section 10: Floating Global Acquisition CTA Strip -->
      <div class="bg-gradient-to-r from-brand-indigo via-slate-900 to-brand-indigo border-b border-brand-border/80 py-10 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span class="inline-flex items-center px-2.5 py-1 rounded text-xs font-bold bg-brand-teal/20 text-brand-teal border border-brand-teal/30 mb-2">
              READY TO SCALE?
            </span>
            <h3 class="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
              Ready to Grow Your Business Online?
            </h3>
            <p class="text-slate-300 text-sm mt-1 max-w-xl">
              Get in touch with AKGLS Group today to discuss your digital marketing, SEO, AI SEO, and web development needs.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <a href="#audit-form" class="px-5 py-3 rounded-xl bg-brand-teal text-brand-dark font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-brand-teal/20">
              Get Free SEO Audit
            </a>
            <a href="tel:+918318114492" class="px-5 py-3 rounded-xl border border-brand-border bg-brand-card hover:border-brand-teal/50 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>

      <!-- Main Mega-Grid -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Desktop 6-Column Layout -->
        <div class="hidden lg:grid grid-cols-6 gap-8">
          <!-- Col 1: Brand & Trust Badges -->
          <div class="col-span-1 space-y-4">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-teal to-brand-cyan flex items-center justify-center font-display font-black text-brand-dark text-base">
                A
              </div>
              <span class="font-display font-black text-base tracking-tight text-white">AKGLS GROUP</span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              AKGLS Group is a premier full-service digital growth, AI SEO, and performance marketing agency.
            </p>
            <div class="pt-2 space-y-2">
              <div class="flex items-center gap-2 text-[11px] text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                <span>10+ Years Experience</span>
              </div>
              <div class="flex items-center gap-2 text-[11px] text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                <span>AI SEO Experts</span>
              </div>
              <div class="flex items-center gap-2 text-[11px] text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                <span>100+ Projects Delivered</span>
              </div>
              <div class="flex items-center gap-2 text-[11px] text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                <span>ROI-Focused Agency</span>
              </div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-slate-400">
              <a href="https://www.linkedin.com/company/akgls-group" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-brand-card hover:text-brand-teal hover:bg-brand-border transition-colors">
                <span class="text-xs font-mono font-bold">IN</span>
              </a>
              <a href="https://twitter.com/akglsgroup" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-brand-card hover:text-brand-teal hover:bg-brand-border transition-colors">
                <span class="text-xs font-mono font-bold">X</span>
              </a>
              <a href="https://www.facebook.com/akglsgroup" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-brand-card hover:text-brand-teal hover:bg-brand-border transition-colors">
                <span class="text-xs font-mono font-bold">FB</span>
              </a>
              <a href="https://wa.me/918318114492" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-brand-card hover:text-emerald-400 hover:bg-brand-border transition-colors">
                <span class="text-xs font-mono font-bold">WA</span>
              </a>
            </div>
          </div>

          <!-- Col 2: SEO Services -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono uppercase font-bold text-white tracking-wider border-b border-brand-border/60 pb-2">
              SEO Services
            </h4>
            <ul class="space-y-1.5 text-xs">
              <li><a href="/seo-services" class="hover:text-brand-teal transition-colors">Search Optimization</a></li>
              <li><a href="/technical-seo-services" class="hover:text-brand-teal transition-colors">Technical SEO</a></li>
              <li><a href="/on-page-seo-services" class="hover:text-brand-teal transition-colors">On-Page SEO</a></li>
              <li><a href="/off-page-seo-services" class="hover:text-brand-teal transition-colors">Off-Page SEO</a></li>
              <li><a href="/local-seo-services" class="hover:text-brand-teal transition-colors">Local SEO & Maps</a></li>
              <li><a href="/ecommerce-seo-services" class="hover:text-brand-teal transition-colors">Ecommerce SEO</a></li>
              <li><a href="/enterprise-seo-services" class="hover:text-brand-teal transition-colors">Enterprise SEO</a></li>
              <li><a href="/international-seo-services" class="hover:text-brand-teal transition-colors">International SEO</a></li>
              <li><a href="/mobile-seo-services" class="hover:text-brand-teal transition-colors">Mobile SEO</a></li>
              <li><a href="/programmatic-seo-services" class="hover:text-brand-teal transition-colors">Programmatic SEO</a></li>
              <li><a href="/link-building-services" class="hover:text-brand-teal transition-colors">Link Building</a></li>
              <li><a href="/seo-audit-services" class="hover:text-brand-teal transition-colors">SEO Audit Services</a></li>
              <li><a href="/seo-consulting-services" class="hover:text-brand-teal transition-colors">SEO Consulting</a></li>
            </ul>
          </div>

          <!-- Col 3: Marketing & Paid Ads -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono uppercase font-bold text-white tracking-wider border-b border-brand-border/60 pb-2">
              Marketing & Paid Ads
            </h4>
            <ul class="space-y-1.5 text-xs">
              <li><a href="/google-ads-services" class="hover:text-brand-teal transition-colors">Google Ads & PPC</a></li>
              <li><a href="/meta-ads-services" class="hover:text-brand-teal transition-colors">Meta Ads</a></li>
              <li><a href="/linkedin-ads-services" class="hover:text-brand-teal transition-colors">LinkedIn Ads</a></li>
              <li><a href="/b2b-lead-generation-services" class="hover:text-brand-teal transition-colors">B2B Lead Generation</a></li>
              <li><a href="/ecommerce-growth-solutions" class="hover:text-brand-teal transition-colors">Ecommerce Growth</a></li>
              <li><a href="/startup-growth-solutions" class="hover:text-brand-teal transition-colors">Startup Growth</a></li>
              <li><a href="/enterprise-marketing-solutions" class="hover:text-brand-teal transition-colors">Enterprise Marketing</a></li>
              <li><a href="/local-business-growth-services" class="hover:text-brand-teal transition-colors">Local Business Growth</a></li>
              <li><a href="/saas-marketing-solutions" class="hover:text-brand-teal transition-colors">SaaS Marketing</a></li>
            </ul>
          </div>

          <!-- Col 4: AI & Web Tech -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono uppercase font-bold text-white tracking-wider border-b border-brand-border/60 pb-2">
              AI & Web Tech
            </h4>
            <ul class="space-y-1.5 text-xs">
              <li><a href="/geo-services" class="hover:text-brand-teal transition-colors text-brand-teal font-semibold">GEO Services (New)</a></li>
              <li><a href="/aeo-services" class="hover:text-brand-teal transition-colors">AEO Services</a></li>
              <li><a href="/ai-seo-services" class="hover:text-brand-teal transition-colors">AI SEO Services</a></li>
              <li><a href="/chatgpt-optimization-services" class="hover:text-brand-teal transition-colors">ChatGPT Optimization</a></li>
              <li><a href="/gemini-optimization-services" class="hover:text-brand-teal transition-colors">Gemini Optimization</a></li>
              <li><a href="/web-design-services" class="hover:text-brand-teal transition-colors">Web Design</a></li>
              <li><a href="/wordpress-development-services" class="hover:text-brand-teal transition-colors">WordPress Development</a></li>
              <li><a href="/shopify-development-services" class="hover:text-brand-teal transition-colors">Shopify Development</a></li>
            </ul>
          </div>

          <!-- Col 5: Industry Verticals -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono uppercase font-bold text-white tracking-wider border-b border-brand-border/60 pb-2">
              Industry Verticals
            </h4>
            <ul class="space-y-1.5 text-xs">
              <li><a href="/dental-clinic-marketing" class="hover:text-brand-teal transition-colors">Dental Clinics</a></li>
              <li><a href="/manufacturing-marketing-services" class="hover:text-brand-teal transition-colors">Manufacturing B2B</a></li>
              <li><a href="/iot-company-marketing-services" class="hover:text-brand-teal transition-colors">IoT Tech Companies</a></li>
              <li><a href="/real-estate-marketing-services" class="hover:text-brand-teal transition-colors">Real Estate Agency</a></li>
              <li><a href="/healthcare-marketing-services" class="hover:text-brand-teal transition-colors">Healthcare & Medical</a></li>
              <li><a href="/education-marketing-services" class="hover:text-brand-teal transition-colors">Education & EdTech</a></li>
              <li><a href="/law-firm-marketing-services" class="hover:text-brand-teal transition-colors">Law Firms</a></li>
              <li><a href="/restaurant-marketing-services" class="hover:text-brand-teal transition-colors">Restaurants & Food</a></li>
              <li><a href="/finance-marketing-services" class="hover:text-brand-teal transition-colors">Finance & FinTech</a></li>
            </ul>
          </div>

          <!-- Col 6: Staffing & Tools -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono uppercase font-bold text-white tracking-wider border-b border-brand-border/60 pb-2">
              Staffing & Resources
            </h4>
            <ul class="space-y-1.5 text-xs">
              <li><a href="/hire-ai-seo-expert" class="hover:text-brand-teal transition-colors">Hire AI SEO Expert</a></li>
              <li><a href="/hire-seo-expert" class="hover:text-brand-teal transition-colors">Hire SEO Expert</a></li>
              <li><a href="/hire-ppc-expert" class="hover:text-brand-teal transition-colors">Hire PPC Expert</a></li>
              <li><a href="/hire-content-writer" class="hover:text-brand-teal transition-colors">Hire Content Writer</a></li>
              <li><a href="/hire-link-building-expert" class="hover:text-brand-teal transition-colors">Hire Link Builder</a></li>
              <li><a href="/tools" class="hover:text-brand-teal transition-colors">Free Marketing Tools</a></li>
              <li><a href="/tools/seo-audit-tool" class="hover:text-brand-teal transition-colors">Website Crawler Tool</a></li>
              <li><a href="/blog" class="hover:text-brand-teal transition-colors">Engineering Blog</a></li>
              <li><a href="/learning-hub" class="hover:text-brand-teal transition-colors">Learning Hub</a></li>
              <li><a href="/internship-program" class="hover:text-brand-teal transition-colors">Internship Program</a></li>
            </ul>
          </div>
        </div>

        <!-- Mobile Collapsible Accordion Drawer -->
        <div class="lg:hidden space-y-3">
          <div class="border border-brand-border rounded-xl overflow-hidden bg-brand-card/40">
            <button class="footer-acc-btn w-full px-4 py-3 text-left font-display font-bold text-sm text-white flex justify-between items-center">
              <span>SEO Services</span>
              <svg class="w-4 h-4 text-slate-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="footer-acc-content hidden px-4 pb-4 pt-1 text-xs space-y-2 border-t border-brand-border/40">
              <a href="/seo-services" class="block py-1 text-slate-300">SEO Services</a>
              <a href="/technical-seo-services" class="block py-1 text-slate-300">Technical SEO</a>
              <a href="/on-page-seo-services" class="block py-1 text-slate-300">On-Page SEO</a>
              <a href="/local-seo-services" class="block py-1 text-slate-300">Local SEO</a>
              <a href="/ecommerce-seo-services" class="block py-1 text-slate-300">Ecommerce SEO</a>
              <a href="/link-building-services" class="block py-1 text-slate-300">Link Building</a>
            </div>
          </div>

          <div class="border border-brand-border rounded-xl overflow-hidden bg-brand-card/40">
            <button class="footer-acc-btn w-full px-4 py-3 text-left font-display font-bold text-sm text-white flex justify-between items-center">
              <span>Marketing & Paid Ads</span>
              <svg class="w-4 h-4 text-slate-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="footer-acc-content hidden px-4 pb-4 pt-1 text-xs space-y-2 border-t border-brand-border/40">
              <a href="/google-ads-services" class="block py-1 text-slate-300">Google Ads</a>
              <a href="/meta-ads-services" class="block py-1 text-slate-300">Meta Ads</a>
              <a href="/linkedin-ads-services" class="block py-1 text-slate-300">LinkedIn Ads</a>
              <a href="/b2b-lead-generation-services" class="block py-1 text-slate-300">B2B Lead Generation</a>
            </div>
          </div>

          <div class="border border-brand-border rounded-xl overflow-hidden bg-brand-card/40">
            <button class="footer-acc-btn w-full px-4 py-3 text-left font-display font-bold text-sm text-white flex justify-between items-center">
              <span>AI & Web Tech</span>
              <svg class="w-4 h-4 text-slate-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="footer-acc-content hidden px-4 pb-4 pt-1 text-xs space-y-2 border-t border-brand-border/40">
              <a href="/geo-services" class="block py-1 text-brand-teal font-semibold">GEO Services</a>
              <a href="/aeo-services" class="block py-1 text-slate-300">AEO Services</a>
              <a href="/ai-seo-services" class="block py-1 text-slate-300">AI SEO Services</a>
              <a href="/web-design-services" class="block py-1 text-slate-300">Web Design</a>
              <a href="/wordpress-development-services" class="block py-1 text-slate-300">WordPress Dev</a>
            </div>
          </div>
        </div>

        <!-- Newsletter & Contact Line -->
        <div class="mt-12 pt-8 border-t border-brand-border/60 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 class="text-sm font-bold text-white mb-1 font-display">Stay Ahead in Search & AI</h5>
            <p class="text-xs text-slate-400">Subscribe for weekly breakdown reports on algorithm shifts, ChatGPT changes, and SEO blueprints.</p>
            <form id="footerNewsletterForm" class="mt-3 flex gap-2 max-w-md">
              <input type="email" id="newsletterEmailInput" required placeholder="Enter your business email" class="px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-white text-xs flex-grow focus:outline-none focus:border-brand-teal" />
              <button type="submit" class="px-4 py-2.5 rounded-lg bg-brand-teal text-brand-dark text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
            <div id="newsletterSuccessMsg" class="hidden text-xs text-brand-teal mt-2">✓ Subscribed successfully!</div>
          </div>

          <div class="space-y-2 text-xs text-slate-400 md:text-right">
            <div><strong>Direct Inquiries:</strong> <a href="mailto:info@akglsgroup.com" class="text-slate-200 hover:text-brand-teal">info@akglsgroup.com</a></div>
            <div><strong>Direct Calling:</strong> <a href="tel:+918318114492" class="text-slate-200 hover:text-brand-teal font-mono">+91 831 811 4492</a></div>
            <div><strong>Offices:</strong> San Francisco, CA • New York, NY • New Delhi, IN</div>
            <div><strong>Operating Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM EST</div>
          </div>
        </div>

        <!-- Ecosystem & Copyright -->
        <div class="mt-8 pt-8 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 AKGLS Group. All rights reserved. Precision Search Engineering & Generative Engine Optimization.
          </div>
          <div class="flex items-center gap-4">
            <a href="/privacy-policy" class="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms-of-service" class="hover:text-slate-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="/sitemap.xml" class="hover:text-slate-400 transition-colors">XML Sitemap</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Interactive Client Scripts -->
    ${renderHeaderScript()}
    <script>
      // 1. FAQ Accordion Handlers
      document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('svg');
          const isClosed = content.classList.contains('hidden');

          document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
          document.querySelectorAll('.faq-toggle svg').forEach(svg => svg.classList.remove('rotate-180', 'text-brand-teal'));

          if (isClosed) {
            content.classList.remove('hidden');
            if (icon) icon.classList.add('rotate-180', 'text-brand-teal');
          }
        });
      });

      // 3. Lead Capture Form AJAX Handler
      const leadForm = document.getElementById('pageLeadForm');
      const leadSuccess = document.getElementById('leadSuccessMsg');
      if (leadForm) {
        leadForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const submitBtn = document.getElementById('submitLeadBtn');
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerText = 'Submitting...';
          }

          const formData = new FormData(leadForm);
          const payload = {};
          formData.forEach((val, key) => { payload[key] = val; });

          try {
            const response = await fetch('/api/leads', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            if (response.ok) {
              leadForm.classList.add('hidden');
              if (leadSuccess) leadSuccess.classList.remove('hidden');
            } else {
              alert('Submission error. Please call +91 831 811 4492 directly.');
              if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Submit Strategy Request';
              }
            }
          } catch (err) {
            leadForm.classList.add('hidden');
            if (leadSuccess) leadSuccess.classList.remove('hidden');
          }
        });
      }

      // 4. Mobile Footer Accordion Handlers
      document.querySelectorAll('.footer-acc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('svg');
          const isClosed = content.classList.contains('hidden');

          if (isClosed) {
            content.classList.remove('hidden');
            if (icon) icon.classList.add('rotate-180', 'text-brand-teal');
          } else {
            content.classList.add('hidden');
            if (icon) icon.classList.remove('rotate-180', 'text-brand-teal');
          }
        });
      });

      // 5. Footer Newsletter Handler
      const footerNewsletter = document.getElementById('footerNewsletterForm');
      const newsletterSuccess = document.getElementById('newsletterSuccessMsg');
      if (footerNewsletter && newsletterSuccess) {
        footerNewsletter.addEventListener('submit', (e) => {
          e.preventDefault();
          newsletterSuccess.classList.remove('hidden');
          const input = document.getElementById('newsletterEmailInput');
          if (input) input.value = '';
          setTimeout(() => {
            newsletterSuccess.classList.add('hidden');
          }, 4000);
        });
      }
    </script>
  </body>
</html>`;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
