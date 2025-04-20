import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-100 via-white/80 to-white/50 backdrop-blur-md text-green-900 py-14 px-6 md:px-20 rounded-t-3xl shadow-2xl mt-20 border-t-2 border-green-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Logo & Mission */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
            <h2 className="text-2xl font-extrabold text-green-800 tracking-wide">AgroFarm</h2>
          </div>
          <p className="text-sm text-green-700">
            Empowering farmers through technology, knowledge, and sustainability. We believe in smart farming for a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-green-600 transition">🏠 Home</Link></li>
            <li><Link href="/about" className="hover:text-green-600 transition">🌿 About</Link></li>
            <li><Link href="/suggestion" className="hover:text-green-600 transition">📘 Suggestions</Link></li>
            <li><Link href="/contact" className="hover:text-green-600 transition">📨 Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-800">Connect With Us</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-green-600" /> agrohelp@email.com
          </p>
          <p className="flex items-center gap-2 text-sm mb-4">
            <FaPhone className="text-green-600" /> +92 300 1234567
          </p>
          <div className="flex items-center gap-4 text-green-700 mt-2 text-lg">
            <a href="https://facebook.com" target="_blank"><FaFacebookF className="hover:text-green-800 transition" /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-green-800 transition" /></a>
            <a href="https://youtube.com" target="_blank"><FaYoutube className="hover:text-green-800 transition" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-xs text-green-700 border-t pt-4 border-green-200">
        © {new Date().getFullYear()} AgroFarm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
