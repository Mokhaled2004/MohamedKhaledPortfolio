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
      variants={{ visible: { y: 0 }, hidden: { y: -120 } }}
      animate={hidden ? "hidden" : "visible"}
      className={cn(
        "fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-7xl z-[1000]",
        "rounded-full border border-white/10 backdrop-blur-md transition-all duration-500",
        isActive ? "bg-background shadow-2xl" : "bg-background/40 shadow-lg"
      )}
    >
      <div className="px-6 py-3 flex items-center justify-between">
        <Link href="/" onClick={() => setIsActive(false)} className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">
            {config.author.charAt(0)}
          </div>
          <span className="font-bold text-lg hidden sm:block">{config.author}</span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Removed the border-r class here to delete the line */}
          <div className="flex items-center gap-4">
            <FunnyThemeToggle className="w-5 h-5" />
          </div>

          <Button
            variant={isActive ? "default" : "ghost"}
            onClick={() => setIsActive(!isActive)}
            className="rounded-full gap-2 px-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              {isActive ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col gap-1">
              <span className={cn("h-[2px] w-4 bg-current transition-transform", isActive && "rotate-45 translate-y-[3px]")} />
              <span className={cn("h-[2px] w-4 bg-current transition-transform", isActive && "-rotate-45 -translate-y-[3px]")} />
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
            className="absolute top-[calc(100%+10px)] right-0 w-72 origin-top-right"
          >
            {/* Added max-height and overflow-y-auto to handle large text gracefully */}
            <div className="bg-background/95 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-6 max-h-[70vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
               <Nav setIsActive={setIsActive} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;