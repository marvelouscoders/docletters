"use client";
import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="bg-navygreen text-white py-10">
        <div className="theme-container px-8 flex flex-col sm:flex-row items-center justify-start gap-6 flex-wrap">
          <h2>
            Subscribe to our Newsletter
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[260px] px-12 py-3 text-white bg-inputbg outline-none text-sm"
          />
          <button className="bg-dark text-white px-8 py-3 text-sm font-medium hover:bg-opacity-80 transition-all duration-300 whitespace-nowrap ">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
