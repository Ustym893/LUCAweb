import { useState } from "react";
import {  CheckCircle } from "lucide-react";

const PLANS = [
  {
    name: "Essentials",
    monthlyPrice: 199,
    description: "For individual companies managing their own finance operations.",
    highlight: false,
    cta: "Get started",
    features: [
      "Up to 500 journal entries / month",
      "1 ERP integration",
      "Journal review queue",
      "Auto-posting with monetary caps",
      "Plain English exception reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 599,
    description: "For accounting practices managing multiple client entities.",
    highlight: true,
    cta: "Get started",
    features: [
      "Up to 5,000 journal entries / month",
      "Up to 10 client entities",
      "All ERP integrations",
      "Full governed automation suite",
      "Canonical evidence layer",
      "Audit export (PDF & CSV)",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    description: "For large practices and enterprise finance teams with custom requirements.",
    highlight: false,
    cta: "Book a call",
    features: [
      "Unlimited journal entries",
      "Unlimited client entities",
      "Custom ERP integrations",
      "Dedicated Customer Success Manager",
      "Custom SLA & uptime guarantee",
      "SSO & advanced RBAC",
      "On-premise deployment available",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <main>
      
      {/* Hero */}
      <section id="pricing" className=" bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
            Pricing
          </p>
          
          <h1 className="text-slate-900 mb-5 text-4xl md:text-5xl lg:text-[3rem] font-extrabold leading-tight tracking-tight">
            Simple, transparent pricing.
          </h1>
          
          <p className="mx-auto mb-10 text-base leading-relaxed text-slate-500 max-w-md">
            No setup fees. No per-user charges. Pay for what you process.
          </p>

          {/* Annual / Monthly toggle */}
          <div className="inline-flex items-center gap-2 bg-slate-100 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={` cursor-pointer px-4 py-2 rounded-lg transition-all text-[13px] font-semibold ${
                !annual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "bg-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={` cursor-pointer px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-[13px] font-semibold ${
                annual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "bg-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              Annual
              <span className="px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold">
                2 months free
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PLANS.map((plan) => {
              // Calculate price based on toggle
              const price = plan.monthlyPrice
                ? annual
                  ? Math.round(plan.monthlyPrice * 0.833)
                  : plan.monthlyPrice
                : null;

              return (
                <li
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
                    plan.highlight
                      ? "border-blue-600 ring-1 ring-blue-600 shadow-xl shadow-blue-600/10 z-10"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-sm">
                        Most popular
                      </span>
                    </div>
                  )}

                  {/* Top rule */}
                  <div
                    className={`w-8 h-0.5 rounded-full mb-6 ${
                      plan.highlight ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  />

                  <h3 className="text-slate-900 mb-2 text-lg font-bold tracking-tight">
                    {plan.name}
                  </h3>
                  
                  <p className="mb-7 text-[13px] text-slate-500 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8 min-h-[60px]">
                    {price !== null ? (
                      <div className="flex items-end gap-1.5">
                        <span className="text-slate-900 text-4xl font-extrabold tracking-tight leading-none">
                          £{price}
                        </span>
                        <span className="text-slate-400 pb-1 text-[13px] font-medium">
                          /mo
                        </span>
                      </div>
                    ) : (
                      <span className="text-slate-900 text-3xl font-extrabold tracking-tight">
                        Custom
                      </span>
                    )}
                    
                    {price !== null && annual && (
                      <p className="mt-2 text-[11px] font-medium text-slate-400">
                        Billed annually · £{plan.monthlyPrice! * 10}/yr
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    className={`cursor-pointer w-full h-10 rounded-lg mb-8 transition-colors text-[13px] font-semibold flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {plan.cta}
                  </button>

                  {/* Features */}
                  <ul className="flex flex-col gap-3.5 mt-auto">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle
                          className={`flex-shrink-0 mt-0.5 w-4 h-4 ${
                            plan.highlight ? "text-blue-600" : "text-slate-400"
                          }`}
                        />
                        <span className="text-[13px] text-slate-600 leading-relaxed">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}