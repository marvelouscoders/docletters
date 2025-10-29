"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoDotFill } from "react-icons/go";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = React.useState<string | null>(null);

  const menuItems = [
    {
      title: "Travel Letters",
      items: [
        "Travel with Medication Letter",
        "Fit for Flight Letter for Expectant Mothers",
        "Emergency Cancellation Letter for Travel",
        "Chickenpox Flight Clearance Medical",
        "Travel and holiday cancellation certificate",
        "Event and activity cancellation certificate",
        "Expedition Cruise Medical",
        "Fit-to-Cruise",
        "Vaccine Exemption Certificate",
        "Yellow Fever – Vaccine Exemption",
        "Youth Camp or Trip Medical Certificate",
      ],
    },
    {
      title: "Sickness Letters",
      items: [
        "Disability Confirmation Letter",
        "Adjustments to Work Duties Letter",
        "Fit to Resume Studies Letter",
        "Specialist Referral Letter",
        "Employee Fitness to Work Medical",
        "Sick Note for Work",
        "Student Sick Leave Letter",
        "GP Sickness Note",
        "University, college and school sickness letter",
        "ADHD, ASD, or Neurodiverse Certificate",
        "Housing support medical letter",
        "Injury and accident confirmation letter",
        "Event and activity cancellation certificate",
        "Gym and health club cancellation certificate",
        "Allergy certificate",
      ],
    },
    {
      title: "Recovery Certificates",
      items: [
        "Actors & models fit to work",
        "Chickenpox Flight Clearance Medical",
        "Yellow Fever – Vaccine Exemption",
      ],
      singleColumn: true,
    },
    {
      title: "General Medical letters",
      items: [
        "Disability Confirmation Letter",
        "Fit to Resume Studies Letter",
        "Specialist Referral Letter",
        "Sick Note for Work",
        "Student Sick Leave Letter",
        "Pregnancy confirmation",
      ],
    },
    {
      title: "Visa Medical",
      items: [
        "Certificate of Good Health for Greece Visa",
        "Certificate of Good Health for France Work Visa",
        "Certificate of Good Health for South Africa Visa",
        "Certificate of Good Health for Thailand Visa",
        "Certificate of Good Health for Spanish Visa",
      ],
      singleColumn: true,
    },
  ];

  return (
<nav className="fluid-container border-b border-bggray relative z-50">
   <div className="flex items-center justify-between px-6 py-5 md:px-8">
        {/* --- Desktop Logo (hidden below lg) --- */}
        <Image
          src="/assets/images/svgfiles/logo-6.svg"
          alt="logo"
          width={140}
          height={90}
          className="hidden lg:block"
        />

        {/* --- Desktop Menu --- */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 relative">
          <li>
            <Link
              href="/"
              className="font-semibold text-dark hover:text-navygreen transition"
            >
              Home
            </Link>
          </li>

          {menuItems.map((menu) => (
            <li
              key={menu.title}
              className="relative group"
              onMouseEnter={() => setOpenMenu(menu.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`flex items-center gap-1 font-semibold text-dark hover:text-navygreen transition ${
                  openMenu === menu.title ? "text-navygreen" : ""
                }`}
              >
                {menu.title}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openMenu === menu.title ? "rotate-180 text-navygreen" : ""
                  }`}
                />
              </button>

              {/* --- Dropdown --- */}
              {openMenu === menu.title && (
                <div
                  className={`
                    absolute left-0 top-[calc(100%+33px)] z-50
                    bg-navbarbg shadow-xl border border-gray-200
                    transition-all duration-300 ease-in-out
                    ${menu.singleColumn ? "w-[340px]" : "w-[500px]"}
                    py-4 before:content-[''] before:absolute before:-top-8 before:left-0 before:w-full before:h-8
                  `}
                >
                  {/* Dropdown Heading */}
                  <div className="px-6 pb-2 text-left">
                    <h6 className="text-navygreen font-semibold uppercase tracking-wide text-[13px] leading-[20px]">
                      {menu.title}
                    </h6>
                  </div>

                  {/* Dropdown Items */}
                  <div
                    className={`${
                      menu.singleColumn ? "grid-cols-1" : "grid-cols-2"
                    } grid gap-[2px] px-6 py-2`}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="group/item flex items-start gap-2 py-[6px] px-2 transition-all duration-200 hover:bg-navygreen text-white"
                      >
                        <span className="shrink-0 mt-[6px]">
                          <GoDotFill className="text-dark text-[8px] group-hover/item:text-white transition-colors duration-200" />
                        </span>
                        <span className="text-dark text-[14px] font-inter leading-[20px] group-hover/item:text-white transition-colors duration-200">
                          {item}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}

          {/* Appointment Button */}
          <Button
            variant="outline"
            className="border-navygreen text-navygreen hover:bg-navygreen hover:text-white font-semibold duration-300 px-8 py-6"
          >
            Appointment
          </Button>
        </ul>

        {/* --- Mobile/Tablet Layout --- */}
        <div className="flex items-center justify-between w-full lg:hidden py-5 px-4">
          {/* Toggle Button (Left) */}
          <button
            className="flex items-center"
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-7 w-7 text-dark" />
          </button>

          {/* Logo (Right) */}
          <Image
            src="/assets/images/svgfiles/logo-6.svg"
            alt="logo"
            width={110}
            height={80}
          />
        </div>

        {/* --- Mobile Drawer (Opens from Left) --- */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ${
            mobileOpen ? "bg-black/50 visible opacity-100" : "invisible opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className={`absolute left-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-navygreen">Menu</h3>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close Menu"
                className="p-2 rounded-md hover:bg-gray-100 transition"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="overflow-y-auto h-[calc(100%-80px)] px-6 py-5 space-y-5">
              <ul className="space-y-4">
                {menuItems.map((menu) => (
                  <li key={menu.title} className="border-b border-bggray pb-2">
                    <button
                      className="w-full flex justify-between items-center text-left font-medium text-dark hover:text-navygreen"
                      onClick={() =>
                        setExpandedMobileMenu(
                          expandedMobileMenu === menu.title ? null : menu.title
                        )
                      }
                    >
                      {menu.title}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedMobileMenu === menu.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Expanded submenu */}
                    {expandedMobileMenu === menu.title && (
                      <div className="mt-3 pl-3 border-l border-bggray space-y-2">
                        {menu.items.map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="flex items-center gap-2 py-1.5 text-sm text-gray-6 hover:text-navygreen"
                          >
                            <Circle className="h-[6px] w-[6px] text-dark" />
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}

                <li className="pt-3">
                  <Button
                    variant="outline"
                    className="w-full border-navyorange text-navygreen hover:bg-navygreen hover:text-white font-semibold transition-all duration-300 px-6 py-4"
                  >
                    Appointment
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
