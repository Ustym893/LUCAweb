import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
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

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[var(--shadow-card)] border border-slate-200 p-8 md:p-12">
          
          <div className="mb-10 border-b border-slate-200 pb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">LUCA Privacy Policy</h1>
            <p className="text-slate-500 font-medium">Effective Date: 6 July 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            
            <h2>1. Introduction</h2>
            <p>RHOMU LTD (“Rhomu”, “we”, “our”, or “us”) is committed to protecting the privacy, confidentiality and security of the information entrusted to us.</p>
            <p>This Privacy Policy explains how information is collected, processed, stored and protected when customers use LUCA, our AI-enabled finance operations platform.</p>
            <p>LUCA helps finance teams automate and control accounting processes including invoice processing, approval workflows, accounting classification, financial controls, reconciliations and related finance operations.</p>
            <p>We recognise that financial information is highly sensitive. Protecting customer data, maintaining confidentiality and ensuring appropriate controls are fundamental principles of LUCA.</p>

            <h2>2. Our Role Under Data Protection Law</h2>
            <p>Depending on the type of information processed, Rhomu may act as either a Data Controller or a Data Processor.</p>
            
            <p><strong>Customer Account Information</strong><br/>
            For information relating to customer accounts, subscriptions, billing, support and commercial relationships, Rhomu acts as the Data Controller. This may include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Names</li>
              <li>Business contact details</li>
              <li>Email addresses</li>
              <li>Telephone numbers</li>
              <li>Job titles</li>
              <li>Organisation information</li>
              <li>Support communications</li>
            </ul>

            <p><strong>Customer Financial Data</strong><br/>
            For accounting, operational and business data uploaded into LUCA or accessed through integrations, the customer remains the Data Controller. Rhomu acts as the Data Processor and processes this information only:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>to provide the LUCA service;</li>
              <li>according to customer instructions;</li>
              <li>in accordance with applicable data protection laws.</li>
            </ul>
            <p>Customers retain ownership and control of their financial information.</p>

            <h2>3. Information Processed by LUCA</h2>
            <p>LUCA may process business and financial information including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Supplier invoices</li>
              <li>Customer invoices</li>
              <li>Supplier records</li>
              <li>Customer records</li>
              <li>Accounting transactions</li>
              <li>Purchase orders</li>
              <li>Approval workflows</li>
              <li>Accounting codes</li>
              <li>Cost centres and departments</li>
              <li>VAT and tax-related information</li>
              <li>Payment information</li>
              <li>Audit history</li>
              <li>User activity within LUCA</li>
            </ul>
            <p>Depending on customer usage, information may include personal data contained within financial documents.</p>

            <h2>4. Accounting Platform Integrations</h2>
            <p>LUCA integrates with third-party accounting platforms including systems such as QuickBooks Online, Xero and Sage. Where customers connect LUCA to an accounting platform:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>access is authorised by the customer;</li>
              <li>LUCA only accesses information required to provide the service;</li>
              <li>access permissions may be removed by the customer;</li>
              <li>data is processed securely through authorised integration methods.</li>
            </ul>
            <p>LUCA does not independently access customer accounting systems without customer permission.</p>

            <h2>5. Use of Artificial Intelligence</h2>
            <p>LUCA uses artificial intelligence technologies to improve finance operations. AI capabilities may include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>extracting information from financial documents;</li>
              <li>identifying invoice information;</li>
              <li>recommending accounting classifications;</li>
              <li>applying customer policies;</li>
              <li>detecting anomalies;</li>
              <li>assisting financial review processes;</li>
              <li>generating operational insights.</li>
            </ul>
            <p>Customer data processed by LUCA is used only to provide and improve the LUCA service. Customer financial information is not sold. Customer financial information is not used to train publicly available artificial intelligence models.</p>

            <h2>6. How We Use Information</h2>
            <p>Information may be used to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>provide the LUCA platform;</li>
              <li>authenticate users;</li>
              <li>process accounting workflows;</li>
              <li>provide customer support;</li>
              <li>maintain security;</li>
              <li>improve reliability and performance;</li>
              <li>monitor system health;</li>
              <li>comply with legal obligations.</li>
            </ul>
            <p>We do not use customer financial data for advertising purposes.</p>

            <h2>7. Data Security</h2>
            <p>We apply technical and organisational safeguards designed to protect customer information. These include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>secure cloud infrastructure;</li>
              <li>encryption of data in transit;</li>
              <li>encryption of stored information;</li>
              <li>role-based access controls;</li>
              <li>user authentication controls;</li>
              <li>audit logging;</li>
              <li>environment monitoring;</li>
              <li>controlled access procedures.</li>
            </ul>
            <p>Access to customer information is limited to authorised personnel who require access to provide or support the LUCA service.</p>

            <h2>8. Hosting and Data Location</h2>
            <p>LUCA is hosted using secure cloud infrastructure. Where possible, customer data is hosted within European data regions. Where data processing involves international transfers, appropriate safeguards will be implemented in accordance with applicable data protection laws.</p>

            <h2>9. Third-Party Service Providers</h2>
            <p>We may use carefully selected service providers (“subprocessors”) to operate LUCA. These may include providers for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>cloud hosting;</li>
              <li>infrastructure services;</li>
              <li>security monitoring;</li>
              <li>customer support;</li>
              <li>communication services;</li>
              <li>accounting integrations.</li>
            </ul>
            <p>Service providers may only process information necessary to provide their contracted services. We do not sell customer information to third parties.</p>

            <h2>10. Data Retention</h2>
            <p>Customer information is retained only for as long as required. Account information may be retained while a customer relationship exists and where required for legal or business purposes. Customer financial data is retained:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>according to customer requirements;</li>
              <li>for the period necessary to provide LUCA services;</li>
              <li>according to applicable legal obligations.</li>
            </ul>
            <p>Following termination of services, customer data will be deleted or returned according to agreed contractual terms.</p>

            <h2>11. Customer Control of Data</h2>
            <p>Customers may request:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>access to their information;</li>
              <li>correction of inaccurate information;</li>
              <li>deletion of information where applicable;</li>
              <li>restriction of processing;</li>
              <li>export of available customer data.</li>
            </ul>
            <p>Requests can be made by contacting Rhomu.</p>

            <h2>12. Confidentiality</h2>
            <p>Rhomu treats customer financial and business information as confidential. We do not disclose customer financial information except:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>as required to provide LUCA services;</li>
              <li>where authorised by the customer;</li>
              <li>where legally required.</li>
            </ul>

            <h2>13. Incident Management</h2>
            <p>In the event of a confirmed data security incident affecting customer information, Rhomu will investigate and take appropriate action. Where required, customers and relevant authorities will be notified in accordance with applicable data protection regulations.</p>

            <h2>14. Cookies and Website Data</h2>
            <p>LUCA websites may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>provide website functionality;</li>
              <li>improve user experience;</li>
              <li>understand website performance.</li>
            </ul>
            <p>Users may manage cookie preferences through their browser settings.</p>

            <h2>15. Children’s Privacy</h2>
            <p>LUCA is designed for business users and is not intended for individuals under the age of 16. We do not knowingly collect information from children.</p>

            <h2>16. Changes to this Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes to LUCA, legal requirements, or operational practices. Updated versions will be made available to customers.</p>

            <h2>17. Contact</h2>
            <p>Questions regarding this Privacy Policy or data protection matters can be sent to:</p>
            <p className="font-medium text-slate-900 mt-2">
              RHOMU LTD<br/>
              Email: <a href="mailto:contactus@rhomultd.com" className="text-slate-900 underline hover:no-underline">contactus@rhomultd.com</a><br/>
              Ireland
            </p>
          </div>

          {/* Майковий Footer з додатковими документами */}
          <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col items-center gap-8">
            <button 
              onClick={onBack}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all"
            >
              Back to Home
            </button>

            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-[13px] text-slate-500">
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