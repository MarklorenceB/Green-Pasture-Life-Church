import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ministries } from "../data/mockdata";
import PageHero from "../components/PageHero";
import { staggerContainer, staggerItem } from "../lib/motion";
import heroBg from "../assets/sundayservice.jpg";

const Ministries = () => {
  return (
    <div className="bg-canvas min-h-screen">
      <PageHero
        eyebrow="Get Involved"
        title="Our ministries & groups"
        subtitle="There is a place for you here. Explore the ways you can connect, grow, and serve within our church family and community."
        image={heroBg}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {ministries.map((ministry) => (
            <motion.div key={ministry.id} variants={staggerItem}>
              <Link
                to={`/ministries/${ministry.slug}`}
                className="group flex flex-col h-full bg-canvas rounded-3xl overflow-hidden border border-mist shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss/30 to-transparent" />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl text-pasture mb-3 leading-snug">
                    {ministry.title}
                  </h3>
                  <p className="text-[15px] text-ink/70 leading-relaxed line-clamp-3 flex-1">
                    {ministry.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-meadow group-hover:text-pasture transition-colors">
                    Explore details
                    <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

export default Ministries;
