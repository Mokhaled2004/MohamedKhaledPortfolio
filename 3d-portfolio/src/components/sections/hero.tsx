"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  // Force viewport recalculation after loader finishes to fix mobile layout shifts
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <SectionWrapper id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* RESPONSIVE GRID: 
          - grid-cols-1 for mobile (stacks vertically)
          - md:grid-cols-2 for desktop (side-by-side)
          - px-4 to px-8 to prevent edge-touching
      */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 w-full">
        
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 w-full">
          {!isLoading && (
            <div className="w-full max-w-full sm:max-w-[90vw] md:max-w-none">
              
              <BlurIn delay={0.7}>
                <p className="text-slate-500 dark:text-zinc-400 font-display text-lg md:text-xl">
                  Hi, I am
                </p>
              </BlurIn>

              <BlurIn delay={1}>
                {/* DYNAMIC TEXT SCALING:
                    - text-4xl on tiny screens
                    - text-5xl/6xl on mobile/tablet
                    - text-9xl on desktop
                */}
                <h1 className="leading-[1.1] font-bold text-slate-800 dark:text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter my-2 break-words">
                  {config.author.split(" ")[0]}
                  <br />
                  {config.author.split(" ")[1]}
                </h1>
              </BlurIn>

              <BlurIn delay={1.2}>
                <p className="text-slate-500 dark:text-zinc-400 font-display text-sm sm:text-base md:text-xl font-medium px-2 sm:px-0">
                  Software Engineer & GenAI Architect
                </p>
              </BlurIn>

              <BlurIn delay={1.4}>
                <div className="mt-4 sm:mt-6 flex flex-col items-center md:items-start w-full">
                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-full sm:max-w-sm md:max-w-md px-2 sm:px-0">
                    I specialize in building **scalable microservices** supported by **AI-driven features**, 
                    crafting full-stack applications that bridge intuitive frontends with high-performance backends. 
                    Currently engineering **autonomous AI agents** and **RAG workflows** to solve complex real-world problems.
                  </p>
                  
                  {/* TAGS CLOUD */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2 mt-3 sm:mt-4 w-full px-2 sm:px-0">
                     {["Microservices", "AI Agents", "Full-Stack Apps"].map(tag => (
                       <span key={tag} className="px-2 py-1 text-[9px] sm:text-[10px] uppercase tracking-wider rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 whitespace-nowrap">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
              </BlurIn>

              {/* ACTION BUTTONS */}
              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center md:items-start gap-3 sm:gap-4 w-full px-2 sm:px-0">
                <BoxReveal delay={1.6} width="100%">
                  <Link href="https://drive.google.com/file/d/1WMfRc98YUgN7NAB2g9J2k4uW0nGmgQBS/view?usp=sharing" target="_blank" className="w-full sm:w-auto">
                    <Button className="group w-full sm:w-64 h-11 sm:h-12 gap-2 shadow-lg text-sm sm:text-base transition-all hover:scale-[1.02]">
                      <File size={16} className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:-rotate-12" />
                      View Resume
                    </Button>
                  </Link>
                </BoxReveal>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 w-full">
                  <Link href="#contact" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-32 h-11 sm:h-12 text-sm sm:text-base transition-all hover:bg-slate-100 dark:hover:bg-zinc-900">
                      Hire Me
                    </Button>
                  </Link>
                  <div className="flex gap-1.5 sm:gap-2">
                    <Link href={config.social.github} target="_blank">
                      <Button variant="outline" size="icon" className="w-10 h-10 sm:w-12 sm:h-12 transition-all hover:scale-110">
                        <SiGithub size={18} className="sm:w-5 sm:h-5"/>
                      </Button>
                    </Link>
                    <Link href={config.social.linkedin} target="_blank">
                      <Button variant="outline" size="icon" className="w-10 h-10 sm:w-12 sm:h-12 transition-all hover:scale-110 hover:text-[#0077b5] hover:border-[#0077b5]">
                        <SiLinkedin size={18} className="sm:w-5 sm:h-5"/>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* 3D MODEL COLUMN: 
            Hidden on mobile to prevent layout overflow and CPU lag. 
            Displayed on Desktop (md and up).
        */}
        <div className="relative hidden md:flex items-center justify-center">
           {/* Your 3D Canvas component would be placed here */}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;