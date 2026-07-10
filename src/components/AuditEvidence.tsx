import { Cloud, Users, GitBranch, Database, Shield, FileCheck } from "lucide-react";

const BADGES = [
  { Icon: Cloud,      label: "Microsoft Azure infrastructure"  },
  { Icon: Users,      label: "Role based permissions"          },
  { Icon: GitBranch,  label: "Segregation of duties"           },
  { Icon: Database,   label: "Immutable audit history"         },
  { Icon: Shield,     label: "Entity-level data separation"    },
  { Icon: FileCheck,  label: "Approval evidence retained"      },
];

export function AuditEvidence() {
  return (
    <section id="security" className="border-t border-slate-100 py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-8">

        {/* Section header */}
        <div className="max-w-lg mb-20">
          <p
            className="mb-5"
            style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#94A3B8" }}
          >
            Enterprise controls built in
          </p>
          <h2
            className="text-slate-900 mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            Every transaction leaves a permanent trace
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#64748B" }}>
            LUCA's Canonical Evidence Layer writes a permanent reference ID back to your ERP for every entry — posted, rejected, or escalated.
          </p>
        </div>

        {/* Infrastructure grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-slate-200 rounded-2xl overflow-hidden border-2 border-slate-200">
  {BADGES.map(({ Icon, label }) => (
    <div key={label} className="bg-white p-8 flex flex-col gap-4">
      <Icon size={18} className="text-slate-500" />
      <p className="text-slate-900" style={{ fontSize: "14px", fontWeight: 700, lineHeight: 1.4 }}>{label}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}