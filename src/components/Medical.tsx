"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row pb-12">
      <div className="flex-1 bg-navygreen text-white flex flex-col justify-center py-10 sm:py-14 lg:py-16">
        <div className="theme-container px-6 sm:px-10 lg:px-30">
          <h1 >
            The fastest and most convenient way to get a medical letter
          </h1>
          <p className="text-white">
            AFC Urgent Care Waltham offers COVID-19 Rapid Virus and Antibody
            Testing. If you have any questions about testing, insurance
            coverage, please consult our FAQs.
          </p>

          <div className="mt-6" >
            <Link href="/" className="btn-link text-white">
              GET MEDICAL CERTIFICATE NOW
              <ChevronRight className="chevron-right bg-white text-navygreen" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <Image
          src="/assets/images/medical.png"
          alt="Medical"
          width={1200}
          height={800}
          className="w-full h-[280px] sm:h-[400px] lg:h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
