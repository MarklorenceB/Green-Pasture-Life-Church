import React from "react";
import { motion } from "framer-motion";

/**
 * Reveal — standard scroll-triggered fade-up used across the site.
 * Consolidates the repeated framer-motion variant patterns.
 * `as` lets it render any element; `delay`/`y` tune the entrance.
 * framer-motion's whileInView respects reduced motion via our CSS guard.
 */
const Reveal = ({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className = "",
  once = true,
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
