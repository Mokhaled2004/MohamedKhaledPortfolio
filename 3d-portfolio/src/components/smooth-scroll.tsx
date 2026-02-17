"use client";

import React from "react";
import { ReactLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  // We NEVER want a second Lenis instance inside the modal
  if (isInsideModal) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;