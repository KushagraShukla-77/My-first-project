import React, { useState } from "react";
import {
  ShoppingBag,
  Coffee,
  House,
  Baby,
  Apple,
  Laptop,
  Smartphone,
  Heart,
  Shirt,
} from "lucide-react";

function CategoryBar() {
  const categories = [
    { name: "All", icon: <ShoppingBag size={22} /> },
    { name: "Cafe", icon: <Coffee size={22} /> },
    { name: "Home", icon: <House size={22} /> },
    { name: "Toys", icon: <Baby size={22} /> },
    { name: "Fresh", icon: <Apple size={22} /> },
    { name: "Electronics", icon: <Laptop size={22} /> },
    { name: "Mobiles", icon: <Smartphone size={22} /> },
    { name: "Beauty", icon: <Heart size={22} /> },
    { name: "Fashion", icon: <Shirt size={22} /> },
  ];

  const [active, setActive] = useState("All");

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-[1600px] mx-auto flex items-center gap-8 overflow-x-auto px-6" >

        {categories.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-2 cursor-pointer py-4 text-lg font-medium border-b-4 transition-all duration-200 whitespace-nowrap
              
              ${
                active === item.name
                  ? "text-purple-600 border-purple-600"
                  : "text-gray-600 border-transparent hover:text-purple-600"
              }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>

      {/* Selected Category */}
      <div className="max-w-[1600px] mx-auto px-6 py-5">
        <h1 className="text-3xl font-bold">
          {active}
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to {active} Category
        </p>
      </div>
    </div>
  );
}

export default CategoryBar;