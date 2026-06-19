import React from "react";

/**
 * PastureHorizon — the site's signature motif.
 * Layered rolling-hill silhouettes in graduated pasture greens with a
 * wheat-gold sun, drawn straight from the church's name + Psalm 23.
 *
 * Variants:
 *  - "hero"    : tall, with sun + 3 hill layers (sits at the foot of a hero)
 *  - "divider" : short band of hills used between sections
 *  - "ridge"   : a single soft ridge (e.g. top edge of the footer)
 */
const PastureHorizon = ({ variant = "hero", className = "", flip = false }) => {
  const base = `block w-full ${flip ? "rotate-180" : ""} ${className}`;

  if (variant === "ridge") {
    return (
      <svg
        className={base}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 70 C 240 20, 480 20, 720 56 C 960 92, 1200 92, 1440 48 L1440 120 L0 120 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (variant === "divider") {
    return (
      <svg
        className={base}
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 96 C 220 60, 420 60, 720 92 C 1010 122, 1240 110, 1440 78 L1440 140 L0 140 Z"
          fill="var(--color-meadow)"
          opacity="0.28"
        />
        <path
          d="M0 112 C 260 84, 520 84, 760 108 C 1020 134, 1240 126, 1440 104 L1440 140 L0 140 Z"
          fill="var(--color-pasture)"
        />
      </svg>
    );
  }

  // "hero"
  return (
    <svg
      className={base}
      viewBox="0 0 1440 340"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Far hills — palest */}
      <path
        d="M0 196 C 220 150, 430 150, 700 184 C 980 219, 1180 206, 1440 168 L1440 340 L0 340 Z"
        fill="var(--color-meadow-300)"
        opacity="0.5"
      />
      {/* Mid hills */}
      <path
        d="M0 236 C 260 196, 520 200, 780 230 C 1040 260, 1240 250, 1440 222 L1440 340 L0 340 Z"
        fill="var(--color-meadow)"
        opacity="0.85"
      />
      {/* Near hills — deepest pasture */}
      <path
        d="M0 286 C 300 250, 560 256, 820 282 C 1080 308, 1260 300, 1440 280 L1440 340 L0 340 Z"
        fill="var(--color-pasture)"
      />
    </svg>
  );
};

export default PastureHorizon;
