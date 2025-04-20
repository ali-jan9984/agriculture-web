'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLeaf, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { GiWheat, GiFertilizerBag, GiFarmTractor } from 'react-icons/gi';

const fertilizers = [
  {
    name: 'NitroGrow NPK 20-20-20',
    description: 'Balanced fertilizer for all stages of plant growth.',
    image: '/assets/npk.jpg',
    crops: 'Wheat, Maize, Rice',
    application: 'Apply during sowing and after 30 days',
    climate: 'All seasons',
    type: 'Chemical',
    feedback: {
      name: 'Ahmed Ali',
      text: 'It improved my crop yield significantly!',
      rating: 5,
    },
  },
  {
    name: 'GreenOrganic Compost',
    description: 'Eco-friendly compost enhancing soil structure and fertility.',
    image: '/assets/compost.jpg',
    crops: 'Vegetables, Fruits, Flowers',
    application: 'Mix with topsoil before planting',
    climate: 'Dry, Moderate',
    type: 'Organic',
    feedback: {
      name: 'Kiran Malik',
      text: 'Great results for my vegetable garden. No chemicals!',
      rating: 4,
    },
  },
  {
    name: 'Potash Booster',
    description: 'Increases drought resistance and improves crop quality.',
    image: '/assets/potash.jpg',
    crops: 'Sugarcane, Cotton, Sunflower',
    application: 'Apply during flowering stage',
    climate: 'Hot, Arid',
    type: 'Chemical',
    feedback: {
      name: 'Zeeshan Tariq',
      text: 'Saw visible improvement in plant strength.',
      rating: 4,
    },
  },
];

export default function FertilizerProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-200 via-green-100 to-lime-50 px-4 py-12">
      <section className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-green-900 mb-10 text-center"
        >
          🌿 Premium Fertilizers for Healthy Crops
        </motion.h1>

        <p className="text-center text-green-800 max-w-2xl mx-auto mb-12 text-lg">
          Explore high-performance fertilizers to enhance your crop yield and soil health. Choose from organic and chemical options trusted by thousands of farmers.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {fertilizers.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-200 hover:shadow-xl transition-all flex flex-col"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-green-700 text-xl font-semibold mb-2">
                    <GiFertilizerBag size={24} />
                    {item.name}
                  </div>

                  <p className="text-green-800 text-sm mb-3">{item.description}</p>

                  <div className="text-sm text-green-800 mb-1">
                    🌱 <strong>Crops:</strong> {item.crops}
                  </div>
                  <div className="text-sm text-green-800 mb-1">
                    📆 <strong>Application:</strong> {item.application}
                  </div>
                  <div className="text-sm text-green-800 mb-1">
                    🌤️ <strong>Climate:</strong> {item.climate}
                  </div>
                  <div className={`text-xs inline-block px-3 py-1 mt-2 rounded-full font-medium ${item.type === 'Organic' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {item.type}
                  </div>
                </div>

                <div className="bg-green-50 border-t pt-3 mt-4 text-sm text-green-900">
                  <FaQuoteLeft className="inline-block mr-2 text-green-700" />
                  <em>"{item.feedback.text}"</em>
                  <div className="mt-1 text-xs text-green-700 font-semibold">
                    — {item.feedback.name}
                    <span className="ml-2 text-yellow-500">
                      {Array(item.feedback.rating).fill(0).map((_, i) => (
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
  );
}