import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

import marklorence from "/worshipteam/marklorence.png";
import zelyncuenca from "/worshipteam/zelyn.png";
import pastorImg from "../assets/pastor.jpg";
import heroBg from "../assets/fampic.jpg";

/* ── Data ────────────────────────────────────────────────── */

const coreLeaders = [
  {
    id: 1,
    name: "Pastor Ruel Del Monte",
    role: "Senior Pastor",
    image: pastorImg,
  },
  {
    id: 2,
    name: "Florencia Del Monte",
    role: "Church Administrator",
    image: "https://placehold.co/400x400/6aa84f/1a531a?text=Florencia",
  },
  {
    id: 3,
    name: "Federico Almario",
    role: "Associate Pastor",
    image: "https://placehold.co/400x400/1a531a/ffffff?text=Federico",
  },
  {
    id: 4,
    name: "Hazelyn Cuenca",
    role: "Finance Head",
    image: zelyncuenca,
  },
  {
    id: 5,
    name: "Grace Bombane",
    role: "Core Leader",
    image: "https://placehold.co/400x400/6aa84f/1a531a?text=Grace",
  },
  {
    id: 6,
    name: "Lalaine Dorado",
    role: "Core Leader",
    image: "https://placehold.co/400x400/1a531a/ffffff?text=Lalaine",
  },
  {
    id: 7,
    name: "Michelle Angela Rivera",
    role: "Core Leader",
    image: "https://placehold.co/400x400/1a531a/ffffff?text=Michelle",
  },
  {
    id: 8,
    name: "Lorelie Mission",
    role: "Core Leader",
    image: "https://placehold.co/400x400/1a531a/ffffff?text=Lorelie",
  },
];

const boardOfTrustees = {
  top: {
    id: "bot-1",
    name: "Ruel L. Del Monte",
    role: "President",
    image: pastorImg,
  },
  middle: [
    {
      id: "bot-2",
      name: "Florencia G. Del Monte",
      role: "Vice President",
      image: "https://placehold.co/400x400/6aa84f/1a531a?text=Florencia",
    },
    {
      id: "bot-3",
      name: "Hazelyn Cuenca",
      role: "Secretary",
      image: zelyncuenca,
    },
  ],
  bottom: [
    {
      id: "bot-4",
      name: "Grace G. Bombane",
      role: "Board Member",
      image: "https://placehold.co/400x400/6aa84f/1a531a?text=Grace",
    },
    {
      id: "bot-5",
      name: "Lalaine Dorado",
      role: "Board Member",
      image: "https://placehold.co/400x400/1a531a/ffffff?text=Lalaine",
    },
    {
      id: "bot-6",
      name: "Michelle Rivera",
      role: "Board Member",
      image: "https://placehold.co/400x400/1a531a/ffffff?text=Michelle",
    },
    {
      id: "bot-7",
      name: "Lorelie Mission",
      role: "Board Member",
      image: "https://placehold.co/400x400/1a531a/ffffff?text=Lorelie",
    },
  ],
};

/* ── Animation ───────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

/* ── Core Leader Card ────────────────────────────────────── */

const LeaderCard = ({ member }) => (
  <motion.div variants={itemVariants} className="group">
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 h-full border border-gray-100">
      {/* Photo */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#f0f7ed] to-[#e4f0df]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x500/1a531a/ffffff?text=${member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}`;
          }}
        />
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        <h3 className="text-base sm:text-lg font-bold text-[#1a531a] leading-snug mb-1.5">
          {member.name}
        </h3>
        <span className="inline-block text-xs sm:text-sm font-medium text-[#6aa84f] tracking-wide">
          {member.role}
        </span>
      </div>
    </div>
  </motion.div>
);

/* ── Pyramid Card (Board of Trustees) ────────────────────── */

const PyramidCard = ({ member, isTop, custom }) => (
  <motion.div
    className="flex flex-col items-center"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    custom={custom}
  >
    <div
      className={`relative ${
        isTop
          ? "w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44"
          : "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
      } rounded-lg overflow-hidden`}
      style={{
        border: "3px solid #c9a84e",
        boxShadow:
          "0 0 16px rgba(200,168,78,0.15), 0 6px 24px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/400x400/1a531a/ffffff?text=${member.name
            .split(" ")
            .map((n) => n[0])
            .join("")}`;
        }}
      />
    </div>
    <div className="mt-2.5 text-center">
      <div
        className="px-3.5 py-1 rounded inline-block"
        style={{
          background: "rgba(8,32,8,0.85)",
          border: "1px solid rgba(200,168,78,0.25)",
        }}
      >
        <h3 className="text-white font-semibold text-xs sm:text-sm tracking-wide uppercase leading-tight">
          {member.name}
        </h3>
      </div>
      <p
        className="mt-1 font-semibold text-[11px] sm:text-xs tracking-widest uppercase"
        style={{ color: "#c9a84e" }}
      >
        {member.role}
      </p>
    </div>
  </motion.div>
);

/* ── Main Page ───────────────────────────────────────────── */

const Leaders = () => {
  return (
    <div className="min-h-screen bg-[#f7fbf5]">
      {/* ═══════════════════════════════════════════════════
          HERO BANNER
          ═══════════════════════════════════════════════════ */}
      <section
        className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url("${heroBg}")`,
        }}
      >
        <motion.div
          className="relative z-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Dedicated Leadership
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Committed to spiritual growth and Christ-centered service, our
            leaders faithfully guide the church with integrity, humility, and a
            heart for God's people.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CORE LEADERS — Grid
          ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 md:py-22 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-full bg-[#6aa84f]/15">
                <Users size={20} className="text-[#6aa84f]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a531a]">
                Core Leaders
              </h2>
            </div>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Providing guidance, support, and spiritual oversight — nurturing
              disciples and helping the church fulfill its mission of reaching
              people for Christ.
            </p>
          </div>

          {/* Leaders Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7"
            variants={containerVariants}
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

      {/* ═══════════════════════════════════════════════════
          BOARD OF TRUSTEES — Pyramid
          ═══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-14 sm:py-18 md:py-22 lg:py-24 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(175deg, #0f3d0f 0%, #174a17 25%, #1a531a 45%, #1f5c1f 65%, #143e14 85%, #0b2d0b 100%)",
        }}
      >
        {/* Atmosphere layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(106,168,79,0.1) 0%, transparent 70%), " +
              "radial-gradient(ellipse 50% 40% at 85% 75%, rgba(106,168,79,0.08) 0%, transparent 70%), " +
              "radial-gradient(ellipse 80% 30% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            className="text-center mb-10 sm:mb-14 md:mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-block px-7 sm:px-10 md:px-14 py-2.5 sm:py-3 rounded-md"
              style={{
                background:
                  "linear-gradient(135deg, #c9a84e 0%, #dbbf6a 40%, #c9a84e 70%, #b89740 100%)",
                boxShadow:
                  "0 3px 16px rgba(200,168,78,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#1a531a] tracking-wider uppercase">
                Board of Trustees
              </h2>
            </div>
            <p className="mt-3 text-white/60 text-xs sm:text-sm max-w-xl mx-auto">
              SEC Registered # 2024050148957-08
            </p>
          </motion.div>

          {/* Pyramid */}
          <div className="flex flex-col items-center gap-7 sm:gap-9 md:gap-11">
            {/* Row 1: President */}
            <div className="flex justify-center">
              <PyramidCard
                member={boardOfTrustees.top}
                isTop={true}
                custom={0}
              />
            </div>

            {/* Row 2: VP & Secretary */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-24">
              {boardOfTrustees.middle.map((member, i) => (
                <PyramidCard
                  key={member.id}
                  member={member}
                  isTop={false}
                  custom={i + 1}
                />
              ))}
            </div>

            {/* Row 3: Board Members */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {boardOfTrustees.bottom.map((member, i) => (
                <PyramidCard
                  key={member.id}
                  member={member}
                  isTop={false}
                  custom={i + 3}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          Footer CTA
          ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-14 md:py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6">
            Through prayer, biblical leadership, and a passion for ministry, our
            leaders equip believers, strengthen families, and help build a strong
            spiritual community that brings glory to God.
          </p>
          <Link
            to="/contact"
            className="inline-block px-7 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base bg-[#6aa84f] hover:bg-[#1a531a]"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Leaders;
