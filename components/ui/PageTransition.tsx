"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MOTION } from "@/lib/motion";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: MOTION.distance }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: MOTION.duration.base, ease: MOTION.ease }
        }}
        exit={{
          opacity: 0,
          y: -MOTION.distance,
          transition: { duration: MOTION.duration.fast, ease: MOTION.ease }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}