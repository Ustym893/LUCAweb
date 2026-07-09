import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
interface DPAPageProps {
  onBack: () => void;
}

export function DPAPage({ onBack }: DPAPageProps) {
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
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">LUCA Data Processing Agreement (DPA)</h1>
            <p className="text-slate-500 font-medium">Effective Date: 6 July 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            
            <h2>1. Purpose</h2>
            <p>This Data Processing Agreement (“DPA”) forms part of the agreement between RHOMU LTD (“Rhomu”) and customers using the LUCA platform.</p>
            <p>This DPA explains how Rhomu processes customer data when providing LUCA services and defines the responsibilities of each party under applicable data protection legislation, including the General Data Protection Regulation (GDPR).</p>

            <h2>2. Roles of the Parties</h2>
            <p>For customer financial data processed within LUCA:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>The Customer acts as Data Controller.</li>
              <li>Rhomu acts as Data Processor.</li>
              <li>The Customer determines the purpose and use of the data.</li>
            </ul>
            <p>Rhomu processes customer data only:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>according to customer instructions;</li>
              <li>to provide LUCA services;</li>
              <li>as required by applicable law.</li>
            </ul>

            <h2>3. Categories of Data Processed</h2>
            <p>LUCA may process:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>supplier invoices;</li>
              <li>customer invoices;</li>
              <li>accounting transactions;</li>
              <li>supplier and customer records;</li>
              <li>VAT information;</li>
              <li>purchase orders;</li>
              <li>approval workflows;</li>
              <li>user activity records;</li>
              <li>audit logs;</li>
              <li>accounting configuration data.</li>
            </ul>

            <h2>4. Processing Activities</h2>
            <p>Customer data is processed for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>invoice capture and extraction;</li>
              <li>accounting automation;</li>
              <li>approval workflow management;</li>
              <li>accounting system integration;</li>
              <li>financial controls;</li>
              <li>reporting;</li>
              <li>customer support;</li>
              <li>security monitoring.</li>
            </ul>

            <h2>5. Confidentiality</h2>
            <p>Rhomu ensures that personnel authorised to process customer data:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>have access only where required;</li>
              <li>are subject to confidentiality obligations;</li>
              <li>follow appropriate security procedures.</li>
            </ul>

            <h2>6. Security Measures</h2>
            <p>Rhomu maintains appropriate technical and organisational measures including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>encryption;</li>
              <li>access controls;</li>
              <li>authentication controls;</li>
              <li>secure cloud hosting;</li>
              <li>audit logging;</li>
              <li>monitoring;</li>
              <li>backup controls.</li>
            </ul>

            <h2>7. Subprocessors</h2>
            <p>Customers authorise Rhomu to use approved subprocessors required to deliver LUCA.</p>
            <p>Rhomu remains responsible for ensuring subprocessors maintain appropriate data protection safeguards.</p>

            <h2>8. Data Subject Requests</h2>
            <p>Where applicable, Rhomu will reasonably assist customers in responding to requests from individuals exercising their data protection rights.</p>

            <h2>9. Data Breaches</h2>
            <p>Rhomu will notify affected customers without undue delay after becoming aware of a confirmed personal data breach affecting LUCA customer data.</p>

            <h2>10. Return and Deletion of Data</h2>
            <p>Following termination of LUCA services, customer data will be returned or deleted in accordance with contractual obligations and applicable laws.</p>

            <h2>11. Audits and Compliance</h2>
            <p>Rhomu will make available appropriate information reasonably necessary to demonstrate compliance with this DPA.</p>

            <h2>12. Governing Law</h2>
            <p>This DPA is governed by the laws of Ireland.</p>
            
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
              <Link to="/security" className="hover:text-slate-900 hover:underline transition-colors">
                Security Statement
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