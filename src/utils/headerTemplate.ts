import { servicesMenu, solutionsMenu, caseStudiesMenu, resourcesMenu, companyMenu, hireExpertsMenu } from '../data';

/**
 * Escapes HTML characters to prevent XSS.
 */
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generates the common, production-grade corporate header matching Header.tsx.
 * Used dynamically across all static pre-rendered HTML pages and templates.
 */
export function renderSharedHeaderHtml(currentPath: string = ''): string {
  // Services Columns
  const servicesColsHtml = servicesMenu.map((col) => `
    <div class="space-y-4">
      <h4 class="text-xs font-extrabold tracking-widest text-slate-400 uppercase font-display border-b border-slate-800/80 pb-2">
        ${escapeHtml(col.title)}
      </h4>
      <div class="space-y-1.5">
        ${col.items.map((item) => `
          <a href="${escapeHtml(item.href)}" class="group/item flex items-center justify-between py-1 px-1.5 rounded-md hover:bg-slate-900/60 transition-colors text-[13px] font-semibold text-slate-300 hover:text-brand-indigo">
            <span class="flex items-center gap-1.5">
              ${col.title.includes('AI') ? `
                <svg class="w-3 h-3 text-brand-purple/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              ` : ''}
              ${item.isTrending ? `
                <svg class="w-3.5 h-3.5 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              ` : ''}
              ${escapeHtml(item.name)}
            </span>
            ${item.isTrending ? `
              <span class="text-[9px] bg-brand-orange/10 text-brand-orange font-bold uppercase py-0.5 px-1.5 rounded tracking-wide font-mono scale-90">
                Trending
              </span>
            ` : ''}
          </a>
        `).join('')}
      </div>
      ${col.featuredCta ? `
        <div class="pt-2">
          <a href="${escapeHtml(col.featuredCta.href)}" class="flex items-center justify-between text-xs font-bold text-white bg-gradient-to-r from-brand-indigo to-brand-purple py-2 px-3 rounded-lg shadow hover:opacity-95 transition-opacity">
            <span>${escapeHtml(col.featuredCta.text)}</span>
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      ` : ''}
    </div>
  `).join('');

  // Solutions Columns
  const solutionsColsHtml = solutionsMenu.map((col) => `
    <div class="space-y-4">
      <h4 class="text-xs font-extrabold tracking-widest text-slate-400 uppercase font-display border-b border-slate-800/80 pb-2 flex items-center justify-between">
        <span>${escapeHtml(col.title)}</span>
        ${col.title.includes('AI') ? `
          <span class="flex items-center gap-0.5 text-[9px] bg-brand-purple/10 text-brand-purple rounded-full px-2 py-0.5 font-bold tracking-normal normal-case">
            <svg class="w-2.5 h-2.5 fill-brand-purple" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            AI Powered
          </span>
        ` : ''}
      </h4>
      <div class="space-y-1.5">
        ${col.items.map((item) => `
          <a href="${escapeHtml(item.href)}" class="group/item flex items-center justify-between py-1 px-1.5 rounded-md hover:bg-slate-900/60 transition-colors text-[13px] font-semibold text-slate-300 hover:text-brand-indigo">
            <span class="flex items-center gap-1.5">
              ${col.title.includes('Industry') ? `
                <svg class="w-3 h-3 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              ` : ''}
              ${escapeHtml(item.name)}
            </span>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Resources Columns
  const resourcesColsHtml = resourcesMenu.map((col) => `
    <div class="space-y-4">
      <h4 class="text-xs font-extrabold tracking-widest text-slate-400 uppercase font-display border-b border-slate-800/80 pb-2 flex items-center gap-1.5">
        ${col.title.includes('Tools') ? `
          <svg class="w-3.5 h-3.5 text-brand-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
        ` : ''}
        ${col.title.includes('Learning') ? `
          <svg class="w-3.5 h-3.5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        ` : ''}
        <span>${escapeHtml(col.title)}</span>
      </h4>
      <div class="space-y-1.5">
        ${col.items.map((item) => `
          <a href="${escapeHtml(item.href)}" class="group/item flex items-center justify-between py-1 px-1.5 rounded-md hover:bg-slate-900/60 transition-colors text-[13px] font-semibold text-slate-300 hover:text-brand-indigo">
            <span class="truncate">${escapeHtml(item.name)}</span>
            ${col.title.includes('Downloads') ? `
              <svg class="w-3 h-3 text-slate-400 group-hover/item:text-brand-indigo shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            ` : ''}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Company Items
  const companyItemsHtml = companyMenu.map((item) => `
    <a href="${escapeHtml(item.href)}" class="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-slate-900/60 text-[13px] font-semibold text-slate-300 hover:text-brand-indigo transition-all">
      ${item.name.includes('Team') ? `
        <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
      ` : ''}
      ${item.name.includes('Careers') ? `
        <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      ` : ''}
      <span>${escapeHtml(item.name)}</span>
    </a>
  `).join('');

  // Hire Experts Items
  const hireItemsHtml = hireExpertsMenu.map((item) => `
    <a href="${escapeHtml(item.href)}" class="flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-slate-900/60 text-[13px] font-bold text-slate-300 hover:text-brand-indigo transition-all">
      <span>${escapeHtml(item.name)}</span>
      <svg class="w-3.5 h-3.5 text-brand-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  `).join('');

  return `
    <!-- ENTERPRISE NOTICE TICKER / TOP BAR -->
    <div id="top-bar" class="bg-brand-navy border-b border-slate-800 text-slate-300 py-2.5 px-4 text-xs font-medium z-50 relative">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <!-- Left section contacts: Phone & WhatsApp -->
        <div class="flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs">
          <a href="tel:+918318114492" class="flex items-center gap-1.5 hover:text-brand-indigo transition-colors text-slate-300 font-semibold">
            <svg class="w-3.5 h-3.5 text-brand-indigo animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>+91 831 811 4492</span>
          </a>
          <span class="text-slate-800 hidden sm:inline">|</span>
          <a 
            href="https://wa.me/918318114492" 
            target="_blank" 
            rel="noopener noreferrer"
            referrerpolicy="no-referrer"
            class="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-200 font-semibold"
          >
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span>WhatsApp Chat</span>
          </a>
        </div>

        <!-- Right section social media icons -->
        <div class="flex items-center gap-5">
          <a 
            href="https://www.facebook.com/akglsgroup/" 
            target="_blank" 
            rel="noopener noreferrer"
            referrerpolicy="no-referrer"
            class="text-slate-400 hover:text-[#1877F2] transition-colors p-1"
            aria-label="Facebook"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a 
            href="https://x.com/akglsgroup" 
            target="_blank" 
            rel="noopener noreferrer"
            referrerpolicy="no-referrer"
            class="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="X (formerly Twitter)"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a 
            href="https://www.linkedin.com/company/akglsgroup" 
            target="_blank" 
            rel="noopener noreferrer"
            referrerpolicy="no-referrer"
            class="text-slate-400 hover:text-[#0A66C2] transition-colors p-1"
            aria-label="LinkedIn"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a 
            href="https://www.instagram.com/akglsgroup/" 
            target="_blank" 
            rel="noopener noreferrer"
            referrerpolicy="no-referrer"
            class="text-slate-400 hover:text-[#E1306C] transition-colors p-1"
            aria-label="Instagram"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- CORE STICKY CORPORATE NAVBAR -->
    <nav id="header-nav" class="sticky top-0 w-full z-40 transition-all duration-300 border-b bg-[#0a0f1d]/90 backdrop-blur-md py-4 border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          
          <!-- Logo Mark -->
          <a href="/" class="flex items-center gap-3 select-none group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-purple flex items-center justify-center shadow-lg shadow-brand-indigo/35 group-hover:scale-105 transition-transform duration-300">
              <span class="text-white font-black text-xl font-display">AK</span>
            </div>
            <div class="flex flex-col text-left">
              <span class="font-black tracking-tight text-xl font-display leading-none transition-colors text-white">
                AKGLS <span class="text-brand-indigo">GROUP</span>
              </span>
              <span class="text-[9px] text-brand-teal tracking-widest font-extrabold uppercase mt-1 leading-none">
                Digital &amp; AI Enterprise
              </span>
            </div>
          </a>

          <!-- Desktop Central Navigation with full Hover Dropdowns -->
          <div class="hidden lg:flex items-center space-x-1.5 xl:space-x-4">
            
            <!-- Menu 1: Services (4 Columns dropdown) -->
            <div class="relative group/menu" data-menu="services">
              <button class="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all text-slate-300 hover:text-white group-hover/menu:text-brand-indigo group-hover/menu:bg-brand-indigo/10">
                Services
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/menu:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class="hidden group-hover/menu:grid absolute left-1/2 -translate-x-[15%] top-full mt-2 w-[850px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl p-6 z-50 text-left grid-cols-4 gap-6 text-slate-200">
                ${servicesColsHtml}
              </div>
            </div>

            <!-- Menu 2: Solutions (3 Columns dropdown) -->
            <div class="relative group/menu" data-menu="solutions">
              <button class="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all text-slate-300 hover:text-white group-hover/menu:text-brand-indigo group-hover/menu:bg-brand-indigo/10">
                Solutions
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/menu:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class="hidden group-hover/menu:grid absolute left-1/2 -translate-x-[25%] top-full mt-2 w-[750px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl p-6 z-50 text-left grid-cols-3 gap-6 text-slate-200">
                ${solutionsColsHtml}
              </div>
            </div>

            <!-- Menu 3: Case Studies (2 Columns) -->
            <div class="relative group/menu" data-menu="cases">
              <button class="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all text-slate-300 hover:text-white group-hover/menu:text-brand-indigo group-hover/menu:bg-brand-indigo/10">
                Case Studies
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/menu:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class="hidden group-hover/menu:grid absolute left-1/2 -translate-x-[30%] top-full mt-2 w-[650px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl p-5 z-50 text-left grid-cols-12 gap-5 text-slate-200">
                <!-- Left list column -->
                <div class="col-span-5 space-y-4">
                  <h4 class="text-xs font-extrabold tracking-widest text-slate-400 uppercase font-display border-b border-slate-800/80 pb-2">
                    Performance Cases
                  </h4>
                  <div class="space-y-1">
                    ${caseStudiesMenu.leftItems.map((item) => `
                      <a href="${escapeHtml(item.href)}" class="block py-2 px-3 rounded-lg hover:bg-slate-900/60 text-[13px] font-bold text-slate-300 hover:text-brand-indigo transition-all text-left">
                        ${escapeHtml(item.name)}
                      </a>
                    `).join('')}
                  </div>
                  <div class="pt-2">
                    <a href="/case-study/ecommerce-seo-results" class="w-full bg-[#0a0f1d] hover:bg-slate-900 border border-slate-800 text-[11px] font-bold py-2.5 px-3 rounded-lg text-slate-300 transition-colors flex items-center justify-center gap-2">
                      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                      Download Report Card
                    </a>
                  </div>
                </div>

                <!-- Right side Featured Card -->
                <div class="col-span-7 bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-[10px] font-bold uppercase tracking-wider bg-brand-indigo px-2.5 py-0.5 rounded-full">
                        Organic SEO
                      </span>
                      <span class="text-[9px] text-slate-400 font-mono">FEATURED RESULT</span>
                    </div>
                    
                    <h4 class="text-sm font-extrabold text-white font-display mb-1.5 leading-snug">
                      Fintech Leader Inc.
                    </h4>
                    
                    <!-- Traffic Growth Graph SVG -->
                    <div class="h-20 w-full bg-slate-950/60 rounded-lg p-2 border border-slate-800/80 relative overflow-hidden flex flex-col justify-end">
                      <div class="absolute inset-x-0 bottom-2 px-4 flex justify-between text-[8.5px] text-slate-500 font-mono">
                        <span>Month 1</span>
                        <span>Month 6</span>
                      </div>
                      <svg class="w-full h-12" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="headerChartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4" />
                            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M 5,45 Q 23,38 41,30 T 77,15 L 95,8 L 95,45 Z" fill="url(#headerChartGrad)" />
                        <path d="M 5,45 Q 23,38 41,30 T 77,15 L 95,8" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" />
                        <circle cx="95" cy="8" r="2" fill="#06b6d4" />
                      </svg>
                    </div>

                    <!-- Before/After stats banner -->
                    <div class="mt-3 grid grid-cols-2 gap-2 bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                      <div>
                        <div class="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Metrics</div>
                        <div class="text-xs font-black text-brand-emerald font-mono">+310% traffic</div>
                      </div>
                      <div>
                        <div class="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Comparison</div>
                        <div class="text-[10px] font-semibold text-slate-300 truncate font-mono">4.5K → 18.5K/mo</div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-3.5 flex items-center justify-end">
                    <a href="/seo-case-studies" class="bg-brand-orange hover:bg-opacity-95 text-[10px] font-black uppercase text-white py-2 px-3 rounded-lg transition-all">
                      Duplicate This Strategy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Menu 4: Resources (4 Columns dropdown) -->
            <div class="relative group/menu" data-menu="resources">
              <button class="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all text-slate-300 hover:text-white group-hover/menu:text-brand-indigo group-hover/menu:bg-brand-indigo/10">
                Resources
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/menu:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class="hidden group-hover/menu:grid absolute left-1/2 -translate-x-[40%] top-full mt-2 w-[800px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl p-6 z-50 text-left grid-cols-4 gap-6 text-slate-200">
                ${resourcesColsHtml}
              </div>
            </div>

            <!-- Menu 5: Company (Standard Dropdown) -->
            <div class="relative group/menu" data-menu="company">
              <button class="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all text-slate-300 hover:text-white group-hover/menu:text-brand-indigo group-hover/menu:bg-brand-indigo/10">
                Company
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/menu:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class="hidden group-hover/menu:block absolute left-0 top-full mt-2 w-48 bg-[#0c121e] border border-slate-800 rounded-xl shadow-xl p-3 z-50 text-left space-y-1 text-slate-200">
                ${companyItemsHtml}
              </div>
            </div>

            <!-- Menu 6: Hire Experts (Dropdown) -->
            <div class="relative group/menu" data-menu="hire">
              <button class="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all text-slate-300 hover:text-white group-hover/menu:text-brand-indigo group-hover/menu:bg-brand-indigo/10">
                Hire
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/menu:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class="hidden group-hover/menu:block absolute right-0 top-full mt-2 w-56 bg-[#0c121e] border border-slate-800 rounded-xl shadow-xl p-3.5 z-50 text-left space-y-1.5 text-slate-200">
                <div class="px-2 pb-1.5 border-b border-slate-800/80 mb-1">
                  <span class="text-[10px] text-brand-orange font-black uppercase tracking-wider block">
                    Instant Placement
                  </span>
                </div>
                ${hireItemsHtml}
              </div>
            </div>

          </div>

          <!-- Right Side Header Action Anchors -->
          <div class="hidden lg:flex items-center space-x-4">
            <a 
              href="/tools" 
              class="p-2.5 rounded-xl transition-all text-slate-300 hover:text-white hover:bg-white/10"
              title="Search and Explore Tools"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </a>

            <a 
              href="tel:+918318114492" 
              class="bg-gradient-to-r from-brand-indigo to-brand-purple hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-wide py-3.5 px-6 rounded-xl transition-all shadow-md shadow-brand-indigo/20 flex items-center gap-1.5"
            >
              Call Now 
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </a>
          </div>

          <!-- Mobile Navigation Toggles -->
          <div class="flex lg:hidden items-center space-x-3">
            <a 
              href="/tools"
              class="p-2 text-slate-400 hover:text-brand-indigo"
              aria-label="Search"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </a>
            <button 
              id="mobileMenuToggleBtn"
              class="p-2 text-slate-400 hover:text-brand-indigo cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>

    <!-- MOBILE NAVIGATION SLIDE-OVER DRAWER -->
    <div id="mobileDrawerBackdrop" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm lg:hidden hidden text-left transition-opacity duration-300">
      <div id="mobileDrawerPanel" class="absolute right-0 top-0 bottom-0 w-full max-w-[340px] bg-[#0c121e] border-l border-slate-800 flex flex-col justify-between shadow-2xl overflow-y-auto text-slate-200 transition-transform duration-300 translate-x-full">
        <!-- Header inside drawer -->
        <div class="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-brand-indigo flex items-center justify-center font-bold text-white text-sm font-display">AK</div>
            <span class="font-extrabold text-white text-base font-display">AKGLS MENU</span>
          </div>
          <button 
            id="mobileMenuCloseBtn"
            class="p-2 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Menu"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Accordion Based Nav Middle Section -->
        <div class="flex-1 px-5 py-4 space-y-1 text-slate-300 overflow-y-auto scrollbar-none">
          
          <!-- Services Accordion -->
          <div class="border-b border-slate-800 pb-1.5">
            <button 
              class="mobile-accordion-btn w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
              data-target="mob-acc-services"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                Services
              </span>
              <svg class="w-4 h-4 text-slate-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mob-acc-services" class="hidden pl-4 py-1.5 space-y-2 border-l border-slate-800/80 text-[13px]">
              <div>
                <p class="text-[10px] uppercase font-black text-slate-400">SEO Services</p>
                <a href="/seo-services" class="block py-1 text-slate-300 hover:text-brand-indigo">SEO Services</a>
                <a href="/technical-seo-services/" class="block py-1 text-slate-300 hover:text-brand-indigo">Technical SEO</a>
                <a href="/on-page-seo-services/" class="block py-1 text-slate-300 hover:text-brand-indigo">On-Page SEO</a>
                <a href="/local-seo-services" class="block py-1 text-slate-300 hover:text-brand-indigo">Local SEO</a>
                <a href="/ecommerce-seo-services" class="block py-1 text-slate-300 hover:text-brand-indigo">Ecommerce SEO</a>
              </div>
              <div>
                <p class="text-[10px] uppercase font-black text-slate-400">AI Optimization</p>
                <a href="/geo-services" class="block py-1 text-brand-indigo font-bold hover:text-white">GEO Services</a>
                <a href="/llm-optimization-services" class="block py-1 text-slate-300 hover:text-brand-indigo">LLM Optimization</a>
                <a href="/ai-citation-building-services" class="block py-1 text-slate-300 hover:text-brand-indigo">AI Citation Building</a>
                <a href="/aeo-services" class="block py-1 text-slate-300 hover:text-brand-indigo">AEO Services</a>
                <a href="/ai-seo-services" class="block py-1 text-slate-300 hover:text-brand-indigo">AI SEO Services</a>
              </div>
              <div>
                <p class="text-[10px] uppercase font-black text-slate-400">Paid &amp; Tech</p>
                <a href="/google-ads-services" class="block py-1 text-slate-300 hover:text-brand-indigo">Google Ads</a>
                <a href="/meta-ads-services" class="block py-1 text-slate-300 hover:text-brand-indigo">Meta Ads</a>
                <a href="/shopify-development-services" class="block py-1 text-slate-300 hover:text-brand-indigo">Shopify Development</a>
              </div>
            </div>
          </div>

          <!-- Solutions Accordion -->
          <div class="border-b border-slate-800 pb-1.5">
            <button 
              class="mobile-accordion-btn w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
              data-target="mob-acc-solutions"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Solutions
              </span>
              <svg class="w-4 h-4 text-slate-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mob-acc-solutions" class="hidden pl-4 py-1.5 space-y-1.5 border-l border-slate-800/80 text-[13px]">
              <a href="/startup-growth-solutions" class="block py-1 text-slate-300 hover:text-brand-indigo">Startup Growth Solution</a>
              <a href="/enterprise-marketing-solutions" class="block py-1 text-slate-300 hover:text-brand-indigo">Enterprise Marketing Solutions</a>
              <a href="/dental-clinic-marketing" class="block py-1 text-brand-teal font-bold hover:text-white">Dental Clinic Marketing</a>
              <a href="/healthcare-marketing-services" class="block py-1 text-slate-300 hover:text-brand-indigo">Healthcare Marketing</a>
              <a href="/b2b-lead-generation-services" class="block py-1 text-slate-300 hover:text-brand-indigo">B2B Lead Generation</a>
              <a href="/saas-marketing-solutions" class="block py-1 text-slate-300 hover:text-brand-indigo">SaaS Marketing Solutions</a>
            </div>
          </div>

          <!-- Case Studies Accordion -->
          <div class="border-b border-slate-800 pb-1.5">
            <button 
              class="mobile-accordion-btn w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
              data-target="mob-acc-cases"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                Case Studies
              </span>
              <svg class="w-4 h-4 text-slate-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mob-acc-cases" class="hidden pl-4 py-1.5 space-y-1 border-l border-slate-800/80 text-[13px]">
              <a href="/seo-case-studies" class="block py-1.5 text-slate-300 hover:text-brand-indigo">SEO Case Studies</a>
              <a href="/case-study/ecommerce-seo-results" class="block py-1.5 text-slate-300 hover:text-brand-indigo">Ecommerce SEO Results</a>
              <a href="/case-study/local-seo-results" class="block py-1.5 text-slate-300 hover:text-brand-indigo">Local SEO Results</a>
              <a href="/case-study/ppc-success-stories" class="block py-1.5 text-slate-300 hover:text-brand-indigo">PPC Success Stories</a>
              <a href="/case-study/ai-optimization-results" class="block py-1.5 text-slate-300 hover:text-brand-indigo">AI Optimization Results</a>
            </div>
          </div>

          <!-- Resources Accordion -->
          <div class="border-b border-slate-800 pb-1.5">
            <button 
              class="mobile-accordion-btn w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
              data-target="mob-acc-resources"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                Resources
              </span>
              <svg class="w-4 h-4 text-slate-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mob-acc-resources" class="hidden pl-4 py-1.5 space-y-2 border-l border-slate-800/80 text-[13px]">
              <a href="/blog" class="block py-0.5 text-slate-300 hover:text-brand-indigo">All Insights Blog</a>
              <a href="/free-checklists/" class="block py-0.5 text-slate-300 hover:text-brand-indigo">AI SEO Checklists (New)</a>
              <a href="/tools" class="block py-0.5 text-slate-300 hover:text-brand-indigo">Free SEO Tools</a>
              <a href="/learning-hub/seo-checklist-pdf" class="block py-0.5 text-slate-300 hover:text-brand-indigo">SEO Checklist PDF</a>
            </div>
          </div>

          <!-- Company Accordion -->
          <div class="border-b border-slate-800 pb-1.5">
            <button 
              class="mobile-accordion-btn w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
              data-target="mob-acc-company"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Company
              </span>
              <svg class="w-4 h-4 text-slate-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mob-acc-company" class="hidden pl-4 py-1.5 space-y-1.5 border-l border-slate-800/80 text-[13px]">
              <a href="/blog" class="block py-1 text-slate-300 hover:text-brand-indigo">SEO / AI Blog</a>
              <a href="/tools" class="block py-1 text-slate-300 hover:text-brand-indigo">Free Tools</a>
              <a href="/india-pricing" class="block py-1 text-slate-300 hover:text-brand-indigo">Indian Client Pricing</a>
              <a href="/proposal-builder" class="block py-1 text-slate-300 hover:text-brand-indigo">Proposal PDF Builder</a>
              <a href="/#team-leadership" class="block py-1 text-slate-300 hover:text-brand-indigo">About Us</a>
              <a href="/internship-program" class="block py-1 text-slate-300 hover:text-brand-indigo">Internship Program</a>
            </div>
          </div>

          <!-- Hire Experts Accordion -->
          <div class="border-b border-slate-800">
            <button 
              class="mobile-accordion-btn w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
              data-target="mob-acc-hire"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                Hire
              </span>
              <svg class="w-4 h-4 text-slate-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mob-acc-hire" class="hidden pl-4 py-1.5 space-y-1.5 border-l border-slate-800/80 text-[13px]">
              <a href="/hire-seo-expert" class="block py-1 text-slate-300 hover:text-brand-indigo">Hire SEO Expert</a>
              <a href="/hire-ppc-expert" class="block py-1 text-slate-300 hover:text-brand-indigo">Hire PPC Expert</a>
              <a href="/hire-ai-seo-expert" class="block py-1 text-slate-300 hover:text-brand-indigo">Hire AI SEO Expert</a>
              <a href="/hire-content-writer" class="block py-1 text-slate-300 hover:text-brand-indigo">Hire Content Writer</a>
              <a href="/hire-wordpress-developer" class="block py-1 text-slate-300 hover:text-brand-indigo">Hire WordPress Developer</a>
              <a href="/hire-link-building-expert" class="block py-1 text-slate-300 hover:text-brand-indigo">Hire Link Building Expert</a>
            </div>
          </div>

        </div>

        <!-- Bottom CTA triggers inside Drawer -->
        <div class="p-5 border-t border-slate-800 bg-[#0a0f1d] space-y-3">
          <a 
            href="#audit-form" 
            class="w-full py-2.5 bg-brand-orange/10 text-brand-orange font-bold rounded-xl text-center block text-xs hover:bg-brand-orange hover:text-white transition-colors"
          >
            Get Free SEO Audit
          </a>
          
          <a 
            href="tel:+918318114492" 
            class="w-full py-3 bg-brand-indigo hover:bg-opacity-95 text-white font-black text-center rounded-xl block text-xs shadow"
          >
            Book Free Consultation (+91 831 811 4492)
          </a>
        </div>

      </div>
    </div>

    <!-- MOBILE STICKY BOTTOM CORE HIGH-CONVERSION CTA NAVIGATION BAR -->
    <div 
      class="fixed bottom-0 inset-x-0 bg-[#0a0f1d]/98 border-t border-slate-800/80 z-40 lg:hidden shadow-[0_-10px_35px_rgba(0,0,0,0.7)] backdrop-blur-md"
      style="padding-top: 10px; padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 12px); padding-left: 16px; padding-right: 16px;"
    >
      <div class="grid grid-cols-4 gap-1 sm:gap-2 text-center max-w-md mx-auto">
        <!-- Item 1: WhatsApp -->
        <a 
          href="https://wa.me/918318114492?text=Hello%20AKGLS%20Group,%20I%20would%20like%20to%20discuss%20digital%20marketing%20services." 
          target="_blank" 
          rel="noopener noreferrer"
          referrerpolicy="no-referrer"
          class="flex flex-col items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <svg class="w-5 h-5 text-emerald-500 hover:scale-105 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <span class="text-[9px] sm:text-[10px] font-bold mt-1.5 whitespace-nowrap">WhatsApp</span>
        </a>

        <!-- Item 2: Call now -->
        <a 
          href="tel:+918318114492" 
          class="flex flex-col items-center justify-center text-slate-400 hover:text-brand-indigo transition-colors"
        >
          <svg class="w-5 h-5 text-brand-teal hover:scale-105 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span class="text-[9px] sm:text-[10px] font-bold mt-1.5 whitespace-nowrap">Call Now</span>
        </a>

        <!-- Item 3: Free Audit -->
        <a 
          href="#audit-form" 
          class="flex flex-col items-center justify-center text-slate-400 hover:text-brand-orange transition-colors cursor-pointer"
        >
          <svg class="w-5 h-5 text-brand-orange hover:scale-105 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span class="text-[9px] sm:text-[10px] font-bold mt-1.5 whitespace-nowrap">Free Audit</span>
        </a>

        <!-- Item 4: Book Consultation -->
        <a 
          href="#audit-form" 
          class="flex flex-col items-center justify-center bg-gradient-to-r from-brand-indigo to-brand-purple text-white rounded-xl py-1 px-2.5 shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 text-brand-teal animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <span class="text-[9px] font-black uppercase mt-1 tracking-tight whitespace-nowrap">Book Free</span>
        </a>
      </div>
    </div>
  `;
}

/**
 * Generates vanilla JS script for interactive header functions on static HTML pages:
 * - Scroll effect on sticky header
 * - Mobile menu slide-over drawer toggle
 * - Mobile accordion toggles
 */
export function renderHeaderScript(): string {
  return `
    <script>
      (function() {
        // Sticky Header scroll styling
        var headerNav = document.getElementById('header-nav');
        if (headerNav) {
          window.addEventListener('scroll', function() {
            if (window.scrollY > 40) {
              headerNav.classList.add('bg-[#0a0f1d]/95', 'shadow-xl', 'py-3');
              headerNav.classList.remove('bg-[#0a0f1d]/90', 'py-4');
            } else {
              headerNav.classList.remove('bg-[#0a0f1d]/95', 'shadow-xl', 'py-3');
              headerNav.classList.add('bg-[#0a0f1d]/90', 'py-4');
            }
          });
        }

        // Mobile Drawer toggle logic
        var mobileToggleBtn = document.getElementById('mobileMenuToggleBtn');
        var mobileCloseBtn = document.getElementById('mobileMenuCloseBtn');
        var drawerBackdrop = document.getElementById('mobileDrawerBackdrop');
        var drawerPanel = document.getElementById('mobileDrawerPanel');

        function openMobileMenu() {
          if (drawerBackdrop && drawerPanel) {
            drawerBackdrop.classList.remove('hidden');
            setTimeout(function() {
              drawerPanel.classList.remove('translate-x-full');
            }, 10);
            document.body.style.overflow = 'hidden';
          }
        }

        function closeMobileMenu() {
          if (drawerBackdrop && drawerPanel) {
            drawerPanel.classList.add('translate-x-full');
            setTimeout(function() {
              drawerBackdrop.classList.add('hidden');
              document.body.style.overflow = '';
            }, 280);
          }
        }

        if (mobileToggleBtn) {
          mobileToggleBtn.addEventListener('click', openMobileMenu);
        }
        if (mobileCloseBtn) {
          mobileCloseBtn.addEventListener('click', closeMobileMenu);
        }
        if (drawerBackdrop) {
          drawerBackdrop.addEventListener('click', function(e) {
            if (e.target === drawerBackdrop) {
              closeMobileMenu();
            }
          });
        }

        // Mobile Accordions inside drawer
        var accordionBtns = document.querySelectorAll('.mobile-accordion-btn');
        accordionBtns.forEach(function(btn) {
          btn.addEventListener('click', function() {
            var targetId = btn.getAttribute('data-target');
            var targetEl = document.getElementById(targetId);
            var icon = btn.querySelector('svg:last-child');
            if (targetEl) {
              var isHidden = targetEl.classList.contains('hidden');
              if (isHidden) {
                targetEl.classList.remove('hidden');
                if (icon) icon.classList.add('rotate-180');
              } else {
                targetEl.classList.add('hidden');
                if (icon) icon.classList.remove('rotate-180');
              }
            }
          });
        });
      })();
    </script>
  `;
}
