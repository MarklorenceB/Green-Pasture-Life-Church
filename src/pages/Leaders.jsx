import React from "react";
import { Users, Feather, Heart, Music } from "lucide-react";

import marklorence from "../assets/worshipteam/marklorence.png";
import zelyncuenca from "../assets/worshipteam/zelyn.png";

const primaryColor = "#1a531a"; // Deep Forest Green
const accentColor = "#6aa84f"; // Bright Lime Green
const lightBg = "#f7fbf5"; // Very light green background

const teams = [
  {
    name: "Core Leaders",
    icon: Users,
    description: "Spiritual oversight and church governance",
    members: [
      {
        id: 1,
        name: "Pastor Ruel Del Monte",
        role: "Senior Pastor",
        image: "https://placehold.co/400x400/1a531a/ffffff?text=Ruel",
      },
      {
        id: 2,
        name: "Florencia Del Monte",
        role: "Admin",
        image: "https://placehold.co/400x400/6aa84f/1a531a?text=Florencia",
      },
      {
        id: 3,
        name: "Federico Almario",
        role: "Asst Pastor",
        image: "https://placehold.co/400x400/1a531a/ffffff?text=Federico",
      },
      {
        id: 4,
        name: "Grace Bombane",
        role: "Finance Coach",
        image: "https://placehold.co/400x400/6aa84f/1a531a?text=Grace",
      },
      {
        id: 5,
        name: "Hazelyn Cuenca",
        role: "Finance Head",
        image: "https://placehold.co/400x400/1a531a/ffffff?text=Zelyn",
      },
      {
        id: 6,
        name: "Lalaine Dorado",
        role: "Core Leader",
        image: "https://placehold.co/400x400/1a531a/ffffff?text=Lalaine",
      },

      {
        id: 6,
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
    ],
  },
  // {
  //   name: "Ministry Heads",
  //   icon: Heart,
  //   description: "Leading various ministry departments",
  //   members: [
  //     {
  //       id: 4,
  //       name: "Sarah Lee",
  //       role: "Missions Coordinator",
  //       image: "https://placehold.co/400x400/6aa84f/1a531a?text=Sarah",
  //     },
  //     {
  //       id: 5,
  //       name: "David Kim",
  //       role: "Community Outreach",
  //       image: "https://placehold.co/400x400/1a531a/ffffff?text=David",
  //     },
  //     {
  //       id: 6,
  //       name: "Emily Wong",
  //       role: "Finance & Admin",
  //       image: "https://placehold.co/400x400/6aa84f/1a531a?text=Emily",
  //     },
  //     {
  //       id: 14,
  //       name: "Thomas V.",
  //       role: "Children's Ministry",
  //       image: "https://placehold.co/400x400/1a531a/ffffff?text=Thomas",
  //     },
  //     {
  //       id: 15,
  //       name: "Maria C.",
  //       role: "Small Groups",
  //       image: "https://placehold.co/400x400/6aa84f/1a531a?text=Maria",
  //     },
  //     {
  //       id: 16,
  //       name: "George H.",
  //       role: "Welcome Team",
  //       image: "https://placehold.co/400x400/1a531a/ffffff?text=George",
  //     },
  //   ],
  // },
  // {
  //   name: "Youth Leaders",
  //   icon: Feather,
  //   description: "Mentoring the next generation",
  //   members: [
  //     {
  //       id: 7,
  //       name: "Chris Evans",
  //       role: "Youth Pastor",
  //       image: "https://placehold.co/400x400/1a531a/ffffff?text=Chris",
  //     },
  //     {
  //       id: 8,
  //       name: "Jessica Alba",
  //       role: "Youth Group Mentor",
  //       image: "https://placehold.co/400x400/6aa84f/1a531a?text=Jessica",
  //     },
  //     {
  //       id: 17,
  //       name: "Alex R.",
  //       role: "Student Leader",
  //       image: "https://placehold.co/400x400/1a531a/ffffff?text=Alex",
  //     },
  //   ],
  // },
  {
    name: "Worship Team",
    icon: Music,
    description: "Leading us in praise and worship",
    members: [
      {
        id: 9,
        name: "Mark Lorence Beron",
        role: "Songleader & Acoustic Guitarist",
        image: marklorence,
      },
      {
        id: 10,
        name: "Zelyn Cuenca",
        role: "Songleader",
        image: zelyncuenca,
      },

      {
        id: 11,
        name: "Mawe",
        role: "Band Leader",
        image: "https://placehold.co/400x400/6aa84f/1a531a?text=mawe",
      },
      {
        id: 19,
        name: "Kevin",
        role: "Keyboardist & Bass Guitar",
        image: "https://placehold.co/400x400/1a531a/ffffff?text=Kevin",
      },
      {
        id: 20,
        name: "Andrey",
        role: "Tech & Sound",
        image: "https://placehold.co/400x400/6aa84f/1a531a?text=Andrey",
      },
    ],
  },
];

const LeaderCard = ({ member }) => (
  <div className="group relative">
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-green-50 to-green-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x400/1a531a/ffffff?text=${member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}`;
          }}
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ backgroundColor: primaryColor }}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6 text-center">
        <h3
          className="text-lg sm:text-xl font-bold mb-2 leading-tight"
          style={{ color: primaryColor }}
        >
          {member.name}
        </h3>
        <div
          className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium"
          style={{
            backgroundColor: `${accentColor}20`,
            color: primaryColor,
          }}
        >
          {member.role}
        </div>
      </div>
    </div>
  </div>
);

const Leaders = () => {
  return (
    <div
      className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: lightBg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          <div
            className="inline-block px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm font-semibold tracking-wide uppercase"
            style={{
              backgroundColor: `${accentColor}30`,
              color: primaryColor,
            }}
          >
            Meet Our Team
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight px-2"
            style={{ color: primaryColor }}
          >
            Our Dedicated Leadership
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Committed to spiritual excellence and community service, our leaders
            guide our mission with dedication and faith.
          </p>
        </header>

        {/* Team Sections */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {teams.map((team) => {
            const TeamIcon = team.icon;
            return (
              <section key={team.name}>
                {/* Team Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div
                      className="p-2 sm:p-2.5 md:p-3 rounded-full mr-3 sm:mr-4"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <TeamIcon
                        size={24}
                        style={{ color: accentColor }}
                        className="sm:w-7 sm:h-7 md:w-7 md:h-7"
                      />
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-bold"
                      style={{ color: primaryColor }}
                    >
                      {team.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
                    {team.description}
                  </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
                  {team.members.map((member) => (
                    <LeaderCard key={member.id} member={member} />
                  ))}
                </div>

                {/* Decorative Divider (except for last section) */}
                {team !== teams[teams.length - 1] && (
                  <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
                    <div
                      className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 rounded-full"
                      style={{ backgroundColor: `${accentColor}40` }}
                    />
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Footer Message */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div
            className="max-w-2xl mx-auto p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl"
            style={{ backgroundColor: "white" }}
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6">
              Interested in joining our leadership team or learning more about
              our ministries? We'd love to connect with you and explore how you
              can serve.
            </p>
            <button
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
              style={{ backgroundColor: accentColor }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
