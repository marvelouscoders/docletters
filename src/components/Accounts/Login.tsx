"use client";
import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <section>
    <div className="fluid-container py-12">
      <div className="theme-container text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 transition-all duration-500">
          <div className="bg-white border p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="space-y-2 mb-6">
              <h2>Log In Now</h2>
              <p>Are you a member already?</p>
              <p>Use the form below to log in to your account.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Enter Email
                </label>
                <input
                  type="email"
                  placeholder="paul@gmail.com"
                  className="w-full border border-gray-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-skyblue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full border border-gray-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-skyblue"
                />
              </div>

              <Link href="/dash-bord">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setShowRegister(true)}
                    className="w-full btn-gradient flex items-center justify-center gap-2"
                  >
                    Login Now
                  </button>
                </div>
              </Link>

              <p className="text-center text-sm text-pink font-medium cursor-pointer hover:underline mt-3">
                Forgot Password?
              </p>
            </form>

            <p className="text-[14px] text-white">
              Copyright © Vir Health Limited. All rights reserved. Numan is a
              trading name of Vir Health Limited. Registered office Floor 4,
              Farringdon Point, 33 Farringdon Road, London, England, EC1M 3JF.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;
