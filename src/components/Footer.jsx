import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { churchInfo, serviceSchedule } from "../data/mockdata";
import Container from "./Container";
import Button from "./Button";

const quickLinks = [
  { label: "Our Story & Beliefs", to: "/about" },
  { label: "Ministries & Groups", to: "/ministries" },
  { label: "Our Leadership", to: "/leaders" },
  { label: "Events Calendar", to: "/events" },
  { label: "Give Online", to: "/give" },
];

export default function Footer() {
  return <footer className="site-footer">
    <Container>
      <div className="footer-main">
        <div className="footer-identity">
          <div>
            <h3 className="footer-name">{churchInfo.name}</h3>
            <p className="footer-tagline">“{churchInfo.tagline}”</p>
          </div>
          <div className="footer-socials">
            {[
              { Icon: Facebook, href: churchInfo.socials.facebook, label: "Facebook" },
              { Icon: Youtube, href: churchInfo.socials.youtube, label: "YouTube" },
              { Icon: Instagram, href: churchInfo.socials.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={20} aria-hidden="true" /></a>)}
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <h4 className="eyebrow">Explore</h4>
            <ul className="footer-links">{quickLinks.map((link) => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="eyebrow">Gather With Us</h4>
            <ul className="footer-schedule">{serviceSchedule.map((service, i) => <li key={i}>
              <p className="font-semibold">{service.label}</p>
              <p>{service.day} · {service.time}</p>
            </li>)}</ul>
          </div>
          <div>
            <h4 className="eyebrow">Get In Touch</h4>
            <ul className="footer-contact">
              <li><p>{churchInfo.address}</p></li>
              <li><a href={`tel:${churchInfo.phone}`}>{churchInfo.phone}</a></li>
              <li><a href={`mailto:${churchInfo.email}`} className="break-all">{churchInfo.email}</a></li>
              <li><Button to="/contact" variant="on-dark">Plan Your Visit</Button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-legal"><p>
        <span>© {new Date().getFullYear()} {churchInfo.name}. All rights reserved.</span>
        <span className="legal-separator"> · </span>
        <span>SEC Registered #2024050148957-08</span>
      </p></div>
    </Container>
  </footer>;
}
