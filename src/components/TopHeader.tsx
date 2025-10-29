"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiMail, CiUser } from "react-icons/ci";

const TopHeader = () => {
  return (
    <div className="topheader-container">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-2 px-8">
        <div className="flex flex-wrap items-center gap-4 text-sm font-inter text-gray">
          <span className="flex items-center gap-2">
            <CiMail  className="text-dark text-lg" />
            info@newpharmacy.co.uk
          </span>
          <span className="flex items-center gap-2">
            Mon - Sat 9:00AM - 6:00PM
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm font-inter text-gray">
          <span className="flex items-center gap-2 cursor-pointer transition">
            <CiUser className=" text-dark text-lg" />
            <span className="text-sm text-gray">Account</span>
          </span>

          <span className="flex items-center gap-2 cursor-pointer  transition">
            <MdOutlineShoppingCart className="text-dark text-lg" />
            <span className="text-sm text-gray">0 items</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
