import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { events } from "../data/mockdata";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Eyebrow from "../components/Eyebrow";
import MediaPanel from "../components/MediaPanel";
import Reveal from "../components/Reveal";
import heroBg from "../assets/prayergathering.jpg";

const Events = () => {
  return (
    <div className="bg-canvas min-h-screen [&_.page-hero]:pb-16 max-md:[&_.page-hero]:pt-[calc(var(--header-height)+1rem)] [&_.page-hero_h1]:text-[clamp(3.75rem,8.4vw,7.5rem)]">
      <PageHero
        eyebrow="Our Rhythm"
        title="Events & gatherings"
        subtitle="The weekly rhythms of our church family. Come and be part of what God is doing among us."
        image={heroBg}
        ratio="4 / 3"
      />

      <Section compact>
        <div className="space-y-16 lg:space-y-20">
          {events.map((event, index) => {
            const [day, time] = event.date.split(" – ");
            return (
              <Reveal key={event.id} as="article">
                <Link
                  to={`/events/${event.slug}`}
                  className="group grid items-center gap-8 rounded-panel md:grid-cols-2 md:gap-x-12 lg:gap-x-16"
                >
                  <div className={`min-w-0 ${index % 2 ? "md:col-start-2 md:row-start-1" : ""}`}>
                    <Eyebrow>{event.category || "Church Event"}</Eyebrow>
                    <h2 className="type-subheading mt-4 text-pasture">{event.title}</h2>
                    <p className="mt-6 font-serif font-normal text-ink">
                      <span className="block text-[clamp(1.5rem,2.3vw,2rem)] leading-tight tracking-[-0.035em]">{day}</span>{" "}
                      <span className="mt-1 block text-[clamp(3.5rem,5.5vw,5rem)] leading-[1.1] tracking-[-0.055em] tabular-nums">
                        <span className="text-wheat-700 text-subheading">–</span>{" "}{time}
                      </span>
                    </p>
                    <div className="type-body mt-6 space-y-4 text-stone">
                      {event.content.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    <span className="button button--secondary mt-6 group-hover:bg-mist">
                      View details <ArrowRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                  <MediaPanel src={event.image} alt={event.title} loading="eager" ratio={index < 2 ? "1 / 1" : "6 / 5"} className={index % 2 ? "md:col-start-1 md:row-start-1" : ""} />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default Events;
