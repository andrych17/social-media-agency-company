"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  scale?: number;
  blur?: boolean;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.25,
  duration = 0.6,
  y = 75,
  direction = "up",
  className = "",
  scale = 0.95,
  blur = false,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    // Langsung show tanpa tunggu in view
    mainControls.start("visible");
  }, [mainControls]);

  let initial: { [key: string]: number | string } = { 
    opacity: 1, // Langsung visible
    scale: 1,
  };
  
  // Disable semua animasi
  /*
  if (blur) initial.filter = "blur(10px)";
  
  if (direction === "up") initial.y = y;
  if (direction === "down") initial.y = -y;
  if (direction === "left") initial.x = y;
  if (direction === "right") initial.x = -y;
  */

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={{
          hidden: initial,
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0, 
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        initial="visible"
        animate="visible"
        transition={{ 
          duration: 0.1, 
          delay: 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
