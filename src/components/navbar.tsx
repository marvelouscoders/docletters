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
    <section>
    <nav className="fluid-conatiner navbar-border">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between px-8 py-3 md:px-8 transition-all duration-300">
        <div className="flex w-full items-center justify-between xl:hidden">
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
            {mobileOpen ? (
              <X className="h-7 w-7 text-dark" />
            ) : (
              <Menu className="h-7 w-7 text-dark" />
            )}
          </button>
        </div>

        {/* --- Desktop Logo (Only ≥1415px) --- */}
        <Image
          src="/assets/images/svgfiles/logo-6.svg"
          alt="logo"
          width={140}
          height={90}
          className="hidden xl:block h-auto w-auto xl:self-start"
        />

        {/* --- Desktop Menu (Only ≥1415px) --- */}
        <ul className="hidden xl:flex items-center justify-end flex-wrap relative xl:gap-4 2xl:gap-6">
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
                  className={`navbar-dropdown ${ 
                    idx > menuItems.length - 3 ? "right" : "left"
                  } ${menu.singleColumn ? "narrow" : "wide"}`}
                >
                  <div className="px-5 pb-2 text-left border-b border-gray-100">
                    <h6 className="text-navygreen font-semibold uppercase text-[12px] leading-[18px]">
                      {menu.title}
                    </h6>
                  </div>

                 <div
                    className={`${
                      menu.singleColumn ? "grid-cols-1" : "grid-cols-2"
                    } grid gap-y-2 gap-x-3 px-4 py-2`}
                  >

                    {menu.items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="group/item flex items-start gap-2 px-3 py-[6px] transition-all hover:bg-navygreen"
                      >
                        <span className="shrink-0 mt-[6px]">
                          <GoDotFill className="circle-li" />
                        </span>
                        <span className="menu-items-font-weights">
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
            className="button-green font-semibold duration-300 px-6 py-6"
          >
            APPOINTMENT
          </Button>
        </ul>

        {/* --- Mobile + Small Desktop Menu (up to <1415px) --- */}
        {mobileOpen && (
          <div className="mobile-desktop-view">
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
                          <Circle className="mobile-circle " />
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
                  className="fluid-container button-green font-semibold transition-all duration-300 px-6 py-4"
                >
                  Appointment
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    </section>
  );
}
