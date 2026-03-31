"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Award, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Maximum Convenience",
    description: "We are 100% mobile. We come to your home, storage facility, or campsite in Orlando and surrounding areas.",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Premium Results",
    description: "We don't just wash; we restore. Our specialized techniques bring back that factory shine to even the most oxidized surfaces.",
    icon: <Award className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "UV Protection",
    description: "Florida's sun is brutal on RVs. We provide specialized UV sealants that prevent paint fading and cracking.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Experienced Pros",
    description: "Our team consists of certified detailers who specialize specifically in large-scale RV restoration and ceramic coatings.",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
              The Elite Choice for <br /> RV Owners
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We understand that your RV is more than just a vehicle; it's a significant investment and a home on wheels. That's why we treat every detail with surgical precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="p-3 bg-blue-50 w-fit rounded-xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1200"
                alt="RV Detailing Pro"
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-0" />
            
            <div className="absolute bottom-10 right-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-slate-100">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                     <ShieldCheck className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">100% Satisfaction</p>
                    <p className="text-xs text-slate-500">Guaranteed Results</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
