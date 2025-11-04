"use client";
import React from "react";
import { FiCheck, FiArrowUpRight } from "react-icons/fi";

const Register = () => {
  return (
    <section className="bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="space-y-2 mb-6">
        <h2>New to Oxfordmeds</h2>
        <p>
          There are many great benefits to registering an account with us.
        </p>
      </div>

      <ul className="space-y-3 mb-8 text-dark">
        {[
          "Regular email updates from the Oxfordmeds team",
          "Edit your details",
          "Manage your health profile",
          "Faster checkout",
          "Re order previous treatments",
        ].map((text, i) => (
          <li key={i} className="flex items-start gap-3">
            <FiCheck className="text-[18px] bg-pink text-white  shrink-0" />
            {text}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center">
        <button className="w-full  flex items-center justify-center gap-2">
          Register Now 
        </button>
      </div>
    </section>
  );
};

export default Register;
