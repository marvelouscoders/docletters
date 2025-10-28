"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const ChooseUs = () => {
  return (
    <section className="fluid-container bg-white py-16">
      <div className="theme-container flex flex-col lg:flex-row items-center gap-16">

        <div className="w-full lg:w-1/2">
          <h4>Why Choose Us?</h4>
          <h2>Urgent Care & Occupational Medicine Clinic</h2>

   
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h5>More experience</h5>
              <p>You can stay connected to your healthcare team though virtual visits</p>
            </div>

            <div>
              <h5>The right answers</h5>
              <p>You can stay connected to your healthcare team though virtual visits.</p>
            </div>

            <div>
              <h5>24/7 Support</h5>
              <p>Were always available to assist you when needed.</p>
            </div>

            <div>
              <h5>24/7 Support</h5>
              <p>Were always available to assist you when needed.</p>
            </div>
          </div>
          <div className="mt-10">
            <button className="btn-gradient flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium">
              Learn More <FiArrowUpRight className="text-lg" />
            </button>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex justify-center">

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
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
