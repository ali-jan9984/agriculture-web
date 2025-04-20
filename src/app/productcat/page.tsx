'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProductCard = ({ title, description, image, price }: { title: string; description: string; image: string; price: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
  >
    <div className="relative h-56 w-full mb-4">
      <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
    </div>
    <h3 className="text-xl font-semibold text-green-800">{title}</h3>
    <p className="text-green-600 mt-2">{description}</p>
    <p className="text-lg font-semibold text-green-700 mt-3">{price}</p>
  </motion.div>
);

export default function ProductCategoryPage() {
  return (
    <main className="bg-gradient-to-br from-green-200 via-lime-100 to-green-50 text-green-900 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800">Our Product Categories</h1>
        <p className="text-lg sm:text-xl mt-4 text-green-700">
          Explore a wide variety of products for your farming needs. We provide high-quality seeds, fertilizers, and equipment.
        </p>
      </div>

      {/* Product Category Sections */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-16">
        {/* Product Category 1 */}
        <div className="bg-green-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Seeds</h2>
          <ProductCard
            title="Premium Corn Seed"
            description="High-quality corn seeds for better yield and faster growth."
            image="/assets/corn-seed.jpg"
            price="$50"
          />
          <ProductCard
            title="Organic Wheat Seed"
            description="Best wheat seeds to help boost your crop health."
            image="/assets/wheat-seed.jpg"
            price="$45"
          />
        </div>

        {/* Product Category 2 */}
        <div className="bg-lime-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-lime-800 mb-4">Fertilizers</h2>
          <ProductCard
            title="Nitrogen Fertilizer"
            description="Boost plant growth with our nitrogen-rich fertilizer."
            image="/assets/nitrogen-fertilizer.jpg"
            price="$40"
          />
          <ProductCard
            title="Organic Fertilizer"
            description="100% organic fertilizer for healthy and sustainable crops."
            image="/assets/organic-fertilizer.jpg"
            price="$35"
          />
        </div>

        {/* Product Category 3 */}
        <div className="bg-yellow-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Farming Tools</h2>
          <ProductCard
            title="Heavy Duty Tractors"
            description="Powerful tractors designed for large-scale farming."
            image="/assets/tractor.jpg"
            price="$5000"
          />
          <ProductCard
            title="Spraying Machines"
            description="Efficient sprayers for field spraying and crop protection."
            image="/assets/sprayer.jpg"
            price="$1200"
          />
        </div>

        {/* Product Category 4 */}
        <div className="bg-orange-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-800 mb-4">Field Equipment</h2>
          <ProductCard
            title="Plowing Machine"
            description="Best-in-class plowing machine for deep soil penetration."
            image="/assets/plowing-machine.jpg"
            price="$3000"
          />
          <ProductCard
            title="Soil Testing Kit"
            description="Get accurate soil health analysis with our testing kit."
            image="/assets/soil-test-kit.jpg"
            price="$150"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 px-4 sm:px-16 bg-green-100 rounded-lg shadow-xl mt-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-green-800 mb-6">Get the Best Farming Products Now!</h2>
        <p className="text-lg sm:text-xl text-green-700 mb-6">
          Don’t wait! Explore our range of products that can help improve your farm’s productivity and growth.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-800 transition"
        >
          Shop Now
        </motion.button>
      </section>
    </main>
  );
}
