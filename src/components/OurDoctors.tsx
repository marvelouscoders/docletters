"use client";

import Image from "next/image";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    profession: "Cardiologist",
    image: "/assets/images/doc1.png",
  },
  {
    name: "Dr. Michael Smith",
    profession: "Dermatologist",
    image: "/assets/images/doc2.png",
  },
  {
    name: "Dr. Emma Brown",
    profession: "Pediatrician",
    image: "/assets/images/doc3.png",
  },
  {
    name: "Dr. David Wilson",
    profession: "General Practitioner",
    image: "/assets/images/doc4.png",
  },
];

const DoctorsSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="mb-4">
              MEET OUR DOCTORS
            </h3>
            <h1>
              Dedicated & Experienced Team

            </h1>
          </div>

          <Link href="/">
            <button className="text-navygreen font-medium border border-navygreen px-5 py-2 hover:bg-navygreen hover:text-white transition-all duration-300">
              View All Doctors
            </button>
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-72 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {doc.name}
              </h3>
              <p className="text-gray-600 text-base">{doc.profession}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
