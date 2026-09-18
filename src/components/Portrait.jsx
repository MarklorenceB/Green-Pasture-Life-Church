import { useState } from "react";

/** className/style and remaining props go to the wrapper; src/alt/position to
 * the image. Missing or failed images use supplied initials or derive from name. */
export default function Portrait({ src, name = "", alt = name, initials, ratio = "3 / 4", ground = "mist", position = "center", className = "", style, ...props }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const letters = initials ?? name.trim().split(/\s+/).filter(Boolean).map((part) => Array.from(part)[0]).slice(0, 2).join("").toUpperCase();
  const paletteGround = ["canvas", "mist", "meadow-300", "wheat-300"].includes(ground) ? ground : "mist";
  return <div {...props} className={`portrait ${className}`} style={{ "--portrait-ratio": ratio, "--portrait-ground": `var(--color-${paletteGround})`, ...style }}>
    {src && src !== failedSrc
      ? <img src={src} alt={alt} loading="lazy" style={{ objectPosition: position }} onError={() => setFailedSrc(src)} />
      : <span className="portrait__initials" role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>{letters}</span>}
  </div>;
}
