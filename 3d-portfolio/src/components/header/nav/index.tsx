"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { height } from "../anim"; // Check this file next!
import Body from "./body/body";
import { links } from "@/components/header/config";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  // We keep the state for the Body component but remove the Image rendering
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

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