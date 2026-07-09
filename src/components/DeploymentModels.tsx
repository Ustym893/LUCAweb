import { CheckCircle } from "lucide-react";

const MODELS = [
  {
    label: "Accounting Practices",
    description: "Deliver AI-powered finance operations across every client from one workspace",
    bullets: ["Multi-client control centre",
              "Client approval workflows",
             "Exception dashboards",
            "Standardised month-end processes",
            
        ],
  },
  {
    label: "Individual Companies",
    description: "Direct ownership for internal finance. Your policy determines the automation rules and approval workflows.",
    bullets: [
      "Dedicated LUCA instance",
      "Finance controller & staff roles",
      "Direct ERP connection",
      "SSO with your identity provider",
      "Finance policy automation",
    ],
  },
];
interface CTAFooterProps {
  onBookCall: () => void;
}
export function DeploymentModels({ onBookCall }: CTAFooterProps) {
  return (
    <section id="solutions" className="border-t border-slate-100 py-28 bg-white">
      <div className="max-w-[1120px] mx-auto px-8">

        {/* Section header */}
        <div className="mb-14">
          <p
            style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#94A3B8" }}
            className="mb-4"
          >
            Deployment Models
          </p>
          <h2
            className="text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            Built for your operating model
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {MODELS.map((m) => (
            <div
              key={m.label}
              className="bg-white rounded-2xl border border-slate-200 p-10 flex flex-col gap-7"
              style={{ boxShadow: "0 1px 4px rgba(15,23,42,0.04)" }}
            >
              {/* Top rule */}
              <div className="w-8 h-[2px] bg-slate-900 rounded-full" />

              <div className="flex flex-col gap-4">
                <h3 className="text-slate-900" style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {m.label}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#64748B" }}>
                  {m.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className="text-slate-400 flex-shrink-0" />
                    <span style={{ fontSize: "14px", color: "#64748B" }}>{b}</span>
                  </li>
                ))}
              </ul>

              <button
              onClick={onBookCall}
                className="mt-auto w-fit text-slate-900 hover:text-slate-600 transition-colors"
                style={{ fontSize: "13px", fontWeight: 600 }}
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
