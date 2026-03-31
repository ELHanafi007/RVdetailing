"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const packages = [
  {
    name: "Basic Wash",
    price: "$10",
    unit: "per foot",
    description: "Ideal for a quick refresh between trips.",
    features: [
      "Deep decontamination hand wash",
      "Bug & bird dropping removal",
      "Window cleaning (exterior)",
      "Wheel & tire dressing",
      "Light roof rinse",
    ],
    cta: "Select Basic",
    popular: false,
  },
  {
    name: "Protection Plus",
    price: "$20",
    unit: "per foot",
    description: "The gold standard for maintaining value and shine.",
    features: [
      "Everything in Basic Wash",
      "UV-Resistant synthetic wax sealant",
      "Full roof cleaning & inspection",
      "Trim & plastics UV protection",
      "Wheel polishing",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Elite Restoration",
    price: "$35",
    unit: "per foot",
    description: "The ultimate transformation for oxidized RVs.",
    features: [
      "Everything in Protection Plus",
      "Machine compounding/buffing",
      "Full oxidation removal",
      "Premium paint correction",
      "1-Year ceramic coating",
    ],
    cta: "Elite Package",
    popular: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Pricing Plans</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Tailored For Your Needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-3xl border ${
                pkg.popular
                  ? "bg-slate-900 text-white border-blue-600 shadow-2xl shadow-blue-600/20 scale-105 z-10"
                  : "bg-white text-slate-900 border-slate-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={pkg.popular ? "text-slate-400" : "text-slate-500"}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">{pkg.price}</span>
                  <span className={`ml-2 text-sm ${pkg.popular ? "text-slate-400" : "text-slate-500"}`}>
                    {pkg.unit}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  pkg.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
