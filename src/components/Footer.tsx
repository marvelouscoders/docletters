"use client";

import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import Image from "next/image";

export default function Footers() {
  return (
    <>
      {/* ✅ Newsletter Section */}
<div className="bg-navygreen text-white py-10">
  <div className="theme-container px-8 flex flex-col sm:flex-row items-center justify-start gap-6 flex-wrap">
    <h1 >
      Subscribe to our Newsletter
    </h1>
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


      {/* ✅ Main Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1 - Logo + Links */}
            <div>
              <Image
                src="/assets/images/svgfiles/logo-6.svg"
                alt="Pharmacy Logo"
                width={140}
                height={60}
                className="object-contain mb-6 bg-white"
              />
              <ul className="space-y-3 text-gray-200/90 text-sm">
                <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white">Code of Practice</Link></li>
                <li><Link href="#" className="hover:text-white">In the Press</Link></li>
              </ul>
            </div>

            {/* Column 2 - Useful Links */}
            <div>
              <h2 className="text-lg lg:text-xl font-semibold mb-6 text-white">Useful Links</h2>
              <ul className="space-y-3 text-gray-200/90 text-sm">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about-us" },
                  { name: "Contact Us", path: "/contact-us" },
                  { name: "Delivery and Returns", path: "/service" },
                  { name: "Cookie and Policy", path: "/blog" },
                  { name: "Terms and Use", path: "/blog" },
                  { name: "Disclaimer", path: "/" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.path}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Pharmacy Info */}
            <div>
              <h2 className="text-lg lg:text-xl font-semibold mb-6 text-white">Pharmacy Info</h2>
              <ul className="space-y-3 text-gray-200/90 text-sm">
                <li>GPhC Registration Number:<br />2056497</li>
                <li>GPhC Registered Owner:<br />M&H Pharma Ltd</li>
                <li>Superintendent Pharmacist:<br />Huzefa Broachwalla</li>
                <li>GPhC Pharmacy Details:<br />9011894</li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h2 className="text-lg lg:text-xl font-semibold mb-6 text-white">Contact Us</h2>
              <ul className="space-y-4 text-gray-200/90 text-sm">
                <li className="flex items-center gap-3">
                  <IoCallOutline className="w-5 h-5 text-white" /> 01332 344049
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" /> info@newpharmacy.com
                </li>
                <li className="flex items-start gap-3">
                  <FaLocationDot className="w-5 h-5 text-white mt-1" />
                  <span>New Pharmacy, 126 Kedleston Road, Derby, DE22 1FX</span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-5 mt-6">
                <Link href="#" className="hover:text-gray-200"><SiFacebook size={20} /></Link>
                <Link href="#" className="hover:text-gray-200"><FiInstagram size={20} /></Link>
                <Link href="#" className="hover:text-gray-200"><CiTwitter size={20} /></Link>
                <Link href="#" className="hover:text-gray-200"><Linkedin size={20} /></Link>
              </div>
            </div>
          </div>

          {/* ✅ Bottom Row */}
          <div className="border-t border-white/20 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-300 text-xs sm:text-sm">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-4 lg:mb-0">
              <Link href="#" className="hover:text-white">Terms & Conditions</Link>
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Cookies Policy</Link>
              <Link href="#" className="hover:text-white">Accessibility</Link>
            </div>

            <div className="flex gap-2">
              {["regester.png", "ico.png", "cyber.png", "ukas.png"].map((img, i) => (
                <img
                  key={i}
                  src={`/assets/images/${img}`}
                  alt={`Payment ${i + 1}`}
                  className="w-15 h-10 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
