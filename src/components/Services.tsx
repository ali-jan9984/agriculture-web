'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Darker, richer color scheme for professionalism & trust
const bgClasses = {
  green: 'bg-green-900 text-green-100',
  olive: 'bg-olive-800 text-olive-100',
  amber: 'bg-amber-900 text-amber-100',
  burntOrange: 'bg-orange-800 text-orange-100',
  teal: 'bg-teal-900 text-teal-100',
  deepBlue: 'bg-blue-900 text-blue-100',
};

const textClasses = {
  green: 'text-green-300',
  olive: 'text-olive-300',
  amber: 'text-amber-300',
  burntOrange: 'text-orange-300',
  teal: 'text-teal-300',
  deepBlue: 'text-blue-300',
};

const ServiceCard = ({
  title,
  description,
  icon,
  bgColor,
}: {
  title: string;
  description: string;
  icon: string;
  bgColor: keyof typeof bgClasses;
}) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
    className={`p-8 rounded-xl shadow-lg flex flex-col items-center text-center ${bgClasses[bgColor]}`}
  >
    <div className={`mb-6 ${textClasses[bgColor]}`}>
      <Image src={icon} alt={title} width={70} height={70} />
    </div>
    <h4 className="text-2xl font-bold mb-3">{title}</h4>
    <p className="text-lg leading-relaxed">{description}</p>
  </motion.div>
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-800 via-green-900 to-black text-green-100 py-20 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          Trusted Agro Services to Grow Your Future
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-green-300">
          At Adil Agro, we combine experience, passion, and technology to bring you sustainable farming solutions that deliver real results.
        </p>
      </div>

      {/* Services Grid Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          title="Precision Irrigation Systems"
          description="Efficient water management systems designed to maximize yield and conserve resources."
          icon="/assets/pump-icon.png"
          bgColor="green"
        />
        <ServiceCard
          title="Advanced Crop Protection"
          description="Innovative spraying services using eco-friendly products to protect your crops."
          icon="/assets/sprayer-icon.png"
          bgColor="olive"
        />
        <ServiceCard
          title="Modern Farm Machinery"
          description="Access to the latest tractors, harvesters, and equipment for efficient operations."
          icon="/assets/tractor-icon.png"
          bgColor="amber"
        />
        <ServiceCard
          title="Certified Seeds & Nutrients"
          description="High-quality seeds and organic fertilizers tailored for your soil type and climate."
          icon="/assets/seed-icon.png"
          bgColor="burntOrange"
        />
        <ServiceCard
          title="Expert Agronomy Consulting"
          description="Personalized advice to optimize crop cycles, pest management, and soil health."
          icon="/assets/consultation-icon.png"
          bgColor="teal"
        />
        <ServiceCard
          title="Comprehensive Soil Testing"
          description="Detailed analysis to help you understand and improve your soil’s productivity."
          icon="/assets/soil-test-icon.png"
          bgColor="deepBlue"
        />
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-4xl mx-auto text-center py-16 mt-20 bg-green-900 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold mb-8">Why Partner With Adil Agro?</h2>
        <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed text-green-300">
          With over a decade of trusted service and innovation, our commitment to sustainable agriculture empowers farmers to achieve more — healthier crops, higher yields, and profitable harvests.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-amber-500 hover:bg-amber-600 text-green-900 font-semibold px-10 py-4 rounded-full shadow-lg transition"
        >
          Contact Us Today
        </motion.button>
      </section>
    </main>
  );
}
