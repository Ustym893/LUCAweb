import { BatchPostingMockup } from "./FeatureMockups";
import { ExceptionPanelMockup } from "./FeatureMockups";
import { AutoPostingSettingsMockup } from "./FeatureMockups";

const FEATURES = [
  {
    index: "01",
    label: "Lightning fast review within Company Policy",
    headline: "Process transactions faster without losing  control",
    body: "LUCA reads, codes, validates and prepares transactions based on your accounting rules and finance policies. Your team reviews exceptions — not every transaction",
    bullets: [
      "AI coding and classification",
       "Supplier learning",
        "VAT and GL validation",
         "Period controls",
          "Exception-based review"
        ],
    Mockup: BatchPostingMockup,
    reversed: false,
  },
  {
    index: "02",
    label: "Governed Automation",
    headline: "Auto-posting with full control over your ledger",
    body: "LUCA automates transactions within the rules you define, but you maintain ultimate discretion over what actually hits the ledger. It is AI-driven automation, but you keep control.",
    bullets: [
      "Approval authority rules",
      "Supplier controls",
      "Transaction limits",
      "Segregation of duties",
      "Policy-based automation"
    ],
    Mockup: AutoPostingSettingsMockup,
    reversed: true,
  },
  {
    index: "03",
    label: "Plain English Audit",
    headline: "Every exception explained in plain English",
    body: "Exceptions are channeled into separate workflows. Every \"hold\" comes with a clear, human-readable reason — your team sees exactly what LUCA flagged and why, before any action is taken.",
    bullets: [
      "Natural language exception reports",
      "Vendor bank-detail change detection",
      "You keep control of the ledger at every step",
    ],
    Mockup: ExceptionPanelMockup,
    reversed: false,
  },
];

export function CoreFeatures() {
  return (
    <section id="features" className="border-t border-slate-100 py-28">
      <div className="max-w-[1120px] mx-auto px-8">

        {/* Section header */}
        <div className="mb-24">
          <p style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#94A3B8" }}>
            Core Capabilities
          </p>
        </div>

        {/* Feature blocks */}
        <div className="flex flex-col" style={{ gap: "112px" }}>
          {FEATURES.map(({ index, label, headline, body, bullets, Mockup, reversed }) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
            >
              {/* Text */}
              <div className="flex flex-col gap-6">
                {/* Index + label */}
                <div className="flex items-baseline gap-3">
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#CBD5E1", fontFamily: "monospace" }}>{index}</span>
                  <span style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8" }}>
                    {label}
                  </span>
                </div>

                {/* H2 text preserved verbatim */}
                <h2
                  className="text-slate-900"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {headline}
                </h2>

                {/* Body */}
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#64748B", maxWidth: 380 }}>
                  {body}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-[9px] flex-shrink-0 w-1 h-1 rounded-full bg-slate-300" />
                      <span style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup */}
              <div className={`${reversed ? "lg:pr-4" : "lg:pl-4"}`}>
                <Mockup />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
