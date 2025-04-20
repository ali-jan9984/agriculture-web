"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sprout, Leaf, Flower2, Mail, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-hero bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center bg-fixed">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-black/50 to-green-800/60 z-0" />

      {/* Floating icons (visual effects) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-10 left-10 text-green-300"
      >
        <Leaf size={40} className="animate-bounce-slow" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute bottom-12 right-10 text-green-300"
      >
        <Flower2 size={40} className="animate-bounce-slow" />
      </motion.div>

      {/* Main container */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 gap-8 py-10">
        {/* Text area */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Sprout className="text-green-400 animate-pulse" size={32} />
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Adil Agro <span className="text-green-400">Services</span>
            </h1>
          </div>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            Providing premium agricultural medicines, seeds, and fertilizers
            to empower modern farming.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
            >
              <Mail size={18} /> Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <ShoppingBag size={18} /> Product Categories
            </motion.button>
          </div>
        </div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] aspect-square rounded-2xl bg-white/90 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
            <Image
              src="/plant.png"
              alt="Farmer"
              fill
              className="object-contain p-4"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
