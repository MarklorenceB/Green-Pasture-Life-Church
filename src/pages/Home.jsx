import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { events, ministries } from "../data/mockdata";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import pastor from "../assets/pastor.jpg";
import customBanner from "../assets/banner.jpg";

// Color Palette Variables: Primary: #1a531a (Deep Forest Green), Secondary: #6aa84f (Bright Lime Green)

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Home = () => {
  const heroImage = customBanner;
  const latestEvents = events.slice(0, 3);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] bg-cover bg-center flex items-center justify-center text-center px-4 shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("${heroImage}")`,
        }}
      >
        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-white px-4"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 tracking-tight leading-tight"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Green Pasture Life Church
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 font-light max-w-3xl mx-auto"
          >
            Your Church, Your Family.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/contact"
              style={{ backgroundColor: "#6aa84f" }}
              className="hover:bg-[#1a531a] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl font-bold transition duration-300 shadow-xl ring-4 ring-white/30"
            >
              Join Us This Sunday
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Service Time Callout */}
      <div
        className="py-3 sm:py-4 shadow-xl"
        style={{ backgroundColor: "#1a531a" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-around items-center gap-3 sm:gap-4 text-center text-white">
          <p className="flex items-center gap-2 font-semibold text-sm sm:text-base">
            <Clock size={18} className="text-[#6aa84f] flex-shrink-0" />
            <span>Sunday Worship: 08:00 AM</span>
          </p>
          <p className="flex items-center gap-2 font-semibold text-sm sm:text-base">
            <MapPin size={18} className="text-[#6aa84f] flex-shrink-0" />
            <span className="text-center md:text-left">
              Bgry, Santisimo Rosario, City of San Pablo, Laguna Philippines
            </span>
          </p>
        </div>
      </div>

      {/* PASTOR'S WELCOME */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image Column */}
          <div className="md:col-span-1 text-center">
            <img
              src={pastor}
              alt="Senior Pastor Ruel Delmonte"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover shadow-2xl border-4 border-[#6aa84f]"
            />
            <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-gray-800">
              Ruel Delmonte
            </p>
            <p className="text-lg sm:text-xl" style={{ color: "#1a531a" }}>
              Senior Pastor
            </p>
          </div>

          {/* Message Column */}
          <div className="md:col-span-2 text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 border-b-2 pb-2 sm:pb-3"
              style={{ color: "#1a531a", borderColor: "#6aa84f" }}
            >
              A Personal Welcome
            </h2>
            <blockquote
              className="italic text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed border-l-4 pl-4 sm:pl-6"
              style={{ borderColor: "#6aa84f" }}
            >
              "We are so glad you are here. At Green Pasture Life Church, we
              believe in the transformative power of the Gospel. Whether you
              have been a believer for years or are just asking questions, you
              have a place here. Come as you are, and experience the love of
              Christ in a community that cares. We look forward to meeting you!"
            </blockquote>
            <Link
              to="/about"
              style={{ color: "#1a531a" }}
              className="mt-4 sm:mt-6 inline-block font-semibold text-base sm:text-lg hover:text-[#6aa84f] transition duration-300"
            >
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS PREVIEW */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
            <div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ color: "#1a531a" }}
              >
                Upcoming Events
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
                Don't miss out on what's happening in our community.
              </p>
            </div>
            <Link
              to="/events"
              className="font-semibold flex items-center gap-2 hover:gap-3 transition-all text-base sm:text-lg"
              style={{ color: "#6aa84f" }}
            >
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            {latestEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.02] border-t-4 border-[#6aa84f]/50"
              >
                <div className="h-44 sm:h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-2"
                    style={{ color: "#6aa84f" }}
                  >
                    <Calendar size={14} className="sm:w-4 sm:h-4" />{" "}
                    {event.date}
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 leading-tight"
                    style={{ color: "#1a531a" }}
                  >
                    {event.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 mb-3 sm:mb-4 text-sm sm:text-base">
                    {event.content}
                  </p>
                  <Link
                    to={`/events/${event.id}`}
                    className="font-semibold transition text-sm sm:text-base"
                    style={{ color: "#1a531a" }}
                  >
                    Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MINISTRIES PREVIEW */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12"
            style={{ color: "#1a531a" }}
          >
            Find Your Place to Belong
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ministries.slice(0, 3).map((min) => (
              <Link
                to={`/ministries/${min.id}`}
                key={min.id}
                className="group relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >
                <img
                  src={min.image}
                  alt={min.title}
                  className="w-full h-full object-cover transition group-hover:scale-110 duration-500"
                />
                <div
                  className="absolute inset-0 bg-black/40 flex items-end justify-start p-4 sm:p-5 md:p-6 transition duration-500"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold border-b-2 border-[#6aa84f] transition duration-300 group-hover:border-white">
                    {min.title}
                  </h3>
                </div>
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: "#1a531a99" }}
                ></div>
              </Link>
            ))}
          </div>
          <Link
            to="/ministries"
            className="mt-8 sm:mt-10 md:mt-12 inline-flex items-center font-bold text-lg sm:text-xl transition"
            style={{ color: "#1a531a" }}
          >
            Explore All Ministries{" "}
            <ArrowRight size={24} className="ml-2 hover:text-[#6aa84f]" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
