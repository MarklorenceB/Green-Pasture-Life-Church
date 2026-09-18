/** Existing align/tone props remain supported; gold is no longer body-size text. */
export default function Eyebrow({ children, className = "", align = "left", tone = "pasture" }) {
  return <div className={`eyebrow eyebrow-label ${align === "center" ? "text-center" : "text-left"} ${className}`} data-tone={tone}>{children}</div>;
}
