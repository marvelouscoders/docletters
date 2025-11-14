"use client";
import { ChevronRight, Trash2, Lock, Minus, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const basketItems = [
  { id: 1, name: "GP Sickness Leave", price: "£59.00 – £78.00", quantity: 2, image: "/assets/images/cart1.png" },
  { id: 2, name: "Actor & Model Fit-to-Work", price: "£59.00", quantity: 1, image: "/assets/images/cart3.png" },
];

const ShippingItem = () => {
  return (
    <section>
      <div className="fluid-container bg-navbarbg pt-12 pb-16">
        <div className="theme-container">

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Basket Side */}
            <div className="w-full md:w-2/2 bg-white rounded-[2px] p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <h2 className="h2">Basket items ({basketItems.length})</h2>
                <Link href="/" className=" btn-link flex items-center gap-2 text-base font-semibold">
                  Continue Shopping
                  <ChevronRight className="chevron-right" />
                </Link>
              </div>
              {/* Basket Items */}
              <div className="space-y-4">
                {basketItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between border-b border-gray-200 pb-4"
                  >
                    {/* Left: Image + Details */}
                    <div className="flex items-start gap-4">
                      <div className="w-[80px] h-[80px] overflow-hidden rounded-none shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6>
                          {item.name}
                        </h6>
                        <h6 className="price">
                          {item.price}
                        </h6>
                      </div>
                    </div>

                    {/* Right: Quantity + Trash */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center border border-gray-300 rounded-none">
                        <button className="p-2 text-dark hover:text-navygreen">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button className="p-2 text-dark hover:text-navygreen">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button className="mt-2 text-dark hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Coupon Input */}
              <div className="flex items-center gap-3 mt-8">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="p-3 border border-gray-300 w-40 text-sm focus:outline-none focus:ring-1 focus:ring-navygreen"
                />
                <Link href="/" className="bg-dark text-white font-semibold px-6 sm:py-1 md:py-3.5 uppercase text-sm hover:bg-gray-700 transition">
                  Apply Coupon
                </Link>
              </div>
            </div>

            {/*  Right: Order Summary */}
            <div className="w-full md:w-1/3 bg-white p-6 h-fit rounded-[2px] ">
              <h5 className="h5">Order Summary</h5>
              <div className="text-sm space-y-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-dark font-medium">Sub Total</span>
                  <span className="font-semibold text-dark">$1200.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark font-medium">Coupon</span>
                  <span className="text-dark font-semibold">-$14.00</span>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="flex justify-between text-xl font-bold">
                <span className="text-dark">Total:</span>
                <span className="text-base text-dark font-bold">$1100.00</span>
              </div>

              <div className="text-xs text-navygreen bg-navbarbg mt-4 p-2 rounded-sm">
                <span className="font-semibold">
                  Shipping: Free Shipping; Royal Mail Tracked24: 1–2 Business Days
                  (When Ordered Before 3.30pm).
                </span>
                <span>Shipping options will be updated during checkout.</span>
              </div>

              <Link
                href="/"
                className="w-full text-center border-2 border-navygreen text-navygreen bg-white py-3 mt-4 mb-4 font-semibold hover:bg-navygreen hover:text-white transition text-base uppercase block"
              >
                Procced to Checkout
              </Link>

              <div className="flex items-center justify-center gap-2 mt-4 text-dark text-sm">
                <Lock className="w-4 h-4 text-dark" />
                <span className="font-medium">Safe & secure checkout</span>
              </div>

              <div className="flex items-center justify-center gap-3 mt-5">
                <Image src="/assets/images/svgfiles/visa-bw.svg" alt="Visa" width={40} height={25} />
                <Image src="/assets/images/svgfiles/discover-bw.svg" alt="Discover" width={40} height={25} />
                <Image src="/assets/images/svgfiles/mastercard-bw.svg" alt="MasterCard" width={40} height={25} />
                <Image src="/assets/images/svgfiles/apple pay.svg" alt="Apple Pay" width={40} height={25} />
                <Image src="/assets/images/svgfiles/discover-bw.svg" alt="Discover" width={40} height={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingItem;
