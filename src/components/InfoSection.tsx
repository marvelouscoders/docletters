import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalUser, FaStethoscope } from "react-icons/fa";

const InfoSection = () => {
  return (
    <section className="fluid-container bg-white">
      <div className="theme-container mobile-padding grid grid-cols-1 md:grid-cols-3 border border-gray-300">
        {/* Card 1 */}
        <div className="flex flex-col justify-between p-6 border-b md:border-b-0 md:border-r border-gray-300 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h2 >Our Doctors</h2>
            <FaUserDoctor className="text-gray-500 text-3xl md:text-4xl" />
          </div>
          <p>
            Search for a HealthCare Clinic expert by specialty, disease,
            condition, expertise, or doctor’s last name.
          </p>
          <button className="flex items-center gap-2 text-navyorange font-medium hover:underline mt-3">
            Find a Doctor <CiCirclePlus className="text-2xl" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between p-6 border-b md:border-b-0 md:border-r border-gray-300 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h2>Location</h2>
            <FaStethoscope className="text-gray-500 text-3xl md:text-4xl" />
          </div>
          <p>
            Explore our comprehensive healthcare services available for patients
            of all ages and needs.
          </p>
          <button className="flex items-center gap-2 text-navyorange font-medium hover:underline mt-3">
            Get Direction <CiCirclePlus className="text-2xl" />
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between p-6 border-b md:border-b-0 border-gray-300 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h2>Appointment</h2>
            <FaHospitalUser className="text-gray-500 text-3xl md:text-4xl" />
          </div>
          <p>
            Schedule your appointment easily with our online booking system in
            just a few clicks.
          </p>
          <button className="flex items-center gap-2 text-navyorange font-medium hover:underline mt-3">
            Book Now <CiCirclePlus className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
