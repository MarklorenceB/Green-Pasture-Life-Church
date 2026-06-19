import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import PastureHorizon from "./PastureHorizon";

/**
 * PageHero — one reusable interior-page banner, replacing the six
 * copy-pasted black-overlay photo heroes. Deep pasture gradient, optional
 * softly-blended image (not a heavy dark scrim), eyebrow, Fraunces title,
 * subtitle, and the signature horizon at the foot.
 */
const PageHero = ({ eyebrow, title, subtitle, image }) => {
  return (
    <section className="relative overflow-hidden bg-moss">
      {/* Deep green gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, #0f2e1a 0%, #173e22 45%, #1e4d2b 100%)",
        }}
      />
      {/* Optional photo, blended into the green rather than darkened */}
      {image && (
        <div
          className="absolute inset-0 opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {/* Soft wheat light pooling top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 82% 8%, rgba(200,162,75,0.22) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-32 md:pb-40 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow align="center" tone="light">
              {eyebrow}
            </Eyebrow>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display font-light text-canvas text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-meadow-300/90 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Signature horizon bleeding into the page canvas */}
      <div className="absolute bottom-0 left-0 right-0 text-canvas">
        <PastureHorizon variant="hero" className="h-28 sm:h-36 md:h-44" />
      </div>
    </section>
  );
};

export default PageHero;
