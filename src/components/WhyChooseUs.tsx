"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Award, ShieldCheck, Sparkles, Gem, Target, Droplet } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Mobile Precision",
    description: "Our fully-equipped mobile units deliver showroom results to your doorstep in Ocala and Marion County.",
    icon: <Target className="w-6 h-6 text-white" />,
  },
  {
    title: "Molecular Restoration",
    description: "We don't just wash; we restore. Our specialized techniques eliminate years of oxidation and grime.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
  },
  {
    title: "Aerospace Protection",
    description: "Florida's sun is brutal. We provide titanium-grade UV sealants that preserve your finish for years.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    title: "Master Craftsmanship",
    description: "Certified specialists who treat every RV as a high-value asset, with surgical attention to detail.",
    icon: <Gem className="w-6 h-6 text-white" />,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 bg-background overflow-hidden relative transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--foreground-rgb),0.03),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-4 py-1.5 bg-foreground/5 border border-foreground/10 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-apple-gray mb-8">
              The Standard of Excellence
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-10 tracking-tighter italic font-serif leading-tight transition-colors">
              A LEGACY OF <br /> <span className="text-apple-gray not-italic uppercase text-3xl md:text-4xl tracking-[0.2em]">PERFECTION.</span>
            </h2>
            <p className="text-xl text-apple-gray mb-16 leading-relaxed max-w-xl font-medium">
              We understand that your RV is more than a vehicle; it's a mobile sanctuary. Our mission is to preserve that sanctuary with unmatched technical expertise.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-3 p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] glass-apple border border-foreground/5 hover:border-foreground/20 transition-all duration-500 group">
                  <div className="p-2 md:p-4 bg-foreground/5 w-fit rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <div className="scale-75 md:scale-100 invert dark:invert-0">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xs md:text-xl font-black text-foreground tracking-tight uppercase md:normal-case transition-colors">{benefit.title}</h3>
                  <p className="text-apple-gray text-[8px] md:text-sm leading-relaxed font-medium line-clamp-3 md:line-clamp-none">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border border-foreground/10 aspect-[4/5] md:aspect-auto md:h-[800px]">
              <Image
                src="/rvs/rv5.jpeg"
                alt="RV Detailing Pro"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Float Badge */}
            <div className="absolute -bottom-10 -right-10 bg-background p-8 rounded-[3rem] shadow-2xl z-20 hidden md:block group border border-foreground/5">
               <div className="flex items-center gap-6">
                  <div className="p-4 bg-foreground rounded-3xl group-hover:rotate-12 transition-transform duration-500">
                     <ShieldCheck className="text-background w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-apple-gray uppercase tracking-widest mb-1">Authentic Care</p>
                    <p className="text-2xl font-black text-foreground tracking-tighter transition-colors">100% SECURE</p>
                  </div>
               </div>
            </div>

            {/* Light Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent pointer-events-none rounded-[4rem] z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
