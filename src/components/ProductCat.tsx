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
    description: "Effective solutions for plant protection and health.",
    tags: ["Best Seller", "Organic"],
    rating: 4,
  },
  {
    title: "Quality Seeds",
    image: "/seeds.jpg",
    description: "Certified seeds to grow strong, high-yielding crops.",
    tags: ["New Arrival"],
    rating: 5,
  },
  {
    title: "Fertilizers",
    image: "/fertilizer.jpg",
    description: "Soil nourishment products to boost productivity.",
    tags: ["Affordable", "Organic"],
    rating: 3,
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

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
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

  // Touch swipe handlers
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
      className="text-black w-full h-screen flex items-center justify-center relative overflow-hidden"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full flex flex-col justify-center items-center px-4 sm:px-12"
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sprout className="text-green-500 w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
              <h2 className="text-2xl sm:text-4xl font-bold">
                {categories[current].title}
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-xs sm:max-w-lg mx-auto">
              {categories[current].description}
            </p>
          </div>

          <div className="w-full max-w-2xl sm:max-w-3xl rounded-2xl overflow-hidden shadow-lg bg-[#111]">
            <Image
              src={categories[current].image}
              alt={categories[current].title}
              width={1200}
              height={600}
              className="w-full h-52 sm:h-64 object-cover"
            />
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {categories[current].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }, (_, i) =>
                  i < categories[current].rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={i} className="text-gray-600" />
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-white text-black p-3 rounded-full hover:bg-gray-300 transition"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          type="button"
          onClick={nextSlide}
          className="bg-white text-black p-3 rounded-full hover:bg-gray-300 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 flex gap-2 justify-center w-full">
        {categories.map((_, index) => (
          <span
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current ? "bg-green-500 scale-110" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCat;
