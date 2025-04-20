"use client";
import React from "react";
import { FaSeedling } from "react-icons/fa";


const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl sm:text-3xl font-bold mb-8 text-center">
        Why Adil Agro <FaSeedling className="inline-block" />?
      </h2>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* card 1 */}
        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">High-Quality Products</h3>
          <p className="text-gray-600">
            We provide tested and effective agricultural medicines and seeds.
          </p>
        </div>
  
        {/* card 2 */}
        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Farmer-Friendly Pricing
          </h3>
          <p className="text-gray-600">
            Affordable rates so every farmer gets the best value for money.
          </p>
        </div>
  
        {/* card 3 */}
        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
          <p className="text-gray-600">
            We have helped thousands of farmers improve their crop yield.
          </p>
        </div>
      </div>
    </div> {/* ✅ close only after the grid */}
  </section>  
  );
};

export default WhoWeAre;
