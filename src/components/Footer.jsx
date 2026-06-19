import React from "react";
import { Link } from "react-router-dom";
import { churchInfo, serviceSchedule } from "../data/mockdata";
import {
  Facebook,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import PastureHorizon from "./PastureHorizon";

const quickLinks = [
  { label: "Our Story & Beliefs", to: "/about" },
  { label: "Ministries & Groups", to: "/ministries" },
  { label: "Our Leadership", to: "/leaders" },
  { label: "Events Calendar", to: "/events" },
  { label: "Give Online", to: "/give" },
];

const Footer = () => {
  return (
    <footer className="relative bg-moss text-canvas">
      {/* Horizon ridge cresting into the footer from the canvas above */}
      <div className="text-canvas">
        <PastureHorizon variant="ridge" flip className="h-12 sm:h-16 -mt-px" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-10 grid gap-12 md:grid-cols-12">
        {/* Identity & socials */}
        <div className="md:col-span-4">
          <h3 className="font-display text-2xl font-medium mb-3">
            {churchInfo.name}
          </h3>
          <p className="font-serif italic text-meadow-300/90 mb-6 text-[15px] leading-relaxed">
            “{churchInfo.tagline}”
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: churchInfo.socials.facebook, label: "Facebook" },
              { Icon: Youtube, href: churchInfo.socials.youtube, label: "YouTube" },
              { Icon: Instagram, href: churchInfo.socials.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full bg-white/8 text-canvas/80 hover:bg-wheat hover:text-moss transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="md:col-span-2">
          <h4 className="eyebrow text-wheat mb-5">Explore</h4>
          <ul className="space-y-3 text-[15px] text-canvas/75">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="hover:text-wheat transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service times */}
        <div className="md:col-span-3">
          <h4 className="eyebrow text-wheat mb-5">Gather With Us</h4>
          <ul className="space-y-3.5 text-canvas/75">
            {serviceSchedule.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <Clock size={18} className="text-wheat mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-canvas leading-tight text-[15px]">
                    {s.label}
                  </p>
                  <p className="text-sm text-canvas/55">
                    {s.day} · {s.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="eyebrow text-wheat mb-5">Get In Touch</h4>
          <ul className="space-y-4 text-canvas/75">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-wheat mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">{churchInfo.address}</p>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone size={18} className="text-wheat flex-shrink-0" />
              <a href={`tel:${churchInfo.phone}`} className="hover:text-wheat transition-colors">
                {churchInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-wheat flex-shrink-0" />
              <a href={`mailto:${churchInfo.email}`} className="hover:text-wheat transition-colors break-all">
                {churchInfo.email}
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-block mt-1 text-sm font-semibold text-moss bg-wheat hover:bg-canvas transition-colors py-2 px-4 rounded-full"
              >
                Plan Your Visit
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-canvas/50 text-sm px-6">
        <p>
          © {new Date().getFullYear()} {churchInfo.name}. All rights reserved.
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline mt-1 sm:mt-0">
            SEC Registered #2024050148957-08
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
