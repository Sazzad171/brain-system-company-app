"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "bottomToTop" | "leftToRight" | "rightToLeft" | "none";

interface MotionDivProps {
  type?: AnimationType;
  isButton?: boolean;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const animationVariants = {
  bottomToTop: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  leftToRight: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  rightToLeft: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 1 }, visible: { opacity: 1 } },
};

export default function MotionDiv({
  type = "none",
  isButton = false,
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}: MotionDivProps) {
  return (
    <motion.div
      className={`${className} ${isButton && "inline-block"}`}
      variants={animationVariants[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay }}
      whileHover={isButton ? { scale: 1.05 } : undefined}
    >
      {children}
    </motion.div>
  );
}
