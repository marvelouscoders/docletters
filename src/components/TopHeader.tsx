"use client";
import { CiMail } from "react-icons/ci";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="topheader-container relative">
      {/* Top Green Bar */}
      <div className="w-full bg-navygreen text-white text-center py-1 md:py-2 text-sm pt-4 pb-4">
        Get 10% off with the code: <span className="font-bold">Winter25</span>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-2 px-8">
        {/* Left Section */}
        <div className="hidden md:flex flex-wrap items-center gap-4 text-sm font-inter text-gray">
          <span className="flex items-center gap-2">
            <CiMail className="text-dark text-lg md:text-base" />
            <span className="text-[15px] md:text-sm">info@newpharmacy.co.uk</span>
          </span>

          {/* Timing hidden on mobile */}
          <span className="flex items-center gap-2">
            Mon - Sat 9:00AM - 6:00PM
          </span>
        </div>

        {/* Right Section */}
       <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm font-inter text-gray w-full md:w-auto justify-end mt-2 md:mt-0">


          <span className="flex items-center gap-2 cursor-pointer transition">
            <FaUser className="text-dark text-base md:text-sm" />
            <span className="text-[15px] md:text-sm text-gray">Account</span>
          </span>

          <span className="flex items-center gap-2 cursor-pointer transition">
            <FaShoppingCart className="text-dark text-base md:text-sm" />
            <span className="text-[15px] md:text-sm text-gray">0 items</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
