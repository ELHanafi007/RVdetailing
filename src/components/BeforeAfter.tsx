"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence, useTransform } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export function BeforeAfter() {
  const [isDragging, setIsDragging] = useState(false);
  
  // Motion value for the drag position
  const dragX = useMotionValue(0);
  
  // Spring for smooth return to center
  const springX = useSpring(dragX, {
    stiffness: 400,
    damping: 35,
  });

  // Rotation and opacity based on drag distance
  const rotate = useTransform(dragX, [-300, 0, 300], [-5, 0, 5]);
  const opacity = useTransform(dragX, [-500, 0, 500], [0.5, 1, 0.5]);

  const handleDragStart = () => setIsDragging(true);
  
  const handleDragEnd = () => {
    setIsDragging(false);
    dragX.set(0); // Snap back to center
  };

  return (
    <section className="py-32 bg-black px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
          >
            THE <span className="text-apple-gray">TRANSFORMATION.</span>
          </motion.h2>
          <p className="mt-8 text-apple-gray font-medium text-lg uppercase tracking-widest max-w-xl mx-auto">
            Swipe the card to reveal the hidden showroom shine.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9] perspective-[1500px]">
          
          {/* AFTER CARD (The Hidden Reveal) */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full rounded-[3rem] overflow-hidden bg-gray-900 border border-white/10 shadow-2xl relative">
              <Image
                src="/before-after/after.png"
                alt="After Detail"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12">
                <span className="px-6 py-2 glass-apple rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                  Revealed: Professional Finish
                </span>
                <h3 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter italic">PERFECTION.</h3>
              </div>
            </div>
          </div>

          {/* BEFORE CARD (The Top Card) */}
          <motion.div
            drag="x"
            dragConstraints={{ left: -1000, right: 1000 }}
            style={{ 
              x: springX,
              rotate,
              opacity,
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing touch-none"
          >
            <div className="w-full h-full rounded-[3rem] overflow-hidden bg-gray-800 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              <Image
                src="/before-after/before.png"
                alt="Before Detail"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover grayscale-[0.2]"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="absolute top-12 left-12">
                 <span className="px-4 py-1.5 bg-red-600/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    Initial State
                 </span>
              </div>

              <div className="absolute bottom-12 left-12 right-12 flex flex-col items-center md:items-start">
                <div className="px-8 py-3 glass-apple rounded-full flex items-center gap-4 border border-white/20">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Swipe to peek</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <MoveRight className="text-white w-4 h-4" />
                  </motion.div>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tighter opacity-80 italic">OXIDIZED.</h3>
              </div>

              {/* Liquid Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Interaction Feedback Hint */}
          <AnimatePresence>
            {!isDragging && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute -inset-8 border-2 border-dashed border-white/20 rounded-[4rem] pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-12 opacity-40">
           <div className="text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-2">Stage 01</p>
             <p className="text-sm font-medium text-apple-gray italic">Heavy Oxidation & Grime</p>
           </div>
           <div className="w-12 h-[1px] bg-white/20 hidden md:block" />
           <div className="text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-2">Stage 02</p>
             <p className="text-sm font-medium text-apple-gray italic">sunshineRVshine Restoration</p>
           </div>
        </div>
      </div>
    </section>
  );
}
