"use client";

import { FaQuoteLeft } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mary-Lynn",
      role: "Patient",
      text: "InClinic really is the best hospital in the UK. The care is truly excellent. I recently stayed for 5 days which was so difficult as no visitors were allowed due to Covid. The nurses made everything so much better. They are such a caring, loving team.",
    },
    {
      name: "Smith Morgan",
      role: "Patient",
      text: "I recently spent a few days at InClinic and I was amazed by how caring everyone was. The team made me feel safe and well looked after from the start. The hospital is clean, organised, and the staff are always smiling. The best hospital experience I could ask for.",
    },
    {
      name: "Paul Warner",
      role: "Patient",
      text: "InClinic is honestly the best hospital in the UK! I was very anxious when I arrived, but the nurses were so friendly and reassuring. They worked so hard to make my recovery easier and kept checking in on me. I felt completely cared for throughout my stay.",
    },
    {
      name: "Mary-Lynn",
      role: "Doctor",
      text: "InClinic really is the best hospital in the UK. The care is truly excellent. I recently stayed for 5 days which was so difficult as no visitors were allowed due to Covid. The nurses made everything so much better. They are such a caring, loving team.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="fluid-container bg-navbarbg py-16 relative">
      <div className="theme-container px-6">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/2 lg:basis-1/3 px-0 md:px-6 lg:px-8"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <FaQuoteLeft className="text-navygreen text-2xl mb-4" />
                    <p className="text-gray-700">{t.text}</p>
                  </div>
                  <div className="border-l-2 border-navygreen pl-3 mt-6">
                    <p className="font-semibold text-dark">{t.name}</p>
                    <p className="text-gray text-sm">{t.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="absolute left-2 sm:-left-10 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-navygreen hover:text-white transition-all rounded-full p-2" />
            <CarouselNext className="absolute right-2 sm:-right-8 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-navygreen hover:text-white transition-all rounded-full p-2" />

        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
