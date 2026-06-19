import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Ministries", path: "/ministries" },
  { name: "Leaders", path: "/leaders" },
  { name: "Events", path: "/events" },
  { name: "Give", path: "/give" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scrolling lives on #root (body is position:fixed), so listen there.
  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    const onScroll = () => setScrolled(root.scrollTop > 24);
    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const solid = scrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-canvas/95 backdrop-blur-md shadow-[0_8px_30px_rgba(15,46,26,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] sm:h-20">
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt=""
              className="h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`hidden sm:block font-display leading-tight text-[15px] font-semibold tracking-tight transition-colors duration-300 ${
                solid ? "text-pasture" : "text-canvas"
              }`}
            >
              Green Pasture
              <span
                className={`block text-[11px] tracking-[0.2em] uppercase font-sans font-medium ${
                  solid ? "text-stone" : "text-meadow-300/90"
                }`}
              >
                Life Church
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium py-1 transition-colors duration-300 group ${
                    solid
                      ? isActive
                        ? "text-pasture"
                        : "text-ink/70 hover:text-pasture"
                      : isActive
                      ? "text-canvas"
                      : "text-canvas/80 hover:text-canvas"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-wheat transition-transform duration-300 origin-left ${
                        isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                solid
                  ? "bg-pasture text-canvas hover:bg-meadow"
                  : "bg-wheat text-moss hover:bg-canvas"
              }`}
            >
              Plan Your Visit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              solid ? "text-pasture" : "text-canvas"
            }`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-canvas border-t border-mist"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-mist text-pasture"
                        : "text-ink/80 hover:bg-mist/60"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block text-center mt-3 px-4 py-3 rounded-full font-semibold bg-pasture text-canvas hover:bg-meadow transition-colors"
              >
                Plan Your Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
