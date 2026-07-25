import React, { useState } from "react";
const HeroBanner = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      <div className="bg-purple-100 rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-purple-700">
          ALL NEW ZEPTO EXPERIENCE
        </h1>

        <div className="flex justify-between mt-8">
          <div className="bg-white rounded-xl p-5 w-[45%]">
            <h2 className="text-4xl font-bold text-purple-700">₹0 FEES</h2>
          </div>

          <div className="bg-white rounded-xl p-5 w-[45%]">
            <h2 className="text-2xl font-bold text-purple-700">
              EVERYDAY LOW PRICES
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-cyan-100 rounded-3xl p-8 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold text-cyan-900">
            PAAN CORNER
          </h1>

          <p className="mt-3 text-gray-600">
            Get smoking accessories,
            fresheners & more delivered.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-xl mt-6">
            Order Now
          </button>
        </div>

        <img
          src="/images/paan.png"
          className="w-48"
        />
      </div>
    </div>
  );
};

export default HeroBanner;