"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Feature {
  title: string;
  pricing: string;
  desc: string;
  image: string;
}

const features: Feature[] = [
  {
    title: "Fit-to-Cruise Medical Certificate",
    pricing: "£49.00",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card1.png",
  },
  {
    title: "Visa Medical – Certificate of Good Health",
    pricing: "£39.00",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card2.jpg",
  },
  {
    title: "Pregnancy fit-to-fly certificate",
    pricing: "£30.00",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card3.png",
  },
  {
    title: "University, college and school sickness letter",
    pricing: "£58.00",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card4.png",
  },
  {
    title: "Spain – Medical certificate of good health for visa",
    pricing: "£46.00",
    desc: "Visa medical certificate issued within 1–2 hours for Spain and destinations across.",
    image: "/assets/images/card5.png",
  },
  {
    title: "Disability medical letter",
    pricing: "£60.00",
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
             
            </div>
            <div
              className={`flex-1 flex flex-col justify-between p-2 rounded transition-colors duration-300 ${
                hoveredIndex === index ? "bg-blue-50" : ""
              }`}
            >
              <div className="px-2">
                <h3 className="card-big-heading">{item.title}</h3>
                <h3 className="card-pricing">{item.pricing}</h3>
                <p>{item.desc}</p>
              </div>

              {/* Button */}
              
              <div className="mt-4 px-2 mb-4">
                <Link href="/" className="btn-link">
                  BUY NOW
                  <ChevronRight className="chevron-right" />
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
