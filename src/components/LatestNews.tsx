"use client";

import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewsSection = () => {
  return (
    <section>
 <div className="fluid-container bg-white py-16 relative px-4 md:px-10 lg:px-20">
      <div className="theme-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <h3 className="heading-small">WHAT’S NEWS?</h3>
            <h2>LATEST NEWS</h2>
          </div>
          <Link href="/"
             className="btn-straight">
              View All Doctors
            
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col relative h-full">
            <div className="relative h-full">
              <Image
                src="/assets/images/art1.jpg"
                alt="Featured News"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
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
          <div className="flex flex-col gap-8 justify-between">
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
                <h3 className="card-small-heading"> Lifestyle Changes for Heart Attack Prevention </h3>
                <p>
                  Over the past 20 years, childhood obesity in the United States
                  has more than doubled among children..
                </p>
              </div>
            </div>
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
                <h3 className="card-small-heading"> Tackling Root Causes of Childhood Obesity </h3>
                <p>
                  The new common language will be more simple and regular than
                  the existing European languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default NewsSection;
