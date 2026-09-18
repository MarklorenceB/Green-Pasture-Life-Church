import { useParams, Link } from "react-router-dom";
import { events } from "../data/mockdata";
import { ArrowLeft, Tag, MapPin, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Container from "../components/Container";
import Section from "../components/Section";
import MediaPanel from "../components/MediaPanel";
import Button from "../components/Button";

const EventDetails = () => {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug || String(e.id) === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-moss text-canvas flex items-center pt-[var(--header-height)] pb-20">
        <Container>
          <h1 className="type-title">Event not found</h1>
          <p className="type-body mt-6 text-mist">The event you are looking for does not exist.</p>
          <Button to="/events" variant="on-dark" className="mt-6 md:mt-8">
            <ArrowLeft size={18} aria-hidden="true" /> Back to all events
          </Button>
        </Container>
      </div>
    );
  }

  const [day, time] = (event.date || "TBD").split(" – ");

  return (
    <div className="flex flex-col bg-canvas">
      <Section as="header" bleed className="order-1 bg-moss text-canvas pt-[calc(var(--header-height)+1rem)] md:pt-[calc(var(--header-height)+2rem)] pb-8 md:pb-0">
        <Container>
          <Link
            to="/events"
            className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-mist hover:text-canvas rounded-sm"
          >
            <ArrowLeft size={17} aria-hidden="true" /> All events
          </Link>
          <div className="mt-6 grid gap-8 md:mt-8 lg:mt-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-20">
            <div>
              <Eyebrow tone="light">{event.category || "Gathering"}</Eyebrow>
              <h1 className="type-title mt-6 max-w-3xl lg:text-[clamp(3rem,6vw,5.5rem)]">{event.title}</h1>
            </div>
            <div className="min-w-0">
              <p className="font-serif font-normal text-mist">
                <span className="block text-[clamp(1.5rem,2.3vw,2rem)] leading-tight tracking-[-0.035em]">{day}</span>{" "}
                {time && <span className="mt-2 block text-[clamp(3.5rem,5.5vw,5rem)] leading-[1.1] tracking-[-0.055em] tabular-nums"><span className="text-wheat-300 text-subheading">–</span>{" "}{time}</span>}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-mist">
                <span className="inline-flex items-center gap-2"><Tag size={16} aria-hidden="true" className="text-wheat-300" /> {event.category || "General"}</span>
                <span className="inline-flex items-center gap-2"><MapPin size={16} aria-hidden="true" className="text-wheat-300" /> Church Campus</span>
              </div>
              <Button to="/contact" variant="on-dark" className="mt-6 md:mt-8">
                Plan your visit <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section as="div" className="order-3 pt-0 pb-12 md:order-2 md:bg-moss md:pt-12 md:pb-16">
        <MediaPanel src={event.image} alt={event.title} ratio="16 / 9" loading="eager" className="[&_img]:aspect-[4/3] md:[&_img]:aspect-[21/9]" />
      </Section>

      <Section compact className="order-2 pt-8 md:order-3 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <Reveal className="type-body space-y-6 text-stone">
            {event.content.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
          </Reveal>
          <Reveal delay={0.065} className="rounded-panel bg-mist p-8 md:p-12 self-start">
            <h2 className="type-subheading text-pasture">We&apos;d love to see you there</h2>
            <p className="type-body mt-6 text-stone">
              New to Green Pasture Life Church? Let us know you&apos;re coming and
              we&apos;ll help you find your way.
            </p>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default EventDetails;
