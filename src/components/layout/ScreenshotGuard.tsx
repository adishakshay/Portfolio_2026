"use client";

import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";

export default function ScreenshotGuard() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    // 1. Detect focus/visibility changes to blur when capturing or switching window
    const handleBlur = () => {
      setIsBlurred(true);
    };

    const handleFocus = () => {
      setIsBlurred(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsBlurred(true);
      } else {
        // Delay unblur slightly to prevent flicker on rapid switching
        const timer = setTimeout(() => setIsBlurred(false), 200);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 2. Prevent right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // 3. Intercept PrintScreen and block Developer Tools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // PrintScreen detection
      if (e.key === "PrintScreen") {
        setIsBlurred(true);
        // Write warning message to clipboard to overwrite any captured screenshot
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText("Content Protected - Screenshot Restricted").catch(() => {});
        }
        // Force blur
        setTimeout(() => setIsBlurred(false), 2000);
      }

      // Developer tools: F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      const isDevTools =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c"));

      // View Source: Ctrl+U
      const isViewSource = e.ctrlKey && (e.key === "U" || e.key === "u");

      // Save: Ctrl+S
      const isSave = e.ctrlKey && (e.key === "S" || e.key === "s");

      // Print: Ctrl+P
      const isPrint = e.ctrlKey && (e.key === "P" || e.key === "p");

      if (isDevTools || isViewSource || isSave || isPrint) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Listen to keydown on window
    window.addEventListener("keydown", handleKeyDown);

    // Clean up all event listeners on unmount
    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isBlurred) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/60 backdrop-blur-2xl transition-all duration-300 animate-fade-in select-none">
      <div className="flex flex-col items-center max-w-md p-8 text-center bg-background/40 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md mx-4 animate-scale-up">
        <div className="p-4 bg-accent/10 rounded-full text-accent mb-6 animate-pulse">
          <ShieldAlert className="w-12 h-12" />
        </div>
        <h2 className="text-xl font-bold font-serif tracking-wider uppercase text-foreground mb-3">
          Content Protected
        </h2>
        <p className="text-sm text-foreground-muted leading-relaxed">
          For security and intellectual property protection, screenshot taking, print screen, and screen recordings are restricted on this website.
        </p>
        <div className="mt-8 text-[9px] uppercase tracking-widest text-accent/60 font-mono">
          Refocus the window to resume
        </div>
      </div>
    </div>
  );
}
