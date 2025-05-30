import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-green-900 via-green-800 to-green-700 text-green-100 py-14 px-6 md:px-20 rounded-t-3xl shadow-lg mt-20 border-t border-green-600">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start max-w-screen-xl mx-auto">

        {/* Logo & Mission */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-md">AdilAgro</h2>
          </div>
          <p className="text-sm text-green-300 leading-relaxed max-w-xs">
            Empowering farmers through technology, knowledge, and sustainability. We believe in smart farming for a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-200">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-green-400 transition duration-300">🏠 Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 transition duration-300">🌿 About</Link>
            </li>
            <li>
              <Link href="/suggestion" className="hover:text-green-400 transition duration-300">📘 Suggestions</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition duration-300">📨 Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-200">Connect With Us</h3>
          <p className="flex items-center gap-2 text-sm mb-3">
            <FaEnvelope className="text-green-400" /> agrohelp@email.com
          </p>
          <p className="flex items-center gap-2 text-sm mb-6">
            <FaPhone className="text-green-400" /> +92 300 1234567
          </p>
          <div className="flex items-center gap-6 text-green-300 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-xs text-green-400 border-t border-green-600 pt-4 max-w-screen-xl mx-auto">
        © {new Date().getFullYear()} AdilAgro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
