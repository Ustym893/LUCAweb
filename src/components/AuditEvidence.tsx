import { Database, Cloud, Building2, ShieldCheck } from "lucide-react";

const BADGES = [
  { Icon: Cloud,       label: "Built on Microsoft Azure" },
  { Icon: Building2,   label: "Enterprise-grade cloud infrastructure" },
  { Icon: ShieldCheck, label: "Strict data isolation per entity" },
  { Icon: Database,    label: "Immutable Audit Log" },
];

export function AuditEvidence() {
  return (
    <section id="security" className="border-t border-slate-100 py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            Infrastructure & Security
          </p>
          <h2 className="mb-5 text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight leading-[1.15] text-slate-900">
            Every transaction leaves a permanent trace
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            LUCA's Canonical Evidence Layer writes a permanent reference ID back to your ERP for every entry — posted, rejected, or escalated.
          </p>
        </div>

        {/* Infrastructure grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-[var(--shadow-card)]">
          {BADGES.map(({ Icon, label }) => (
            <div key={label} className="bg-white p-6 md:p-8 flex flex-col gap-4 hover:bg-slate-50 transition-colors">
              <Icon size={20} className="text-slate-400 shrink-0" aria-hidden="true" />
              <p className="text-sm font-bold leading-snug text-slate-900">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}