"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <section>
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/banner1.jpg"
          alt="background"
          fill
          priority
          className="object-cover object-center md:object-center brightness-95"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="theme-container flex flex-col md:flex-row items-start px-6 mt-2 py-20 md:py-28 relative z-10">
        <div className="md:w-[40%] w-full bg-white/90 shadow-xl border-8 border-skyblue px-8 py-10 backdrop-blur-sm text-center md:text-left">
          <h1 className="h1">
            Same-day trusted medical letters & certificates
          </h1>
          <p>
            Get a medical certificate from a private NHS doctor today without the hassle of waiting for a GP appointment.
          </p>
          <Link href="/" className="btn-link items-start sm:items-center justify-center">
            Get Started 
            <ChevronRight className="chevron-right" />
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;
