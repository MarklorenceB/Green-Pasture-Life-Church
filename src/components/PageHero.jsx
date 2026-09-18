import Container from "./Container";
import Eyebrow from "./Eyebrow";
import EmphasizedText from "./EmphasizedText";

/** Solid text field + inset original photograph: legibility independent of the image.
 * All original props work. Optional emphasis is an exact substring of title. */
export default function PageHero({ eyebrow, title, subtitle, image, emphasis, ratio }) {
  const accent = emphasis ?? (typeof title === "string" ? title.split(" ").at(-1) : undefined);
  return <section className="page-hero">
    <Container className="page-hero__grid">
      <div className="page-hero__copy">
        {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
        <h1 className="type-title"><EmphasizedText emphasis={accent}>{title}</EmphasizedText></h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
      {image && <div className="page-hero__image" data-ratio={ratio ? "custom" : undefined}
        style={{ backgroundImage: `url("${image}")`, ...(ratio ? { aspectRatio: ratio } : {}) }} aria-hidden="true" />}
    </Container>
  </section>;
}
