import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

interface SecurityStatementPageProps {
  onBack: () => void;
}

export function SecurityStatementPage({ onBack }: SecurityStatementPageProps) {
  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      {/* Header */}
      <header className="h-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity text-left cursor-pointer"
          aria-label="Return to homepage"
        >
          <img src="/LucaLogo.png" alt="LUCA" className="h-7 w-auto object-contain" />
          <span className="text-slate-900 text-[15px] font-bold tracking-[0.18em]">LUCA</span>
        </button>
        <button 
          onClick={onBack}
          className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back to site
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[var(--shadow-card)] border border-slate-200 p-8 md:p-12">
          
          <div className="mb-10 border-b border-slate-200 pb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">LUCA Security Statement</h1>
            <p className="text-slate-500 font-medium">Effective Date: 6 July 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            
            <h2>1. Overview</h2>
            <p>Security is a core principle of LUCA.</p>
            <p>LUCA has been designed to support finance teams processing sensitive accounting and business information.</p>
            <p>Our approach focuses on:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>confidentiality;</li>
              <li>integrity;</li>
              <li>availability;</li>
              <li>controlled automation.</li>
            </ul>

            <h2>2. Cloud Infrastructure</h2>
            <p>LUCA operates using secure cloud infrastructure.</p>
            <p>The platform architecture includes:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>modern application frameworks;</li>
              <li>segregated environments;</li>
              <li>controlled deployments;</li>
              <li>monitoring capabilities;</li>
              <li>scalable infrastructure services.</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>LUCA applies safeguards including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>encryption of data during transmission;</li>
              <li>encryption of stored data;</li>
              <li>controlled access;</li>
              <li>secure authentication;</li>
              <li>activity logging.</li>
            </ul>

            <h2>4. User Access Controls</h2>
            <p>LUCA supports controlled access management including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>role-based permissions;</li>
              <li>user-specific access;</li>
              <li>approval workflows;</li>
              <li>separation of duties.</li>
            </ul>
            <p>Users only receive access appropriate to their assigned role.</p>

            <h2>5. Tenant Separation</h2>
            <p>Customer environments are logically separated to prevent unauthorised access between organisations.</p>

            <h2>6. Audit Trail</h2>
            <p>LUCA maintains audit records of key finance activities including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>document processing;</li>
              <li>approval actions;</li>
              <li>user activity;</li>
              <li>accounting workflow actions.</li>
            </ul>
            <p>This supports transparency and financial governance.</p>

            <h2>7. Accounting Integrations</h2>
            <p>LUCA connects to accounting platforms through authorised integrations.</p>
            <p>Access is controlled by customer permissions and may be revoked by the customer.</p>

            <h2>8. Operational Security</h2>
            <p>Rhomu applies internal controls covering:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>access management;</li>
              <li>development processes;</li>
              <li>system monitoring;</li>
              <li>incident response.</li>
            </ul>

            <h2>9. Business Continuity</h2>
            <p>LUCA infrastructure is designed to support:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>service availability;</li>
              <li>recovery procedures;</li>
              <li>backup processes;</li>
              <li>operational resilience.</li>
            </ul>

            <h2>10. Continuous Improvement</h2>
            <p>Security practices are reviewed as LUCA develops and customer requirements evolve.</p>

            <div className="mt-8">
              <p className="font-medium text-slate-900">
                RHOMU LTD<br/>
                Ireland<br/>
                <a href="mailto:contactus@rhomultd.com" className="text-slate-900 underline hover:no-underline">contactus@rhomultd.com</a>
              </p>
            </div>

          </div>

          {/* Footer (Links) */}
          <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col items-center gap-8">
            <button 
              onClick={onBack}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all"
            >
              Back to Home
            </button>

            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-[13px] text-slate-500">
              <Link to="/privacy-policy" className="hover:text-slate-900 hover:underline transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden md:inline text-slate-300">•</span>
              <Link to="/dpa" className="hover:text-slate-900 hover:underline transition-colors">
                Data Processing Agreement (DPA)
              </Link>
              <span className="hidden md:inline text-slate-300">•</span>
              <Link to="/responsible-ai" className="hover:text-slate-900 hover:underline transition-colors">
                Responsible AI Statement
              </Link>
              <span className="hidden md:inline text-slate-300">•</span>
              <Link to="/subprocessors" className="hover:text-slate-900 hover:underline transition-colors">
                Subprocessor Register
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}