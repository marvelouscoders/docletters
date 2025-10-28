"use client";

import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="topheader-container">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-2 px-8">
        {/* --- Left Side (Location + Timing) --- */}
        <div className="flex flex-wrap items-center gap-4 text-base font-inter text-gray-700">
          <span className="flex items-center gap-2">
            <IoLocationOutline className="text-orange text-xl" />
            Brooklyn, NY 10036, United States
          </span>

          <div className="hidden md:block h-6 w-px bg-gray-200" />

          <span className="flex items-center gap-2">
            Mon - Sat 9:00AM - 6:00PM
          </span>
        </div>

        {/* --- Right Side (Account + Cart) --- */}
        <div className="flex flex-wrap items-center gap-6 text-base font-inter text-gray-700">
          <span className="flex items-center gap-2 cursor-pointer hover:text-orange transition">
            <FiUser className="text-orange text-lg" />
            <span>Account</span>
          </span>

          <span className="flex items-center gap-2 cursor-pointer hover:text-orange transition">
            <MdOutlineShoppingCart className="text-orange text-lg" />
            <span>0 items</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
