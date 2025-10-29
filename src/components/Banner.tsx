"use client";
import Image from "next/image";
import { CiMobile3 } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineChevronRight } from "react-icons/md";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/banner1.jpg"
          alt="background"
          fill
          priority
          className="object-cover object-center md:object-center brightness-95"
        />
        <div className="absolute inset-0 bg-black/10"></div>

        {/* ✅ Bottom Green Bar (desktop/tablet only) */}
        <div className="hidden md:block absolute bottom-0 w-full h-15 bg-navygreen">
          <div className="theme-container px-6 flex items-center justify-between h-full">
            <div className="flex items-center gap-2 text-white text-sm">
              <CiMobile3 className="text-white text-sm" />
              <span>100% online - hassle-free, stress-free</span>
            </div>
            <div className="h-6 w-px bg-white/50"></div>
            <div className="flex items-center gap-2 text-white text-sm">
              <FaUserDoctor className="text-white text-base" />
              <span>100% online - hassle-free, stress-free</span>
            </div>
            <div className="h-6 w-px bg-white/50"></div>
            <div className="flex items-center gap-2 text-white text-sm">
              <FaUserDoctor className="text-white text-sm" />
              <span>100% online - hassle-free, stress-free</span>
            </div>
            <div className="h-6 w-px bg-white/50"></div>
            <div className="flex items-center gap-2 text-white text-sm">
              <CiMobile3 className="text-white text-base" />
              <span>100% online - hassle-free, stress-free</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Content Section */}
      <div className="theme-container flex flex-col md:flex-row items-start px-6 py-20 md:py-28 relative z-10">
        <div className="md:w-[40%] w-full bg-white/90 shadow-xl border-8 border-skyblue px-8 py-10 backdrop-blur-sm text-center md:text-left">
          <h1>
            Same-day trusted medical letters & certificates
          </h1>
          <p>
            Get a medical certificate from a private NHS doctor today without the hassle of waiting for a GP appointment.
          </p>

          <button className="mt-4 flex items-center gap-2 justify-center md:justify-start text-navyorange font-semibold hover:underline text-navygreen">
            Get Started <MdOutlineChevronRight className="bg-navygreen text-white text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
