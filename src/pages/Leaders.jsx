import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { staggerContainer, staggerItem } from "../lib/motion";
import Eyebrow from "../components/Eyebrow";
import zelyncuenca from "/worshipteam/zelyn.png";
import pastorImg from "../assets/pastor.jpg";
import heroBg from "../assets/fampic.jpg";

/* ── Data ─────────────────────────────────────────────── */

const coreLeaders = [
  { id: 1, name: "Pastor Ruel Del Monte", role: "Senior Pastor", image: pastorImg },
  { id: 2, name: "Florencia Del Monte", role: "Church Administrator", image: null },
  { id: 3, name: "Federico Almario", role: "Associate Pastor", image: null },
  { id: 4, name: "Hazelyn Cuenca", role: "Finance Head", image: zelyncuenca },
  { id: 5, name: "Grace Bombane", role: "Core Leader", image: null },
  { id: 6, name: "Lalaine Dorado", role: "Core Leader", image: null },
  { id: 7, name: "Michelle Angela Rivera", role: "Core Leader", image: null },
  { id: 8, name: "Lorelie Mission", role: "Core Leader", image: null },
];

const boardOfTrustees = {
  top: { id: "bot-1", name: "Ruel L. Del Monte", role: "President", image: pastorImg },
  middle: [
    { id: "bot-2", name: "Florencia G. Del Monte", role: "Vice President", image: null },
    { id: "bot-3", name: "Hazelyn Cuenca", role: "Secretary", image: zelyncuenca },
  ],
  bottom: [
    { id: "bot-4", name: "Grace G. Bombane", role: "Board Member", image: null },
    { id: "bot-5", name: "Lalaine Dorado", role: "Board Member", image: null },
    { id: "bot-6", name: "Michelle Rivera", role: "Board Member", image: null },
    { id: "bot-7", name: "Lorelie Mission", role: "Board Member", image: null },
  ],
};

const initials = (name) =>
  name
    .replace(/^(Pastor|Ptr\.?)\s+/i, "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

/* ── Core leader card ─────────────────────────────────── */

const LeaderCard = ({ member }) => (
  <motion.div variants={staggerItem} className="group">
    <div className="bg-canvas rounded-3xl overflow-hidden border border-mist shadow-sm hover:shadow-xl transition-all duration-400 h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-mist to-meadow-300/30">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-5xl text-pasture/40">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>
      <div className="p-5 text-center">
        <h3 className="font-display text-lg text-pasture leading-snug mb-1">
          {member.name}
        </h3>
        <span className="eyebrow text-wheat">{member.role}</span>
      </div>
    </div>
  </motion.div>
);

/* ── Board pyramid card ───────────────────────────────── */

const PyramidCard = ({ member, isTop, custom }) => (
  <motion.div
    className="flex flex-col items-center"
    variants={{
      hidden: { opacity: 0, y: 30 },
      show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
      }),
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    custom={custom}
  >
    <div
      className={`relative overflow-hidden ${
        isTop
          ? "w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44"
          : "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
      }`}
      style={{
        borderRadius: "0.75rem",
        border: "3px solid var(--color-wheat)",
        boxShadow: "0 0 18px rgba(200,162,75,0.18), 0 6px 24px rgba(0,0,0,0.25)",
      }}
    >
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-pasture">
          <span className="font-display text-3xl text-wheat-300">
            {initials(member.name)}
          </span>
        </div>
      )}
    </div>
    <div className="mt-3 text-center">
      <div
        className="px-3.5 py-1 rounded inline-block"
        style={{ background: "rgba(8,32,8,0.85)", border: "1px solid rgba(200,162,75,0.3)" }}
      >
        <h3 className="text-canvas font-semibold text-xs sm:text-sm tracking-wide uppercase leading-tight">
          {member.name}
        </h3>
      </div>
      <p className="mt-1.5 eyebrow text-wheat">{member.role}</p>
    </div>
  </motion.div>
);

/* ── Page ─────────────────────────────────────────────── */

const Leaders = () => {
  return (
    <div className="bg-canvas">
      <PageHero
        eyebrow="Our Leadership"
        title="Servants who shepherd"
        subtitle="Committed to spiritual growth and Christ-centered service, our leaders guide the church with integrity, humility, and a heart for God's people."
        image={heroBg}
      />

      {/* Core leaders */}
      <section className="py-16 md:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow align="center">Core Leaders</Eyebrow>
            <h2 className="mt-4 font-display font-light text-pasture text-3xl sm:text-4xl md:text-5xl">
              Guiding our church family
            </h2>
            <p className="mt-5 text-stone text-lg leading-relaxed">
              Providing guidance, support, and spiritual oversight — nurturing
              disciples and helping the church fulfill its mission of reaching
              people for Christ.
            </p>
          </Reveal>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {coreLeaders.map((member) => (
              <LeaderCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section
        className="relative overflow-hidden py-16 md:py-24 px-5 sm:px-6"
        style={{
          background:
            "linear-gradient(175deg, #0f3d0f 0%, #174a17 25%, #1e4d2b 50%, #174a17 80%, #0b2d0b 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(200,162,75,0.1) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 80%, rgba(106,168,79,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14 md:mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-block px-8 sm:px-12 py-3 rounded-md"
              style={{
                background:
                  "linear-gradient(135deg, #c8a24b 0%, #e0c581 45%, #c8a24b 75%, #b89740 100%)",
                boxShadow: "0 3px 16px rgba(200,162,75,0.25), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-pasture tracking-wide uppercase">
                Board of Trustees
              </h2>
            </div>
            <p className="mt-4 text-canvas/55 text-xs tracking-[0.2em] uppercase">
              SEC Registered #2024050148957-08
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
            <div className="flex justify-center">
              <PyramidCard member={boardOfTrustees.top} isTop custom={0} />
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-24">
              {boardOfTrustees.middle.map((member, i) => (
                <PyramidCard key={member.id} member={member} isTop={false} custom={i + 1} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {boardOfTrustees.bottom.map((member, i) => (
                <PyramidCard key={member.id} member={member} isTop={false} custom={i + 3} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-20 px-5 sm:px-8 bg-mist">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-ink/75 leading-relaxed mb-7">
            Through prayer, biblical leadership, and a passion for ministry, our
            leaders equip believers, strengthen families, and help build a strong
            spiritual community that brings glory to God.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pasture text-canvas font-semibold py-3.5 px-7 rounded-full hover:bg-meadow transition-colors"
          >
            Get in touch <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Leaders;
