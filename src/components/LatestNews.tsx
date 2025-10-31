"use client";

import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewsSection = () => {
  return (
    <section className="fluid-container py-16 bg-white">
      <div className="theme-container px-6 lg:px-8">
        {/* Top Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <h3>WHAT’S NEWS?</h3>
            <h1>LATEST NEWS</h1>
          </div>
          <Link href="/">
            <button className="text-navygreen font-medium border border-navygreen px-5 py-2 hover:bg-navygreen hover:text-white transition-all duration-300">
              View All Doctors
            </button>
          </Link>
        </div>

        {/* News Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Big News */}
          <div className="flex flex-col relative h-full">
            <div className="relative h-full">
              <Image
                src="/assets/images/art1.jpg"
                alt="Featured News"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />

              {/* Overlay Date and Heading */}
              <div className="absolute bottom-3 left-3 text-white">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <CalendarDays className="w-5 h-5" />
                  <span>October 20, 2025</span>
                </div>
                <span className="text-lg font-semibold text-white">
                  How Regular Checkups Can Prevent Major Health Issues
                </span>
              </div>
            </div>
          </div>

          {/* Right Smaller News Items */}
          <div className="flex flex-col gap-8 justify-between">
            {/* News 1 */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Image
                src="/assets/images/art2.jpg"
                alt="News"
                width={200}
                height={160}
                className="w-full sm:w-[200px] h-[180px] object-cover"
              />
              <div className="sm:pl-3">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <CalendarDays className="text-navygreen w-5 h-5" />
                  <span>October 18, 2025</span>
                </div>
                <h3> Lifestyle Changes for Heart Attack Prevention </h3>
                <p>
                  Over the past 20 years, childhood obesity in the United States
                  has more than doubled among children..
                </p>
              </div>
            </div>

            {/* News 2 */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Image
                src="/assets/images/art3.jpg"
                alt="News"
                width={200}
                height={160}
                className="w-full sm:w-[200px] h-[180px] object-cover"
              />
              <div className="sm:pl-3">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <CalendarDays className="text-navygreen w-5 h-5" />
                  <span>October 10, 2025</span>
                </div>
                <h3> Tackling Root Causes of Childhood Obesity </h3>
                <p>
                  The new common language will be more simple and regular than
                  the existing European languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
