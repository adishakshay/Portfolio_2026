"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Globe, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Image from "next/image";

export default function WorkPage() {
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
            03 - ARCHIVES
          </span>
          <h1 className="text-[clamp(44px,6vw,64px)] font-serif text-foreground font-medium leading-tight">
            Selected <span className="italic font-normal">Works</span>
          </h1>
        </div>

        {/* Projects Grid: 2 columns for "large cards" layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="luxury-card luxury-card-hover p-8 md:p-10 flex flex-col justify-between group relative"
            >
              <div>
                {/* Large Project Image with hover scale and brightness shift */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden mb-8 bg-technical-gray border border-accent/10 rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Project Index */}
                  <span className="absolute top-4 left-4 text-[10px] font-sans tracking-widest text-foreground font-bold bg-background/90 border border-accent/15 px-3 py-1 rounded-md">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] font-sans uppercase tracking-wider bg-foreground/[0.03] border border-foreground/10 px-3 py-1 rounded text-foreground-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl md:text-3xl font-serif text-foreground font-medium mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] md:text-[18px] font-sans font-light text-foreground-muted leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-accent/10 mt-auto flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between gap-4 w-full">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-foreground hover:text-accent transition-colors duration-300"
                  >
                    <Globe className="w-4 h-4 text-accent" /> Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-foreground-muted hover:text-foreground transition-colors duration-300"
                  >
                    <GithubIcon className="w-4 h-4" /> Github
                  </a>
                </div>
                
                {project.dataset && (
                  <a 
                    href={project.dataset}
                    download
                    className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-accent border border-accent/20 hover:border-accent hover:bg-accent/5 py-2.5 rounded-xl transition-all duration-300 w-full"
                  >
                    Download Dataset (CSV)
                  </a>
                )}
              </div>
              
              {/* Corner decorative highlight */}
              <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-accent/10 group-hover:border-accent/40 transition-colors duration-300 rounded-tr-[24px]" />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}
