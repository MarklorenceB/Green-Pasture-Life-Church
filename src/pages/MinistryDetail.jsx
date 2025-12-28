import { useParams, Link } from "react-router-dom";
import { ministries } from "../data/mockdata";
import { ArrowLeft, Clock, User, Mail, Calendar } from "lucide-react";

// Color Palette Variables: Primary: #1a531a (Deep Forest Green), Secondary: #6aa84f (Bright Lime Green)

const MinistryDetail = () => {
  const { id } = useParams();
  const ministry = ministries.find((m) => m.id === parseInt(id));

  // Ministry Not Found
  if (!ministry) {
    return (
      <div className="text-center py-12 sm:py-16 md:py-20 bg-gray-50 min-h-screen px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600">
          Ministry Not Found 😔
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
          The ministry you are looking for does not exist or the link is
          incorrect.
        </p>
        <Link
          to="/ministries"
          className="text-[#6aa84f] mt-6 sm:mt-8 inline-flex items-center font-semibold hover:underline text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="mr-2 sm:w-5 sm:h-5" /> Back to All
          Ministries
        </Link>
      </div>
    );
  }

  // Ministry Detail View
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
        <Link
          to="/ministries"
          className="inline-flex items-center text-gray-600 hover:text-[#1a531a] mb-6 sm:mb-8 transition font-medium text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="mr-2 sm:w-5 sm:h-5" /> Back to All
          Ministries
        </Link>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Featured Image */}
          <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden shadow-inner">
            <img
              src={ministry.image}
              alt={ministry.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="p-5 sm:p-6 md:p-8 lg:p-12">
            {/* Title and Summary */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight"
              style={{ color: "#1a531a" }}
            >
              {ministry.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 italic mb-6 sm:mb-7 md:mb-8 border-b-2 border-gray-100 pb-4 sm:pb-5 md:pb-6 leading-relaxed">
              {ministry.description}
            </p>

            {/* Details Box */}
            <div className="mb-8 sm:mb-9 md:mb-10 bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 border-l-4 border-[#6aa84f]">
              {/* Coordinator */}
              <div className="flex items-start gap-3 sm:gap-4">
                <User
                  size={20}
                  className="text-[#6aa84f] flex-shrink-0 mt-0.5 sm:w-6 sm:h-6"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Coordinator
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {ministry.coordinator || "Church Office"}
                  </p>
                </div>
              </div>

              {/* Meeting Time */}
              <div className="flex items-start gap-3 sm:gap-4">
                <Clock
                  size={20}
                  className="text-[#6aa84f] flex-shrink-0 mt-0.5 sm:w-6 sm:h-6"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Meeting Time
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {ministry.meetingTime || "See church calendar"}
                  </p>
                </div>
              </div>

              {/* Meeting Day */}
              <div className="flex items-start gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
                <Calendar
                  size={20}
                  className="text-[#6aa84f] flex-shrink-0 mt-0.5 sm:w-6 sm:h-6"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Typically Meets
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {ministry.meetingDay || "Weekly"}
                  </p>
                </div>
              </div>
            </div>

            {/* Full Content */}
            <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-base sm:text-lg">{ministry.fullContent}</p>

              <p className="bg-[#1a531a]/10 p-3 sm:p-4 rounded-lg text-gray-800 border-l-4 border-[#1a531a] text-sm sm:text-base">
                We welcome all new members! Our ministry is driven by passion
                and a desire to serve. Please contact the coordinator below for
                details on how to get involved.
              </p>

              {/* CTA Button */}
              <a
                href={`mailto:${
                  ministry.coordinatorEmail || "office@churchname.org"
                }`}
                className="mt-4 sm:mt-5 md:mt-6 inline-flex items-center bg-[#6aa84f] text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg shadow-lg hover:bg-[#1a531a] transition duration-300 text-base sm:text-lg"
              >
                <Mail size={18} className="mr-2 sm:mr-3 sm:w-5 sm:h-5" />{" "}
                Contact the Coordinator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryDetail;
