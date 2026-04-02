"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Exterior Excellence",
    subtitle: "Aerospace-grade decontamination.",
    description: "We use laboratory-tested solutions to remove contaminants at a molecular level, restoring your finish to its original factory depth.",
    image: "/rvs/rv2.jpeg",
  },
  {
    title: "Interior Sanctuaries",
    subtitle: "Steam-purified artisan care.",
    description: "Every surface is meticulously purified. We condition fine leathers and protect exotic woods with bespoke preservation oils.",
    image: "/rvs/rv3.jpeg",
  },
  {
    title: "The Correction",
    subtitle: "Light restoration reimagined.",
    description: "Our multi-stage machine correction eliminates oxidation and micro-swirls, revealing a mirror-like surface hidden for years.",
    image: "/rvs/rv4.jpeg",
  },
];

function ServiceItem({ service, index }: { service: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="sticky top-[15vh] mb-[20vh] h-[70vh] w-full flex flex-col items-center justify-center rounded-[3rem] overflow-hidden bg-gray-900 border border-white/5 shadow-2xl"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 px-12 md:px-24 text-center max-w-4xl">
        <span className="inline-block px-4 py-1.5 glass-apple rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-8">
           0{index + 1} &mdash; Specialist Craft
        </span>
        <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8">
          {service.title}
        </h3>
        <p className="text-xl md:text-2xl text-apple-gray font-medium leading-relaxed max-w-2xl mx-auto">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 bg-background px-6 relative">
      <div className="container mx-auto">
        <div className="mb-48 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter"
          >
            OUR <span className="text-apple-gray">CAPABILITIES.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
