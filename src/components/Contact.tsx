"use client";
import { useState } from "react";
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setStatus(data.success ? "🌱 Message sent successfully!" : data.message || "Failed to send.");
      if (data.success) setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-100 to-white dark:from-green-900 dark:to-gray-900 py-16 px-6 lg:px-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-40 h-40 bg-green-200 rounded-full -top-10 -left-10 opacity-20" />
        <div className="absolute w-24 h-24 bg-yellow-200 rotate-45 -bottom-10 right-5 opacity-20" />
        <div className="absolute w-20 h-20 border-4 border-green-500 rounded-full bottom-0 left-1/3 opacity-20" />
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-10">
        🌾 Contact Our Agro Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info & Map */}
        <div className="space-y-6">
          <iframe
            className="w-full h-64 rounded-xl border-2 shadow-lg"
            src="https://www.google.com/maps?q=Dosehra+Charsadda&output=embed"
            allowFullScreen
            loading="lazy"
          />

          <div className="space-y-4">
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center justify-between"
              onClick={() => window.open("https://maps.google.com?q=Dosehra+Charsadda", "_blank")}
            >
              📍 Location: Dosehra, Charsadda
            </button>

            <a
              href="mailto:alijan998457@gmail.com"
              className="block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
            >
              📧 Email: alijan998457@gmail.com
            </a>

            <a
              href="tel:+923139581905"
              className="block bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-md"
            >
              📞 Call Us: +92 313 9581905
            </a>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/923139581905"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl">
          <input
            name="name"
            type="text"
            placeholder="👨‍🌾 Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md dark:bg-gray-700"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="📞 Phone (11 digits)"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md dark:bg-gray-700"
            required
          />
          <textarea
            name="message"
            placeholder="📝 Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border rounded-md dark:bg-gray-700"
            required
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            🌱 Send Message
          </button>

          {status && (
            <p className="text-sm text-green-700 dark:text-green-300 font-medium">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
