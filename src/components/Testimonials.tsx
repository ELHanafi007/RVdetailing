"use client";

import { motion } from "framer-motion";
import { Star, Quote, Award } from "lucide-react";

const testimonials = [
  {
    name: "James Anderson",
    role: "Winnebago Owner",
    text: "The restoration on my vessel was truly exceptional. After three years of Florida sun, the surface was heavily oxidized. Today, it reflects like a mirror.",
    rating: "5.0",
  },
  {
    name: "Sarah Jenkins",
    role: "Airstream Enthusiast",
    text: "Meticulous, punctual, and highly skilled. They understand the nuances of high-value RVs. I cannot recommend their Bespoke service enough.",
    rating: "5.0",
  },
  {
    name: "Michael Chen",
    role: "Full-time RVer",
    text: "The convenience of mobile service combined with showroom-grade results is unparalleled. The ceramic integration is a total game-changer.",
    rating: "5.0",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-black overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-apple-gray mb-8">
               Verified Experiences
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter italic font-serif">
              PATRON <span className="text-apple-gray not-italic uppercase text-3xl md:text-4xl tracking-[0.3em] block md:inline font-sans">STATEMENTS.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`p-5 md:p-12 rounded-[2rem] md:rounded-[3rem] glass-apple border border-white/5 flex flex-col h-full hover:border-white/20 transition-all duration-500 group relative ${index === 2 ? 'col-span-2 md:col-span-1' : 'col-span-1'}`}
            >
              <Quote className="absolute top-4 right-4 md:top-10 md:right-10 w-6 h-6 md:w-12 md:h-12 text-white/5 group-hover:text-white/10 transition-colors" />
              
              <div className="flex items-center gap-1 md:gap-2 mb-4 md:mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={8} className="text-white fill-white md:size-[12px]" />
                  ))}
                </div>
                <span className="text-[7px] md:text-[10px] font-black text-white ml-1 md:ml-2 tracking-widest">{testimonial.rating} RATING</span>
              </div>

              <p className="text-white mb-6 md:mb-12 italic text-sm md:text-2xl leading-relaxed flex-grow font-serif line-clamp-4 md:line-clamp-none">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 md:gap-5 pt-4 md:pt-8 border-t border-white/5">
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-xs md:text-xl italic font-serif shadow-2xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-white tracking-tight uppercase text-[8px] md:text-sm">{testimonial.name}</h4>
                  <p className="text-[6px] md:text-[10px] font-bold text-apple-gray uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full">
              <Award className="w-5 h-5 text-white" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Ocala's #1 Rated Luxury Detailing Specialist</span>
           </div>
        </div>
      </div>
    </section>
  );
}
