"use client";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const OurServices = () => {
  return (
    <section className="fluid-container bg-skyblue py-16 pt-16 mt-12">
      <div className="theme-container flex flex-col lg:flex-row items-center lg:gap-x-28 gap-y-12">
        <div className="relative w-full lg:w-[38%] bg-white">
          <div className="relative w-full">
            <Image
              src="/assets/images/home-5.jpg"
              alt="Doctor"
              width={800}
              height={650}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gray/60"></div>
          </div>

          <div className="absolute lg:right-[-120px] right-6 top-1/2 -translate-y-1/2 bg-navygreen text-white px-10 py-8 shadow-lg">
            <h2>58</h2>
            <h3 className="text-white">Best doctors in the field</h3>
          </div>

          <p>
            Professor Jim Leibniz, Cardiologist
          </p>
        </div>
        <div className="fluid-conyainer lg:w-[60%] pl-[100px]">
          <div className="theme-container">
            <h4>
              Our Services
            </h4>
            <h1>
              We can help you with the following conditions:
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[120px] gap-y-4 text-xl text-gray-800 hover:text-gray mt-12">
              {[
                "Acute rashes",
                "Cough",
                "Asthma",
                "COVID-19",
                "Back pain",
                "Eye infections",
                "Chest infection",
                "Eye problems",
                "Colds & coughs",
                "Ear infections",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border-b border-gray-200 pb-2 hover:text-darkorange"
                >
                  <FiPlus className="text-navygreen text-xl" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 text-navygreen font-semibold hover:underline cursor-pointer">
              <span>View All Departments</span>
              <div className="border border-navygreen p-1">
                <FiPlus className="text-navygreen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
