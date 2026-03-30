import { motion } from "framer-motion";
import {
  User,
  BookOpen,
  Heart,
  Globe,
  Target,
  Calendar,
  Cross,
  Flame,
  Crown,
} from "lucide-react";

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
        {/* THEME VERSE */}
        <section className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl border-l-4 border-[#6aa84f] text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a531a] mb-3 sm:mb-4">
            GPLC Theme Verse
          </h2>
          <p className="text-[#6aa84f] font-semibold text-base sm:text-lg mb-3">
            Psalm 23:1–2 (NIV)
          </p>
          <blockquote className="italic text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            "The Lord is my shepherd, I lack nothing. He makes me lie down in
            green pastures, He leads me beside quiet waters, He refreshes my
            soul. He guides me along the right paths for His name's sake."
          </blockquote>
        </section>

        {/* PASTOR'S PROFILE */}
        <section className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-2xl border-t-4 sm:border-t-8 border-[#6aa84f]">
          {/* Pastor Image & Title */}
          <div className="md:col-span-1 text-center">
            <img
              src={pastor}
              alt="Pastor Ruel Del Monte"
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
              "I believe the church is more than a building — it is a family. Our
              desire is to bring people to Christ, nurture them in His Word, and
              equip them to become fully trained disciples who will serve God
              faithfully in every season of life."
            </p>
            <p className="text-sm text-gray-500 mt-3 italic">
              2 Timothy 2:2 – "And the things you have heard me say in the
              presence of many witnesses entrust to reliable people who will also
              be qualified to teach others."
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
              "To love and care for people so they may experience God's salvation
              through Jesus Christ."
            </p>
            <p className="text-sm text-gray-500 mt-3 italic">
              Romans 5:8 – "But God demonstrates His own love for us in this:
              While we were still sinners, Christ died for us."
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
              "A church fully committed to bringing people to Christ, nurturing
              them, and empowering them to be effective witnesses in their
              families, communities, and to the whole world."
            </p>
            <p className="text-sm text-gray-500 mt-3 italic">
              Acts 1:8 – "You will be My witnesses in Jerusalem, in all Judea
              and Samaria, and to the ends of the earth."
            </p>
          </div>
        </section>

        {/* CORE BELIEFS - 6 PILLARS */}
        <section className="py-6 sm:py-8 md:py-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-10 md:mb-12 text-center border-b-2 border-[#1a531a]/20 pb-3 sm:pb-4">
            The Pillars of Our Faith
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01]">
              <Crown
                size={40}
                className="text-[#1a531a] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                The Triune God
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe in one God, eternally existing in three persons:
                Father, Son, and Holy Spirit. He is the Creator, Sustainer, and
                Ruler of all things, worthy of our worship and obedience.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">
                Deuteronomy 6:4
              </p>
            </div>
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01]">
              <BookOpen
                size={40}
                className="text-[#6aa84f] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                Scripture Alone
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe the Bible is the inspired, infallible, and
                authoritative Word of God. It is the final authority for our
                faith, doctrine, and daily life.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">
                2 Timothy 3:16-17
              </p>
            </div>
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01]">
              <Cross
                size={40}
                className="text-[#1a531a] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                Jesus Christ
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe Jesus Christ is the eternal Son of God, fully God and
                fully man. He lived a sinless life, died for our sins, rose
                again, and is the only mediator between God and humanity.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">John 14:6</p>
            </div>
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01]">
              <Heart
                size={40}
                className="text-[#6aa84f] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                Salvation by Grace
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe salvation is the gift of God's grace, received through
                repentance and faith in Jesus Christ alone, not by works. Through
                Him we receive forgiveness and eternal life.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">
                Ephesians 2:8-9
              </p>
            </div>
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01]">
              <Flame
                size={40}
                className="text-[#1a531a] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                The Holy Spirit
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe the Holy Spirit gives new life, empowers believers for
                holy living, and enables us to grow spiritually and be effective
                witnesses for Christ.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">Acts 1:8</p>
            </div>
            <div className="text-center p-6 sm:p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl hover:scale-[1.01]">
              <Globe
                size={40}
                className="text-[#6aa84f] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12"
              />
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#1a531a]">
                The Mission of the Church
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe the Church is called to proclaim the Gospel, make
                disciples, and demonstrate God's love to all nations for His
                glory.
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">
                Matthew 28:19-20
              </p>
            </div>
          </div>
        </section>

        {/* HISTORY */}
        <section className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 sm:mb-8 md:mb-10 border-b-2 border-[#6aa84f]/50 pb-3 sm:pb-4">
            Our History
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
                Our church began as an outreach in Barangay Santisimo Rosario,
                San Pablo City, Laguna. The ministry started through an
                evangelistic crusade, followed by intentional follow-up and
                discipleship. From there, small groups were formed in different
                areas of Santisimo. By God's grace, these small gatherings
                continued to grow as more people came to know Christ.
              </p>
              <p>
                On July 25, 2008, a greater work officially began as the
                ministry was established as a church. What was once known as
                Frontline Worship Center San Isidro, also recognized as
                Greenbox, has now been given a new name: Green Pasture Life
                Church Inc.
              </p>
              <p>
                The mission remains the same, but we believe the Lord is leading
                us into a greater purpose and wider harvest. We believe that the
                true Church is not defined by a structure, but by the people of
                God united together for His glory.
              </p>
              <p className="font-semibold text-[#1a531a]">
                We thank the Lord for His faithfulness through the years. To Him
                be all the glory.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE SCHEDULE */}
        <section className="bg-[#1a531a] text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-7 md:mb-8 text-center border-b border-white/50 pb-3 sm:pb-4">
            Join Us This Week
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-center">
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border-b-4 border-[#6aa84f]">
              <Calendar
                size={28}
                className="mx-auto mb-2 sm:mb-3 text-[#6aa84f] sm:w-8 sm:h-8"
              />
              <div className="text-2xl sm:text-3xl font-bold mb-1">Sundays</div>
              <div className="text-white text-lg sm:text-xl font-semibold">
                8:30 AM – 10:00 AM
              </div>
              <div className="text-xs sm:text-sm mt-2 opacity-80">
                Worship Celebration
              </div>
            </div>
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border-b-4 border-[#6aa84f]">
              <Calendar
                size={28}
                className="mx-auto mb-2 sm:mb-3 text-[#6aa84f] sm:w-8 sm:h-8"
              />
              <div className="text-2xl sm:text-3xl font-bold mb-1">Sundays</div>
              <div className="text-white text-lg sm:text-xl font-semibold">
                10:00 AM – 10:30 AM
              </div>
              <div className="text-xs sm:text-sm mt-2 opacity-80">
                Care Group Gathering
              </div>
            </div>
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border-b-4 border-[#6aa84f]">
              <Calendar
                size={28}
                className="mx-auto mb-2 sm:mb-3 text-[#6aa84f] sm:w-8 sm:h-8"
              />
              <div className="text-2xl sm:text-3xl font-bold mb-1">
                Wednesday
              </div>
              <div className="text-white text-lg sm:text-xl font-semibold">
                6:00 PM – 7:00 PM
              </div>
              <div className="text-xs sm:text-sm mt-2 opacity-80">
                Prayer Gathering
              </div>
            </div>
            <div className="bg-white/10 p-5 sm:p-6 rounded-lg border-b-4 border-[#6aa84f]">
              <Calendar
                size={28}
                className="mx-auto mb-2 sm:mb-3 text-[#6aa84f] sm:w-8 sm:h-8"
              />
              <div className="text-2xl sm:text-3xl font-bold mb-1">Friday</div>
              <div className="text-white text-lg sm:text-xl font-semibold">
                5:00 PM – 7:00 PM
              </div>
              <div className="text-xs sm:text-sm mt-2 opacity-80">
                Youth GIG (Twice a Month)
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
