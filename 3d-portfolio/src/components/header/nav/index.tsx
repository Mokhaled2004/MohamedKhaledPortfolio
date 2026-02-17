"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { height } from "../anim"; 
import Body from "./body/body";
import { links } from "@/components/header/config";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  // FIXED: Explicitly allow 'index' to be 'number | null' so it matches Body's expected type
  const [selectedLink, setSelectedLink] = useState<{ 
    isActive: boolean; 
    index: number | null; 
  }>({ 
    isActive: false, 
    index: 0 
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={cn(styles.nav, "h-auto w-full")} // Force height to auto
    >
      <div className="flex flex-col w-full">
        <Body
          links={links}
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
          setIsActive={setIsActive}
        />
      </div>
    </motion.div>
  );
};

export default Index;