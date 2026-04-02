"use client";

import { useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { Scan, Zap } from "lucide-react";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(false);

  // Motion values for the cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappy spring config for "zero delay" feel
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Create a motion template for the clipPath to avoid string-parsing lag
  const clipPath = useMotionTemplate`circle(${isInside ? (typeof window !== 'undefined' && window.innerWidth < 768 ? '120px' : '200px') : '0px'} at ${smoothX}px ${smoothY}px)`;

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    // Set motion values directly (avoids standard React state re-renders)
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  };

  return (
    <section className="py-32 bg-background px-6 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-apple-gray mb-8">
               Precision Diagnostics
            </span>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tighter italic font-serif">
              THE <span className="text-apple-gray not-italic uppercase text-4xl md:text-6xl tracking-[0.3em] block md:inline font-sans">X-Ray.</span>
            </h2>
          </motion.div>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseEnter={() => setIsInside(true)}
          onMouseLeave={() => setIsInside(false)}
          className="relative max-w-6xl mx-auto aspect-[4/5] md:aspect-[16/9] rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-foreground/5 border border-foreground/5 shadow-2xl cursor-none group transition-colors duration-500 will-change-transform"
        >
          {/* BASE LAYER: THE "BEFORE" (Oxidized) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/rvs/before_xray.jpeg"
              alt="Oxidized Before"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
            
            <div className="absolute top-6 md:top-12 left-6 md:left-12 flex items-center gap-3 md:gap-4">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md">
                 <Scan className="text-apple-gray w-5 h-5 md:w-6 md:h-6" />
               </div>
               <div>
                 <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/40">Diagnostic State</p>
                 <p className="text-lg md:text-xl font-black text-white tracking-tighter uppercase">Surface Oxidation</p>
               </div>
            </div>
          </div>

          {/* REVEAL LAYER: THE "AFTER" (Pristine) */}
          <motion.div 
            style={{ 
              clipPath,
              WebkitClipPath: clipPath 
            }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <Image
              src="/rvs/after_xray.png"
              alt="Pristine After"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
            
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          </motion.div>

          {/* SCANNER UI: THE LENS */}
          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
              opacity: isInside ? 1 : 0,
              scale: isInside ? 1 : 0.5,
            }}
            className="absolute top-0 left-0 w-[240px] md:w-[400px] h-[240px] md:h-[400px] -ml-[120px] md:-ml-[200px] -mt-[120px] md:-mt-[200px] z-20 pointer-events-none"
          >
             {/* Main lens ring */}
             <div className="absolute inset-0 rounded-full border-2 border-foreground/30 shadow-[0_0_50px_rgba(var(--foreground-rgb),0.2)]" />
             
             {/* Crosshair corners */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 md:h-6 bg-foreground" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-4 md:h-6 bg-foreground" />
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 md:h-6 h-0.5 md:w-6 bg-foreground" />
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 md:h-6 h-0.5 md:w-6 bg-foreground" />
             
             {/* Scanning line animation */}
             <motion.div 
               animate={{ top: ['0%', '100%', '0%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 right-0 h-[1px] bg-foreground/50 shadow-[0_0_15px_rgba(var(--foreground-rgb),0.8)] z-30"
             />

             {/* Dynamic labels that follow the lens */}
             <div className="absolute top-4 left-1/2 md:left-full -translate-x-1/2 md:translate-x-0 md:ml-8 whitespace-nowrap">
                <div className="flex items-center gap-2 md:gap-3 bg-background/10 backdrop-blur-xl border border-foreground/20 p-3 md:p-4 rounded-xl md:rounded-2xl">
                   <Zap className="text-foreground w-3 h-3 md:w-4 md:h-4 animate-pulse" />
                   <div>
                      <p className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-foreground/50">Restoration Depth</p>
                      <p className="text-[10px] md:text-sm font-black text-foreground tracking-tight uppercase">100% Molecular Purity</p>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Liquid Glass Border Overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 ring-1 ring-inset ring-foreground/10 rounded-[3rem] md:rounded-[4rem]" />
        </div>
        
        <div className="mt-16 text-center opacity-30">
           <p className="text-[10px] font-black uppercase tracking-[0.8em] text-foreground">
              Slide your cursor across the vessel to witness the molecular restoration.
           </p>
        </div>
      </div>
    </section>
  );
}
