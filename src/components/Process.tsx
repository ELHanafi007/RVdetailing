"use client";

import { motion } from "framer-motion";
import { Search, Droplets, RotateCw, ShieldCheck, Microscope, Waves, Zap, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Surface Analysis",
    description: "Multi-point diagnostic of oxidation levels and clear-coat integrity.",
    icon: <Microscope className="w-8 h-8 text-white" />,
  },
  {
    title: "Decontamination",
    description: "Molecular-level purification removing road salt, industrial fallout, and minerals.",
    icon: <Waves className="w-8 h-8 text-white" />,
  },
  {
    title: "Optical Correction",
    description: "Dual-action machine restoration to eliminate micro-scratches and swirl marks.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "Shield Integration",
    description: "Application of titanium-grade UV sealants for long-term molecular protection.",
    icon: <Sparkles className="w-8 h-8 text-white" />,
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-black text-white overflow-hidden relative">
      {/* Carbon Fiber Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-apple-gray mb-8">
               The Methodology
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter italic font-serif">
              SCIENTIFIC <span className="text-apple-gray not-italic uppercase text-3xl md:text-4xl tracking-[0.3em] block md:inline font-sans">RESTORATION.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector Line (Animated) */}
          <div className="absolute top-[40px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-10">
                  {/* Sonar Pulse Effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                  />
                  
                  <div className="w-24 h-24 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative z-10 group-hover:bg-white/10 transition-colors duration-500 backdrop-blur-sm shadow-2xl">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-[10px] font-black italic border-4 border-black">
                      0{index + 1}
                    </div>
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{step.title}</h3>
                <p className="text-apple-gray leading-relaxed text-sm max-w-[220px] mx-auto font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
