"use client";
import Image from "next/image";

const FindOut = () => {
  return (
    <section className="theme-container py-12">
      <div className="flex flex-col lg:flex-row w-full">

        {/* Left Side Text */}
        <div className="lg:w-2/5 bg-darkgreen text-white flex flex-col justify-center px-12">
          <h1>Rapid COVID-19 Testing and Patients</h1>
          <p className="!text-white text-base ">
            AFC Urgent Care Waltham offers COVID-19 Rapid Virus and Antibody Testing. If you have any questions about testing, insurance coverage, please consult our FAQs.
          </p>
          <button className="mt-6  py-3  text-white flex  gap-2 hover:bg-navygreen transition w-max">
            Find Out More 
          </button>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-3/5 w-full relative">
          <Image
            src="/assets/images/check covid.jpg"
            alt="Right Side Image"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
          />
           <div className="absolute inset-0 bg-gray/60"></div>
        </div>

      </div>
    </section>
  );
};

export default FindOut;
