"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const menuItems = [
    {
      title: "Departments",
      items: [
        "Cardiology",
        "Neurology",
        "Orthopedics",
        "Radiology",
        "Emergency",
        "MRI Labs",
        "Urology",
        "Psychology",
        "Dermatology",
        "Pediatrics",
      ],
    },
    {
      title: "Doctors",
      items: [
        "Dr. John Smith",
        "Dr. Emily Carter",
        "Dr. James Lee",
        "Dr. Sophia Khan",
        "Dr. Michael Brown",
        "Dr. Sarah Wilson",
        "Dr. Ali Raza",
        "Dr. Maria Noor",
      ],
    },
    {
      title: "Patients & Visitors",
      items: [
        "Visitor Guidelines",
        "Insurance Info",
        "Billing & Support",
        "Patient Rights",
        "Health Records",
        "Covid-19 Info",
        "Room Facilities",
        "Transport & Parking",
      ],
    },
  ];

  return (
    <nav className="fluid-container border-b border-gray-200 relative z-50">
      <div className=" flex items-center justify-between px-8 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/svgfiles/logo-6.svg"
            alt="logo"
            width={150}
            height={90}
          />
        </Link>
        <ul className="hidden md:flex items-center gap-10 relative">
          <li>
            <Link
              href="/"
              className="font-medium text-navyorange hover:text-navyorange"
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
                className={`font-medium text-dark hover:text-navyorange transition ${
                  openMenu === menu.title ? "text-navyorange" : ""
                }`}
              >
                {menu.title}
              </button>
              {openMenu === menu.title && (
                <div
                  className="
                    absolute left-1/2 top-full 
                    -translate-x-1/2  
                    bg-white shadow-2xl border border-gray-100 
                    rounded-xl w-[500px] transition-all
                  "
                >
                  <div className="grid grid-cols-2 gap-2 p-6">
                    {menu.items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 transition"
                      >
                        <span className="text-gray hover:text-navyorange text-[14px] font-medium">
                          {item}
                        </span>
                        <ChevronRight className="h-4 w-4 text-dark hover:text-navyorange" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          <Button
            variant="outline"
            className="border-navyorange text-navyorange hover:bg-navyorange hover:text-white font-semibold transition-all duration-300 px-8 py-6"
          >
            Appointment
          </Button>
           </ul>

        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
