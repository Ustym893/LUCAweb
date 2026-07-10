import xeroImg from "/image-3.png";
import quickBooksImg from "/image-4.png";
import netSuiteImg from "/image-5.png";
import sageImg from "/image-6.png";
import sageIntacctImg from "/image-7.png";

const INTEGRATIONS = [
  { name: "Xero",         img: xeroImg,        cover: true  },
  { name: "QuickBooks",   img: quickBooksImg,  cover: false },
  { name: "Sage",         img: sageImg,        cover: false },
  { name: "Sage Intacct", img: sageIntacctImg, cover: false },
  { name: "NetSuite",     img: netSuiteImg,    cover: false },
];

export function IntegrationsBanner() {
  return (
    <section className="border-t border-slate-100 py-12 md:py-16 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <p className="text-center mb-8 md:mb-10 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
          Native integrations with your system of record
        </p>

        {/* Logos Grid/Flex */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all grow sm:grow-0 basis-[calc(50%-0.375rem)] sm:basis-auto"
            >
              <div className="flex items-center justify-center shrink-0 overflow-hidden rounded-lg w-10 h-10 sm:w-12 sm:h-12">
                <img
                  src={integration.img}
                  alt={integration.name}
                  className={`w-full h-full block object-center ${
                    integration.cover ? "object-cover" : "object-contain"
                  }`}
                  style={{ imageRendering: "auto" }} // Єдиний стиль, який краще залишити інлайново для рендерингу браузером
                />
              </div>
              <span className="text-slate-700 text-sm font-semibold tracking-tight whitespace-nowrap">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}