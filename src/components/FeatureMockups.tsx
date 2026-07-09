import type { ReactNode } from "react";
import { CheckSquare, Square } from "lucide-react";

/* ── Shared Card Shell ── */
function MockupShell({ title, status, statusOk, children }: {
  title: string;
  status: string;
  statusOk: boolean;
  children: ReactNode;
}) {
  return (
    <div className="w-full max-w-[468px] mx-auto rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[var(--shadow-mockup-md)]">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 sm:px-5 h-11 border-b border-slate-100 bg-surface-50">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <span className="ml-1 sm:ml-2 text-[11px] font-medium text-slate-400 truncate">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 pl-2">
          <div className={`w-1.5 h-1.5 rounded-full ${statusOk ? "bg-success" : "bg-error"}`} />
          <span className={`text-[10px] font-medium ${statusOk ? "text-success-dark" : "text-error"}`}>
            {status}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ── Mockup 1: Batch posting ── */
const BATCH_ITEMS = [
  { id: "INV-0031", vendor: "Adobe Creative",   amount: "€892.00",   gl: "6200 · Software",       checked: true  },
  { id: "INV-0032", vendor: "Dropbox Business", amount: "€288.00",   gl: "6200 · Software",       checked: true  },
  { id: "INV-0033", vendor: "Notion Pro",       amount: "€196.00",   gl: "6200 · Software",       checked: true  },
  { id: "INV-0034", vendor: "Figma Org",        amount: "€540.00",   gl: "6200 · Software",       checked: true  },
  { id: "INV-0035", vendor: "Slack Business+",  amount: "€1,140.00", gl: "6100 · Communications", checked: false },
];

export function BatchPostingMockup() {
  return (
    <MockupShell title="Batch Review · 5 of 8" status="Ready to post" statusOk={true}>
      {/* Progress */}
      <div className="h-0.5 bg-slate-100 w-full" aria-hidden="true">
        <div className="h-full bg-slate-900 rounded-full w-4/5" />
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100">
        <span className="text-[11px] text-slate-400">4 selected · €1,916.00</span>
        <button className="h-7 px-3 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors text-[11px] font-semibold shrink-0">
          Post Selected
        </button>
      </div>

      {/* Rows */}
      <ul className="flex flex-col">
        {BATCH_ITEMS.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-slate-50 hover:bg-slate-50/60 transition-colors"
          >
            <div className="shrink-0">
              {item.checked ? (
                <CheckSquare size={14} className="text-slate-700" />
              ) : (
                <Square size={14} className="text-slate-300" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-xs font-medium text-slate-900">{item.vendor}</span>
                <span className="shrink-0 text-xs font-semibold text-slate-900">{item.amount}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] text-slate-300 font-mono">{item.id}</span>
                <span className="text-[10px] text-slate-200">·</span>
                <span className="text-[10px] text-slate-400 truncate">{item.gl}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3">
        <span className="text-[11px] text-slate-400">4 invoices ready</span>
        <span className="text-[11px] font-semibold text-success">~38 sec &darr;</span>
      </div>
    </MockupShell>
  );
}

/* ── Mockup 2: Exception panel ── */
const META_FIELDS = [
  { label: "GL Account",  value: "5100 · CRM Software" },
  { label: "Due Date",    value: "30 Jun 2026" },
  { label: "Period",      value: "June 2026" },
  { label: "Payment Ref", value: "BACS-REF-2209" },
];

export function ExceptionPanelMockup() {
  return (
    <MockupShell title="Exception · INV-0043" status="Auto-post blocked" statusOk={false}>
      {/* Invoice summary */}
      <div className="px-4 sm:px-5 py-4 border-b border-slate-100">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <p className="text-[13px] font-bold text-slate-900 truncate">Salesforce CRM Renewal</p>
            <p className="text-[11px] text-slate-400 mt-0.5 truncate">Salesforce Inc. · INV-SF-2026-0443</p>
          </div>
          <span className="text-base font-extrabold tracking-tight text-slate-900 shrink-0">€5,200</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {META_FIELDS.map((f) => (
            <div key={f.label} className="bg-surface-50 rounded-lg px-3 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-[0.07em] text-slate-300 truncate">{f.label}</p>
              <p className="text-[11px] font-semibold text-slate-600 mt-0.5 truncate">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LUCA explanation */}
      <div className="px-4 sm:px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
            <span className="text-[7px] font-extrabold text-white">AI</span>
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
            LUCA's explanation
          </p>
        </div>
        <div className="rounded-xl border border-warning-border bg-warning-bg p-3.5">
          <p className="text-xs leading-relaxed text-warning-text">
            "I stopped this invoice because the bank account details{" "}
            <strong className="font-bold">changed since the last payment</strong>. Sort code{" "}
            <span className="font-mono font-bold">**4421</span> differs from registered code{" "}
            <span className="font-mono font-bold">**8834</span>. Verify with the vendor before approving."
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 px-4 sm:px-5 py-3.5">
        <button className="flex-1 h-8 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors text-xs font-semibold">
          Override & Post
        </button>
        <button className="flex-1 h-8 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors text-xs font-medium">
          Reject Invoice
        </button>
      </div>
    </MockupShell>
  );
}

/* ── Mockup 3: Auto-posting settings ── */
const VENDOR_TAGS = ["AWS", "Adobe", "Stripe", "Notion", "+12 more"];

export function AutoPostingSettingsMockup() {
  return (
    <MockupShell title="Automation Rules" status="Enabled" statusOk={true}>
      <div className="px-4 sm:px-5 py-5 flex flex-col gap-5">

        {/* Toggle row */}
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-slate-900 truncate">Auto-Posting</p>
            <p className="text-[11px] text-slate-400 mt-0.5 truncate">LUCA posts verified invoices automatically</p>
          </div>
          <div className="w-9 h-5 rounded-full bg-success-dark flex items-center justify-end px-0.5 shrink-0 cursor-pointer">
            <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Monetary cap */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-slate-900">Cap per transaction</p>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-warning-bg text-warning-text">
              Required
            </span>
          </div>
          <div className="flex items-center gap-2.5 bg-surface-50 border border-slate-200 rounded-xl px-4 py-3">
            <span className="text-xs text-slate-400">€</span>
            <span className="text-base font-bold text-slate-900 tracking-tight">5,000</span>
            <span className="text-xs text-slate-300 ml-auto">per invoice</span>
          </div>
          <p className="text-[10px] text-slate-300 mt-1.5">
            Above this threshold, human review is mandatory
          </p>
        </div>

        {/* Monthly ceiling */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-slate-900">Monthly ceiling</p>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-blue-50 text-blue-700">
              Optional
            </span>
          </div>
          <div className="flex items-center gap-2.5 bg-surface-50 border border-slate-200 rounded-xl px-4 py-3">
            <span className="text-xs text-slate-400">€</span>
            <span className="text-base font-bold text-slate-900 tracking-tight">50,000</span>
            <span className="text-xs text-slate-300 ml-auto">/ month</span>
          </div>
        </div>

        {/* Vendor whitelist */}
        <div>
          <p className="mb-2.5 text-xs font-semibold text-slate-900">Trusted Vendors</p>
          <ul className="flex flex-wrap gap-1.5">
            {VENDOR_TAGS.map((v) => (
              <li
                key={v}
                className="px-2.5 py-1 rounded-lg border border-slate-200 bg-surface-50 text-[11px] font-medium text-slate-600"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>

        {/* Save */}
        <button className="h-9 w-full rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors text-xs font-semibold mt-1">
          Save Automation Rules
        </button>

      </div>
    </MockupShell>
  );
}