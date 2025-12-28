import { motion } from "framer-motion";
import { User, BookOpen, Heart, Globe, Target, Calendar } from "lucide-react";

import pastor from "../assets/pastor.jpg";
import historic from "../assets/image.png";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen"
    >
      {/* HEADER */}
      <div className="bg-[#1a531a] py-12 sm:py-16 md:py-20 text-center text-white shadow-xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Our Story, Our People
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Rooted in Faith, Growing in Grace. Committed to Community.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16 md:space-y-20">
        {/* PASTOR'S PROFILE */}
        <section className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-2xl border-t-4 sm:border-t-8 border-[#6aa84f]">
          {/* Pastor Image & Title */}
          <div className="md:col-span-1 text-center">
            <img
              src={pastor}
              alt="Pastor John Doe"
              className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full mx-auto object-cover shadow-2xl border-4 sm:border-8 border-gray-100 transition-transform hover:scale-[1.02]"
            />
            <h3 className="mt-4 sm:mt-5 md:mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
              Ruel Del Monte
            </h3>
            <p className="text-[#6aa84f] font-semibold text-lg sm:text-xl">
              Senior Pastor
            </p>
          </div>

          {/* Pastor Message */}
          <div className="md:col-span-2 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a531a] mb-3 sm:mb-4 md:mb-5">
              A Word from Pastor Ruel
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic border-l-4 border-gray-200 pl-3 sm:pl-4">
              "We believe the church is more than just a building—it's a family.
              My deepest desire is for every person who walks through our doors
              to feel seen, loved, and challenged to grow into the person God
              created them to be. Come join us as we live out the Gospel
              together, building a legacy of faith in our wonderful city."
            </p>
            <a
              href="/contact"
              className="mt-4 sm:mt-5 md:mt-6 inline-block bg-[#6aa84f] text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-[#1a531a] transition duration-300 text-sm sm:text-base"
            >
              Connect with Pastor Ruel
            </a>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl border-l-4 border-[#1a531a]">
            <Globe
              size={28}
              className="text-[#1a531a] mb-3 sm:mb-4 sm:w-8 sm:h-8"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1a531a] mb-3 sm:mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To lead people into a growing relationship with Jesus Christ
              through biblical teaching, authentic community, and sacrificial
              service to our neighbors and the world.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl border-l-4 border-[#6aa84f]">
            <Target
              size={28}
              className="text-[#6aa84f] mb-3 sm:mb-4 sm:w-8 sm:h-8"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1a531a] mb-3 sm:mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To see our city transformed by the Gospel, one life at a time,
              creating a legacy of faith that impacts future generations and
              reflects Christ's love to all.
            </p>
          </div>
        </section>

        {/* CORE BELIEFS */}
        <section className="py-6 sm:py-8 md:py-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-10 md:mb-12 text-center border-b-2 border-[#1a531a]/20 pb-3 sm:pb-4">
            The Pillars of Our Faith
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01]">
              <BookOpen
                size={40}
                className="text-[#1a531a] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                Scripture Alone
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe the Bible is the inspired, infallible Word of God,
                our final and sufficient authority for faith and life.
              </p>
            </div>
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01]">
              <User
                size={40}
                className="text-[#6aa84f] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                The Lordship of Christ
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe in one God, eternally existing as the Father, Son
                (Jesus Christ), and Holy Spirit, with Jesus as the head of the
                Church.
              </p>
            </div>
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01] sm:col-span-2 lg:col-span-1">
              <Heart
                size={40}
                className="text-[#1a531a] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                Grace Through Faith
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe salvation is by grace through faith alone in Jesus
                Christ, a free gift received through repentance.
              </p>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm">
            Our full Statement of Faith is available upon request.
          </p>
        </section>

        {/* HISTORY */}
        <section className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 sm:mb-8 md:mb-10 border-b-2 border-[#6aa84f]/50 pb-3 sm:pb-4">
            Our Legacy: A History of GPLC
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* Image */}
            <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-2xl h-64 sm:h-72 md:h-full">
              <img
                src={historic}
                alt="Historic church photo"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="text-gray-700 space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                Founded in 1985 by a small group of families praying in a living
                room, GPLC quickly grew with a simple yet powerful belief: the
                power of authentic community and the truth of the Gospel.
              </p>
              <p>
                We moved into our current facility in 1998, a significant step
                that allowed us to expand our children's and outreach programs,
                cementing our commitment to the city.
              </p>
              <p>
                Most recently, we completed the expansion of our dedicated youth
                center in 2020. We look back with profound gratitude for God's
                faithfulness and look forward with great expectancy for what He
                will do next in our community.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE SCHEDULE */}
        <section className="bg-[#1a531a] text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-7 md:mb-8 text-center border-b border-white/50 pb-3 sm:pb-4">
            Join Us This Week
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-center">
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border-b-4 border-[#6aa84f]">
              <Calendar
                size={28}
                className="mx-auto mb-2 sm:mb-3 text-[#6aa84f] sm:w-8 sm:h-8"
              />
              <div className="text-2xl sm:text-3xl font-bold mb-1">Sundays</div>
              <div className="text-white text-lg sm:text-xl font-semibold">
                9:00 AM & 11:00 AM
              </div>
              <div className="text-xs sm:text-sm mt-2 opacity-80">
                Worship Service & Full Kids Church
              </div>
            </div>
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border-b-4 border-[#6aa84f]">
              <Calendar
                size={28}
                className="mx-auto mb-2 sm:mb-3 text-[#6aa84f] sm:w-8 sm:h-8"
              />
              <div className="text-2xl sm:text-3xl font-bold mb-1">
                Wednesdays
              </div>
              <div className="text-white text-lg sm:text-xl font-semibold">
                7:00 PM
              </div>
              <div className="text-xs sm:text-sm mt-2 opacity-80">
                Midweek Bible Study & Youth Group
              </div>
            </div>
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border-b-4 border-[#6aa84f] sm:col-span-2 lg:col-span-1">
              <Calendar
                size={28}
                className="mx-auto mb-2 sm:mb-3 text-[#6aa84f] sm:w-8 sm:h-8"
              />
              <div className="text-2xl sm:text-3xl font-bold mb-1">Fridays</div>
              <div className="text-white text-lg sm:text-xl font-semibold">
                6:00 AM
              </div>
              <div className="text-xs sm:text-sm mt-2 opacity-80">
                Morning Prayer Meeting (Open to All)
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
