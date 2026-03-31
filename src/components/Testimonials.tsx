"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Anderson",
    role: "Winnebago Owner",
    text: "The restoration on my RV was unbelievable. It had been sitting in the sun for 3 years and looked chalky. Now it looks better than when I bought it.",
    stars: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Airstream Enthusiast",
    text: "Professional, on-time, and meticulous. They really know their way around an RV. Highly recommend the Protection Plus package.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "Full-time RVer",
    text: "Being mobile is a game-changer. They came right to my storage site and did a full ceramic coating. The water beads off perfectly now.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Reviews</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Loved By RV Owners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 italic text-lg leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
