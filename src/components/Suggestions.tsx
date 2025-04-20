"use client";

import { motion } from "framer-motion";
import { FaSeedling, FaSun, FaWater } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Top 10 Tips for Water-Efficient Farming",
    description:
      "Discover how to reduce water usage while maintaining healthy crops. Learn drip irrigation, mulching, and more.",
    icon: <FaWater size={24} className="text-green-700" />,
    image: "/farming1.jpg",
  },
  {
    id: 2,
    title: "The Best Fertilizers for Organic Farming",
    description:
      "Explore top natural fertilizers and how to use them effectively in various soil types.",
    icon: <FaSeedling size={24} className="text-green-700" />,
    image: "/farming2.jpg",
  },
  {
    id: 3,
    title: "Sunlight and Soil: Getting the Balance Right",
    description:
      "Learn about the ideal light and soil conditions for crops, and how to test and improve your land.",
    icon: <FaSun size={24} className="text-green-700" />,
    image: "/farming3.jpg",
  },
];

const SuggestionPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-16 pb-20 bg-gradient-to-br from-white via-white/80 to-white/40 backdrop-blur-md">
      {/* Page Title */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-semibold text-green-800">
          Farming Suggestions & Tips
        </h1>
        <p className="text-gray-600 mt-2 text-md md:text-lg">
          Improve your farming with expert-backed advice, trends, and techniques.
        </p>
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-all"
          >
            {/* Image */}
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                {article.icon}
                <h2 className="text-xl font-semibold text-green-800">
                  {article.title}
                </h2>
              </div>
              <p className="text-gray-700 text-sm">
                {article.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionPage;
