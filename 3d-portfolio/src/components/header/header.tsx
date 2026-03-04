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
    if (latest > previous && latest > 150 && !isActive) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ 
        y: hidden ? -120 : 0, 
        x: "-50%", 
        opacity: 1 
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        /* CHANGE 1: Removed w-[95%] and max-w-7xl.
           CHANGE 2: Added w-max so the border wraps the content tightly.
        */
        "fixed top-4 left-1/2 w-max z-[1000]",
        "rounded-full border border-white/10 backdrop-blur-md transition-colors duration-500",
        isActive ? "bg-background shadow-2xl" : "bg-background/40 shadow-lg"
      )}
    >
      {/* CHANGE 3: Added a specific gap here. 
          Decrease 'gap-4' or 'sm:gap-8' to bring them even closer.
      */}
      <div className="px-3 sm:px-4 py-1.5 flex items-center justify-center gap-4 sm:gap-8">
        
        {/* Logo/Name Section */}
        <Link href="/" onClick={() => setIsActive(false)} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
            {config.author.charAt(0)}
          </div>
          <span className="font-bold text-sm hidden sm:block">
            {config.author}
          </span>
        </Link>

        {/* Actions Section */}
        <div className="flex items-center gap-2">
          <FunnyThemeToggle className="w-4 h-4" />

          <Button
            variant={isActive ? "default" : "ghost"}
            onClick={() => setIsActive(!isActive)}
            className="rounded-full gap-2 px-3 h-8 transition-all"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {isActive ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col gap-1">
              <span className={cn(
                "h-[1.5px] w-3 bg-current transition-transform duration-300", 
                isActive && "rotate-45 translate-y-[3.5px]"
              )} />
              <span className={cn(
                "h-[1.5px] w-3 bg-current transition-transform duration-300", 
                isActive && "-rotate-45 -translate-y-[2.5px]"
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
            /* Centering the dropdown relative to the small pill */
            className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-64 origin-top"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-white/10 rounded-[1.5rem] shadow-2xl p-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
               <Nav setIsActive={setIsActive} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;