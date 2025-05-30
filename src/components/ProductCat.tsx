"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaRegStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Sprout } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "Crop Medicines",
    image: "/medicine.jpg",
    description: "Effective solutions for protecting your crops from pests and diseases, ensuring a healthy harvest.",
    tags: ["Best Practices", "Organic Options"],
    rating: 4,
    link: "#crop-medicines",
  },
  {
    title: "Quality Seeds",
    image: "/seeds.jpg",
    description: "Learn about high-yield, certified seeds and how they improve crop resilience and productivity.",
    tags: ["Research Based", "New Arrival"],
    rating: 5,
    link: "#quality-seeds",
  },
  {
    title: "Fertilizers",
    image: "/fertilizer.jpg",
    description: "Explore the importance of soil health and how the right fertilizers boost crop quality and yield.",
    tags: ["Soil Enrichment", "Eco-Friendly"],
    rating: 3,
    link: "#fertilizers",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const ProductCat = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prevSlide();
    else if (delta < -50) nextSlide();
    touchStartX.current = null;
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full h-screen relative overflow-hidden"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center"
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
            <Image
              src={categories[current].image}
              alt={categories[current].title}
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center items-center bg-white px-6 sm:px-12 text-center lg:text-left">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Sprout className="text-green-600 w-8 h-8 animate-pulse" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                  {categories[current].title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base max-w-lg">
                {categories[current].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
              {categories[current].tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-1 mb-4 justify-center lg:justify-start">
              {Array.from({ length: 5 }, (_, i) =>
                i < categories[current].rating ? (
                  <FaStar key={i} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={i} className="text-gray-400" />
                )
              )}
            </div>

            <a
              href={categories[current].link}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-white/70 hover:bg-white text-black p-3 rounded-full shadow"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          type="button"
          onClick={nextSlide}
          className="bg-white/70 hover:bg-white text-black p-3 rounded-full shadow"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-green-600 scale-110" : "bg-gray-300"
            } transition-all`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCat;
