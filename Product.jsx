import React from "react";

function Product() {
  const products = [
    {
      id: 1,
      name: "Rin Matic Top Load",
      price: 225,
      oldPrice: 260,
      offer: "₹35 OFF",
      weight: "1 pack (2 kg)",
      rating: "4.8",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Surf Excel Matic",
      price: 309,
      oldPrice: 355,
      offer: "₹46 OFF",
      weight: "1 pack (2 kg)",
      rating: "4.7",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Wheel Detergent",
      price: 258,
      oldPrice: 300,
      offer: "₹42 OFF",
      weight: "1 pack (4 kg)",
      rating: "4.6",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Morelight Powder",
      price: 274,
      oldPrice: 340,
      offer: "₹66 OFF",
      weight: "1 pack (4 kg)",
      rating: "4.7",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="px-8 py-8">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Laundry Care</h1>

        <button className="text-pink-600 font-semibold">
          See All →
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-4 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-3 hover:shadow-lg duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain"
            />

            <div className="flex justify-between items-center mt-3">
              <span className="bg-green-600 text-white px-2 py-1 rounded font-bold">
                ₹{item.price}
              </span>

              <button className="border border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold">
                ADD
              </button>
            </div>

            <p className="text-gray-400 line-through text-sm mt-1">
              ₹{item.oldPrice}
            </p>

            <p className="text-green-600 text-xs">{item.offer}</p>

            <h2 className="font-semibold mt-2">{item.name}</h2>

            <p className="text-gray-500 text-sm">{item.weight}</p>

            <p className="text-green-600 text-sm mt-2">
              ⭐ {item.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;