"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TraditionalResults() {
  return (
    <section className="py-24 bg-background px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-apple-gray mb-6">
               Traditional Proof
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-foreground tracking-tighter italic">
              ROOF <span className="text-apple-gray not-italic uppercase text-2xl md:text-4xl tracking-[0.2em] font-sans ml-2">Restoration.</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border border-foreground/10 bg-slate-900/20"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/rvs/roof_transformation.jpeg"
              alt="RV Roof Before and After"
              fill
              className="object-cover scale-[0.85] rounded-[2rem]"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          
          {/* Subtle Label Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 md:gap-12">
             <div className="px-6 py-2 glass-apple rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                Untreated
             </div>
             <div className="px-6 py-2 glass-apple bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                Restored
             </div>
          </div>
        </motion.div>
        
        <div className="mt-12 text-center">
           <p className="text-apple-gray font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              For those who appreciate the clarity of a direct comparison. Our specialized roof treatments eliminate extreme oxidation and provide a durable, UV-resistant shield.
           </p>
        </div>
      </div>
    </section>
  );
}
