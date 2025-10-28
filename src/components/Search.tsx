"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="fluid-container bg-darkorange py-10 text-white">
      <div className="theme-container text-start px-4 sm:px-6 md:px-0">
        <h3>
          HOW CAN WE HELP YOU?
        </h3>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">

          <div className="flex items-start bg-white px-4 py-4 w-full shadow-md border-navyorange ">
            <FiSearch className="text-dark text-2xl mr-3" />
            <input
              type="text"
              placeholder="Search for doctors, departments, or services..."
              className="flex-1 text-gray-700 placeholder-gray-400 focus:outline-none text-base"
            />
          </div>
          
          <button className="bg-navyorange text-white font-semibold px-8 py-4 hover:bg-darkorange transition-all shadow-md w-full sm:w-auto ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
