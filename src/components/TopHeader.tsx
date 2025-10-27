"use client";
import { FiPhoneCall } from "react-icons/fi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { WiTime3 } from "react-icons/wi";

const TopHeader = () => {
  return (
    <div className="topheader-container">
      <div className=" flex flex-col md:flex-row items-center justify-between  py-3 gap-2 px-8">
        <div className="flex flex-wrap items-start gap-4 text-base font-inter">
          <span className="flex items-center ">
            <IoLocationOutline className="text-orange " /> Brooklyn, NY 10036, United States
          </span>
          <div className="h-6 w-px bg-gray-100" />
          <span className="flex items-center gap-1">
             Mon - Sat 9:00AM - 6:00PM
          </span>
        </div>
        <div className="flex flex-wrap items-end-safe gap-4 text-base">
          <span className="flex items-center gap-1">
            <IoCallOutline  className="text-orange "/><span className="text-orange"> Call:</span> 1-800-123-1234
          </span>
          <span className="flex items-center gap-1">
            <FiPhoneCall className="text-orange" /> <span className="text-orange"> Emergency:</span> 1-800-123-1235
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
