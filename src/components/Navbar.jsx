import { useState } from "react";
import { Menu, X, Church } from "lucide-react";
import React from "react";
import logo from "../assets/logo.png";
const primaryColor = "#1a531a"; // Deep Forest Green
const accentColor = "#6aa84f"; // Bright Lime Green

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    // Paths updated to reflect actual pages
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Leaders", path: "/leaders" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper function to handle link click and close mobile menu
  const handleLinkClick = () => {
    // We only need to close the menu, the navigation will happen via the standard anchor tag href
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Church Name */}
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="" width={100} />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path} // Router path
                className="text-gray-600 hover:scale-105 transition-all font-medium py-1 relative group"
                style={{ color: primaryColor }}
              >
                {link.name}
                {/* Underline hover effect */}
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                  style={{ backgroundColor: accentColor }}
                ></span>
              </a>
            ))}
            <a
              href="/contact" // Router path
              className="text-white px-5 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: primaryColor }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = accentColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = primaryColor)
              }
            >
              Visit Us
            </a>
          </div>

          {/* Mobile Menu Button (Animated Toggle) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-600 transition-colors duration-300"
              style={{ color: primaryColor }}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {/* Animated icon change */}
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated Dropdown) */}
      <div
        id="mobile-menu"
        // Key classes for animation: transition-all, duration-300, transform, origin-top, scale-y-0/scale-y-100
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          isOpen
            ? "scale-y-100 opacity-100 max-h-screen border-t border-gray-100"
            : "scale-y-0 opacity-0 max-h-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path} // Router path
              onClick={handleLinkClick}
              className="block px-3 py-2 text-base font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              style={{ color: primaryColor }}
            >
              {link.name}
            </a>
          ))}
          {/* Mobile Visit Us Button */}
          <a
            href="/contact" // Router path
            onClick={handleLinkClick}
            className="block text-center mt-2 mx-3 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 shadow-md"
            style={{ backgroundColor: primaryColor }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = accentColor)}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = primaryColor)
            }
          >
            Visit Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
