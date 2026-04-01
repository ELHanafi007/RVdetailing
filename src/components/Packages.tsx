"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Foundation",
    price: "$7",
    description: "Essential care for modern enthusiasts.",
    features: ["Bespoke Hand Wash", "Polymer Protection", "Wheel & Tire Art"],
  },
  {
    name: "Professional",
    price: "$10",
    description: "The standard for excellence.",
    features: ["Foundation+", "Full UV Protection", "Interior Purification"],
    popular: true,
  },
  {
    name: "Bespoke",
    price: "$15",
    description: "The pinnacle of our craft.",
    features: ["Professional+", "Full Correction", "Ceramic Integration"],
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-48 bg-black px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
            >
              INVESTMENT <br /> <span className="text-apple-gray">GUIDE.</span>
            </motion.h2>
          </div>
          <div className="max-w-xs pb-4">
             <p className="text-apple-gray font-medium text-lg leading-relaxed border-l border-white/20 pl-6">
                Transparent pricing per linear foot. No hidden fees. Only perfection.
             </p>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`min-w-[85vw] md:min-w-0 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-500 flex flex-col h-full snap-center ${
                pkg.popular ? "bg-white text-black md:scale-[1.02] z-10 shadow-2xl" : "bg-gray-900 text-white border border-white/5"
              }`}
            >
              <div className="mb-8 md:mb-12">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2 md:mb-4">{pkg.name}</h3>
                <p className={`${pkg.popular ? "text-gray-600" : "text-apple-gray"} font-medium text-sm md:text-base`}>{pkg.description}</p>
              </div>

              <div className="mb-8 md:mb-16">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter">{pkg.price}</span>
                  <span className={`text-xs md:text-sm font-bold uppercase tracking-widest ${pkg.popular ? "text-gray-500" : "text-apple-gray"}`}>/ft</span>
                </div>
              </div>

              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-16 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 font-bold text-sm md:text-sm tracking-tight">
                    <Check size={16} className={pkg.popular ? "text-black" : "text-white"} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 md:py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all ${
                  pkg.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Choose {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
