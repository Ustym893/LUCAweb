const INTEGRATIONS = [
  { name: "Xero",         color: "#13B5EA" },
  { name: "QuickBooks",   color: "#2CA01C" },
  { name: "Sage",         color: "#00B374" },
  { name: "Sage Intacct", color: "#00B374" },
  { name: "NetSuite",     color: "#0075B7" },
  { name: "FreshBooks",   color: "#0075F2" },
];

export function IntegrationsBanner() {
  return (
    <section id="integrations" className="border-t border-slate-100 py-12 md:py-16 bg-white" aria-labelledby="integrations-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Screen-reader only heading for semantic section compliance */}
        <h2 id="integrations-heading" className="sr-only">
          Supported Integrations
        </h2>
        
        <p className="text-center mb-8 md:mb-10 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          Native integrations with your system of record
        </p>

        {/* Semantic list wrapping the cards */}
        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {INTEGRATIONS.map((integration) => (
            <li
              key={integration.name}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div 
                className="w-2.5 h-2.5 rounded-full shrink-0" 
                style={{ backgroundColor: integration.color }} 
                aria-hidden="true"
              />
              <span className="text-sm font-semibold tracking-tight text-slate-700">
                {integration.name}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}