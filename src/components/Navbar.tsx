"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { 
    name: "Capability", 
    href: "#services",
    dropdown: [
      { name: "Exterior Excellence", href: "#services" },
      { name: "Interior Sanctuaries", href: "#services" },
      { name: "The Correction", href: "#services" },
    ]
  },
  { 
    name: "Investment", 
    href: "#packages",
    dropdown: [
      { name: "Foundation ($7/ft)", href: "#packages" },
      { name: "Professional ($10/ft)", href: "#packages" },
      { name: "Bespoke ($15/ft)", href: "#packages" },
    ]
  },
  { name: "Locations", href: "#area" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
      <div className="container mx-auto flex items-center justify-center">
        <motion.div
          animate={{ 
            width: scrolled ? "auto" : "100%",
            backgroundColor: scrolled ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)",
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center justify-between gap-8 px-8 py-4 rounded-full border backdrop-blur-[60px] transition-all duration-700 pointer-events-auto relative overflow-hidden shadow-2xl",
            "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.05] before:to-transparent before:pointer-events-none",
            scrolled && "border-white/20 shadow-black/50"
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter uppercase text-white">
              sunshine<span className="text-apple-gray">RVshine</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-black text-apple-gray hover:text-white transition-all duration-300 py-4"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={10} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-black/90 border border-white/10 backdrop-blur-xl rounded-3xl p-6 min-w-[200px] shadow-2xl">
                          <div className="flex flex-col space-y-4">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="text-[10px] uppercase tracking-[0.15em] font-bold text-apple-gray hover:text-white transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-gray-200 transition-all"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 bg-black/95 backdrop-blur-3xl z-40 md:hidden flex flex-col items-center justify-center p-12 space-y-12 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="text-center">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black tracking-tighter text-white hover:text-apple-gray transition-colors"
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <Link
              href="tel:+19787647677"
              className="button-apple w-full text-center py-6 text-xl"
            >
              Contact Specialist
            </Link>
            <button onClick={() => setIsOpen(false)} className="mt-8 text-apple-gray uppercase tracking-widest text-xs font-bold">Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
