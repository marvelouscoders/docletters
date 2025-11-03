"use client";
import Image from "next/image";
import { CheckCircle, ChevronRight } from "lucide-react";
import { FaUserDoctor } from "react-icons/fa6";
import Link from "next/link";

export default function ChooseUs() {
  return (
    <section >
    <div className="fluid-container py-16 px-6 md:px-12 lg:px-20">

      <div className="theme-container flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-0 lg:gap-0">
        <div className="relative w-full lg:w-[58%] min-h-[450px]">
          <Image
            src="/assets/images/findout.png"
            alt="findout"
            fill
            className="object-cover"
          />
              <div className="small-box-center">
                <FaUserDoctor className="text-white text-4xl mb-3" />
                <span className="font-extrabold">
                  NHS & GMC
                </span>
                <p className="text-white text-sm ">
                  Registered Doctors <br /> & Same-Day Service
                </p>
              </div>

            </div>   
        <div className="fluid-container lg:w-[58%] flex flex-col justify-center px-4 md:px-8 lg:pl-20 lg:pr-8 py-8 md:py-16 bg-navbarbg">
          <h3 className="heading-small">
            Why Choose Us?
          </h3>
          <h2 >
            Perfect for Work, Study & Travel!
          </h2>

          <p>
            Travel with confidence and unlock global opportunities. Whether you're
            heading abroad for your career, enrolling in an international
            university, or simply exploring new destinations, our certified
            documents help you meet official requirements quickly and stress-free.
          </p>

          <p>
            Submit everything online, get reviewed by qualified professionals, and
            receive your certificate without delays.
          </p>

          <ul className="ul-circle mt-4">
            <li className="flex items-start">
              <CheckCircle className="check-circle" />
              <span>Quick online process with expert verification</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="check-circle" />
              <span>
                Accepted for work permits, study applications & travel documents
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="check-circle" />
              <span>
                Convenient, secure, and accessible anywhere in the world
              </span>
            </li>
          </ul>
          <div>
            <Link
              href="/"
              className="btn-link text-navygreen flex items-center gap-2 flex-nowrap text-sm sm:text-base"
            >
              GET MEDICAL CERTIFICATE NOW
              <ChevronRight className="chevron-right bg-navygreen text-white shrink-0" />
            </Link>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
