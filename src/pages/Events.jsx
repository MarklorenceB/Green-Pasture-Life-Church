import { Link } from "react-router-dom";
import { events } from "../data/mockdata";
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

// Color Palette Variables: Primary: #1a531a (Deep Forest Green), Secondary: #6aa84f (Bright Lime Green)

const Events = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center px-2"
          style={{ color: "#1a531a" }}
        >
          Upcoming Events & Activities 🗓️
        </h1>

        {/* Events List */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row transition duration-300 hover:shadow-2xl hover:scale-[1.01] border-l-4 border-[#6aa84f]"
            >
              {/* Image Column */}
              <div className="md:w-1/3 h-56 sm:h-64 md:h-auto overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content Column */}
              <div className="p-5 sm:p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                {/* Category Tag */}
                <span
                  className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full font-semibold mb-3 sm:mb-4 w-fit"
                  style={{
                    backgroundColor: "#6aa84f20",
                    color: "#1a531a",
                    border: "1px solid #6aa84f",
                  }}
                >
                  {event.category || "Church Event"}
                </span>

                {/* Title */}
                <h2
                  className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 sm:mb-3 leading-tight"
                  style={{ color: "#1a531a" }}
                >
                  {event.title}
                </h2>

                {/* Date/Time/Location Details */}
                <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-gray-700 font-medium mb-3 sm:mb-4">
                  <span className="flex items-center gap-2 text-xs sm:text-sm">
                    <Calendar
                      size={16}
                      className="text-[#6aa84f] flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                    />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2 text-xs sm:text-sm">
                    <Clock
                      size={16}
                      className="text-[#6aa84f] flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                    />
                    {event.time || "TBD"}
                  </span>
                  <span className="flex items-center gap-2 text-xs sm:text-sm">
                    <MapPin
                      size={16}
                      className="text-[#6aa84f] flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                    />
                    {event.location || "Church Campus"}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">
                  {event.content.substring(0, 150)}...
                </p>

                {/* CTA Link */}
                <Link
                  to={`/events/${event.id}`}
                  className="inline-block text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg w-fit font-semibold transition duration-300 shadow-md text-sm sm:text-base"
                  style={{ backgroundColor: "#1a531a" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#6aa84f")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1a531a")
                  }
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
