import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { softTransition } from "../lib/motion";

/** Uses the actual root scroller, including in the full-page capture harness. */
export default function Reveal({ children, as = "div", delay = 0, y = 12, className = "", once = true, ...rest }) {
  const element = useRef(null);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const root = document.getElementById("root");
    let frame;
    const reveal = () => {
      setVisible(true);
      if (once) {
        observer.disconnect();
        root?.removeEventListener("scroll", onScroll);
      }
    };
    // A jump can skip the intersection entirely (non-intersecting both before
    // and after). Check passed elements on the actual scroller as well.
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (element.current && element.current.getBoundingClientRect().top < (root?.getBoundingClientRect().top ?? 0)) reveal();
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) reveal();
      else if (!once) setVisible(false);
    }, { root, threshold: 0, rootMargin: "0px 0px -24px 0px" });
    if (element.current) observer.observe(element.current);
    root?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      root?.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [once]);
  const MotionTag = motion[as] || motion.div;
  return <MotionTag ref={element} className={className}
    initial={false}
    animate={{ opacity: visible || reduced ? 1 : 0, y: visible || reduced ? 0 : y }}
    transition={reduced ? { duration: 0 } : { ...softTransition, delay: Math.min(delay, 0.25) }}
    {...rest}>{children}</MotionTag>;
}
