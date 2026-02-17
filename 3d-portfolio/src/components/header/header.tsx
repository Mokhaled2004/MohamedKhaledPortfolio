"use client";

import { useState } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValueEvent 
} from "framer-motion";
import Link from "next/link";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";

const Header = ({ loader }: { loader?: boolean }) => {
  const [isActive, setIsActive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Only hide if menu is not active
    if (latest > previous && latest > 150 && !isActive) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      // Initial state helps trigger recalculation after loader finishes
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ 
        y: hidden ? -120 : 0, 
        x: "-50%", 
        opacity: 1 
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-4 left-1/2 w-[95%] max-w-7xl z-[1000]",
        "rounded-full border border-white/10 backdrop-blur-md transition-colors duration-500",
        isActive ? "bg-background shadow-2xl" : "bg-background/40 shadow-lg"
      )}
    >
      <div className="px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo/Name Section */}
        <Link href="/" onClick={() => setIsActive(false)} className="flex items-center gap-2">
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm sm:text-base">
            {config.author.charAt(0)}
          </div>
          {/* Using sm:block to ensure name appears on tablets/desktop */}
          <span className="font-bold text-sm sm:text-lg hidden sm:block">
            {config.author}
          </span>
        </Link>

        {/* Actions Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center">
            <FunnyThemeToggle className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          <Button
            variant={isActive ? "default" : "ghost"}
            onClick={() => setIsActive(!isActive)}
            className="rounded-full gap-2 px-3 sm:px-4 h-9 sm:h-10 transition-all"
          >
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {isActive ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col gap-1">
              <span className={cn(
                "h-[1.5px] sm:h-[2px] w-3 sm:w-4 bg-current transition-transform duration-300", 
                isActive && "rotate-45 translate-y-[3.5px] sm:translate-y-[4px]"
              )} />
              <span className={cn(
                "h-[1.5px] sm:h-[2px] w-3 sm:w-4 bg-current transition-transform duration-300", 
                isActive && "-rotate-45 -translate-y-[2.5px] sm:-translate-y-[3px]"
              )} />
            </div>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            // Mobile Dropdown Fix: Full width on mobile, fixed width on desktop
            className="absolute top-[calc(100%+10px)] right-0 left-0 sm:left-auto w-full sm:w-72 origin-top"
          >
            <div className="mx-auto sm:mx-0 bg-background/95 backdrop-blur-xl border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl p-5 sm:p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
               <Nav setIsActive={setIsActive} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;