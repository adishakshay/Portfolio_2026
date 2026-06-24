"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Award } from "lucide-react";

export default function JourneyPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[120px] pb-24 bg-background select-none min-h-screen subtle-grid-bg"
    >
      <section className="py-[120px] px-8 md:px-20 lg:px-24 max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 border-b border-accent/10 pb-10">
          <span className="text-[10px] font-sans font-semibold tracking-[3px] text-accent uppercase block mb-3">
            04 - CHRONOLOGY
          </span>
          <h1 className="text-[clamp(44px,6vw,64px)] font-serif text-foreground font-medium leading-tight">
            Professional <span className="italic font-normal">Journey</span>
          </h1>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Work History */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-12 border-b border-accent/10 pb-5">
              <Briefcase className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-serif text-foreground tracking-wide font-medium">
                Experience Timeline
              </h2>
            </div>

            <div className="space-y-16 relative pl-8 border-l border-accent/20">
              {portfolioData.experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative group pl-6"
                >
                  {/* Timeline bullet with ring animation on hover */}
                  <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-background border-2 border-foreground/30 rounded-full group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                  </span>
                  
                  <span className="text-[10px] font-sans tracking-widest text-accent uppercase block mb-2 font-bold">
                    {exp.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-foreground font-medium uppercase tracking-wide group-hover:text-accent transition-colors duration-300 mb-2">
                    {exp.role}
                  </h3>
                  <div className="text-[12px] font-sans text-foreground-muted uppercase tracking-wider font-semibold mb-4">
                    {exp.company} &middot; {exp.location}
                  </div>
                  <p className="text-[16px] md:text-[18px] font-sans font-light text-foreground-muted/95 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Event Outcomes */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-12 border-b border-accent/10 pb-5">
              <Award className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-serif text-foreground tracking-wide font-medium">
                Milestone Logs
              </h2>
            </div>

            <div className="space-y-6">
              {portfolioData.achievements.map((ach, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="luxury-card luxury-card-hover p-8 relative group"
                >
                  <span className="text-[10px] font-sans tracking-widest text-accent uppercase block mb-3 font-bold">
                    {ach.date} &middot; {ach.organization}
                  </span>
                  <h3 className="text-lg md:text-xl font-serif text-foreground font-medium uppercase tracking-wide mb-2 group-hover:text-accent transition-colors duration-300">
                    {ach.title}
                  </h3>
                  <p className="text-[15px] font-sans font-light text-foreground-muted leading-relaxed">
                    {ach.description}
                  </p>
                  
                  {/* Subtle top right accent overlay */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/10 group-hover:border-accent/40 transition-colors duration-300 rounded-tr-[24px]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
