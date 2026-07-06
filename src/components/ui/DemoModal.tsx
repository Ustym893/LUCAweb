import { X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* Click outside to close (optional but standard UX) */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      
      {/* Modal Dialog */}
      <div 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 animate-in zoom-in-95 duration-200"
      >
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h2 id="modal-title" className="text-2xl font-bold text-slate-900 mb-2">
          Request a Demo
        </h2>
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          See how LUCA can streamline your finance operations. We will be in touch shortly.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-1.5">
              Work Email
            </label>
            <input 
              type="email" 
              id="email"
              defaultValue="contactus@rhomultd.com" 
              className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-2 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover transition-colors"
          >
            Confirm Request
          </button>
        </form>
      </div>

    </div>
  );
} 