import Container from "./Container";

export default function Section({ children, compact = false, bleed = false, as: Tag = "section", className = "", ...props }) {
  return <Tag className={`site-section ${compact ? "site-section--compact" : ""} ${className}`} {...props}>
    {bleed ? children : <Container>{children}</Container>}
  </Tag>;
}
