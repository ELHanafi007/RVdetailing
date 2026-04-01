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

  return (
    <section id="estimator" className="py-32 bg-black px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Side: Controls */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 md:mb-8 italic leading-none font-serif">
                  PRECISION <br /> <span className="text-apple-gray font-normal not-italic uppercase text-xl md:text-3xl tracking-[0.3em] font-sans">Estimator.</span>
                </h2>
                <p className="text-apple-gray text-base md:text-lg mb-8 md:mb-12 max-w-md">
                  Tailor your investment based on your vessel's dimensions and desired level of craftsmanship.
                </p>

                {/* Length Slider */}
                <div className="mb-10 md:mb-16">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Vehicle Length</span>
                    <span className="text-3xl md:text-4xl font-black text-white italic">{length} <span className="text-xs md:text-sm not-italic font-bold text-apple-gray">FT</span></span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="50" 
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between mt-3 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                    <span>15 FT</span>
                    <span>50 FT</span>
                  </div>
                </div>

                {/* Package Selection */}
                <div className="space-y-3">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2 block">Select Craftsmanship Level</span>
                  <div className="grid grid-cols-1 gap-3">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.name}
                        onClick={() => setSelectedPkg(pkg)}
                        className={`group relative p-4 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-500 text-left ${
                          selectedPkg.name === pkg.name 
                          ? "bg-white border-white text-black" 
                          : "bg-transparent border-white/10 text-white hover:border-white/30"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg md:text-xl font-black tracking-tight">{pkg.name}</h4>
                            <p className={`text-[10px] md:text-xs font-bold ${selectedPkg.name === pkg.name ? "text-black/60" : "text-apple-gray"}`}>{pkg.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xl md:text-2xl font-black italic">${pkg.price}</span>
                            <span className="text-[9px] font-bold block opacity-40 uppercase">/ FT</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Visual Display */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-gray-900 to-black p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 blur-[80px] md:blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 text-center">
                  <Calculator className="w-8 md:w-12 h-8 md:h-12 text-white/20 mx-auto mb-6 md:mb-8" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-apple-gray mb-3 md:mb-4 block">Estimated Investment</span>
                  
                  <div className="flex items-center justify-center gap-1 md:gap-2 mb-6 md:mb-8">
                    <span className="text-2xl md:text-4xl font-light text-white/40 mt-2 md:mt-4">$</span>
                    <motion.span 
                      key={estimate}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-6xl md:text-9xl font-black text-white tracking-tighter italic font-serif"
                    >
                      {estimate}
                    </motion.span>
                  </div>

                  <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                    <div className="flex items-center gap-2 md:gap-3 justify-center text-xs md:text-sm font-bold text-apple-gray">
                      <CheckCircle2 size={14} className="text-white" />
                      <span>{selectedPkg.name} restoration included</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 justify-center text-xs md:text-sm font-bold text-apple-gray">
                      <CheckCircle2 size={14} className="text-white" />
                      <span>Full mobile service to your location</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      // We can use a custom event or a simple alert to tell them to finish the form
                      const contactForm = document.getElementById('contact');
                      if (contactForm) {
                        const messageInput = contactForm.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                        if (messageInput) {
                          messageInput.value = `I am interested in the ${selectedPkg.name} package for my ${length}ft vehicle. Estimated investment: $${estimate}.`;
                        }
                      }
                    }}
                    className="w-full bg-white text-black py-4 md:py-6 rounded-full font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-3 md:gap-4 group"
                  >
                    Lock in this Quote
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="mt-6 md:mt-8 text-[8px] md:text-[10px] font-bold text-white/20 uppercase tracking-widest">
                    *Final price may vary based on vehicle condition
                  </p>
                </div>

                {/* Glass sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
