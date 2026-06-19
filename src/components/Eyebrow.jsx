import React from "react";

/**
 * Eyebrow — a small tracked uppercase label, usually carrying a scripture
 * reference or a true categorical word (not decoration). A short wheat rule
 * anchors it to the pastoral palette.
 */
const Eyebrow = ({ children, className = "", align = "left", tone = "pasture" }) => {
  const color = tone === "light" ? "text-wheat-300" : "text-wheat";
  const justify = align === "center" ? "justify-center" : "justify-start";
  return (
    <div className={`flex items-center gap-3 ${justify} ${className}`}>
      <span className="h-px w-8 bg-wheat/70" aria-hidden="true" />
      <span className={`eyebrow ${color}`}>{children}</span>
    </div>
  );
};

export default Eyebrow;
