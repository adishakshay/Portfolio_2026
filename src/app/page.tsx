"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import { portfolioData } from "@/data/portfolio";

function FeaturedWork() {
  const featured = portfolioData.projects.slice(0, 2);
  
  return (
    <section className="py-[120px] px-8 md:px-20 lg:px-24 bg-background border-t border-accent/10 relative subtle-grid-bg">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 border-b border-accent/10 pb-10">
          <div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-accent uppercase block mb-3">
              02 - PORTFOLIO PREVIEW
            </span>
            <h2 className="text-[clamp(36px,5vw,64px)] font-serif text-foreground font-medium leading-tight">
              Featured <span className="italic font-normal">Works</span>
            </h2>
          </div>
          <Link 
            href="/work" 
            className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-foreground hover:text-accent transition-colors duration-300"
          >
            View All Projects 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featured.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="luxury-card luxury-card-hover p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image container with hover reveal */}
                <div className="relative h-72 w-full overflow-hidden mb-6 bg-technical-gray border border-accent/10 rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover filter grayscale brightness-60 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Floating index */}
                  <span className="absolute top-4 left-4 text-[10px] font-sans tracking-widest text-foreground font-bold bg-background/80 border border-accent/15 px-3 py-1 rounded-md">
                    FEATURED {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[9.5px] font-sans uppercase tracking-wider bg-foreground/[0.03] border border-foreground/10 px-2.5 py-0.5 text-foreground-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-serif text-foreground font-medium mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-[15px] font-sans font-light text-foreground-muted leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>
              
              {/* Action link */}
              <div className="pt-4 border-t border-foreground/5 mt-auto flex items-center justify-between">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-foreground hover:text-accent transition-colors duration-300"
                >
                  Visit Project <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Hero />
      <FeaturedWork />
    </motion.main>
  );
}
