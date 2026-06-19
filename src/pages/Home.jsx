import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { events, ministries } from "../data/mockdata";
import { ArrowRight, ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import { staggerContainer, staggerItem } from "../lib/motion";
import Eyebrow from "../components/Eyebrow";
import PastureHorizon from "../components/PastureHorizon";
import pastor from "../assets/pastor.jpg";
import banner from "../assets/banner.jpg";

const heroText = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const latestEvents = events.slice(0, 3);

  return (
    <div className="w-full bg-canvas">
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative overflow-hidden bg-moss min-h-[92vh] flex items-center">
        {/* Full-bleed background image */}
        <img
          src={banner}
          alt="Green Pasture Life Church gathered in worship"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Green wash for legibility + brand tone (not a flat black scrim) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,46,26,0.78) 0%, rgba(15,46,26,0.45) 35%, rgba(15,46,26,0.55) 70%, rgba(15,46,26,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 55% at 85% 10%, rgba(200,162,75,0.22) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 pt-28 pb-36 sm:pb-44 md:pb-52 text-center">
          <motion.div variants={heroText} initial="hidden" animate="show">
            <motion.div variants={heroItem}>
              <Eyebrow tone="light" align="center">
                Psalm 23 · Our Name
              </Eyebrow>
            </motion.div>
            <motion.h1
              variants={heroItem}
              className="mt-6 font-display font-light text-canvas text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl tracking-tight"
              style={{ textShadow: "0 2px 24px rgba(11,29,11,0.45)" }}
            >
              The Lord is my{" "}
              <span className="italic text-wheat-300">shepherd,</span> I lack
              nothing.
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-6 text-lg sm:text-xl text-canvas/90 max-w-xl mx-auto leading-relaxed"
            >
              Green Pasture Life Church — a family in San Pablo City, Laguna,
              growing together in the grace of Jesus Christ.
            </motion.p>
            <motion.div
              variants={heroItem}
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-wheat text-moss px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:bg-canvas hover:-translate-y-0.5"
              >
                Join Us This Sunday
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-canvas border border-canvas/30 hover:border-wheat hover:text-wheat transition-colors duration-300"
              >
                Our Story
              </Link>
            </motion.div>
            <motion.p
              variants={heroItem}
              className="mt-8 text-xs tracking-[0.2em] uppercase text-canvas/50"
            >
              SEC Registered #2024050148957-08
            </motion.p>
          </motion.div>
        </div>

        {/* Signature horizon */}
        <div className="absolute bottom-0 inset-x-0">
          <PastureHorizon variant="hero" className="h-24 sm:h-32 md:h-40 animate-drift" />
        </div>
      </section>

      {/* ───────────────── SERVICE CALLOUT ───────────────── */}
      <div className="bg-pasture">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 text-canvas text-center md:text-left">
          <p className="flex items-center gap-2.5 font-medium">
            <Clock size={18} className="text-wheat flex-shrink-0" />
            Sunday Worship Celebration · 8:30 AM – 10:00 AM
          </p>
          <span className="hidden md:block h-4 w-px bg-canvas/20" />
          <p className="flex items-center gap-2.5 font-medium">
            <MapPin size={18} className="text-wheat flex-shrink-0" />
            Sitio Ilaya, Brgy. Santisimo Rosario, San Pablo City, Laguna
          </p>
        </div>
      </div>

      {/* ───────────────── PASTOR'S WELCOME ───────────────── */}
      <section className="py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="md:col-span-5">
            <div className="relative max-w-xs mx-auto md:max-w-none">
              <div className="arch overflow-hidden shadow-2xl aspect-[4/5] border-[6px] border-mist">
                <img
                  src={pastor}
                  alt="Pastor Ruel Del Monte"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-2xl text-pasture">Ruel Del Monte</p>
                <p className="eyebrow text-wheat mt-1">Senior Pastor</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <Eyebrow>A Personal Welcome</Eyebrow>
            <h2 className="mt-5 font-display font-light text-pasture text-3xl sm:text-4xl md:text-5xl leading-tight">
              The church is more than a building — it is a family.
            </h2>
            <blockquote className="mt-7 font-serif italic text-stone text-lg sm:text-xl leading-relaxed border-l-2 border-wheat pl-6">
              “Our desire is to bring people to Christ, nurture them in His Word,
              and equip them to become fully trained disciples who will serve God
              faithfully in every season of life.”
            </blockquote>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-pasture hover:text-meadow transition-colors"
            >
              Read our full story
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── UPCOMING EVENTS ───────────────── */}
      <section className="bg-mist py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Eyebrow>Gather Together</Eyebrow>
              <h2 className="mt-4 font-display font-light text-pasture text-3xl sm:text-4xl md:text-5xl">
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 font-semibold text-meadow hover:text-pasture transition-colors"
            >
              View all events
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {latestEvents.map((event) => (
              <motion.div key={event.id} variants={staggerItem}>
                <Link
                  to={`/events/${event.slug}`}
                  className="group block bg-canvas rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-meadow mb-3">
                      <Calendar size={14} /> {event.category}
                    </div>
                    <h3 className="font-display text-xl text-pasture leading-snug mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-stone mb-4">{event.date}</p>
                    <p className="text-[15px] text-ink/70 line-clamp-2 leading-relaxed">
                      {event.content}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────────── MINISTRIES PREVIEW ───────────────── */}
      <section className="py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow align="center">Belong Here</Eyebrow>
            <h2 className="mt-4 font-display font-light text-pasture text-3xl sm:text-4xl md:text-5xl">
              Find your place to belong
            </h2>
            <p className="mt-5 text-stone text-lg leading-relaxed">
              From the youngest child to every season of life, there is a place
              for you to grow, connect, and serve.
            </p>
          </Reveal>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {ministries.slice(0, 3).map((min) => (
              <motion.div key={min.id} variants={staggerItem}>
                <Link
                  to={`/ministries/${min.slug}`}
                  className="group relative block h-80 rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={min.image}
                    alt={min.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss/85 via-moss/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl text-canvas mb-1">
                      {min.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-wheat-300 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <Reveal className="text-center mt-12">
            <Link
              to="/ministries"
              className="group inline-flex items-center gap-2 bg-pasture text-canvas px-7 py-3.5 rounded-full font-semibold hover:bg-meadow transition-colors"
            >
              Explore all ministries
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── INVITATION CTA ───────────────── */}
      <section className="relative bg-moss overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(106,168,79,0.25) 0%, transparent 65%)",
          }}
        />
        <Reveal className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-20 md:py-24 text-center">
          <Eyebrow align="center" tone="light">
            Romans 5:8
          </Eyebrow>
          <h2 className="mt-5 font-display font-light text-canvas text-3xl sm:text-4xl md:text-5xl leading-tight">
            You are welcome here, just as you are.
          </h2>
          <p className="mt-5 text-meadow-300/90 text-lg leading-relaxed">
            Our mission is to love and care for people so they may experience
            God&apos;s salvation through Jesus Christ.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 bg-wheat text-moss px-8 py-3.5 rounded-full font-semibold hover:bg-canvas transition-colors"
          >
            Plan your visit
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
