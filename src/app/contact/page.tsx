"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }
  };

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
            06 - CONNECTION
          </span>
          <h1 className="text-[clamp(44px,6vw,64px)] font-serif text-foreground font-medium leading-tight">
            Establish <span className="italic font-normal">Connection</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Quick Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <p className="text-foreground-muted text-[18px] font-sans font-light leading-relaxed max-w-md">
              Ready to architect the next generation of intelligent systems. Reach out for collaborations or technical inquiries.
            </p>

            <div className="flex flex-col gap-8 border-t border-accent/10 pt-10">
              <div>
                <div className="text-[9px] font-sans font-bold text-foreground-muted/50 uppercase tracking-[0.25em] mb-2">Location</div>
                <div className="text-[12px] font-sans text-foreground uppercase tracking-wider font-semibold">{portfolioData.location}</div>
              </div>
              <div>
                <div className="text-[9px] font-sans font-bold text-foreground-muted/50 uppercase tracking-[0.25em] mb-2">Current Vector</div>
                <div className="text-[12px] font-sans text-accent uppercase tracking-wider font-semibold">Data Analyst @ EY</div>
              </div>
            </div>

            {/* Social List */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
              <a 
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-foreground hover:text-accent transition-colors duration-300"
              >
                EMAIL <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-foreground hover:text-accent transition-colors duration-300"
              >
                LINKEDIN <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-foreground hover:text-accent transition-colors duration-300"
              >
                GITHUB <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href={portfolioData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-foreground hover:text-accent transition-colors duration-300"
              >
                LEETCODE <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 luxury-card luxury-card-hover p-8 md:p-10 w-full relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-[1.5px] text-foreground-muted">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="border border-accent/20 px-5 py-4 bg-background/50 focus:border-accent text-foreground text-sm font-sans tracking-wide outline-none rounded-xl transition-all duration-300 focus:shadow-[0_0_15px_var(--accent-glow)]"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-[1.5px] text-foreground-muted">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="border border-accent/20 px-5 py-4 bg-background/50 focus:border-accent text-foreground text-sm font-sans tracking-wide outline-none rounded-xl transition-all duration-300 focus:shadow-[0_0_15px_var(--accent-glow)]"
                      placeholder="your.email@domain.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-[1.5px] text-foreground-muted">Message</label>
                    <textarea 
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="border border-accent/20 px-5 py-4 bg-background/50 focus:border-accent text-foreground text-sm font-sans tracking-wide outline-none rounded-xl resize-none transition-all duration-300 focus:shadow-[0_0_15px_var(--accent-glow)]"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="mt-4 px-8 py-4.5 bg-accent text-foreground font-sans font-bold uppercase text-[11px] tracking-[2px] transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow)] rounded-xl text-center cursor-pointer"
                  >
                    Submit Connection
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-5"
                >
                  <CheckCircle2 className="w-14 h-14 text-accent animate-bounce" />
                  <h3 className="text-2xl font-serif text-foreground font-medium">Connection Sent Successfully</h3>
                  <p className="text-[15px] font-sans text-foreground-muted max-w-sm leading-relaxed">
                    Thank you for reaching out! Your logs have been cataloged. I will establish a link shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-3 border border-accent/30 hover:border-accent text-[10px] uppercase tracking-wider font-bold rounded-xl transition-all duration-300 font-sans hover:text-accent"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
