"use client";

import { motion } from "framer-motion";
import { Sparkles, Paintbrush, Droplets, Shield } from "lucide-react";

const services = [
  {
    title: "Exterior Detailing",
    description: "Deep decontamination wash, tire dressing, and high-gloss wax sealant for a radiant finish.",
    icon: <Sparkles className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Interior Detailing",
    description: "Steam cleaning, leather conditioning, and deep vacuuming to make your living space feel brand new.",
    icon: <Paintbrush className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Oxidation Removal",
    description: "Specialized restoration process to remove chalky surface and restore deep color and shine.",
    icon: <Droplets className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Ceramic Coating",
    description: "Ultimate long-term protection against UV rays, acid rain, and road grime with elite ceramic tech.",
    icon: <Shield className="w-10 h-10 text-blue-600" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Premium Restoration Services
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We use only professional-grade products and techniques to ensure your RV remains in pristine condition, no matter its current state.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-600/5 transition-all group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
