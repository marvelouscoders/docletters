"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { FaTrash } from "react-icons/fa";

interface Product {
  name: string;
  price: string;
  img: string;
}

export default function CartSidebar() {
  const [open, setOpen] = useState(false);
  const [quantities, setQuantities] = useState<number[]>([1, 1, 1]);

  const products: Product[] = [
    {
      name: "GP Sickness Leave",
      price: "£59.00–£79.00",
      img: "/assets/images/cart1.png",
    },
    {
      name: "Disability Medical Letters",
      price: "£59.00",
      img: "/assets/images/cart2.png",
    },
    {
      name: "Actor & Model Fit-to-Work",
      price: "£29.00",
      img: "/assets/images/cart3.png",
    },
  ];

  const increase = (i: number) => {
    const newQty = [...quantities];
    newQty[i]++;
    setQuantities(newQty);
  };

  const decrease = (i: number) => {
    const newQty = [...quantities];
    if (newQty[i] > 1) newQty[i]--;
    setQuantities(newQty);
  };

  const deleteItem = (i: number) => {
    const newQty = [...quantities];
    newQty.splice(i, 1);
    setQuantities(newQty);
  };

  const total = products.reduce(
    (acc, p, i) =>
      acc + parseFloat(p.price.replace(/[^\d.]/g, "")) * quantities[i],
    0
  );

  return (
    <>
      {/* 🛒 Cart Icon */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-40 bg-[#00A6A6] text-white px-4 py-2 rounded shadow-md hover:bg-[#008f8f] transition"
      >
        View Cart
      </button>

      {/* Background Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* 🧾 Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Shopping Cart ({products.length})
          </h2>
          <X
            className="text-gray-600 hover:text-black cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Product List */}
        <div className="flex flex-col gap-5 p-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="flex items-start justify-between border-b border-gray-100 pb-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-md overflow-hidden border">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-gray-800 font-medium leading-snug text-[15px]">
                    {p.name}
                  </h3>
                  <p className="text-pink text-sm mt-1 font-semibold">
                    {p.price}
                  </p>

                  {/* Quantity Buttons */}
                  <div className="flex items-center mt-2 border border-gray-300 rounded-md w-fit">
                    <button
                      onClick={() => decrease(i)}
                      className="px-2 py-1 text-gray-600 hover:text-[#00A6A6]"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm font-medium text-gray-700">
                      {quantities[i]}
                    </span>
                    <button
                      onClick={() => increase(i)}
                      className="px-2 py-1 text-gray-600 hover:text-[#00A6A6]"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Delete */}
              <button
                onClick={() => deleteItem(i)}
                className="text-gray-500 hover:text-red-600"
              >
                <FaTrash size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-gray-200 px-6 py-5">
          <div className="flex items-center justify-between mb-5">
            <span className="text-gray-800 font-semibold uppercase text-sm">
              Total
            </span>
            <span className="text-green-600 font-bold text-lg">
              £{total.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-[#00A6A6] text-white w-full py-3 rounded hover:bg-[#008f8f] transition">
              CHECKOUT
            </button>
            <button className="border border-[#00A6A6] text-[#00A6A6] w-full py-3 rounded hover:bg-[#00A6A6] hover:text-white transition">
              VIEW CART
            </button>
          </div>

          <p className="text-gray-500 text-xs text-center mt-4">
            🔒 Secure & Safe Checkout
          </p>
        </div>
      </div>
    </>
  );
}
