"use client";

import { CiMobile3, CiStopwatch } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const InfoBar = () => {
  return (
    <section className="relative bg-navygreen hidden md:block">
      <div className="theme-container px-6 flex items-center justify-between h-15">
        {/* Item 1 */}
        <div className="flex items-center small-heading">
          <CiMobile3 className="text-white text-sm" />
          100% online - hassle-free, stress-free
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-white/50"></div>

        {/* Item 2 */}
        <div className="flex items-center small-heading">
          <FaUserDoctor className="text-white text-base" />
          Certified medical professionals
        </div>

        <div className="h-6 w-px bg-white/50"></div>

        <div className="flex items-center small-heading">
          <VscWorkspaceTrusted  className="text-white text-base" />
          Trusted by thousands of patients
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-white/50"></div>

        <div className="flex items-center small-heading ">
          <CiStopwatch  className="text-white text-base" />
          Available 7 days a week
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
