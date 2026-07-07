import { JournalReviewMockup } from "./ui/JournalReviewMockup";

interface CTAFooterProps {
  onBookCall: () => void;
}
export function Hero({ onBookCall }: CTAFooterProps) {
  return (

    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left column (Text & CTAs) ── */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            
            {/* Eyebrow */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Finance Operations Intelligence
            </p>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Transform Finance Operations Without Replacing Your Ledger
            </h1>

            {/* Subtext */}
            <p className="text-base leading-relaxed text-slate-500 max-w-md">
              LUCA is the AI control layer between your finance team and your accounting system — automating invoice processing, approvals, controls and posting while keeping you in control.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <button 
              onClick={onBookCall}
              className=" cursor-pointer group inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors text-sm font-semibold">
                See LUCA in Action
               
              </button>
             
            </div>

            {/* Trust footnote */}
            <p className="text-xs text-slate-400">
             It's AI, but you have control of the ledger.
            </p>
          </div>

          {/* ── Right column (Mockup Graphic) ── */}
          <div className="flex justify-center lg:justify-end lg:col-span-7">
            {/* We will need the code for this mockup component next! */}
            <JournalReviewMockup />
          </div>

        </div>
      </div>
    </section>
  );
}