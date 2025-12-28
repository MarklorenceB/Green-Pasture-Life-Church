import { Link } from "react-router-dom";
import { ministries } from "../data/mockdata";
import { motion } from "framer-motion";
import React from "react";

// Color Palette Variables: Primary: #1a531a (Deep Forest Green), Secondary: #6aa84f (Bright Lime Green)

const Ministries = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 px-2"
            style={{ color: "#1a531a" }}
          >
            Our Ministries & Groups 🌳
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg md:text-xl px-4 leading-relaxed">
            There is a place for you here. Explore the different ways you can
            connect, grow, and serve within our church family and community.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col border-t-4 border-[#6aa84f]"
            >
              {/* Image Container */}
              <div className="h-48 sm:h-52 md:h-56 overflow-hidden relative">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Text Content */}
              <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col">
                <h3
                  className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight"
                  style={{ color: "#1a531a" }}
                >
                  {ministry.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-1 line-clamp-3 text-sm sm:text-base leading-relaxed">
                  {ministry.description}
                </p>

                {/* Dynamic Link */}
                <Link
                  to={`/ministries/${ministry.id}`}
                  className="inline-flex items-center text-base sm:text-lg font-semibold self-start transition duration-300"
                  style={{ color: "#6aa84f" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#1a531a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6aa84f")
                  }
                >
                  Explore Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ministries;
