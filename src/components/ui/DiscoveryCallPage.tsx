import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface DiscoveryCallPageProps {
  onBack: () => void;
}

export function DiscoveryCallPage({ onBack }: DiscoveryCallPageProps) {
  // 1. All state variables are declared inside the component
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "", 
    note: ""
  });

  // 2. Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Handle submit (It MUST be inside the component to access formData and setIsSubmitted)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://luca-ca-api-dev.orangeglacier-c37c3178.westeurope.azurecontainerapps.io/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setIsSubmitted(true);
      } else {
        console.error("Failed to send email");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. The UI return block
  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      <header className="h-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity text-left"
          aria-label="Return to homepage"
        >
          <img src="/LucaLogo.png" alt="LUCA" className="h-7 w-auto object-contain" />
          <span className="text-slate-900 text-[15px] font-bold tracking-[0.18em]">LUCA</span>
        </button>
        <button 
          onClick={onBack}
          className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft size={16} />
          Back to site
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="bg-white w-full max-w-lg rounded-2xl border border-slate-200 shadow-[var(--shadow-card)] p-8 md:p-10">
          
          {isSubmitted ? (
            <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 bg-success-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-success-dark" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Request Sent!</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Thank you for your interest in LUCA. Our team will review your details and reach out shortly to schedule your discovery call.
              </p>
              <button 
                onClick={onBack}
                className="h-11 px-8 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto"
              >
                Return to Homepage
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in duration-300">
              <div className="mb-8 text-center">
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                  Get In Touch
                </h1>
                <p className="text-sm text-slate-500">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Name <span className="text-error">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2.5 text-slate-900 bg-surface-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Work Email <span className="text-error">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2.5 text-slate-900 bg-surface-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-slate-900 bg-surface-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="note" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Additional Information
                  </label>
                  <textarea 
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 text-slate-900 bg-surface-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-y"
                    placeholder="Tell us a bit about your current finance setup..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-12 mt-2 rounded-lg text-white text-[15px] font-bold transition-colors ${
                    isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-primary hover:bg-primary-hover"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}