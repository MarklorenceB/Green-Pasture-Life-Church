import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../data/mockdata";
import { ArrowLeft, Calendar, Tag, MapPin, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";

const EventDetails = () => {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug || String(e.id) === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-canvas flex flex-col items-center justify-center text-center px-5">
        <h1 className="font-display text-3xl text-pasture">Event not found</h1>
        <p className="mt-4 text-stone">The event you are looking for does not exist.</p>
        <Link
          to="/events"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-meadow hover:text-pasture transition-colors"
        >
          <ArrowLeft size={18} /> Back to all events
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-canvas">
      {/* Article-style hero */}
      <header className="relative h-[56vh] min-h-[24rem] overflow-hidden bg-moss">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moss via-moss/55 to-moss/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 h-full flex flex-col">
          <div className="pt-24 sm:pt-28">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-canvas/80 hover:text-wheat transition-colors text-sm font-medium"
            >
              <ArrowLeft size={17} /> All events
            </Link>
          </div>
          <div className="mt-auto pb-10 max-w-3xl">
            <Eyebrow tone="light">{event.category || "Gathering"}</Eyebrow>
            <h1 className="mt-4 font-display font-light text-canvas text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              {event.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        {/* Key info */}
        <Reveal className="flex flex-wrap gap-3 mb-10">
          <span className="inline-flex items-center gap-2 bg-mist text-pasture font-semibold text-sm px-4 py-2 rounded-full">
            <Calendar size={16} className="text-wheat" /> {event.date || "TBD"}
          </span>
          <span className="inline-flex items-center gap-2 bg-mist text-pasture font-semibold text-sm px-4 py-2 rounded-full">
            <Tag size={16} className="text-wheat" /> {event.category || "General"}
          </span>
          <span className="inline-flex items-center gap-2 bg-mist text-pasture font-semibold text-sm px-4 py-2 rounded-full">
            <MapPin size={16} className="text-wheat" /> Church Campus
          </span>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.05}>
          {event.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-ink/75 text-lg leading-relaxed mb-5">
              {para}
            </p>
          ))}
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1} className="mt-12 pt-10 border-t border-mist text-center">
          <h3 className="font-display text-2xl sm:text-3xl text-pasture mb-3">
            We&apos;d love to see you there
          </h3>
          <p className="text-stone mb-7 max-w-md mx-auto">
            New to Green Pasture Life Church? Let us know you&apos;re coming and
            we&apos;ll help you find your way.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pasture text-canvas font-semibold py-3.5 px-7 rounded-full hover:bg-meadow transition-colors"
          >
            Plan your visit <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default EventDetails;
