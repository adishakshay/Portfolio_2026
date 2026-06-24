"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "INDEX", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "WORK", href: "/work" },
    { label: "JOURNEY", href: "/journey" },
    { label: "STACK", href: "/stack" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-black/70 backdrop-blur-xl border-b border-accent/20 px-8 md:px-20 lg:px-24 flex items-center justify-between select-none">
        
        {/* Brand logo */}
        <Link href="/" className="group flex items-center">
          <div className="border border-foreground/30 px-5 py-2 text-[14px] font-sans uppercase tracking-[3px] font-bold text-foreground transition-all duration-300 group-hover:border-accent group-hover:text-accent">
            {portfolioData.name.toUpperCase()}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-sans font-semibold uppercase tracking-[3px]">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label}
                href={item.href} 
                className={`relative py-2 transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side Availability & Mobile Toggle */}
        <div className="flex items-center gap-6">
          {/* Availability Indicator */}
          <div className="hidden sm:flex items-center gap-2.5 border border-accent/30 px-4 py-2 bg-accent/5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-sans uppercase tracking-[2px] font-bold text-accent">
              AVAILABLE
            </span>
          </div>

          {/* Hamburger Menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-foreground-muted hover:text-foreground transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-2xl border-b border-accent/25 px-8 py-10 flex flex-col gap-6 md:hidden text-center"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-sans font-bold uppercase tracking-[3px] py-2 border-b border-foreground/5 transition-colors ${
                    isActive ? "text-accent" : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Availability Indicator for Mobile drawer */}
            <div className="flex items-center justify-center gap-2.5 border border-accent/30 px-4 py-3 bg-accent/5 rounded-full mt-4 max-w-[200px] mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-sans uppercase tracking-[2px] font-bold text-accent">
                AVAILABLE
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
