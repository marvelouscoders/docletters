"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoDotFill } from "react-icons/go";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = React.useState<string | null>(null);
  const hoverTimeout = React.useRef<any>(null);

  const handleMouseEnter = (title: string) => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setOpenMenu(title), 150);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setOpenMenu(null), 250);
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

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
    <nav className="w-full border-b border-bggray relative z-50 font-inter">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-3 md:px-8 transition-all duration-300">

        
        {/* --- Logo + Toggle --- */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Image
            src="/assets/images/svgfiles/logo-6.svg"
            alt="logo"
            width={110}
            height={80}
            className="h-auto w-auto"
          />
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="flex items-center"
          >
            <Menu className="h-7 w-7 text-dark" />
          </button>
        </div>

        {/* --- Desktop Logo --- */}
        <Image
          src="/assets/images/svgfiles/logo-6.svg"
          alt="logo"
          width={140}
          height={90}
            className="hidden lg:block h-auto w-auto lg:self-start [@media(min-width:1024px)and(max-width:1429px)]:mb-0"

        />

        {/* --- Desktop Menu --- */}
        <ul className="hidden lg:flex items-center justify-end flex-wrap relative
                lg:gap-4 xl:gap-6 2xl:gap-7 
                [@media(min-width:1024px)and(max-width:1429px)]:gap-2
                [@media(min-width:1024px)and(max-width:1429px)]:flex-rap
                [@media(min-width:1024px)and(max-width:1429px)]:justify-between
                [@media(min-width:1024px)and(max-width:1429px)]:w-full
              ">
          <li>
            <Link href="/" className="font-semibold text-dark hover:text-navygreen transition">
              Home
            </Link>
          </li>

          {menuItems.map((menu, idx) => (
            <li
              key={menu.title}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(menu.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-[4px] font-semibold text-dark hover:text-navygreen transition ${
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

              {/* Dropdown */}
              {openMenu === menu.title && (
                <div
                  className={`absolute ${
                    idx > menuItems.length - 3 ? "right-0" : "left-0"
                  } top-[calc(100%+26px)] z-50 bg-navbarbg border border-gray-200 shadow-xl transition-all duration-300 ease-in-out ${
                    menu.singleColumn ? "w-[420px]" : "w-[580px]"
                  } py-3`}
                >
                  <div className="px-5 pb-1 text-left">
                    <h6 className="text-navygreen font-semibold uppercase text-[12px] leading-[18px]">
                      {menu.title}
                    </h6>
                  </div>
                  <div
                    className={`${
                      menu.singleColumn ? "grid-cols-1" : "grid-cols-2"
                    } grid gap-[4px] px-5 py-2`}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="group/item flex items-start gap-2 px-2 rounded-md transition-all hover:bg-navygreen"
                      >
                        <span className="shrink-0 mt-[7px]">
                          <GoDotFill className="text-dark text-[7px] group-hover/item:text-white" />
                        </span>
                        <span className="text-dark text-[15px] font-medium leading-[20px] group-hover/item:text-white flex-1">
                          {item}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}

          <Button
            variant="outline"
            className="border-navygreen text-navygreen hover:bg-navygreen hover:text-white font-semibold duration-300 px-6 py-6"
          >
            APPOINTMENT
          </Button>
        </ul>

        {/* --- Mobile / Tablet Centered Menu --- */}
        {mobileOpen && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-full sm:w-full md:w-[70%] bg-white border border-gray-200  shadow-lg p-5 z-50"
          >
            <ul className="space-y-4">
              {menuItems.map((menu) => (
                <li key={menu.title} className="border-b border-bggray pb-2">
                  <button
                    className="w-full flex justify-between items-center text-left font-semibold text-dark hover:text-navygreen"
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

                  {expandedMobileMenu === menu.title && (
                    <div className="mt-3 pl-3 border-l border-bggray space-y-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item}
                          href="/"
                          className="flex items-center gap-2 py-[4px] text-[13px] text-dark hover:text-navygreen"
                        >
                          <Circle className="h-[5px] w-[5px] text-dark" />
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
                  className="w-full border-navygreen text-navygreen hover:bg-navygreen hover:text-white font-semibold transition-all duration-300 px-6 py-4"
                >
                  Appointment
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
