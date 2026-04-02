"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const cities = [
  "Ocala (Core)", "Silver Springs", "Belleview", "Dunnellon", "Marion Oaks",
  "Summerfield", "Anthony", "Citra", "Reddick", "Fort McCoy", 
  "The Villages", "Williston", "Morriston", "Lake Weir", "Ocklawaha",
  "Wildwood", "Inverness", "Crystal River"
];

export function ServiceArea() {
  return (
    <section id="area" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-blue-100 flex items-center justify-center border border-slate-200"
          >
             <div className="absolute inset-0 bg-[url('/rvs/rv6.jpeg')] bg-cover opacity-20 grayscale" />
             <div className="relative z-10 flex flex-col items-center text-center p-12">
                <Navigation className="w-16 h-16 text-blue-600 mb-6 animate-pulse" />
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Mobile Service Perimeter</h3>
                <p className="text-slate-600 max-w-sm">We provide full-service mobile detailing within Ocala and surrounding Marion County areas.</p>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Service Locations</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
              Where We Come To You
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Based in Ocala, our mobile units travel to homes, storage facilities, and RV parks across Marion County and beyond. Don't see your city? Call us and we'll check our availability.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-default">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{city}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-white border border-slate-200 rounded-3xl flex items-center gap-6 shadow-sm">
                <div className="p-4 bg-blue-50 rounded-2xl">
                   <MapPin className="text-blue-600 w-8 h-8" />
                </div>
                <div>
                   <p className="text-slate-900 font-bold text-xl">Based in Ocala, FL</p>
                   <p className="text-slate-500">Serving Marion County & Surrounding Areas</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
