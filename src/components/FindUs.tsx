"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Findout = () => {
  return (
    <section className="theme-container py-12 lg:py-16 px-4 lg:px-0 -mt-8">
      <div className="flex flex-col lg:flex-row w-full relative">

        {/* Left Image */}
        <div className="relative w-full lg:w-5/12 h-[500px] lg:h-[600px] shrink-0">
          <Image
            src="/assets/images/findout.png"
            alt="Doctor"
            fill
            className="w-full h-full object-cover"
          />

          {/* Overlay Box */}
          <div className="small-box">
            <FaUserDoctor className="text-white text-2xl" />
            <span className="mt-2 text-sm lg:text-base text-white">
              NHS & GMC registered doctors & Same-day service
            </span>
          </div>

        </div>
        <div className="w-full flex-1 flex flex-col justify-between px-6 sm:px-8 lg:px-28 h-[500px] lg:h-[600px] bg-navbarbg pt-12 pb-16">


          <h3 className="heading-small" >WHY CHOOSE US ?</h3>
          <h2>
            Perfect for Work, Study & Travel!
          </h2>
          <p>
            Travel with confidence and unlock global opportunities. Whether you’re heading abroad for your career,
             enrolling in an international university, or simply exploring new destinations,
             our certified documents help you meet official requirements quickly and stress-free.
          </p>
          <p>Submit everything online, get reviewed by qualified professionals, and receive your certificate without delays.</p>


         <ul className="mt-4 flex flex-col gap-3 text-dark">
            {[
              "Quick online process with expert verification",
              "Accepted for work permits, study applications & travel documents",
              "Convenient, secure, and accessible anywhere in the world"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <IoIosCheckmarkCircleOutline className="text-navygreen text-2xl shrink-0 mt-1" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
         <div className="mt-4">
            <Link href="/">
            <button className="btn-link">
              GET MEDICAL CERTIFICATE NOW
              <ChevronRight className="chevron-right" />
            </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Findout;
