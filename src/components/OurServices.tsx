"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const OurServices = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white py-12 lg:py-16 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row w-full items-center relative gap-12 lg:gap-16">

        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[500px]">
          <Image
            src="/assets/images/home-5.jpg"
            alt="Doctor"
            fill
            className="w-full h-full object-cover rounded"
          />

          {/* Overlay Box */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           bg-navygreen px-6 py-6 rounded text-white shadow-lg text-center w-[220px] lg:w-[260px]">
            <h2 className="text-2xl font-bold">58</h2>
            <h3 className="text-sm lg:text-base mt-1">Best doctors in the field</h3>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="w-full lg:w-1/2 bg-navbarbg flex flex-col justify-center px-8 lg:px-16 h-[450px] lg:h-[500px]">
          <h4 className="text-sm lg:text-base text-gray-600">Our Services</h4>
          <h1 className="mt-2 text-2xl lg:text-3xl font-semibold leading-snug">
            We can help you with the following conditions:
          </h1>
          <p className="mt-4 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quam, aliquid at odio voluptates quibusdam doloremque, velit earum, officiis reprehenderit atque adipisci quasi officia inventore pariatur blanditiis eaque ad sequi?
          </p>

          {/* Only 3 items with check icons */}
          <ul className="mt-4 flex flex-col gap-2 text-dark">
            {["Acute rashes", "Cough", "Asthma"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline className="text-navygreen rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-6">
            <button className="text-navygreen flex items-center gap-2 font-semibold font-inter">
              GET MEDICAL CERTIFICATE NOW
              <ChevronRight className="text-white bg-navygreen rounded-full p-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
