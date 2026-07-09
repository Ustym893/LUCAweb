import { ArrowRight, MapPin, Clock } from "lucide-react";

const ROLES = [
  
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "London",
    type: "Full-time",
    description:
      "Own the full sales cycle for mid-market and enterprise accounts. You'll work closely with CFOs, finance controllers, and ops leads to demonstrate LUCA's value and close meaningful deals.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Shape the end-to-end experience of LUCA — from the journal review queue to the governance settings panel. You care deeply about clarity, hierarchy, and designing for high-stakes workflows.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "London",
    type: "Full-time",
    description:
      "Own the post-sale relationship with our accounting practice clients. You'll drive onboarding, identify expansion opportunities, and act as the voice of the customer internally.",
  },
  {
    title: "Head of Partnerships",
    department: "Business Development",
    location: "London",
    type: "Full-time",
    description:
      "Build and scale LUCA's partner ecosystem — ERP vendors, accounting platforms, and practice networks. You'll define the partnership strategy and close the deals that unlock our next phase of growth.",
  },
];

const PERKS = [
  {
    label: "Remote-first culture",
    description: "Work from anywhere in the UK or Europe.",
  },
  {
    label: "Competitive equity",
    description: "Meaningful ownership in what we're building.",
  },
  {
    label: "Private health cover",
    description: "Full medical, dental, and optical included.",
  },
  {
    label: "Learning & development",
    description: "€1,500/yr personal budget for courses and conferences.",
  },
];

export function CareersPage() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="border-b border-slate-100 py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
            Careers at LUCA
          </p>
          <h1 className="text-slate-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-2xl">
            Help us build the future of finance operations.
          </h1>
          <p className="text-base leading-relaxed text-slate-500 max-w-xl">
            We're a small, focused team building software that makes finance
            professionals more accurate, more in control, and less buried in
            manual work. Come build with us.
          </p>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="mb-8 md:mb-12 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
            Open positions
          </p>

          <ul className="flex flex-col divide-y divide-slate-100">
            {ROLES.map((role) => (
              <li
                key={role.title}
                className="group py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
              >
                <div className="flex flex-col gap-3 flex-1">
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                      {role.department}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-xs">{role.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs">{role.type}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-500 max-w-2xl">
                    {role.description}
                  </p>
                </div>

                {/* Call to Action */}
                <button className="group/btn inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex-shrink-0 self-start lg:self-center text-[13px] font-semibold">
                  Apply now
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Perks Section */}
      <section className="border-t border-slate-100 py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="mb-8 md:mb-12 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
            Why LUCA
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERKS.map((perk) => (
              <li
                key={perk.label}
                className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col gap-3"
              >
                <div className="w-6 h-0.5 rounded-full bg-slate-900" />
                <h4 className="text-sm font-bold text-slate-900">
                  {perk.label}
                </h4>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {perk.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}