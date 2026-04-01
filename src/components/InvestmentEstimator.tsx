"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronRight, CheckCircle2 } from "lucide-react";

const packages = [
  { name: "Foundation", price: 7, description: "Essential Restoration" },
  { name: "Professional", price: 10, description: "Advanced Protection" },
  { name: "Bespoke", price: 15, description: "The Ultimate Finish" },
];

export function InvestmentEstimator() {
  const [length, setLength] = useState(30);
  const [selectedPkg, setSelectedPkg] = useState(packages[1]);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    setEstimate(length * selectedPkg.price);
  }, [length, selectedPkg]);

  // Listen for external package selection (from Packages component)
  useEffect(() => {
    const handleExternalSelect = (e: any) => {
      const pkgName = e.detail.packageName;
      const pkg = packages.find(p => p.name === pkgName);
      if (pkg) {
        setSelectedPkg(pkg);
        document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('selectPackage', handleExternalSelect);
    return () => window.removeEventListener('selectPackage', handleExternalSelect);
  }, []);

  return (
    <section id="estimator" className="py-32 bg-black px-6 scroll-mt-24">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-16 items-center">
            
            {/* Left Side: Controls */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-1 gap-4"
              >
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="text-2xl md:text-7xl font-black text-white tracking-tighter mb-2 md:mb-8 italic leading-none font-serif">
                    PRECISION <br className="hidden md:block" /> <span className="text-apple-gray font-normal not-italic uppercase text-xs md:text-3xl tracking-[0.2em] font-sans">Estimator.</span>
                  </h2>
                </div>

                {/* Length Slider */}
                <div className="col-span-1 lg:col-span-1 bg-white/5 p-3 rounded-2xl border border-white/5">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-white/40">Length</span>
                    <span className="text-lg md:text-4xl font-black text-white italic">{length}<span className="text-[8px] not-italic font-bold text-apple-gray ml-0.5">FT</span></span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="50" 
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                  />
                </div>

                {/* Package Selection */}
                <div className="col-span-1 lg:col-span-1 space-y-1.5">
                  <div className="grid grid-cols-1 gap-1.5">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.name}
                        onClick={() => setSelectedPkg(pkg)}
                        className={`group relative p-2 md:p-6 rounded-xl md:rounded-3xl border transition-all duration-500 text-left ${
                          selectedPkg.name === pkg.name 
                          ? "bg-white border-white text-black" 
                          : "bg-white/5 border-white/5 text-white"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-[8px] md:text-xl font-black tracking-tight uppercase">{pkg.name}</h4>
                          <span className="text-[8px] md:text-2xl font-black italic">${pkg.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Visual Display */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-gray-900 to-black p-5 md:p-20 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden"
              >
                <div className="relative z-10 text-center">
                  <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.3em] text-apple-gray mb-2 md:mb-4 block">Investment Total</span>
                  
                  <div className="flex items-center justify-center gap-0.5 md:gap-2 mb-4 md:mb-8">
                    <span className="text-sm md:text-4xl font-light text-white/40">$</span>
                    <motion.span 
                      key={estimate}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-9xl font-black text-white tracking-tighter italic font-serif"
                    >
                      {estimate}
                    </motion.span>
                  </div>
<button 
  onClick={() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      // Pre-fill the specific RV Length input
      const lengthInput = contactForm.querySelector('input[name="length"]') as HTMLInputElement;
      if (lengthInput) {
        lengthInput.value = length.toString();
      }

      // Pre-fill the service dropdown
      const serviceSelect = contactForm.querySelector('select[name="service"]') as HTMLSelectElement;
      if (serviceSelect) {
        // Try to match the option text with the package name
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].text.includes(selectedPkg.name)) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Pre-fill the message as backup
      const messageInput = contactForm.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      if (messageInput) {
        messageInput.value = `I am interested in the ${selectedPkg.name} package for my ${length}ft vehicle. Estimated investment: $${estimate}.`;
      }
    }
  }}
  className="w-full bg-white text-black py-3 md:py-6 rounded-full font-black uppercase tracking-widest text-[8px] md:text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
>
  Lock Quote
  <ChevronRight size={10} />
</button>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
