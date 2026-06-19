import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { events } from "../data/mockdata";
import PageHero from "../components/PageHero";
import { staggerContainer, staggerItem } from "../lib/motion";
import heroBg from "../assets/prayergathering.jpg";

const Events = () => {
  return (
    <div className="bg-canvas min-h-screen">
      <PageHero
        eyebrow="Our Rhythm"
        title="Events & gatherings"
        subtitle="The weekly rhythms of our church family. Come and be part of what God is doing among us."
        image={heroBg}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={staggerItem}>
              <Link
                to={`/events/${event.slug}`}
                className="group grid md:grid-cols-12 bg-canvas rounded-3xl overflow-hidden border border-mist shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="md:col-span-5 h-60 md:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-7 p-7 sm:p-9 flex flex-col justify-center">
                  <span className="inline-flex w-fit items-center text-xs font-semibold uppercase tracking-widest text-meadow bg-mist px-3 py-1.5 rounded-full mb-4">
                    {event.category || "Church Event"}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-pasture leading-snug mb-3">
                    {event.title}
                  </h2>
                  <p className="flex items-center gap-2 text-sm text-stone font-medium mb-4">
                    <Calendar size={16} className="text-wheat" /> {event.date}
                  </p>
                  <p className="text-[15px] text-ink/70 leading-relaxed line-clamp-2">
                    {event.content}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-pasture group-hover:gap-3 transition-all">
                    View details <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
