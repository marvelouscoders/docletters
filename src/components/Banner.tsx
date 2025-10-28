"use client";
import Image from "next/image";
import { FiPlusCircle } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ✅ Background Image (same for all devices) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/home-6-1.jpg"
          alt="background"
          fill
          className="object-cover object-center md:object-cover object-contain md:object-center"
          priority
        />
      </div>

      {/* ✅ Content */}
      <div className="theme-container flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-24 gap-8 relative z-10">
        <div className="fluid-container md:w-1/2 bg-white/90 shadow-lg border-l-8 border-navyorange px-6 py-8 backdrop-blur-sm">
          <h6>Quality Health Care</h6>
          <h1>Your Health is Our Main Priority</h1>
          <p>
            When you are sick or have become injured and need to see a doctor fast,
            waiting is not an option.
          </p>

          <button className="mt-6 flex items-center gap-2 text-navyorange font-medium hover:underline">
            Book Appointment <FiPlusCircle className="text-navyorange text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
