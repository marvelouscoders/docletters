"use client";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/home-6-1.jpg"
          alt="background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ✅ Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-24 gap-8 relative z-10">
        
        {/* Left Box */}
        <div className="w-full md:w-1/2 bg-white/90 shadow-lg border-l-8 border-red-500 px-6 py-8  backdrop-blur-sm">
          <h6>
            Quality Health Care
          </h6>
          <h1 >
            Your Health is Our Main Priority
          </h1>
          <p className="text-base text-gray-600 mt-4">
            When you are sick or have become injured and need to see a doctor fast,
            waiting is not an option.
          </p>

          <button className="mt-6 flex items-center gap-2 text-red-500 font-medium hover:underline">
            Book Appointment <FiPlus className="text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
