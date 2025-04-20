'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="py-10 px-4 md:px-20">
    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">{title}</h2>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const detailsCard = [
  {
    icon: "🌾",
    title: "Quality Products",
    text: "Our seeds, fertilizers, and medicines are carefully tested for optimal results.",
  },
  {
    icon: "🧠",
    title: "Expert Guidance",
    text: "With years of experience, we offer expert farming consultations and workshops.",
  },
  {
    icon: "💬",
    title: "Trusted by Farmers",
    text: "Our satisfied farmer network across the region is our biggest achievement.",
  },
]

const images = [
  {
    src:"/aiimage.png",
    alt:"Certification 1",
    className:"md:grayscale md:hover:grayscale-0 transition",
    width:100,
    height:100
  },
  {
    src:"/leaf.png",
    alt:"Certification 2",
    className:"md:grayscale md:hover:grayscale-0 transition",
    width:100,
    height:100
  },
  {
    src:"/bg-image.jpg",
    alt:"Certification 3",
    className:"md:grayscale md:hover:grayscale-0 transition",
    width:100,
    height:100
  },
  {
    src:"/farming1.jpg",
    alt:"Certification 4",
    className:"md:grayscale md:hover:grayscale-0 transition",
    width:100,
    height:100
  }
]

export default function AboutPage() {
  return (
    <div className='bg-white'>
    <Navbar/>
    <main className="bg-gradient-to-br from-lime-100 via-orange-200 to-white text-green-900 overflow-hidden">
      {/* Hero */}
      <div className="relative w-full h-[50vh] flex items-center justify-center bg-green-900 bg-blend-multiply text-center px-4">
        <div className="backdrop-blur-md bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-green-900">About Adil Agro</h1>
          <p className="mt-4 text-lg md:text-xl text-green-800 font-medium">
            Cultivating Excellence in Agriculture with Trust and Innovation.
          </p>
        </div>
      </div>

      {/* Mission & Vision Also this include the image of the business */}
      <Section title="Our Mission & Vision">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/60 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">🌱 Mission</h3>
            <p>
              To empower farmers with quality agricultural inputs, guidance, and eco-friendly solutions to grow better, safer, and more sustainably.
            </p>
          </div>
          <div className="bg-white/60 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">🌍 Vision</h3>
            <p>
              To be the leading agro service provider known for innovation, transparency, and commitment to rural prosperity.
            </p>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section title="Certifications & Trust">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
          {
            images.map((item,index)=> <Image src={item.src} alt={item.alt} className={item.className} width={item.width} key={index} height={item.height}/>)
          }
        </div>
        <p className="mt-6 text-center text-green-700">
          We are certified by national and international bodies, ensuring the best standards in agro services.
        </p>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Adil Agro Services?">
        <div className="grid md:grid-cols-3 gap-8">
          {detailsCard.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 rounded-xl p-6 shadow-md text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-2 text-green-800">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    <Footer/>
    </main>
    </div>
  );
}
