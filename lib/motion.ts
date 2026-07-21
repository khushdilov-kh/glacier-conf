// Calm, minimal motion tokens for executive UI.
export const MOTION = {
  ease: [0.22, 0.61, 0.36, 1] as const,
  distance: 6,
  duration: {
    fast: 0.2,
    base: 0.4,
    slow: 0.6
  },
  stagger: 0.08
};

export const fadeUp = {
  hidden: { opacity: 0, y: MOTION.distance },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: MOTION.duration.base, ease: MOTION.ease, delay }
  })
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: MOTION.duration.base, ease: MOTION.ease, delay }
  })
};

export const staggerContainer = (delay = 0) => ({
  visible: {
    transition: { delayChildren: delay, staggerChildren: MOTION.stagger }
  }
});