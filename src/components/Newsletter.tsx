"use client";
import Link from "next/link";
import React from "react";

const Newsletter = () => {
  return (
    <section>
     <div className="fluid-container bg-navygreen text-white py-10 relative px-4 md:px-10 lg:px-20">
      <div className="theme-container">
          <div className=" flex flex-col sm:flex-row items-center justify-start gap-6 flex-wrap">
          <h2>
            Subscribe to our Newsletter
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[260px] px-12 py-3 text-white bg-inputbg outline-none text-sm"
          />
          <Link href="/"
           className="bg-dark text-white px-8 py-3 text-sm font-medium hover:bg-dark/70 transition-all duration-300 whitespace-nowrap ">
            Subscribe
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Newsletter;
