import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Globe,
  Target,
  Calendar,
  Cross,
  Flame,
  Crown,
} from "lucide-react";
import { serviceSchedule } from "../data/mockdata";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { staggerContainer, staggerItem } from "../lib/motion";
import Eyebrow from "../components/Eyebrow";
import pastor from "../assets/pastor.jpg";
import historic from "../assets/fampic.jpg";
import heroBg from "../assets/caregroup.jpg";

const pillars = [
  {
    Icon: Crown,
    title: "The Triune God",
    body: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. He is the Creator, Sustainer, and Ruler of all things, worthy of our worship and obedience.",
    verse: "Deuteronomy 6:4",
  },
  {
    Icon: BookOpen,
    title: "Scripture Alone",
    body: "We believe the Bible is the inspired, infallible, and authoritative Word of God. It is the final authority for our faith, doctrine, and daily life.",
    verse: "2 Timothy 3:16-17",
  },
  {
    Icon: Cross,
    title: "Jesus Christ",
    body: "We believe Jesus Christ is the eternal Son of God, fully God and fully man. He lived a sinless life, died for our sins, rose again, and is the only mediator between God and humanity.",
    verse: "John 14:6",
  },
  {
    Icon: Heart,
    title: "Salvation by Grace",
    body: "We believe salvation is the gift of God's grace, received through repentance and faith in Jesus Christ alone, not by works. Through Him we receive forgiveness and eternal life.",
    verse: "Ephesians 2:8-9",
  },
  {
    Icon: Flame,
    title: "The Holy Spirit",
    body: "We believe the Holy Spirit gives new life, empowers believers for holy living, and enables us to grow spiritually and be effective witnesses for Christ.",
    verse: "Acts 1:8",
  },
  {
    Icon: Globe,
    title: "The Mission of the Church",
    body: "We believe the Church is called to proclaim the Gospel, make disciples, and demonstrate God's love to all nations for His glory.",
    verse: "Matthew 28:19-20",
  },
];

const About = () => {
  return (
    <div className="bg-canvas">
      <PageHero
        eyebrow="Our Story · Our People"
        title="Rooted in faith, growing in grace"
        subtitle="Committed to community, and to bringing people into a living relationship with Jesus Christ."
        image={heroBg}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24 space-y-20 md:space-y-28">
        {/* THEME VERSE — quiet waters feature */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <Eyebrow align="center">Psalm 23:1–2 (NIV)</Eyebrow>
          <blockquote className="mt-6 font-display font-light italic text-pasture text-2xl sm:text-3xl md:text-4xl leading-[1.35]">
            “The Lord is my shepherd, I lack nothing. He makes me lie down in
            green pastures, He leads me beside quiet waters, He refreshes my
            soul.”
          </blockquote>
          <p className="mt-6 eyebrow text-wheat">GPLC Theme Verse</p>
        </Reveal>

        {/* PASTOR PROFILE */}
        <section className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="md:col-span-5">
            <div className="relative max-w-xs mx-auto md:max-w-none">
              <div className="arch overflow-hidden shadow-2xl aspect-[4/5] border-[6px] border-mist">
                <img src={pastor} alt="Pastor Ruel Del Monte" className="w-full h-full object-cover" />
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-2xl text-pasture">Ruel Del Monte</p>
                <p className="eyebrow text-wheat mt-1">Senior Pastor</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <Eyebrow>A Word from Pastor Ruel</Eyebrow>
            <p className="mt-6 font-serif italic text-stone text-lg sm:text-xl leading-relaxed border-l-2 border-wheat pl-6">
              “I believe the church is more than a building — it is a family. Our
              desire is to bring people to Christ, nurture them in His Word, and
              equip them to become fully trained disciples who will serve God
              faithfully in every season of life.”
            </p>
            <p className="text-sm text-stone/80 mt-4 italic pl-6">
              2 Timothy 2:2 — “And the things you have heard me say in the
              presence of many witnesses entrust to reliable people who will also
              be qualified to teach others.”
            </p>
            <Link
              to="/contact"
              className="mt-7 ml-6 inline-flex items-center gap-2 bg-pasture text-canvas font-semibold py-3 px-6 rounded-full hover:bg-meadow transition-colors"
            >
              Connect with Pastor Ruel
            </Link>
          </Reveal>
        </section>

        {/* MISSION & VISION */}
        <section className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Reveal className="bg-mist rounded-3xl p-8 md:p-10">
            <Globe size={32} className="text-meadow mb-5" />
            <h3 className="font-display text-2xl md:text-3xl text-pasture mb-4">Our Mission</h3>
            <p className="text-ink/80 text-lg leading-relaxed">
              “To love and care for people so they may experience God's salvation
              through Jesus Christ.”
            </p>
            <p className="text-sm text-stone mt-4 italic">
              Romans 5:8 — “But God demonstrates His own love for us in this:
              While we were still sinners, Christ died for us.”
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-pasture text-canvas rounded-3xl p-8 md:p-10">
            <Target size={32} className="text-wheat mb-5" />
            <h3 className="font-display text-2xl md:text-3xl mb-4">Our Vision</h3>
            <p className="text-canvas/90 text-lg leading-relaxed">
              “A church fully committed to bringing people to Christ, nurturing
              them, and empowering them to be effective witnesses in their
              families, communities, and to the whole world.”
            </p>
            <p className="text-sm text-meadow-300/80 mt-4 italic">
              Acts 1:8 — “You will be My witnesses in Jerusalem, in all Judea and
              Samaria, and to the ends of the earth.”
            </p>
          </Reveal>
        </section>

        {/* CORE BELIEFS */}
        <section>
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow align="center">What We Believe</Eyebrow>
            <h2 className="mt-4 font-display font-light text-pasture text-3xl sm:text-4xl md:text-5xl">
              The pillars of our faith
            </h2>
          </Reveal>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {pillars.map(({ Icon, title, body, verse }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="bg-canvas border border-mist rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mist mb-5">
                  <Icon size={22} className="text-pasture" />
                </span>
                <h3 className="font-display text-xl text-pasture mb-2">{title}</h3>
                <p className="text-[15px] text-ink/70 leading-relaxed">{body}</p>
                <p className="text-xs text-wheat font-semibold tracking-wide mt-4 uppercase">
                  {verse}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* HISTORY */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="arch overflow-hidden shadow-2xl aspect-[4/5] border-[6px] border-mist">
              <img src={historic} alt="The Green Pasture Life Church family" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Since July 25, 2008</Eyebrow>
            <h2 className="mt-4 font-display font-light text-pasture text-3xl sm:text-4xl mb-6">
              Our history
            </h2>
            <div className="text-ink/75 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                Our church began as an outreach in Barangay Santisimo Rosario, San
                Pablo City, Laguna. The ministry started through an evangelistic
                crusade, followed by intentional follow-up and discipleship. From
                there, small groups were formed in different areas of Santisimo.
                By God's grace, these small gatherings continued to grow as more
                people came to know Christ.
              </p>
              <p>
                On July 25, 2008, a greater work officially began as the ministry
                was established as a church. What was once known as Frontline
                Worship Center San Isidro, also recognized as Greenbox, has now
                been given a new name: Green Pasture Life Church Inc.
              </p>
              <p>
                The mission remains the same, but we believe the Lord is leading
                us into a greater purpose and wider harvest. We believe that the
                true Church is not defined by a structure, but by the people of
                God united together for His glory.
              </p>
              <p className="font-semibold text-pasture font-serif italic text-lg">
                We thank the Lord for His faithfulness through the years. To Him
                be all the glory.
              </p>
            </div>
          </Reveal>
        </section>
      </div>

      {/* SERVICE SCHEDULE BAND */}
      <section className="relative bg-moss overflow-hidden">
        <Reveal className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <div className="text-center mb-12">
            <Eyebrow align="center" tone="light">Come and Worship</Eyebrow>
            <h2 className="mt-4 font-display font-light text-canvas text-3xl sm:text-4xl md:text-5xl">
              Join us this week
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceSchedule.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <Calendar size={26} className="mx-auto mb-3 text-wheat" />
                <p className="font-display text-2xl text-canvas">{s.day}</p>
                <p className="text-meadow-300 font-medium mt-1">{s.time}</p>
                <p className="text-xs text-canvas/55 mt-2 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default About;
