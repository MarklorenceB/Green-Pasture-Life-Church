import React from "react";
import { useParams, Link } from "react-router-dom";
import { ministries } from "../data/mockdata";
import { ArrowLeft, Clock, User, Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";

const MinistryDetail = () => {
  const { slug } = useParams();
  const ministry = ministries.find(
    (m) => m.slug === slug || String(m.id) === slug
  );

  if (!ministry) {
    return (
      <div className="min-h-screen bg-canvas flex flex-col items-center justify-center text-center px-5">
        <h1 className="font-display text-3xl text-pasture">Ministry not found</h1>
        <p className="mt-4 text-stone">
          The ministry you are looking for does not exist or the link is
          incorrect.
        </p>
        <Link
          to="/ministries"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-meadow hover:text-pasture transition-colors"
        >
          <ArrowLeft size={18} /> Back to all ministries
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-canvas">
      {/* Article-style hero */}
      <header className="relative h-[58vh] min-h-[26rem] overflow-hidden bg-moss">
        <img
          src={ministry.image}
          alt={ministry.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moss via-moss/55 to-moss/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 h-full flex flex-col">
          <div className="pt-24 sm:pt-28">
            <Link
              to="/ministries"
              className="inline-flex items-center gap-2 text-canvas/80 hover:text-wheat transition-colors text-sm font-medium"
            >
              <ArrowLeft size={17} /> All ministries
            </Link>
          </div>
          <div className="mt-auto pb-10 max-w-3xl">
            <Eyebrow tone="light">Ministry</Eyebrow>
            <h1 className="mt-4 font-display font-light text-canvas text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              {ministry.title}
            </h1>
            <p className="mt-5 font-serif italic text-meadow-300/90 text-lg sm:text-xl leading-relaxed">
              {ministry.description}
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        {/* Details */}
        <Reveal className="grid sm:grid-cols-2 gap-5 mb-12">
          <div className="flex items-start gap-4 bg-mist rounded-2xl p-6">
            <User size={22} className="text-meadow flex-shrink-0 mt-0.5" />
            <div>
              <p className="eyebrow text-wheat mb-1">Coordinator</p>
              <p className="text-ink/80">{ministry.coordinator || "Church Office"}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-mist rounded-2xl p-6">
            <Clock size={22} className="text-meadow flex-shrink-0 mt-0.5" />
            <div>
              <p className="eyebrow text-wheat mb-1">Meeting Time</p>
              <p className="text-ink/80">{ministry.meetingTime || "See church calendar"}</p>
            </div>
          </div>
        </Reveal>

        {/* Full content */}
        <Reveal delay={0.05} className="max-w-3xl">
          {ministry.fullContent.split("\n\n").map((para, i) => (
            <p key={i} className="text-ink/75 text-lg leading-relaxed mb-5">
              {para}
            </p>
          ))}

          <a
            href={`mailto:${ministry.coordinatorEmail || "rueldelmonte4@gmail.com"}`}
            className="mt-8 inline-flex items-center gap-2.5 bg-pasture text-canvas font-semibold py-3.5 px-7 rounded-full hover:bg-meadow transition-colors"
          >
            <Mail size={18} /> Contact the coordinator
          </a>
        </Reveal>
      </div>
    </div>
  );
};

export default MinistryDetail;
