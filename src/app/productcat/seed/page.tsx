'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GiPlantSeed, GiGrain, GiFarmTractor, GiSun } from 'react-icons/gi';
import { FaLeaf, FaQuoteLeft, FaStar } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const seeds = [
  {
    name: 'Hybrid Corn Seeds',
    description: 'High-yielding corn variety ideal for large-scale cultivation.',
    image: '/assets/corn-seed.jpg',
    icon: <GiGrain size={24} />,
    growthTime: '90-120 Days',
    climate: 'Warm, Humid',
    feedback: {
      name: 'Ali Hussain',
      text: 'Amazing results! My field produced 30% more this season.',
      rating: 5,
    },
  },
  {
    name: 'Wheat Gold Seeds',
    description: 'Disease-resistant wheat seeds with early maturation.',
    image: '/assets/wheat-seed.jpg',
    icon: <GiPlantSeed size={24} />,
    growthTime: '100-120 Days',
    climate: 'Cool, Dry',
    feedback: {
      name: 'Rehman Khan',
      text: 'I love the early harvest. Zero pest issues.',
      rating: 4,
    },
  },
  {
    name: 'Organic Tomato Seeds',
    description: 'Best for kitchen gardens. Rich taste and color.',
    image: '/assets/tomato-seed.jpg',
    icon: <FaLeaf size={24} />,
    growthTime: '60-80 Days',
    climate: 'Warm & Sunny',
    feedback: {
      name: 'Khadija Bibi',
      text: 'Perfect for my home garden. Tastes better than store-bought!',
      rating: 5,
    },
  },
  {
    name: 'Rice Premium Seeds',
    description: 'Ideal for wetland farming, fast-growing and nutritious.',
    image: '/assets/rice-seed.jpg',
    icon: <GiFarmTractor size={24} />,
    growthTime: '90-100 Days',
    climate: 'Wet & Tropical',
    feedback: {
      name: 'Zubair Malik',
      text: 'Great for Sindh climate. Happy with results!',
      rating: 4,
    },
  },
];

export default function SeedProductsPage() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-lime-100 to-yellow-200 px-4 py-12">
      <section className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-green-800 mb-10 text-center"
        >
          🌾 Our Top-Quality Seed Products
        </motion.h1>

        <p className="text-center text-green-700 max-w-2xl mx-auto mb-12 text-lg">
          Choose from our premium selection of seeds tested for quality, climate adaptability, and growth efficiency. Trusted by hundreds of farmers across Pakistan.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {seeds.map((seed, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-200 hover:shadow-xl transition-all flex flex-col"
            >
              <Image
                src={seed.image}
                alt={seed.name}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-green-600 text-xl font-semibold mb-2">
                    {seed.icon}
                    {seed.name}
                  </div>

                  <p className="text-green-700 text-sm mb-3">{seed.description}</p>

                  <div className="text-sm text-green-800 mb-2">
                    ⏳ <strong>Growth Time:</strong> {seed.growthTime}
                  </div>
                  <div className="text-sm text-green-800 mb-4">
                    🌤️ <strong>Climate:</strong> {seed.climate}
                  </div>
                </div>

                {/* Feedback */}
                <div className="bg-green-50 border-t pt-3 mt-4 text-sm text-green-800">
                  <FaQuoteLeft className="inline-block mr-2 text-green-600" />
                  <em>"{seed.feedback.text}"</em>
                  <div className="mt-1 text-xs text-green-700 font-semibold">
                    — {seed.feedback.name}
                    <span className="ml-2 text-yellow-500">
                      {Array(seed.feedback.rating).fill(0).map((_, i) => (
                        <FaStar key={i} className="inline" />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
