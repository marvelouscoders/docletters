"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiUser, FiMail, FiMapPin } from "react-icons/fi";
import TopCouponCodeBar from "@/components/TopCouponCodeBar";
import TopAccountBar from "@/components/TopAccountBar";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { CheckCircle } from "lucide-react";

interface InputProps {
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-skyblue"
  />
);


const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
    <TopCouponCodeBar/>
    <TopAccountBar/>
    <Navbar/>

      <div className="min-h-screen flex items-center justify-center bg-bgblue px-6 sm:px-8 py-16">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 transition-all duration-500">
          <div className="bg-navygreen border  p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md text-white">
            <div className="space-y-2 mb-6">
              <h2 >Log In Now</h2>
              <span className=" text-white" >
                Are you a member already?
              </span><br/>
              <span className="text-white  ">
                Use the form below to log in to your account.
              </span>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Enter Email</label>
                <input
                  type="email"
                  placeholder="paul@gmail.com"
                  className="w-full bg-[#34A9AE] px-4 py-2 focus:outline-none focus:ring-2 "
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full bg-[#34A9AE] px-4 py-2 focus:outline-none  "
                />
              </div>
              <Link href="/dash-bord">
              <div className="flex items-center justify-center">
                  <button
                    onClick={() => setShowRegister(true)}
                    className="w-full  border px-4 py-2  flex items-center justify-center gap-2 text-[20px]"
                  >
                    Login Now
                  </button>
                </div>

              </Link>
              

              <p className="text-end text-sm text-white">
                Forgot Password?
              </p>
            </form>

            <p className="text-[12px] text-white">
              Copyright © Vir Health Limited. All rights reserved. Numan is a
              trading name of Vir Health Limited. Registered office Floor 4,
              Farringdon Point, 33 Farringdon Road, London, England, EC1M 3JF.
            </p>
          </div>
          {!showRegister ? (
            // Default "New to Oxfordmeds" box
            <div className="bg-navbarbg  p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="space-y-2 mb-6">
                <h2 >
                  New to Pharmacy
                </h2>
                <p >
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
                      <CheckCircle className="check-circle" />
                      {text}
                    </li>
                  ))}
                </ul>

            <div className="flex items-center justify-center">
            <button
                onClick={() => setShowRegister(true)}
                className="w-full border border-navygreen text-navygreen px-4 py-2  flex items-center justify-center gap-2 hover:bg-navygreen hover:text-white transition-all duration-300 text-[20px]"
            >
                Register Now
            </button>
            </div>



              <p className="text-center">
                Need Help?{" "}
                <span className="text-[#01949A] cursor-pointer hover:underline">
                  Contact Us
                </span>
              </p>
            </div>
          ) : (
<section className="bg-navbarbg shadow-lg p-8 sm:p-10 overflow-y-auto max-h-[80vh]">
  <div className="text-center mb-6">
    <h2>Register</h2>
    <p>To register, please provide your details using the form below.</p>
  </div>

  {/* Your Details */}
  <div className="space-y-4 mb-6">
    <div className="flex items-center gap-2 border-b pb-1 border-gray-200">
      <FiUser className="text-skyblue text-xl sm:text-2xl" />
      <h3>Your Details</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        placeholder="First Name"
        className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
      />
      <input
        placeholder="Last Name"
        className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
      />
      <select className="bg-white py-2 px-3 text-gray-700 focus:outline-none">
        <option>Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input
        placeholder="Contact Number"
        className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
      />
    </div>
  </div>

  {/* Account Details */}
  <div className="space-y-4 mb-6">
    <div className="flex items-center gap-2 border-b pb-1 border-gray-200">
      <FiMail className="text-skyblue text-2xl sm:text-3xl" />
      <h3>Account Details</h3>
    </div>
    <input
      type="email"
      placeholder="Email"
      className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
    />
    <input
      type="password"
      placeholder="Re-enter Password"
      className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
    />
  </div>

  {/* Address */}
  <div className="space-y-4">
    <div className="flex items-center gap-2 border-b pb-1 border-gray-200">
      <FiMapPin className="text-skyblue text-2xl sm:text-3xl" />
      <h3>Your Address</h3>
    </div>
    <input
      placeholder="Address 1"
      className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
    />
    <input
      placeholder="Address 2"
      className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        placeholder="Postcode/Zip"
        className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
      />
      <input
        placeholder="City"
        className="w-full bg-white px-4 py-2 text-gray-700 focus:outline-none"
      />
    </div>
    <select className="bg-white py-2 px-3 text-gray-700 focus:outline-none w-full">
      <option>Select Country</option>
      <option>Pakistan</option>
      <option>United Kingdom</option>
      <option>United States</option>
    </select>
  </div>

  <div className="flex items-start gap-2 text-sm mt-4">
    <input type="checkbox" className="mt-3" />
    <p>
      I confirm I have read and accept
      <span className="text-pink font-medium cursor-pointer items-center justify-between px-2 text-center">
        Terms and Conditions of Service.
      </span>
    </p>
  </div>

  <button
    type="submit"
    className="w-full border border-navygreen text-navygreen px-4 py-2 flex items-center justify-center gap-2 hover:bg-navygreen hover:text-white transition-all duration-300 text-[20px]"
  >
    Register Now
  </button>

  <p
    onClick={() => setShowRegister(false)}
    className="text-center text-sm text-pink mt-4 cursor-pointer hover:underline"
  >
    ← Back to Login Info
  </p>
</section>

          )}
        </div>
      </div>
      <Newsletter/>

      <Footer />
    </>
  );
};

export default LoginPage;
