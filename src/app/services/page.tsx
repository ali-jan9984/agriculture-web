'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServiceCard = ({ title, description, icon, bgColor }: { title: string; description: string; icon: string; bgColor: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`bg-${bgColor}-100 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center`}
  >
    <div className={`text-5xl text-${bgColor}-600 mb-4`}>
      <Image src={icon} alt={title} width={60} height={60} />
    </div>
    <h4 className="text-xl font-semibold text-${bgColor}-800">{title}</h4>
    <p className="mt-2 text-${bgColor}-700">{description}</p>
  </motion.div>
);

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-br from-green-200 via-lime-100 to-green-50 text-green-900 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800">Our Services</h1>
        <p className="text-lg sm:text-xl mt-4 text-green-700">
          We offer a wide range of farming solutions to enhance your productivity and farming experience.
        </p>
      </div>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
        <ServiceCard
          title="Pumps & Irrigation"
          description="High-quality irrigation pumps to ensure optimal water distribution for your crops."
          icon="/assets/pump-icon.png"
          bgColor="green"
        />
        <ServiceCard
          title="Field Spraying"
          description="Our experienced team offers field spraying services to keep your crops safe and healthy."
          icon="/assets/sprayer-icon.png"
          bgColor="lime"
        />
        <ServiceCard
          title="Farming Equipment"
          description="We provide top-notch farming equipment, including tractors, plows, and tillers."
          icon="/assets/tractor-icon.png"
          bgColor="yellow"
        />
        <ServiceCard
          title="Seeds & Fertilizers"
          description="We offer high-quality seeds and fertilizers for all types of crops, ensuring healthy growth."
          icon="/assets/seed-icon.png"
          bgColor="orange"
        />
        <ServiceCard
          title="Consultation Services"
          description="Get expert advice and consultation on improving farm productivity and yield."
          icon="/assets/consultation-icon.png"
          bgColor="teal"
        />
        <ServiceCard
          title="Soil Testing"
          description="We provide comprehensive soil testing services to improve soil health and crop yield."
          icon="/assets/soil-test-icon.png"
          bgColor="blue"
        />
      </section>

      {/* Why Choose Us */}
      <section className="text-center py-12 px-4 sm:px-16 bg-green-100 rounded-lg shadow-xl mt-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-green-800 mb-6">Why Choose Adil Agro Services?</h2>
        <p className="text-lg sm:text-xl text-green-700 mb-6">
          With over 10 years of experience in agriculture services, we are your trusted partner in helping you grow better, safer, and more sustainably.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-800 transition"
        >
          Get in Touch
        </motion.button>
      </section>
    </main>
  );
}
