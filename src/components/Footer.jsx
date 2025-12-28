import React from "react";
import { churchInfo } from "../data/mockdata";
import {
  Facebook,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock, // New icon for Service Times
} from "lucide-react";

// Color Palette Variables (for reference: Primary: #1a531a, Secondary: #6aa84f)
const PRIMARY_COLOR_BG = "#1a1a1a"; // Darker color for a strong footer background
const SECONDARY_COLOR_ACCENT = "#6aa84f"; // Bright Lime Green for accents/hovers

const Footer = () => {
  // Mock data for Service Times (assuming it's not in churchInfo)
  const serviceTimes = [
    { day: "Sunday Worship", time: "9:00 AM & 11:00 AM" },
    { day: "Wednesday Bible Study", time: "7:00 PM" },
  ];

  return (
    // Use a very dark background for contrast and depth
    <footer
      className="bg-gray-900 text-white pt-16 pb-8"
      style={{ backgroundColor: PRIMARY_COLOR_BG }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Column 1: Church Identity & Socials */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 border-b-2 border-[#1a531a] inline-block pb-1">
            {churchInfo.name}
          </h3>
          <p className="text-gray-400 mb-6 text-sm">{churchInfo.tagline}</p>
          <div className="flex gap-5">
            <a
              href={churchInfo.socials.facebook}
              className="hover:text-white transition duration-300 p-2 rounded-full bg-white/10 hover:bg-[#6aa84f]"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href={churchInfo.socials.youtube}
              className="hover:text-white transition duration-300 p-2 rounded-full bg-white/10 hover:bg-[#6aa84f]"
              aria-label="Youtube"
            >
              <Youtube size={20} />
            </a>
            <a
              href={churchInfo.socials.instagram}
              className="hover:text-white transition duration-300 p-2 rounded-full bg-white/10 hover:bg-[#6aa84f]"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (Updated for visibility) */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#6aa84f]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a
                href="/about"
                className="hover:text-[#6aa84f] transition duration-200 flex items-center gap-2"
              >
                &rarr; Our Story & Beliefs
              </a>
            </li>
            <li>
              <a
                href="/ministries"
                className="hover:text-[#6aa84f] transition duration-200 flex items-center gap-2"
              >
                &rarr; Ministries & Groups
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="hover:text-[#6aa84f] transition duration-200 flex items-center gap-2"
              >
                &rarr; Events Calendar
              </a>
            </li>
            <li>
              <a
                href="/give"
                className="hover:text-[#6aa84f] transition duration-200 flex items-center gap-2"
              >
                &rarr; Give Online
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Service Times (New Column) */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#6aa84f]">
            Service Times
          </h3>
          <ul className="space-y-4 text-gray-300">
            {serviceTimes.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <Clock
                  size={20}
                  className="text-[#6aa84f] mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-white leading-tight">
                    {service.day}
                  </p>
                  <p className="text-sm text-gray-400">{service.time}</p>
                </div>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/connect"
                className="text-sm font-semibold text-[#6aa84f] hover:text-white transition duration-200 border border-[#6aa84f] hover:bg-[#6aa84f] hover:border-white py-2 px-4 rounded"
              >
                Plan Your Visit
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info (Shifted and Styled) */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#6aa84f]">
            Get In Touch
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#6aa84f] mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-white">Location</p>
                <p className="text-sm text-gray-400">{churchInfo.address}</p>
              </div>
            </li>
            <li className="flex items-center gap-3 hover:text-[#6aa84f] transition duration-200">
              <Phone size={20} className="text-[#6aa84f] flex-shrink-0" />{" "}
              <a href={`tel:${churchInfo.phone}`}>{churchInfo.phone}</a>
            </li>
            <li className="flex items-center gap-3 hover:text-[#6aa84f] transition duration-200">
              <Mail size={20} className="text-[#6aa84f] flex-shrink-0" />{" "}
              <a href={`mailto:${churchInfo.email}`}>{churchInfo.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright/Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} **{churchInfo.name}**. All rights
          reserved. | Designed with Faith.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
