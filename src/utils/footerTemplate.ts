import { 
  FOOTER_FLOATING_CTA, 
  FOOTER_COMPANY_INFO, 
  FOOTER_COLUMNS, 
  FOOTER_CONTACT, 
  FOOTER_NEWSLETTER, 
  FOOTER_LOCAL_SEO, 
  FOOTER_AI_CITATIONS, 
  FOOTER_CERTIFICATIONS, 
  FOOTER_LEGAL_LINKS 
} from '../data/footerData';

export function renderSharedFooterHtml(currentPath: string = '/'): string {
  const currentYear = new Date().getFullYear();

  // 1. Floating CTA Strip
  const floatingCtaHtml = `
    <!-- Floating Gradient CTA Strip -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 mb-[-50px] relative z-20">
      <div class="bg-gradient-to-r from-brand-indigo via-indigo-950 to-brand-purple rounded-3xl p-8 md:p-12 border border-brand-border/60 shadow-2xl relative overflow-hidden text-left">
        <div class="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-60 h-60 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none"></div>

        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div class="space-y-3 max-w-2xl">
            <span class="inline-flex items-center gap-1.5 text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/10 px-2.5 py-1 rounded-full border border-brand-teal/20">
              <span class="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              ${FOOTER_FLOATING_CTA.badge}
            </span>
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-black font-display text-white tracking-tight leading-tight">
              ${FOOTER_FLOATING_CTA.title}
            </h3>
            <p class="text-indigo-200 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
              ${FOOTER_FLOATING_CTA.description}
            </p>
          </div>

          <div class="flex flex-wrap gap-3.5 w-full lg:w-auto shrink-0">
            <a 
              href="${FOOTER_FLOATING_CTA.primaryButton.href}" 
              class="bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-xl hover:shadow-brand-orange/25 w-full sm:w-auto text-center"
              id="footer-strip-cta-audit"
            >
              ${FOOTER_FLOATING_CTA.primaryButton.text}
            </a>
            <a 
              href="${FOOTER_FLOATING_CTA.secondaryButton.href}" 
              class="bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2"
              id="footer-strip-cta-consult"
            >
              <svg class="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>${FOOTER_FLOATING_CTA.secondaryButton.text}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // 2. Desktop Columns HTML
  const columnsHtml = FOOTER_COLUMNS.map(col => `
    <div class="col-span-6 sm:col-span-4 lg:col-span-2 space-y-3.5">
      <h4 class="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5 border-b border-indigo-950/40 pb-2">
        <span class="w-1.5 h-1.5 rounded-full ${col.bulletClass}"></span>
        <span>${col.title}</span>
      </h4>
      <ul class="space-y-2 text-xs font-medium">
        ${col.links.map(link => {
          const isCurrent = currentPath === link.href || currentPath.replace(/\/+$/, '') === link.href.replace(/\/+$/, '');
          const badgeHtml = link.badge 
            ? `<span class="px-1.5 py-0.2 text-[9px] rounded font-mono font-bold ${link.isNew ? 'bg-brand-teal/20 text-brand-teal border border-brand-teal/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'}">${link.badge}</span>` 
            : '';
          return `
            <li>
              <a 
                href="${link.href}" 
                class="text-slate-400 hover:text-brand-teal transition-colors tracking-wide flex items-center justify-between group py-0.5 ${isCurrent ? 'text-brand-teal font-semibold' : ''}"
              >
                <span class="group-hover:translate-x-1 transition-transform inline-block">${link.name}</span>
                ${badgeHtml}
              </a>
            </li>
          `;
        }).join('')}
      </ul>
    </div>
  `).join('');

  // 3. Mobile Accordion HTML
  const mobileAccordionHtml = FOOTER_COLUMNS.map(col => `
    <div class="bg-slate-950/60 border border-indigo-950/30 rounded-2xl overflow-hidden">
      <button 
        type="button"
        class="footer-mobile-acc-trigger w-full py-4 px-5 flex justify-between items-center text-xs font-extrabold text-white font-display focus:outline-none"
        data-target="footer-mob-panel-${col.id}"
      >
        <span class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full ${col.bulletClass}"></span>
          <span>${col.title}</span>
        </span>
        <svg class="w-4 h-4 text-slate-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div id="footer-mob-panel-${col.id}" class="hidden px-5 pb-5 pt-1 border-t border-indigo-950/20 grid grid-cols-2 gap-2 text-left">
        ${col.links.map(link => `
          <a 
            href="${link.href}" 
            class="text-slate-400 hover:text-brand-teal text-xs py-1.5 block truncate"
          >
            ${link.name}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  // 4. Partner Badges HTML
  const certificationsHtml = FOOTER_CERTIFICATIONS.map(cert => `
    <div class="bg-slate-950/80 border border-indigo-950/40 px-3 py-1.5 rounded-xl flex items-center gap-2 text-left select-none">
      <svg class="w-4 h-4 text-brand-teal shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <div>
        <span class="text-[10px] font-black text-white block leading-none font-display">${cert.label}</span>
        <span class="text-[8.5px] text-slate-400 block leading-none mt-0.5 font-mono">${cert.value}</span>
      </div>
    </div>
  `).join('');

  // 5. Social Media Icons
  const socialIconsHtml = `
    <div class="flex gap-2 items-center">
      <a href="https://linkedin.com/company/akglsgroup" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300" title="LinkedIn">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
      </a>
      <a href="https://twitter.com/akglsgroup" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300" title="Twitter / X">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a href="https://facebook.com/akglsgroup" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300" title="Facebook">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
      </a>
      <a href="https://instagram.com/akglsgroup" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300" title="Instagram">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      <a href="https://youtube.com/akglsgroup" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300" title="YouTube">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
      </a>
    </div>
  `;

  return `
    <footer class="w-full relative z-10 bg-[#081120] text-slate-350 border-t border-slate-900/60 font-sans text-left" id="global-dynamic-footer">
      ${floatingCtaHtml}

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-12">

        <!-- Top Row: Brand Profile & Trust Badges -->
        <div class="pb-12 border-b border-indigo-950/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-5 space-y-4">
            <a href="/" class="inline-flex flex-col text-left justify-center group select-none" aria-label="AKGLS Group homepage">
              <div class="flex items-baseline leading-none tracking-tight">
                <span class="font-black tracking-tight text-2xl sm:text-3xl text-white font-sans">AKGLS</span>
                <span class="font-extrabold text-2xl sm:text-3xl text-slate-100 font-sans ml-1.5">Group</span>
              </div>
              <div class="w-full h-[3px] rounded-full bg-gradient-to-r from-[#00c4b4] via-[#00a89d] to-[#ff1475] my-1.5 sm:my-2 shadow-sm"></div>
              <div class="font-sans text-xs sm:text-sm tracking-tight leading-none text-slate-300 font-semibold whitespace-nowrap">
                We’re the ‘<span class="text-[#00c4b4] font-bold">Ctrl</span>+Alt+<span class="text-[#ff1475] font-bold">Del</span>’ for Your Business
              </div>
            </a>
            <p class="text-xs leading-relaxed text-slate-400 font-light pr-4 max-w-lg">
              ${FOOTER_COMPANY_INFO.description}
            </p>
          </div>

          <!-- Trust Badges 4-Block Grid -->
          <div class="lg:col-span-4 grid grid-cols-2 gap-2.5 bg-[#050b15]/60 p-3.5 rounded-2xl border border-indigo-950/30">
            ${FOOTER_COMPANY_INFO.trustBadges.map(b => `
              <div class="text-left font-display">
                <span class="text-[11px] font-black text-white block truncate leading-tight">${b.title}</span>
                <span class="text-[9px] text-slate-500 block truncate leading-tight font-sans mt-0.5">${b.desc}</span>
              </div>
            `).join('')}
          </div>

          <!-- Verified Channels -->
          <div class="lg:col-span-3 space-y-2 lg:text-right">
            <span class="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest block font-bold">VERIFIED CHANNELS</span>
            <div class="lg:flex lg:justify-end">
              ${socialIconsHtml}
            </div>
          </div>
        </div>

        <!-- Desktop 6-Column Mega Directory Layout -->
        <div class="hidden lg:grid grid-cols-12 gap-8 py-14 border-b border-indigo-950/40">
          ${columnsHtml}
        </div>

        <!-- Mobile Accordion Directory Layout -->
        <div class="lg:hidden py-8 border-b border-indigo-950/40 space-y-3">
          ${mobileAccordionHtml}
        </div>

        <!-- Contact, Newsletter, Local Authority & AI Citation Targets -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-indigo-950/40">
          
          <!-- Contact Details -->
          <div class="lg:col-span-4 space-y-3.5">
            <h5 class="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5">
              <svg class="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Contact Information</span>
            </h5>
            <div class="space-y-2.5 text-xs text-slate-400 font-light leading-relaxed">
              <p class="flex items-start gap-2">
                <svg class="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>Direct Inquiries: <a href="mailto:${FOOTER_CONTACT.email}" class="text-white hover:underline font-bold">${FOOTER_CONTACT.email}</a></span>
              </p>
              <p class="flex items-start gap-2">
                <svg class="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>Direct Calling: <a href="tel:${FOOTER_CONTACT.phoneClean}" class="text-white hover:underline font-bold font-mono">${FOOTER_CONTACT.phone}</a></span>
              </p>
              <p class="flex items-start gap-2">
                <svg class="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>${FOOTER_CONTACT.offices}</span>
              </p>
              <p class="flex items-start gap-2">
                <svg class="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>${FOOTER_CONTACT.workingHours}</span>
              </p>
            </div>

            <!-- Instant Action Buttons -->
            <div class="flex flex-wrap gap-2.5 pt-2">
              <a 
                href="${FOOTER_CONTACT.whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[10px] uppercase tracking-wider py-2 px-3.5 rounded-lg transition-all flex items-center gap-1.5 shadow"
              >
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28s-1.44-.71-1.66-.79c-.22-.08-.38-.12-.54.12s-.62.79-.76.95c-.14.16-.28.18-.52.06s-1.02-.38-1.94-1.2c-.72-.64-1.2-1.44-1.34-1.68s-.01-.37.11-.49c.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.78c-.2-.47-.4-.41-.55-.42z"/></svg>
                WhatsApp Chat
              </a>
              <a 
                href="${FOOTER_CONTACT.consultationHref}" 
                class="bg-brand-indigo hover:bg-brand-indigo/90 text-white font-extrabold text-[10px] uppercase tracking-wider py-2 px-3.5 rounded-lg transition-all flex items-center gap-1.5 shadow"
              >
                <svg class="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Book Consultation
              </a>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="lg:col-span-4 space-y-3.5">
            <h5 class="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5">
              <svg class="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span>${FOOTER_NEWSLETTER.title}</span>
            </h5>
            <p class="text-xs font-light text-slate-400 leading-relaxed">
              ${FOOTER_NEWSLETTER.description}
            </p>

            <form id="globalFooterNewsletterForm" class="space-y-2 relative">
              <div class="relative flex items-center">
                <input 
                  type="email" 
                  required
                  placeholder="${FOOTER_NEWSLETTER.placeholder}"
                  id="globalFooterNewsletterEmail"
                  class="w-full bg-[#050b15] border border-slate-800 focus:border-brand-teal rounded-xl py-3 pl-4 pr-12 text-xs text-white placeholder-slate-500 focus:outline-none font-medium"
                />
                <button 
                  type="submit"
                  id="globalFooterNewsletterBtn"
                  class="absolute right-1.5 top-1.5 bg-brand-indigo hover:bg-brand-indigo/80 text-white p-2 rounded-lg text-xs transition-colors shrink-0 flex items-center justify-center cursor-pointer"
                  title="Subscribe"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
              <div id="globalFooterNewsletterSuccess" class="hidden text-[10px] text-brand-teal font-extrabold flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>${FOOTER_NEWSLETTER.successMessage}</span>
              </div>
            </form>
          </div>

          <!-- Local SEO Authority & AI Search Citations -->
          <div class="lg:col-span-4 space-y-4 text-left">
            <div>
              <h6 class="text-[10px] font-extrabold uppercase tracking-widest text-white font-mono flex items-center gap-1.5 mb-2">
                <svg class="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Local SEO Authority</span>
              </h6>
              <div class="flex flex-wrap gap-1.5">
                ${FOOTER_LOCAL_SEO.map(loc => `
                  <a href="${loc.href}" class="text-[9.5px] font-bold font-mono text-slate-400 hover:text-brand-teal bg-[#050b15] border border-indigo-950/40 py-1 px-2 rounded-md hover:border-brand-teal/30 transition-all block">
                    ${loc.name}
                  </a>
                `).join('')}
              </div>
            </div>

            <div>
              <h6 class="text-[10px] font-extrabold uppercase tracking-widest text-white font-mono flex items-center gap-1.5 mb-2">
                <svg class="w-3.5 h-3.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                <span>AI Search Citation Targets</span>
              </h6>
              <div class="flex flex-wrap gap-1.5">
                ${FOOTER_AI_CITATIONS.map(tag => `
                  <a href="${tag.href}" class="text-[9.5px] font-black font-mono text-slate-400 hover:text-cyan-300 bg-[#050b15] border border-indigo-950/40 py-1 px-2 rounded-md hover:border-cyan-400/30 transition-all block">
                    ${tag.name}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>

        </div>

        <!-- Accredited Certifications Bar -->
        <div class="py-7 border-b border-indigo-950/40 flex flex-wrap justify-center md:justify-between items-center gap-4">
          <span class="text-[9.5px] font-mono text-slate-400 uppercase font-black tracking-widest text-center md:text-left">
            SECURED & LICENSED ENTERPRISE CREDENTIALS:
          </span>
          <div class="flex flex-wrap gap-3 items-center justify-center">
            ${certificationsHtml}
          </div>
        </div>

        <!-- Bottom Copyright & Legal Links -->
        <div class="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 gap-4 text-center select-none">
          <div class="flex flex-wrap justify-center md:justify-start items-center gap-3">
            <span>© ${currentYear} AKGLS Group. All Rights Reserved.</span>
            <span class="text-indigo-950/60 hidden sm:inline">|</span>
            ${FOOTER_LEGAL_LINKS.map(link => `
              <a href="${link.href}" class="hover:text-slate-300 transition-colors">${link.name}</a>
            `).join('')}
          </div>

          <div class="flex items-center gap-1.5 font-display text-slate-400 text-xs font-semibold">
            <span>Designed with ❤️ for AI-Driven Growth</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}

export function renderFooterScript(): string {
  return `
    <script>
      // Global Dynamic Footer Interactive Scripts
      (function() {
        // 1. Mobile Footer Accordion Toggle
        document.querySelectorAll('.footer-mobile-acc-trigger').forEach(function(trigger) {
          trigger.addEventListener('click', function() {
            var targetId = trigger.getAttribute('data-target');
            if (!targetId) return;
            var targetPanel = document.getElementById(targetId);
            var icon = trigger.querySelector('svg');
            if (!targetPanel) return;

            var isHidden = targetPanel.classList.contains('hidden');
            if (isHidden) {
              targetPanel.classList.remove('hidden');
              if (icon) icon.classList.add('rotate-180', 'text-brand-teal');
            } else {
              targetPanel.classList.add('hidden');
              if (icon) icon.classList.remove('rotate-180', 'text-brand-teal');
            }
          });
        });

        // 2. Global Footer Newsletter Handler
        var newsletterForm = document.getElementById('globalFooterNewsletterForm');
        var newsletterEmail = document.getElementById('globalFooterNewsletterEmail');
        var newsletterSuccess = document.getElementById('globalFooterNewsletterSuccess');
        var newsletterBtn = document.getElementById('globalFooterNewsletterBtn');

        if (newsletterForm && newsletterEmail && newsletterSuccess) {
          newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!newsletterEmail.value) return;

            if (newsletterBtn) {
              newsletterBtn.disabled = true;
              newsletterBtn.innerHTML = '<svg class="w-4 h-4 animate-spin text-brand-teal" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>';
            }

            setTimeout(function() {
              if (newsletterBtn) {
                newsletterBtn.disabled = false;
                newsletterBtn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
              }
              newsletterSuccess.classList.remove('hidden');
              newsletterEmail.value = '';

              setTimeout(function() {
                newsletterSuccess.classList.add('hidden');
                if (newsletterBtn) {
                  newsletterBtn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>';
                }
              }, 4500);
            }, 800);
          });
        }
      })();
    </script>
  `;
}
