"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Feature {
  title: string;
  desc: string;
  image: string;
}

const features: Feature[] = [
  {
    title: "Fit-to-Cruise Medical Certificate",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card1.png",
  },
  {
    title: "Visa Medical – Certificate of Good Health",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card2.jpg",
  },
  {
    title: "Pregnancy fit-to-fly certificate",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card3.png",
  },
  {
    title: "University, college and school sickness letter",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card4.png",
  },
  {
    title: "Spain – Medical certificate of good health for visa",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card5.png",
  },
  {
    title: "Disability medical letter",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card6.png",
  },
];

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="fluid-container py-16 px-6 mt-2">
      <div className="text-center mb-12">
        <h3 className="heading-small">Our Services</h3>
        <h2>Our Popular Certificates</h2>
      </div>

      <div className="theme-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm   flex flex-col justify-between transition-all duration-300 relative "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-full h-35 sm:h-56 overflow-hidden relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute top-0 left-0 bg-dark text-white text-sm px-2 py-1 transition-transform duration-300 ${
                  hoveredIndex === index ? "translate-x-2" : ""
                }`}
              >
                {hoveredIndex === index ? "£49.00-£79.00" : "£49.00"}
              </div>
            </div>
            <div
              className={`flex-1 flex flex-col justify-between p-2 rounded transition-colors duration-300 ${
                hoveredIndex === index ? "bg-blue-50" : ""
              }`}
            >
              <div className="px-2">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              {/* Button */}
              
              <div className="mt-4 px-2 mb-4">
                <Link href="/">
                <button className="btn-link">
                  BUY NOW
                  <ChevronRight className="chevron-right" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
