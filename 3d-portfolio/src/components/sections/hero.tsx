"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[10] relative", 
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none font-thin text-slate-800 dark:text-white text-left",
                          "font-thin text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default font-display"
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Software Engineer & GenAI Architect
                  </p>
                </BlurIn>

                <BlurIn delay={1.4}>
                  <div className="mt-4 md:self-start max-w-sm md:max-w-md text-center md:text-left">
                    <p className="text-slate-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                      I specialize in building **scalable microservices** supported by **AI-driven features**, 
                      crafting full-stack applications that bridge intuitive frontends with high-performance backends. 
                      Currently engineering **autonomous AI agents** and **RAG workflows** to solve complex real-world problems.
                    </p>
                    
                    <div className="flex mt-4 gap-2 flex-wrap justify-center md:justify-start">
                       <span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500">Microservices</span>
                       <span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500">AI Agents</span>
                       <span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500">Full-Stack Apps</span>
                    </div>
                  </div>
                </BlurIn>
              </div>

              <div className="mt-8 flex flex-col gap-3 w-fit">
                {/* --- RESUME BUTTON WITH HOVER FIX --- */}
                <BoxReveal delay={1.6} width="100%">
                  <Link
                    href="https://drive.google.com/file/d/1WMfRc98YUgN7NAB2g9J2k4uW0nGmgQBS/view?usp=sharing"
                    target="_blank"
                    className="flex-1"
                  >
                    <Button className="group flex items-center gap-2 w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
                      <File size={20} className="transition-transform group-hover:-rotate-12" />
                      <p>View Resume</p>
                    </Button>
                  </Link>
                </BoxReveal>

                <div className="md:self-start flex items-center gap-3">
                  {/* --- HIRE ME BUTTON WITH HOVER FIX --- */}
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="px-8 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-zinc-900 hover:border-slate-400 dark:hover:border-zinc-600"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>

                  </Tooltip>

                  {/* --- SOCIALS WITH HOVER COLORS --- */}
                  <div className="flex items-center gap-2">
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button 
                        variant={"outline"} 
                        size="icon" 
                        className="transition-all duration-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:scale-110"
                      >
                        <SiGithub size={20} />
                      </Button>
                    </Link>
                    
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button 
                        variant={"outline"} 
                        size="icon" 
                        className="transition-all duration-300 hover:text-[#0077b5] hover:border-[#0077b5] hover:scale-110"
                      >
                        <SiLinkedin size={20} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;