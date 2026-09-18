import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Container from "./Container";
import Button from "./Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Ministries", path: "/ministries" },
  { name: "Leaders", path: "/leaders" },
  { name: "Events", path: "/events" },
  { name: "Give", path: "/give" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    const root = document.getElementById("root");
    const onScroll = () => setScrolled(root.scrollTop > 24);
    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const root = document.getElementById("root");
    const oldOverflow = root.style.overflowY;
    root.style.overflowY = "hidden";
    const trigger = toggle.current;
    // Keep the modal's logo, close control, and links available; isolate page content.
    const siblings = [...nav.current.parentElement.children].filter((element) => element !== nav.current);
    const oldInert = siblings.map((element) => element.inert);
    siblings.forEach((element) => { element.inert = true; });
    const menu = nav.current;
    menu.querySelector(".mobile-menu__link")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") { event.preventDefault(); setIsOpen(false); }
      if (event.key !== "Tab") return;
      const items = [...menu.querySelectorAll('a[href], button:not([disabled])')].filter((element) => element.getClientRects().length);
      const first = items[0];
      const last = items.at(-1);
      if (event.shiftKey && (document.activeElement === first || !menu.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !menu.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1200px)");
    const onResize = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      root.style.overflowY = oldOverflow;
      siblings.forEach((element, index) => { element.inert = oldInert[index]; });
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const solid = scrolled || isOpen;
  return <nav ref={nav} className="site-nav" data-solid={solid}
    role={isOpen ? "dialog" : undefined} aria-modal={isOpen ? true : undefined} aria-label={isOpen ? "Main menu" : "Main navigation"}>
    <Container className="nav-row">
      <Link to="/" className="nav-brand" onClick={closeMenu}>
        <img src={logo} alt="" className="nav-logo" />
        <span className="nav-wordmark">Green Pasture<span>Life Church</span></span>
      </Link>
      <div className="nav-links">
        {navLinks.map((link) => <NavLink key={link.path} to={link.path} end={link.path === "/"} className="nav-link">{link.name}</NavLink>)}
        <Button to="/contact" variant={solid ? "primary" : "on-dark"}>Plan Your Visit</Button>
      </div>
      <button ref={toggle} className="menu-toggle" onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen} aria-controls="mobile-menu" aria-label="Toggle menu">
        {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>
    </Container>
    {isOpen && <div id="mobile-menu" className="mobile-menu">
      <Container className="mobile-menu__inner">
        <div className="mobile-menu__links">
          {navLinks.map((link) => <NavLink key={link.path} to={link.path} end={link.path === "/"} onClick={closeMenu} className="mobile-menu__link">{link.name}</NavLink>)}
        </div>
        <Button to="/contact" onClick={closeMenu}>Plan Your Visit</Button>
      </Container>
    </div>}
  </nav>;
}
