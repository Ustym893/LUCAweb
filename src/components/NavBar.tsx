import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DemoModal } from "./ui/DemoModal";

const NAV_LINKS = ["Features", "Solutions", "Security", "Pricing"];

interface CTAFooterProps {
  onBookCall: () => void;
}

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
  e.preventDefault();
  const sectionId = link.toLowerCase().replace(/\s+/g, '-');
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
};

export function Navbar({ onBookCall }: CTAFooterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* fixed, inset-x-0, top-0 keeps it sticking to the top */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        
        {/* Added 'relative' here to act as the anchor for the absolute nav */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <a 
            onClick={(e) => {
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: "smooth" }); 
            }}
            href="#" 
            className="flex items-center gap-2.5 shrink-0 cursor-pointer" 
            aria-label="LUCA Home"
          >
            <img src="/LucaLogo.png" alt="LUCA" className="h-7 w-auto object-contain" />
          </a>

          {/* Absolute positioning perfectly centers this relative to the screen */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, link)}
                className=" cursor-pointer text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://thankful-grass-09bb0f103.1.azurestaticapps.net/home"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Log In
            </a>
            <button 
              onClick={onBookCall}
              className="cursor-pointer px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
            >
              Request Demo
            </button>
          </div>

          <button
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors relative z-10 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden grid transition-all duration-300 ease-in-out  ${ 
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-slate-100 bg-white px-4 pt-4 pb-6 shadow-lg flex flex-col gap-4">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors px-2"
                    onClick={(e) => {
                      handleLinkClick(e, link); // Added smooth scrolling here too
                      setIsOpen(false);
                    }} 
                  >
                    {link}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 px-2">
               <a 
                  href="https://thankful-grass-09bb0f103.1.azurestaticapps.net/home"
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Log In
                </a>
                <button 
                  onClick={onBookCall}
                  className="w-full py-3 rounded-lg bg-slate-900 text-white text-base font-semibold hover:bg-slate-800 transition-colors"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mount Modal outside of normal flow */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}