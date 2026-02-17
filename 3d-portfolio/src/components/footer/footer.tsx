"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { footer } from "./config";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";
import { Mail, Sparkles } from "lucide-react";

// --- NYAN CAT COMPONENT (Walking on the bottom-most edge) ---
const AnimatedNyan = ({ id, onCompleted }: { id: string; onCompleted: (id: string) => void }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: "110vw",
      transition: { duration: 7, ease: "linear" }, 
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ x: "-30vw" }}
      animate={controls}
      onAnimationComplete={() => onCompleted(id)}
      // Fixed to the very bottom of the footer/page
      className="absolute bottom-0 left-0 pointer-events-none z-50 mb-[-10px]" 
    >
      <img
        src="/assets/nyan-cat.gif"
        // Keeps the big size you liked
        className="h-32 w-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        alt="Nyan Cat"
      />
    </motion.div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  const [cats, setCats] = useState<{ id: string }[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "n") {
        setCats((prev) => [...prev, { id: Math.random().toString() }]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const removeCat = (id: string) => {
    setCats((prev) => prev.filter((cat) => cat.id !== id));
  };

  return (
    // overflow-visible is key so the big cat doesn't get cut off at the bottom
    <footer className="relative w-full bg-zinc-950/90 text-white py-8 backdrop-blur-xl border-t border-white/10 overflow-visible">
      
      {/* --- NYAN CAT LAYER (Bottom Edge) --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-visible pointer-events-none">
        {cats.map((cat) => (
          <AnimatedNyan key={cat.id} id={cat.id} onCompleted={removeCat} />
        ))}
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* BRANDING SECTION */}
          <div className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all group-hover:border-white/50 shadow-lg">
              <span className="text-lg font-black text-white">{config.author.charAt(0)}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-md font-bold text-white tracking-tight drop-shadow-md">
                {config.author}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold flex items-center gap-1">
                Software Engineer <Sparkles size={8} className="text-primary animate-pulse" />
              </span>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footer.map((link, index) => {
              const isSpecial = link.title === "Blog" || link.title === "Newsletter";
              return (
                <Link
                  key={`footer_nav_${index}`}
                  href={link.href}
                  className="relative text-xs font-semibold text-zinc-300 transition-colors hover:text-white group"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.title}
                    {isSpecial && (
                      <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_#3b82f6]" />
                    )}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* SOCIAL & CONTACT */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="px-3 py-1 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center shadow-md">
              <SocialMediaButtons />
            </div>

            <Link 
              href="mailto:mokhaled2004@gmail.com" 
              className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-bold text-[11px] transition-all hover:bg-zinc-200 active:scale-95 shadow-lg"
            >
              <Mail size={14} />
              Let's Talk
            </Link>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">
             © {year} {config.author}
          </p>
          
          <div className="flex gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;