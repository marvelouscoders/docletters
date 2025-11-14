'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, CheckCircle, CalendarDays, UserCheck, Clock } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DisabilityMedicalLetter = () => {
  return (
    <>
      <section>
        <div className="fluid-container ">
          <div className="theme-container px-4 py-16">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/service-details">Disabilty</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>
      <section>
        <div className="fluid-container pb-12">
          <div className="theme-container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-3">
                <div className="relative aspect-3/2 w-[90%] mb-4 overflow-hidden">
                  <Image
                    src="/assets/images/cart2.png"
                    alt="Disability medical letter product"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="hidden sm:grid grid-cols-4 gap-2 w-[90%]">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="relative aspect-4/3 w-full overflow-hidden hover:border-6 border-navygreen transition"
                    >
                      <Image
                        src={`/assets/images/disabilty${i}.png`}
                        alt={`Thumbnail ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Details Section */}
              <div className="lg:col-span-2 mt-6 md:-ml-8">
                <h2>Disability medical letter</h2>
                <h3 className="card-pricing">£49.00</h3>
                <p>
                  Same-day disability medical letter, required to confirm a disability and its impact on your day-to-day life.
                </p>

                <div className="flex justify-between items-center text-center disability-icons">
                  <span>
                    <Clock />
                    No Appointment Needed
                  </span>
                  <span>
                    <UserCheck />
                    NHS & GMC Registered Doctors
                  </span>
                  <span>
                    <CalendarDays />
                    Same Day Letter 9am - 5pm
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border border-gray-300 py-1 px-4 overflow-hidden">
                    <button className="p-3 text-gray hover:bg-gray-100 transition">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-lg font-semibold">1</span>
                    <button className="p-3 text-gray hover:bg-gray-100 transition">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="flex-1 bg-white text-navygreen font-bold border border-navygreen py-4 px-4 text-[12px]
                    md:py-3 md:px-6 md:text-base hover:bg-navygreen hover:text-white transition rounded">
                    ADD TO CART
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  <CheckCircle className="w-4 h-4 inline-block mr-1 align-sub text-navygreen" /> 
                  1 hour average turnaround & delivered to your inbox
                </p>
                <div className="inline-block bg-navygreen text-white px-2 py-2 font-medium text-sm rounded">
                  Get 10% off with the code: <span className="font-extrabold">SAMEDAY25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DisabilityMedicalLetter;
