"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-12 bg-gradient-to-br from-white via-white/80 to-white/40 backdrop-blur-sm">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-green-800">
          Contact Us
        </h1>
        <p className="text-gray-700 mt-2">
          We’d love to hear from you. Fill out the form below or reach out directly.
        </p>
      </div>

      {/* Form and Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-md"
        >
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Write your message here..."
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl font-medium hover:bg-green-800 transition"
          >
            📩 Send Message
          </button>
        </motion.form>

        {/* Contact Details + Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-col gap-6 justify-center text-gray-800"
        >
          <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 shadow backdrop-blur">
            <FaPhoneAlt className="text-green-700 text-xl" />
            <span className="text-sm md:text-base">+92 313 9581905</span>
          </div>
          <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 shadow backdrop-blur">
            <FaEnvelope className="text-green-700 text-xl" />
            <span className="text-sm md:text-base">adilagro@email.com</span>
          </div>
          <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 shadow backdrop-blur">
            <FaMapMarkerAlt className="text-green-700 text-xl" />
            <span className="text-sm md:text-base">Near Adil Chowk, Bahawalpur, Pakistan</span>
          </div>

          {/* Google Map placeholder */}
          <div className="mt-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <img
                src="/map-placeholder.jpg"
                alt="Google Map Location"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
