"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const FindOut = () => {
  return (
    <section className="theme-container py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row w-full items-center relative">

        {/* Left Side Image */}
        <div className="lg:w-1/3 w-full relative h-[400px] overflow-hidden">
          <Image
            src="/assets/images/findout.png"
            alt="Left Side Image"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Text */}
        <div className="lg:w-2/3 w-full flex flex-col justify-center px-20 lg:px-24 h-[400px] bg-navbarbg pt-8">
          <h3>COVID-19 Testing</h3>
          <h1>Rapid COVID-19 Testing and Patients</h1>
          <p>
            AFC Urgent Care Waltham offers COVID-19 Rapid Virus and Antibody Testing. 
            If you have any questions about testing, insurance coverage, please consult our FAQs.
          </p>
          <ul className="list-disc pl-5 text-dark mb-4">
            <li>Fast and reliable testing</li>
            <li>Certified medical reports</li>
            <li>Convenient appointments</li>
          </ul>
          <div className="mt-4 px-2 mb-4">
            <button className="text-navygreen flex items-center gap-2 font-semibold font-inter">
              GET MEDICAL CERTIFICATE NOW{" "}
              <ChevronRight className="text-white bg-navygreen rounded-full" />
            </button>
          </div>
        </div>

        {/* Center Overlay Div - Half Image, Half Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        bg-navygreen px-6 py-10 lg:py-14 rounded text-white text-center z-20 
                        w-[220px] lg:w-[260px]">
          Quick Info: Book your test today!
        </div>

      </div>
    </section>
  );
};

export default FindOut;
