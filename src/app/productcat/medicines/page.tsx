'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSyringe, FaLeaf, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { GiCow, GiMedicinePills, GiSprout, GiFarmTractor } from 'react-icons/gi';

const medicines = [
  {
    name: 'VetPlus Multivitamin Injection',
    description: 'Boosts immunity and promotes faster recovery in livestock.',
    image: '/assets/vetplus.jpg',
    icon: <GiCow size={24} />,
    type: 'Veterinary',
    for: 'Cattle, Goats, Sheep',
    dosage: 'Once every 15 days',
    climate: 'All Seasons',
    tag: 'Organic',
    feedback: {
      name: 'Faisal Bhatti',
      text: 'My animals are healthier and more active after using VetPlus.',
      rating: 5,
    },
  },
  {
    name: 'CropShield Fungicide',
    description: 'Protects crops from fungal diseases and increases resistance.',
    image: '/assets/cropshield.jpg',
    icon: <GiSprout size={24} />,
    type: 'Crop Protection',
    for: 'Wheat, Rice, Tomato',
    dosage: 'Spray every 10 days',
    climate: 'Humid, Rainy',
    tag: 'Chemical',
    feedback: {
      name: 'Noor Ullah',
      text: 'It saved my wheat crop during a bad season!',
      rating: 4,
    },
  },
  {
    name: 'Organic Neem Extract Spray',
    description: 'Natural pest repellent safe for all crops and environments.',
    image: '/assets/neem.jpg',
    icon: <FaLeaf size={24} />,
    type: 'Pest Control',
    for: 'All Crops',
    dosage: 'Weekly spray',
    climate: 'All Conditions',
    tag: 'Organic',
    feedback: {
      name: 'Sadia Munir',
      text: 'Best eco-friendly option for my kitchen garden.',
      rating: 5,
    },
  },
];

export default function MedicineProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-lime-100 to-green-200 px-4 py-12">
      <section className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-green-800 mb-10 text-center"
        >
          💊 Agricultural & Veterinary Medicines
        </motion.h1>

        <p className="text-center text-green-700 max-w-2xl mx-auto mb-12 text-lg">
          Browse our trusted range of agricultural and veterinary medicines to improve plant and animal health. Each product is tested and farmer-approved.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {medicines.map((item, i) => (
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
                  <div className="flex items-center gap-2 text-green-600 text-xl font-semibold mb-2">
                    {item.icon}
                    {item.name}
                  </div>

                  <p className="text-green-700 text-sm mb-3">{item.description}</p>

                  <div className="text-sm text-green-800 mb-1">
                    💊 <strong>Type:</strong> {item.type}
                  </div>
                  <div className="text-sm text-green-800 mb-1">
                    🐄/🌱 <strong>For:</strong> {item.for}
                  </div>
                  <div className="text-sm text-green-800 mb-1">
                    ⏳ <strong>Dosage:</strong> {item.dosage}
                  </div>
                  <div className="text-sm text-green-800 mb-1">
                    🌤️ <strong>Climate:</strong> {item.climate}
                  </div>
                  <div className={`text-xs inline-block px-3 py-1 mt-2 rounded-full font-medium ${item.tag === 'Organic' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {item.tag}
                  </div>
                </div>

                {/* Feedback */}
                <div className="bg-green-50 border-t pt-3 mt-4 text-sm text-green-800">
                  <FaQuoteLeft className="inline-block mr-2 text-green-600" />
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
