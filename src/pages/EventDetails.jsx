import { useParams, Link } from "react-router-dom";
import { events } from "../data/mockdata";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Clock,
  MapPin,
  DollarSign,
} from "lucide-react";
import React from "react";

// Color Palette Variables: Primary: #1a531a (Deep Forest Green), Secondary: #6aa84f (Bright Lime Green)

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  // Event Not Found
  if (!event)
    return (
      <div className="text-center py-12 sm:py-16 md:py-20 bg-gray-50 min-h-screen px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600">
          Event Not Found 😔
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
          The event you are looking for does not exist.
        </p>
        <Link
          to="/events"
          className="text-[#6aa84f] mt-6 sm:mt-8 inline-flex items-center font-semibold hover:underline text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="mr-2 sm:w-5 sm:h-5" /> Back to All
          Events
        </Link>
      </div>
    );

  // Event Detail View
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Back Link */}
        <Link
          to="/events"
          className="inline-flex items-center text-gray-600 hover:text-[#1a531a] mb-6 sm:mb-8 transition font-medium text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="mr-2 sm:w-5 sm:h-5" /> Back to All
          Events
        </Link>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Featured Image */}
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-56 sm:h-64 md:h-80 object-cover shadow-inner"
          />

          <div className="p-5 sm:p-6 md:p-8 lg:p-10">
            {/* Title */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight"
              style={{ color: "#1a531a" }}
            >
              {event.title}
            </h1>

            {/* Key Info Details Box */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200">
              {/* Date */}
              <span
                className="flex items-center gap-2 font-bold text-xs sm:text-sm"
                style={{ color: "#1a531a" }}
              >
                <Calendar
                  size={16}
                  className="text-[#6aa84f] flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                />
                <span className="truncate">{event.date || "TBD"}</span>
              </span>

              {/* Time */}
              <span
                className="flex items-center gap-2 font-bold text-xs sm:text-sm"
                style={{ color: "#1a531a" }}
              >
                <Clock
                  size={16}
                  className="text-[#6aa84f] flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                />
                <span className="truncate">
                  {event.time || "Check schedule"}
                </span>
              </span>

              {/* Category Tag */}
              <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-semibold">
                <Tag
                  size={16}
                  className="text-[#6aa84f] flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                />
                <span className="truncate">{event.category || "General"}</span>
              </span>

              {/* Cost/Pricing */}
              <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-semibold">
                <DollarSign
                  size={16}
                  className="text-[#6aa84f] flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                />
                <span className="truncate">{event.cost || "Free"}</span>
              </span>
            </div>

            {/* Event Content */}
            <div className="prose max-w-none text-gray-700 space-y-4 sm:space-y-5 leading-relaxed">
              <p className="text-base sm:text-lg">{event.content}</p>

              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* CTA and Share Section */}
            <div className="mt-8 sm:mt-9 md:mt-10 pt-6 sm:pt-7 md:pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              {/* Primary CTA Button */}
              <a
                href={event.registrationLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block text-center text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition duration-300 shadow-lg text-base sm:text-lg"
                style={{ backgroundColor: "#1a531a" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6aa84f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1a531a")
                }
              >
                Register Now
              </a>

              <div className="font-bold text-gray-600 text-sm sm:text-base">
                Share this event (Social Icons)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
