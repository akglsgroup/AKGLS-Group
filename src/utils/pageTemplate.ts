import { AppRoute } from '../routesData';
import { renderSharedHeaderHtml, renderHeaderScript } from './headerTemplate';
import { renderSharedFooterHtml, renderFooterScript } from './footerTemplate';

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

    <!-- CORPORATE MEGA FOOTER (Standard Dynamic Unified Component Across All Pages) -->
    ${renderSharedFooterHtml(route.path)}

    <!-- Interactive Client Scripts -->
    ${renderHeaderScript()}
    ${renderFooterScript()}
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

      // 2. Lead Capture Form AJAX Handler
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
