"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
        >
          <a
            href="tel:+19787647677"
            className="flex items-center justify-center gap-3 w-full py-5 bg-black/80 backdrop-blur-xl text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs border border-white/10 shadow-2xl active:scale-95 transition-all relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Phone size={16} className="text-apple-gray" /> 
            Contact Restoration Specialist
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
