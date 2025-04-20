"use client";

import { Leaf, ShieldCheck, Truck } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const ImageWithText = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 px-4"
        >
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
            <Image
              src="/ImageText.jpg"
              alt="ImageWithText"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              placeholder="empty"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 px-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Best Agriculture
          </h2>
          <p className="text-gray-300 mb-6">
            At <span className="text-green-500 font-semibold">Adil Agro</span>, we are dedicated to supporting Pakistan's farmers with
            the best seeds, medicines, and agricultural services. Our focus is on
            growth — not just for crops, but for communities.
          </p>

          {/* Icons with Features */}
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <Leaf className="text-green-400 w-6 h-6 mt-1" />
              <span className="text-gray-300">
                Sustainable and eco-friendly solutions tailored for modern farming.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="text-blue-400 w-6 h-6 mt-1" />
              <span className="text-gray-300">
                Quality assured products backed by science and farmer trust.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Truck className="text-yellow-400 w-6 h-6 mt-1" />
              <span className="text-gray-300">
                Fast and reliable delivery directly to your fields.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageWithText;
