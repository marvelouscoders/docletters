"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const OurServices = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white py-12 lg:py-16 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row w-full items-center relative">

        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[500px]">
          <Image
            src="/assets/images/home-5.jpg"
            alt="Doctor"
            fill
            className="w-full h-full object-cover rounded"
          />

          
        </div>

        {/* Overlay Box */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           bg-navygreen px-6 py-6 rounded text-white shadow-lg text-center w-[220px] lg:w-[260px]">
            <h2>58</h2>
            <h3 className="text-white">Best doctors in the field</h3>
          </div>

        {/* Right Side Text */}
        <div className="w-full lg:w-1/2 bg-navbarbg flex flex-col justify-center px-12 left-px-8 lg:px-20 h-[450px] lg:h-[500px]">
          <h4>Our Services</h4>
          <h1 className="mt-2">We can help you with the following conditions:</h1>
          <p className="mt-4">
            Professor Jim Leibniz, Cardiologist
          </p>

          {/* Only 3 items with check icons */}
          <ul className="mt-4 flex flex-col gap-2 text-dark">
            {["Acute rashes", "Cough", "Asthma"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FiCheck className="text-navygreen" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-6">
            <button className="text-navygreen flex items-center gap-2 font-semibold font-inter">
              GET MEDICAL CERTIFICATE NOW{" "}
              <ChevronRight className="text-white bg-navygreen rounded-full p-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
