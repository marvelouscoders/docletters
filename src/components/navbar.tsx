"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) =>  {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <div className="  flex items-center justify-between px-8 py-6">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/svgfiles/logo-6.svg"
            alt="logo"
            width={140}
            height={80}
          />
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="#" className="text-red-500 hover:text-red-600">
            Home
          </Link>

          {/* Departments */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdown("departments")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-red-500">
              Departments <FiChevronDown />
            </button>
            {openDropdown === "departments" && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg py-2">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Cardiology
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Neurology
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Orthopedics
                </Link>
              </div>
            )}
          </div>

          {/* Doctors */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdown("doctors")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-red-500">
              Doctors <FiChevronDown />
            </button>
            {openDropdown === "doctors" && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg py-2">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dr. John Smith
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dr. Emily Carter
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dr. James Lee
                </Link>
              </div>
            )}
          </div>

          {/* Patients & Visitors */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdown("patients")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-red-500">
              Patients & Visitors <FiChevronDown />
            </button>
            {openDropdown === "patients" && (
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg py-2">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Visitor Guidelines
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Insurance Info
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Billing & Support
                </Link>
              </div>
            )}
          </div>

          {/* Appointment Button */}
          <button className="text-xl border-2 border-red-500 text-red-500 px-5 py-2 rounded font-medium hover:bg-red-500 hover:text-white transition">
            Appointment
          </button>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t text-gray-700 px-6 py-4 space-y-2">
          <Link href="#" className="block hover:text-red-500">
            Home
          </Link>

          {/* Mobile Dropdowns */}
          <details>
            <summary className="cursor-pointer flex items-center gap-1">
              Departments <FiChevronDown />
            </summary>
            <div className="pl-4 mt-2 space-y-1">
              <Link href="#" className="block hover:text-red-500">
                Cardiology
              </Link>
              <Link href="#" className="block hover:text-red-500">
                Neurology
              </Link>
              <Link href="#" className="block hover:text-red-500">
                Orthopedics
              </Link>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer flex items-center gap-1">
              Doctors <FiChevronDown />
            </summary>
            <div className="pl-4 mt-2 space-y-1">
              <Link href="#" className="block hover:text-red-500">
                Dr. John Smith
              </Link>
              <Link href="#" className="block hover:text-red-500">
                Dr. Emily Carter
              </Link>
              <Link href="#" className="block hover:text-red-500">
                Dr. James Lee
              </Link>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer flex items-center gap-1">
              Patients & Visitors <FiChevronDown />
            </summary>
            <div className="pl-4 mt-2 space-y-1">
              <Link href="#" className="block hover:text-red-500">
                Visitor Guidelines
              </Link>
              <Link href="#" className="block hover:text-red-500">
                Insurance Info
              </Link>
              <Link href="#" className="block hover:text-red-500">
                Billing & Support
              </Link>
            </div>
          </details>

          <button className="w-full border-2 border-red-500 text-red-500 px-4 py-2 rounded font-medium hover:bg-red-500 hover:text-white transition">
            Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
