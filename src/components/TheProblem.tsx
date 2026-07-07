import { Inbox, MessageSquareOff, FileText, BellOff, Clock } from "lucide-react";

const PROBLEMS = [
  {
    icon: Inbox,
    title: "Invoices arrive everywhere",
    detail: "Email, portals, PDFs, post. No single source of truth.",
  },
  {
    icon: MessageSquareOff,
    title: "Approvals happen offline",
    detail: "Slack messages, verbal sign-offs, spreadsheet threads.",
  },
  {
    icon: FileText,
    title: "Policies live in documents",
    detail: "Rules exist — but they're not enforced at the point of posting.",
  },
  {
    icon: BellOff,
    title: "Exceptions are found too late",
    detail: "Duplicate payments and errors surface after the period closes.",
  },
  {
    icon: Clock,
    title: "Month-end slows down",
    detail: "Every close becomes a scramble to reconcile what already happened.",
  },
];

export function TheProblem() {
  return (
    <section className="border-t border-slate-100 py-28 bg-[#FAFAFA]">
      <div className="max-w-[1120px] mx-auto px-8">

        {/* Header — centered */}
        <div className="text-center mb-16">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
            The Problem
          </p>
          <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Finance teams don't have an invoice problem.
          </h2>
          <h2 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mt-2">
            They have a control problem.
          </h2>
        </div>

        {/* Vertical chain */}
        <div className="flex flex-col items-center gap-0">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div key={problem.title} className="flex flex-col items-center w-full max-w-[560px]">

                {/* Card */}
                <div className="w-full flex items-start gap-4 bg-white rounded-2xl px-6 py-5 border border-slate-200 shadow-sm">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5 bg-slate-100 text-slate-400">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-slate-900 text-[15px] font-semibold tracking-[-0.01em]">
                      {problem.title}
                    </p>
                    <p className="text-[13px] text-slate-400 mt-1 leading-relaxed">
                      {problem.detail}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                {i < PROBLEMS.length - 1 && (
                  <div className="py-2 text-slate-300 text-lg leading-none">↓</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <div className="flex flex-col items-center mt-14 gap-3">
          <p className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight text-center">
            LUCA changes that.
          </p>
          <div className="w-8 h-[3px] rounded-full bg-blue-600" />
        </div>

      </div>
    </section>
  );
}