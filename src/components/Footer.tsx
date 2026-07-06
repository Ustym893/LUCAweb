const FOOTER_COLS = [
  { title: "Product",   links: ["Features", "Integrations", "Pricing"] },
  { title: "Solutions", links: ["Accounting Practices", "Enterprise"] },
  { title: "Company",   links: ["About", "Blog", "Careers", "Contact"] },
];

interface CTAFooterProps {
  onBookCall: () => void;
}

export function CTAFooter({ onBookCall }: CTAFooterProps) {
  
  // Додано функцію для обробки кліків по посиланнях футера
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    if (link === "Contact") {
      onBookCall();
      return;
    } 
     if (link === "About") {
   window.location.href = "https://rhomultd.com/";
      return;
    }

        if (link === "Careers") {
        window.location.href = "/careers";
        return;
        }
     let sectionId = link.toLowerCase().replace(/\s+/g, '-');
  
  // 3. Override ID for specific links
  if (link === "Accounting Practices" || link === "Enterprise") {
    sectionId = "solutions";
  }
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        const scrollPosition = sectionId === 'integrations' ? 'center' : 'start';
    sectionElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: scrollPosition 
    });
  }
  };

  return (
    <>
      {/* ── CTA Section ── */}
      <section className="bg-slate-900 py-20 md:py-32 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-600">
            Get started
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-xl">
            Ready to build a smarter finance function?
          </h2>

          <p className="text-base leading-relaxed text-slate-400 max-w-md">
            Join 200+ finance teams using LUCA to reduce manual entry, accelerate period close, and build audit-ready processes.
          </p>

         <button 
            onClick={onBookCall}
            className="group inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors text-[15px] font-bold"
          >
            Book a Discovery Call
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2">
            {["No ERP migration required", "Setup in under 30 minutes", "Cancel anytime"].map((item) => (
              <span key={item} className="text-xs font-medium text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer Section ── */}
      <footer className="bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-14 border-b border-slate-800/60">
            
            {/* Brand Column */}
            <div className="col-span-2 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                {/* Top Row: Logo & LUCA */}
                <div className="flex items-center gap-2.5">
                  <img src="/LucaLogo.png" alt="LUCA" className="w-7 h-7 object-contain" />
                  <span className="text-white text-[15px] font-bold tracking-[0.18em]">LUCA</span>
                </div>
                
                {/* Bottom Row: Subtitle */}
                <p className="text-xs font-medium text-slate-600 tracking-wider leading-none">
                  Rhomu Limited
                </p>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Finance operations orchestration for modern accounting teams.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/rhomu-limited/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-400 transition-colors" 
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {FOOTER_COLS.map((col) => (
              <div key={col.title} className="col-span-1">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600">
                  {col.title}
                </p>
                <nav>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link) => (
                      <li key={link}>
                        {/* Оновлено виклик onClick та додано cursor-pointer */}
                        <a 
                          href="#" 
                          onClick={(e) => handleLinkClick(e, link)}
                          className="text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
            <p className="text-xs text-slate-600">
              © 2026 LUCA. All rights reserved.
            </p>
            <nav className="flex gap-6">
              {["Privacy", "Terms", "Security"].map((link) => (
                <a key={link} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>

        </div>
      </footer>
    </>
  );
}