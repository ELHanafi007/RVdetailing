"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-rv.jpg"
          alt="Luxury RV Detailing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-slate-200 text-sm font-medium tracking-wide">
              5-STAR SERVICE IN ORLANDO
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Protect Your <span className="text-blue-500">Luxury</span> <br /> 
            Investment Anywhere.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
            Professional mobile detailing that restores your RV to showroom condition. 
            No hassle. We bring the elite restoration to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/20">
              Get an Instant Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-full font-bold text-lg transition-all">
              View Our Results
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-slate-200">
              <ShieldCheck className="text-blue-500" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <MapPin className="text-blue-500" />
              <span className="text-sm font-medium">We Come To You</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <Star className="text-blue-500" />
              <span className="text-sm font-medium">Premium Products</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
