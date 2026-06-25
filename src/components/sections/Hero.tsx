"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThreeScene from "@/components/ui/ThreeScene";
import HeroVisual from "@/components/visuals/HeroVisual";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-[120px] pb-24 px-8 md:px-20 lg:px-24 overflow-hidden bg-background">
      {/* 3D background canvas (Neural network lines, particles, and grid) */}
      <ThreeScene>
        <HeroVisual />
      </ThreeScene>
      
      {/* 1. Subheaders at top (below Navbar) */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-foreground-muted font-sans gap-3 pt-6 border-t border-accent/15">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>CURRENTLY @ EY · COIMBATORE · DATA ANALYST</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>B.TECH AI & DATA SCIENCE · &apos;26</span>
        </div>
      </div>

      {/* 2. Side decorations */}
      {/* Left Vertical Text */}
      <div className="absolute left-[-45px] md:left-[-30px] top-1/2 -translate-y-1/2 -rotate-90 select-none hidden md:block z-10">
        <span className="text-[9px] uppercase tracking-[0.45em] text-foreground-muted/40 font-mono">
          • PORTFOLIO · MMXXVI
        </span>
      </div>
      {/* Right Vertical Text */}
      <div className="absolute right-[-65px] md:right-[-50px] top-1/2 -translate-y-1/2 rotate-90 select-none hidden md:block z-10">
        <span className="text-[9px] uppercase tracking-[0.45em] text-foreground-muted/40 font-mono">
          COIMBATORE · 11.8168° N · 76.9558° E
        </span>
      </div>

      {/* 3. Middle Content & Bottom elements row */}
      <div className="relative z-10 w-full flex flex-col justify-between items-start gap-12 mt-12 mb-8 md:my-auto">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-sans font-bold tracking-[0.35em] text-accent mb-4 uppercase block">
              01 - DESIGNER & ENGINEER
            </span>
            
            <h1 className="text-[clamp(60px,8vw,120px)] font-serif leading-[1.05] text-foreground mb-6 tracking-tight select-none">
              <span className="italic font-normal">Adish</span> A.
            </h1>
            
            <p className="text-[18px] md:text-[20px] text-foreground-muted max-w-2xl font-sans font-light leading-relaxed mb-8">
              Final Year B.Tech AI & Data Science Engineer building intelligent human-centered software.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/work"
                className="px-8 py-4 bg-accent text-foreground font-sans font-bold uppercase text-[10px] tracking-[2px] transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow)] rounded-full text-center"
              >
                View My Work
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border border-foreground/30 hover:border-accent text-foreground hover:text-accent font-sans font-bold uppercase text-[10px] tracking-[2px] transition-all duration-300 rounded-full text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Profile Statistics Grid */}
            <div className="grid grid-cols-3 gap-6 md:gap-12 border-t border-accent/15 pt-8 mt-12 max-w-xl">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-medium select-none mb-1 orange-text-glow">10+</div>
                <div className="text-[9px] uppercase tracking-[1.5px] font-bold text-foreground-muted font-sans">Hackathons</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-medium select-none mb-1 orange-text-glow">30+</div>
                <div className="text-[9px] uppercase tracking-[1.5px] font-bold text-foreground-muted font-sans">Tech Events</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-medium select-none mb-1 orange-text-glow">5+</div>
                <div className="text-[9px] uppercase tracking-[1.5px] font-bold text-foreground-muted font-sans">Programs Organized</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
