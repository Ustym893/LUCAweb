import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

interface ResponsibleAIStatementPageProps {
  onBack: () => void;
}

export function ResponsibleAIStatementPage({ onBack }: ResponsibleAIStatementPageProps) {
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
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">LUCA Responsible AI Statement</h1>
            <p className="text-slate-500 font-medium">Effective Date: 6 July 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            
            <h2>1. Introduction</h2>
            <p>LUCA is an AI-enabled finance operations platform developed by RHOMU LTD.</p>
            <p>Our approach to artificial intelligence is based on a simple principle: AI should improve finance processes while maintaining appropriate human oversight, governance and control.</p>
            <p>LUCA is designed to support finance professionals, not replace financial accountability.</p>

            <h2>2. Purpose of AI within LUCA</h2>
            <p>LUCA uses artificial intelligence to assist with finance operations including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>extracting information from financial documents;</li>
              <li>interpreting invoice data;</li>
              <li>recommending accounting treatment;</li>
              <li>identifying exceptions;</li>
              <li>detecting unusual activity;</li>
              <li>applying customer policies;</li>
              <li>improving finance workflows.</li>
            </ul>
            <p>AI is used to improve speed, accuracy and control within finance operations.</p>

            <h2>3. Human Oversight</h2>
            <p>LUCA is designed around controlled automation.</p>
            <p>AI-generated recommendations can be reviewed, approved, amended or rejected by authorised users. Examples include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>invoice coding suggestions;</li>
              <li>approval routing;</li>
              <li>exception identification;</li>
              <li>financial analysis outputs.</li>
            </ul>
            <p>Customers remain responsible for their financial decisions, approvals and accounting records.</p>

            <h2>4. Customer Policies and Controls</h2>
            <p>LUCA does not operate as an uncontrolled AI system.</p>
            <p>Customer-defined rules, approval structures and finance policies are used to control workflows. These may include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>approval limits;</li>
              <li>delegation structures;</li>
              <li>accounting policies;</li>
              <li>purchase controls;</li>
              <li>exception rules.</li>
            </ul>
            <p>LUCA helps enforce customer policies rather than replacing them.</p>

            <h2>5. AI and Accounting Decisions</h2>
            <p>LUCA may recommend accounting treatments based on available information. However:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>recommendations are traceable;</li>
              <li>actions are recorded;</li>
              <li>changes are auditable;</li>
              <li>approval controls apply.</li>
            </ul>
            <p>LUCA does not remove customer responsibility for financial reporting or statutory compliance.</p>

            <h2>6. Customer Data and AI Training</h2>
            <p>Customer trust is fundamental to LUCA.</p>
            <p>Customer financial data:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>is not sold;</li>
              <li>is not used for advertising;</li>
              <li>is not used to train publicly available artificial intelligence models.</li>
            </ul>
            <p>Customer data is processed only for providing and improving the LUCA service.</p>

            <h2>7. Transparency and Auditability</h2>
            <p>LUCA is designed to support finance governance.</p>
            <p>The platform maintains records of key activities including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>user actions;</li>
              <li>approvals;</li>
              <li>workflow decisions;</li>
              <li>document processing history.</li>
            </ul>
            <p>This allows finance teams to understand how outputs were created.</p>

            <h2>8. Accuracy and Limitations</h2>
            <p>Artificial intelligence can improve efficiency but may occasionally produce incomplete or incorrect recommendations.</p>
            <p>LUCA therefore combines:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>AI automation;</li>
              <li>customer rules;</li>
              <li>approval workflows;</li>
              <li>finance professional oversight.</li>
            </ul>

            <h2>9. Responsible Development</h2>
            <p>Rhomu develops LUCA using responsible AI principles including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>security by design;</li>
              <li>privacy by design;</li>
              <li>controlled deployment;</li>
              <li>continuous improvement;</li>
              <li>customer feedback.</li>
            </ul>

            <h2>10. Our AI Commitment</h2>
            <p>LUCA exists to make finance teams more effective by combining automation with strong financial control.</p>
            <p>Our goal is not simply faster accounting.</p>
            <p>Our goal is better-controlled accounting.</p>

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