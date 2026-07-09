import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

interface SubprocessorRegisterPageProps {
  onBack: () => void;
}

export function SubprocessorRegisterPage({ onBack }: SubprocessorRegisterPageProps) {
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
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">LUCA Subprocessor Register</h1>
            <p className="text-slate-500 font-medium">Effective Date: 6 July 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            
            <h2>1. Introduction</h2>
            <p>RHOMU LTD uses selected third-party service providers (“subprocessors”) to help deliver, secure and operate the LUCA platform.</p>
            <p>Subprocessors are only used where required to provide LUCA services.</p>
            <p>All subprocessors are expected to maintain appropriate confidentiality, security and data protection standards.</p>

            <h2>2. Current Subprocessors</h2>
            
            {/* Custom styled table for subprocessors */}
            <div className="not-prose my-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-sm text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3.5 font-semibold text-slate-900">Provider</th>
                    <th className="px-4 py-3.5 font-semibold text-slate-900">Purpose</th>
                    <th className="px-4 py-3.5 font-semibold text-slate-900">Data Processed</th>
                    <th className="px-4 py-3.5 font-semibold text-slate-900">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Microsoft Azure</td>
                    <td className="px-4 py-3 text-slate-600">Cloud hosting, infrastructure and AI services</td>
                    <td className="px-4 py-3 text-slate-600">Customer application and processing data</td>
                    <td className="px-4 py-3 text-slate-600">EU / Microsoft regions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Microsoft Entra ID</td>
                    <td className="px-4 py-3 text-slate-600">Identity and authentication services</td>
                    <td className="px-4 py-3 text-slate-600">User account information</td>
                    <td className="px-4 py-3 text-slate-600">Microsoft regions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Accounting Platform Providers</td>
                    <td className="px-4 py-3 text-slate-600">Customer-authorised accounting integrations</td>
                    <td className="px-4 py-3 text-slate-600">Accounting data authorised by customer</td>
                    <td className="px-4 py-3 text-slate-600">Provider dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Email Service Provider</td>
                    <td className="px-4 py-3 text-slate-600">System notifications and communications</td>
                    <td className="px-4 py-3 text-slate-600">Email addresses and communication data</td>
                    <td className="px-4 py-3 text-slate-600">Provider dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Monitoring & Security Services</td>
                    <td className="px-4 py-3 text-slate-600">Platform monitoring and security operations</td>
                    <td className="px-4 py-3 text-slate-600">Technical logs and system information</td>
                    <td className="px-4 py-3 text-slate-600">Provider dependent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>3. Accounting Integrations</h2>
            <p>LUCA may connect with customer-authorised accounting platforms including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>QuickBooks Online;</li>
              <li>Xero;</li>
              <li>Sage.</li>
            </ul>
            <p>Connections are controlled by the customer. LUCA accesses accounting information only where permission has been granted.</p>

            <h2>4. Subprocessor Controls</h2>
            <p>Before engaging subprocessors, Rhomu considers:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>security standards;</li>
              <li>data protection requirements;</li>
              <li>confidentiality obligations;</li>
              <li>service requirements.</li>
            </ul>
            <p>Subprocessors may only process information necessary to provide their services.</p>

            <h2>5. Changes to Subprocessors</h2>
            <p>As LUCA develops, Rhomu may update the list of subprocessors. Customers will be informed of material changes where required by applicable agreements.</p>

            <h2>6. International Transfers</h2>
            <p>Where subprocessors process information outside the European Economic Area, appropriate safeguards will be applied in accordance with GDPR requirements.</p>

            <h2>7. Contact</h2>
            <p>Questions regarding subprocessors can be sent to:</p>
            
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
              <Link to="/security" className="hover:text-slate-900 hover:underline transition-colors">
                Security Statement
              </Link>
              <span className="hidden md:inline text-slate-300">•</span>
              <Link to="/responsible-ai" className="hover:text-slate-900 hover:underline transition-colors">
                Responsible AI Statement
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}