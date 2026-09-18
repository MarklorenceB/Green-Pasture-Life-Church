// Short, soft entrances. #root is the only application scroll container.
export const softEase = [0.22, 1, 0.36, 1];
export const softTransition = { duration: 0.42, ease: softEase };
export const prefersReducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export const staggerContainer = {
  hidden: { opacity: 1 },
  show: () => ({ opacity: 1, transition: { staggerChildren: prefersReducedMotion() ? 0 : 0.065 } }),
};
export const staggerItem = {
  hidden: () => ({ opacity: prefersReducedMotion() ? 1 : 0, y: prefersReducedMotion() ? 0 : 12 }),
  show: () => ({ opacity: 1, y: 0, transition: prefersReducedMotion() ? { duration: 0 } : softTransition }),
};
