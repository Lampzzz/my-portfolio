"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beam";
import { motion, useScroll } from "motion/react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative antialiased">
      {children}
      <BackgroundBeams className="fixed" />
      <div className="fixed top-1/2 right-5 -translate-y-1/2 w-1.5 h-24 bg-neutral-800 rounded-lg overflow-hidden rotate-180">
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            scaleY: scrollYProgress,
            transformOrigin: "bottom",
            backgroundColor: "var(--primary)",
          }}
        />
      </div>
    </div>
  );
}
