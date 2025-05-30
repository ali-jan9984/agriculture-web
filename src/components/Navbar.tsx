"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  FaHome,
  FaLeaf,
  FaPhoneAlt,
  FaInfoCircle,
  FaServicestack,
  FaWhatsapp,
} from "react-icons/fa";
import { GiMedicines, GiSeedling, GiFertilizerBag } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setOpen(false); // Close mobile menu on click
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Nav links now target section IDs instead of href URLs
  const navLinks = [
    { label: "Home", id: "home", icon: <FaHome /> },
    {
      label: "Product Categories",
      id: "productcat",
      icon: <FaLeaf />,
      dropdown: [
        { label: "Seeds", id: "seed", icon: <GiSeedling /> },
        { label: "Medicines", id: "medicines", icon: <GiMedicines /> },
        { label: "Fertilizers", id: "fertilizers", icon: <GiFertilizerBag /> },
      ],
    },
    { label: "Contact", id: "contact", icon: <FaPhoneAlt /> },
    { label: "About", id: "about", icon: <FaInfoCircle /> },
    { label: "Services", id: "services", icon: <FaServicestack /> },
  ];

  return (
    <div className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-1">
          <GiMedicines className="text-3xl text-red-700" />
          <h1
            className="text-2xl font-extrabold text-red-800 tracking-wider"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Adil Agro
          </h1>
          <span className="text-sm font-medium text-black hidden sm:block">
            Services
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center relative">
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-black hover:text-red-800 transition-all duration-200 relative group">
                  {link.icon}
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black group-hover:w-full transition-all" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-10 left-0 bg-white border rounded-lg shadow-xl p-2 w-48 z-40"
                    >
                      {link.dropdown.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(item.id)}
                          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition w-full text-left"
                        >
                          {item.icon} {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={i}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center gap-1 text-black hover:text-red-800 transition-all duration-200 relative group"
              >
                {link.icon}
                {link.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black group-hover:w-full transition-all" />
              </button>
            )
          )}
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/923139581905"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-4 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition flex items-center gap-2">
              <FaWhatsapp className="text-white" /> WhatsApp
            </button>
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-4 mt-2 pb-4">
              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <div key={i} className="relative">
                    <details className="group">
                      <summary className="flex items-center gap-2 cursor-pointer text-black">
                        {link.icon} {link.label}
                      </summary>
                      <div className="pl-6 mt-2">
                        {link.dropdown.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => scrollToSection(item.id)}
                            className="flex items-center gap-2 py-1 text-sm text-gray-700 hover:text-black w-full text-left"
                          >
                            {item.icon} {item.label}
                          </button>
                        ))}
                      </div>
                    </details>
                  </div>
                ) : (
                  <button
                    key={i}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-2 text-black"
                  >
                    {link.icon} {link.label}
                  </button>
                )
              )}
              <a
                href="tel:+923139581905"
                className="flex items-center gap-2 text-green-600 font-semibold"
              >
                📞 Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
