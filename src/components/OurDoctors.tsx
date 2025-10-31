"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

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
  {
    name: "Dr. Sarah Johnson",
    profession: "Cardiologist",
    image: "/assets/images/doc1.png",
  },
];

const DoctorsSection = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="w-full bg-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-navygreen text-sm font-semibold mb-3 tracking-wide">
              MEET OUR DOCTORS
            </h3>
            <h1 className="text-3xl font-bold text-gray-900">
              Dedicated & Experienced Team
            </h1>
          </div>

          <Link href="/">
            <button className="text-navygreen font-medium border border-navygreen px-5 py-2 hover:bg-navygreen hover:text-white transition-all duration-300">
              View All Doctors
            </button>
          </Link>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full relative"
        >
          <CarouselContent>
            {doctors.map((doc, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/4 px-4"
              >
                <div className="text-center">
                  <div className="w-full h-72 overflow-hidden  shadow-md">
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
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="absolute left-6 sm:-left-10 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-navygreen hover:text-white transition-all rounded-full p-2" />
            <CarouselNext className="absolute right-6 sm:-right-8 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-navygreen hover:text-white transition-all rounded-full p-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default DoctorsSection;
