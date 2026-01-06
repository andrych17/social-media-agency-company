"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]" />
      </div>
    );
  }

  const particles = [...Array(8)].map((_, i) => ({
    id: i,
    left: `${15 + i * 12}%`,
    top: `${20 + (i * 7) % 60}%`,
    background: i % 2 === 0 ? "var(--color-accent)" : "var(--color-accent-light)",
    xOffset: Math.sin(i) * 50,
    delay: i * 1.5,
    duration: 10 + i * 2,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary) 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Moving Accent Lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
        }}
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-0 w-full h-px opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-accent-light), transparent)",
        }}
        animate={{
          x: ["100%", "-100%"],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
          delay: 4,
        }}
      />

      {/* Floating Shape 1 - Top Right */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          filter: "blur(60px)",
          y: y1,
          willChange: "transform",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Floating Shape 2 - Left Middle */}
      <motion.div
        className="absolute top-1/3 -left-32 w-80 h-80 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)",
          filter: "blur(70px)",
          y: y2,
          willChange: "transform",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />

      {/* Floating Shape 3 - Bottom Right */}
      <motion.div
        className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          filter: "blur(80px)",
          y: y3,
          willChange: "transform",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 5,
        }}
      />

      {/* Floating Shape 4 - Center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-light) 0%, transparent 60%)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: particle.background,
            left: particle.left,
            top: particle.top,
            opacity: 0.4,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Rotating Ring Effect */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-15"
        style={{
          border: "1px solid var(--color-accent)",
          filter: "blur(2px)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full opacity-12"
        style={{
          border: "1px solid var(--color-accent-light)",
          filter: "blur(3px)",
        }}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, var(--color-primary) 100%)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
