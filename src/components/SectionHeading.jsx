import Eyebrow from "./Eyebrow";
import EmphasizedText from "./EmphasizedText";

export default function SectionHeading({ eyebrow, title, emphasis, children, as: Tag = "h2", tone = "pasture", className = "" }) {
  return <div className={`section-heading ${className}`}>
    {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
    <Tag className="type-heading"><EmphasizedText emphasis={emphasis}>{title}</EmphasizedText></Tag>
    {children && <p className={tone === "light" ? "!text-mist" : ""}>{children}</p>}
  </div>;
}
