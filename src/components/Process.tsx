"use client";

import { motion } from "framer-motion";
import { Search, Droplets, RotateCw, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Inspect",
    description: "We evaluate surface condition, oxidation levels, and roof integrity.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Wash",
    description: "Deep decontamination to remove road salt, bird droppings, and grime.",
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Restore",
    description: "Machine buffing and polishing to remove oxidation and restore shine.",
    icon: <RotateCw className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Protect",
    description: "Application of premium UV sealants or long-term ceramic coatings.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Our Method</h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Restoration Journey
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-900/50 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                    0{index + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm max-w-[200px] mx-auto">
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
