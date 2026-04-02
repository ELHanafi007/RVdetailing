"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 250]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background Image */}
      <motion.div style={{ y: y1, scale }} className="absolute inset-0 z-0">
        <Image
          src="/rvs/rv1.jpeg"
          alt="Luxury RV Detailing"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/80" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 glass-apple rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-6 border-white/20">
              Premium Ocala Mobile Detailing
            </span>
          </motion.div>

          <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-black leading-[0.85] tracking-tight mb-12 text-white text-balance drop-shadow-2xl">
            PRECISION <br /> 
            <span className="text-apple-gray">DEFINED.</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="button-apple w-full md:w-auto text-lg py-5 px-12 text-center"
            >
              Get a Private Quote
            </motion.a>
            <motion.a 
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="button-ghost w-full md:w-auto text-lg py-5 px-12 text-center"
            >
              Watch the Craft
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 z-20"
      >
        <ChevronDown size={32} className="text-apple-gray" />
      </motion.div>

      {/* Modern Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
