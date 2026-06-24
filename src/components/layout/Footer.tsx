"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-accent/15 relative overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-8 md:px-20 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Metadata columns */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div>
              <div className="text-[8px] font-sans font-bold text-foreground-muted/50 uppercase tracking-[0.2em] mb-2">Location</div>
              <div className="text-[11px] font-sans text-foreground uppercase tracking-wider">{portfolioData.location}</div>
            </div>
            <div>
              <div className="text-[8px] font-sans font-bold text-foreground-muted/50 uppercase tracking-[0.2em] mb-2">Current Vector</div>
              <div className="text-[11px] font-sans text-accent uppercase tracking-wider">Data Analyst @ EY</div>
            </div>
          </div>

          {/* Social Link List */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a 
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-1 text-[9.5px] uppercase tracking-[0.2em] font-sans font-bold text-foreground-muted hover:text-accent transition-colors duration-300"
            >
              EMAIL <ArrowUpRight className="w-3 h-3" />
            </a>
            <a 
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[9.5px] uppercase tracking-[0.2em] font-sans font-bold text-foreground-muted hover:text-accent transition-colors duration-300"
            >
              LINKEDIN <ArrowUpRight className="w-3 h-3" />
            </a>
            <a 
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[9.5px] uppercase tracking-[0.2em] font-sans font-bold text-foreground-muted hover:text-accent transition-colors duration-300"
            >
              GITHUB <ArrowUpRight className="w-3 h-3" />
            </a>
            <a 
              href={portfolioData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[9.5px] uppercase tracking-[0.2em] font-sans font-bold text-foreground-muted hover:text-accent transition-colors duration-300"
            >
              LEETCODE <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="pt-12 mt-12 border-t border-accent/15 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[8.5px] font-sans text-foreground-muted/40 uppercase tracking-[0.25em] font-medium">
            &copy; {new Date().getFullYear()} {portfolioData.name.toUpperCase()} / ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-2 text-[8.5px] font-sans text-foreground-muted/40 uppercase tracking-[0.25em] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" />
            PRODUCTION_BUILD_V3.0
          </div>
        </div>
      </div>
    </footer>
  );
}
