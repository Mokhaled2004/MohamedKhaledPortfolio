"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkType } from "@/types";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SelectedLink {
  isActive: boolean;
  index: number | null;
}

interface BodyProps {
  links: LinkType[];
  selectedLink: SelectedLink;
  setSelectedLink: (selectedLink: SelectedLink) => void;
  setIsActive: (isActive: boolean) => void;
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  const params = useParams();
  const [currentHref, setCurrentHref] = useState("/");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const { pathname, hash } = window.location;
    setCurrentHref(pathname + hash);
  }, [params]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <nav className="flex flex-col">
        {links.map((link, index) => {
          const { title, href, target } = link;
          const isSelected = currentHref === href;
          
          // Determine the opacity based on hover state
          // If nothing is hovered, opacity is 1. 
          // If something is hovered, the hovered one is 1, others are 0.3.
          const isDimmed = selectedLink.isActive && selectedLink.index !== index;

          return (
            <Link
              key={`l_${index}`}
              href={href}
              target={target}
              onClick={() => setIsActive(false)}
              onMouseEnter={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index: null })}
              className="relative py-2 px-1 group"
            >
              <motion.div
                animate={{ 
                  opacity: isDimmed ? 0.3 : 1,
                  x: selectedLink.index === index ? 10 : 0
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "text-2xl font-bold uppercase tracking-tight transition-colors duration-300",
                  isSelected ? "text-primary" : "text-foreground"
                )}
              >
                {title}
              </motion.div>
              
              {/* Subtle underline that grows on hover */}
              <motion.div 
                className="absolute bottom-1 left-1 h-[2px] bg-primary"
                initial={{ width: 0 }}
                animate={{ width: selectedLink.index === index ? "40%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}