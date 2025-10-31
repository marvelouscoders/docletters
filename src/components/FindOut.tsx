"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const FindOut = () => {
  return (
    <section className="w-full py-12 lg:py-16">
      {/* Full width wrapper */}
      <div className="theme-container w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch relative">

        {/* Left Side Image */}
        <div className="w-full lg:w-1/3 relative h-[300px] lg:h-auto overflow-hidden rounded-lg">
          <Image
            src="/assets/images/findout.png"
            alt="Left Side Image"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col justify-between px-6 lg:px-24 relative bg-navbarbg text-white rounded-lg">
          <div className=" lg:pt-0">
            <h3 className="text-lg font-semibold">COVID-19 Testing</h3>
            <h1 className="text-2xl lg:text-4xl font-bold mt-2 mb-4">Rapid COVID-19 Testing and Patients</h1>
            <p className="text-base lg:text-lg mb-4">
              AFC Urgent Care Waltham offers COVID-19 Rapid Virus and Antibody Testing. 
              If you have any questions about testing, insurance coverage, please consult our FAQs.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Fast and reliable testing</li>
              <li>Certified medical reports</li>
              <li>Convenient appointments</li>
            </ul>
          </div>

          {/* Button stays at bottom inside the div */}
          <div className="">
            <button className="text-navygreen flex items-center gap-2 font-semibold font-inter bg-white px-4 py-2 rounded-full shadow">
              GET MEDICAL CERTIFICATE NOW
              <ChevronRight className="text-white bg-navygreen rounded-full p-1" />
            </button>
          </div>
        </div>

        {/* Center Overlay Div */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        bg-navygreen px-6 py-8 lg:py-10 rounded text-white text-center z-20 
                        w-[220px] lg:w-[260px]">
          Quick Info: Book your test today!
        </div>

      </div>
    </section>
  );
};

export default FindOut;
