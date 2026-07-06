const rows = [
  { id: "INV-2847", vendor: "Hargreaves & Sons",   gl: "4100 · Revenue",       amount: "£2,340.00", status: "ready",   checked: true  },
  { id: "INV-2848", vendor: "Kestrel Digital Ltd",  gl: "7200 · IT Expenses",   amount: "£890.50",   status: "ready",   checked: true  },
  { id: "INV-2849", vendor: "BuildRight Eng",       gl: "8000 · Capital",       amount: "£5,120.00", status: "flag",    checked: false },
  { id: "INV-2850", vendor: "Vertex Media Group",   gl: "7500 · Marketing",     amount: "£1,205.00", status: "none",    checked: true  },
  { id: "INV-2851", vendor: "Pinnacle IT Solutions",gl: "7200 · IT Expenses",   amount: "£445.75",   status: "none",    checked: true  },
  { id: "INV-2852", vendor: "Global Freight Ltd",   gl: "6000 · Operations",    amount: "£3,780.00", status: "none",    checked: true  },
];

function Checkbox({ checked, flag }: { checked: boolean; flag?: boolean }) {
  if (flag) {
    return (
      <div className="w-4 h-4 rounded flex items-center justify-center shrink-0 border-2 border-warning">
        <div className="w-2 h-2 rounded-sm bg-warning" />
      </div>
    );
  }
  if (checked) {
    return (
      <div className="w-4 h-4 rounded flex items-center justify-center shrink-0 bg-primary">
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }
  return <div className="w-4 h-4 rounded border-2 border-slate-300 shrink-0" />;
}

function StatusBadge({ status }: { status: string }) {
  if (status === "ready") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-success-border bg-success-bg text-[11px] font-semibold text-success-dark">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="3.5" stroke="currentColor" strokeWidth="1"/>
          <path d="M2.5 4L3.5 5L5.5 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Ready
      </span>
    );
  }
  if (status === "flag") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-warning-border bg-warning-bg text-[11px] font-semibold text-warning-dark">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M2 7V2L6 1V6L2 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Flag
      </span>
    );
  }
  return null;
}

export function JournalReviewMockup() {
  return (
    <div className="relative w-full max-w-[468px]">

      {/* Main window */}
      <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[var(--shadow-mockup-lg)]">
        
        {/* Window chrome (Mac style traffic lights) */}
        <div className="flex items-center gap-2 px-4 h-10 bg-white border-b border-slate-100">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="flex-1 text-center text-[11px] font-medium text-slate-400 truncate pr-10">
            LUCA · Journal Review Queue
          </span>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-5 pt-4 pb-3">
          <div>
            <p className="text-slate-900 text-[15px] font-bold tracking-tight">Journal Review Queue</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Acme Holdings Ltd · Jun 2026</p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
            12 pending
          </span>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[20px_1fr_auto_auto] gap-3 px-5 py-2 border-y border-slate-100 bg-slate-50">
          <div />
          <span className="text-[10px] font-semibold uppercase tracking-[0.07em] text-slate-400">Vendor / Ref</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.07em] text-slate-400 text-right">Amount</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.07em] text-slate-400 w-14">Status</span>
        </div>

        {/* Rows */}
        {rows.map((row) => (
          <div
            key={row.id}
            className={`grid grid-cols-[20px_1fr_auto_auto] gap-3 items-center px-5 py-2.5 border-b border-slate-50 ${
              row.status === "flag" ? "bg-warning-bg/40" : "bg-white"
            }`}
          >
            <Checkbox checked={row.checked} flag={row.status === "flag"} />

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-slate-900">{row.vendor}</p>
              <p className="text-[10px] text-slate-400 mt-0.5 truncate">{row.id} · {row.gl}</p>
            </div>

            <span className="text-xs font-bold text-slate-900 whitespace-nowrap">{row.amount}</span>

            <div className="w-14">
              <StatusBadge status={row.status} />
            </div>
          </div>
        ))}

        {/* Footer bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-white border-t border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">5 of 6 selected · <strong className="text-slate-900 font-bold">£9,661.25</strong></span>
            <button className="text-xs text-slate-400 hover:text-slate-600 transition-colors hidden sm:block">Skip</button>
          </div>
          <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white bg-primary hover:bg-primary-hover transition-colors text-xs font-semibold shrink-0">
            Post 5 Entries
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating: Avg review time (Hidden on very small mobile screens to prevent overflow) */}
      <div className="hidden sm:block absolute bg-white rounded-xl border border-slate-200 px-4 py-3 bottom-16 -left-6 shadow-[var(--shadow-mockup-sm)] min-w-[130px] z-10">
        <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-400">Avg. Review Time</p>
        <p className="text-[22px] font-extrabold text-slate-900 tracking-tight leading-tight mt-0.5">
          1:43 <span className="text-[13px] font-medium text-slate-500">min</span>
        </p>
      </div>

      {/* Floating: Auto-posted (Hidden on very small mobile screens) */}
      <div className="hidden md:block absolute bg-white rounded-xl border border-slate-200 px-4 py-3 text-center top-[42%] -right-7 shadow-[var(--shadow-mockup-sm)] min-w-[110px] z-10">
        <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-400">Auto-Posted</p>
        <p className="text-[22px] font-extrabold text-success-dark tracking-tight leading-tight mt-0.5">97.2%</p>
      </div>

    </div>
  );
}