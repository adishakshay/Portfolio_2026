"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[120px] pb-24 bg-background select-none min-h-screen subtle-grid-bg"
    >
      {/* 1. Main Header */}
      <section className="py-[120px] px-8 md:px-20 lg:px-24 max-w-[1400px] mx-auto w-full">
        <div className="max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-sans font-semibold tracking-[3px] text-accent uppercase block mb-4"
          >
            02 - BIOGRAPHY
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(44px,6vw,64px)] font-serif text-foreground font-medium leading-[1.1] mb-8"
          >
            Decoding the <br />
            <span className="italic font-normal">Data Architect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] text-foreground-muted font-sans font-light leading-relaxed max-w-4xl"
          >
            Final-year B.Tech Artificial Intelligence and Data Science student at Sri Krishna College of Technology with experience in building intelligent human-centered systems. Specialize in Full Stack Development, Generative AI, Machine Learning, Cloud Deployment, and Data Analytics. Contributor in 10+ hackathons, 30+ tech events, and organizer of 5+ impactful programs.
          </motion.p>
        </div>
      </section>

      {/* 2. Education Timeline */}
      <section className="py-[120px] px-8 md:px-20 lg:px-24 max-w-[1400px] mx-auto w-full border-t border-accent/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 border-b border-accent/10 pb-6"
        >
          <GraduationCap className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-serif text-foreground tracking-wide font-medium">
            Academic Timeline
          </h2>
        </motion.div>

        <div className="space-y-12 relative pl-8 border-l border-accent/20 max-w-3xl">
          {portfolioData.education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative group pl-6"
            >
              {/* Timeline bullet with pulse on hover */}
              <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-background border-2 border-foreground/30 rounded-full group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
                <span className="w-2.5 h-2.5 bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
              </span>
              
              <span className="text-[10px] font-sans tracking-widest text-accent uppercase block mb-2 font-bold">
                {edu.period}
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-foreground font-medium uppercase tracking-wide group-hover:text-accent transition-colors duration-300 mb-2">
                {edu.degree}
              </h3>
              <div className="text-xs md:text-sm font-sans text-foreground-muted uppercase tracking-wider font-semibold">
                {edu.school} &middot; {edu.location}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Achievements Grid */}
      <section className="py-[120px] px-8 md:px-20 lg:px-24 max-w-[1400px] mx-auto w-full border-t border-accent/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 border-b border-accent/10 pb-6"
        >
          <Award className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-serif text-foreground tracking-wide font-medium">
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {portfolioData.achievements.map((ach, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="luxury-card luxury-card-hover p-8 relative group"
            >
              <span className="text-[10px] font-sans tracking-widest text-accent uppercase block mb-3 font-bold">
                {ach.date} &middot; {ach.organization}
              </span>
              <h3 className="text-lg md:text-xl font-serif text-foreground font-medium uppercase tracking-wide mb-3 group-hover:text-accent transition-colors duration-300">
                {ach.title}
              </h3>
              <p className="text-[15px] font-sans font-light text-foreground-muted leading-relaxed">
                {ach.description}
              </p>
              
              {/* Decorative top right bracket highlight */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/10 group-hover:border-accent/40 transition-colors duration-300 rounded-tr-[24px]" />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}
