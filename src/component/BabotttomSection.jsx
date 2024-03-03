import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

import { LuUserCheck, LuUserX } from "react-icons/lu";


const BabotttomSection = () => {
  return (
    <div className="flex justify-center items-center mt-[42px] ">
      <div className="w-[95%] h-auto xl:w-[1047px] xl:h-[225px]  rounded-3xl overflow-hidden shadow-md shadow-slate-500">

        <div className=" flex xsm:flex-wrap xsm:justify-around lg:flex-nowrap lg:flex-none lg:flex-row lg:h-[57px] text-xl font-semibold w-full xsm:pt-5 xsm:px-5 lg:pt-0 lg:px-0">

          <button className="xsm:w-[100px] lg:w-[175px] lg:h-[57px] text-[#FF3B00] bg-white hover:bg-[#FF3B00] hover:text-white border-[1px] border-gray-400">
            Hotel
          </button>

          <button className="xsm:w-[100px] lg:w-[175px] lg:h-[57px] text-[#FF3B00] bg-white hover:bg-[#FF3B00] hover:text-white border-[1px] border-gray-400">
          Flights
          </button>

          <button className="xsm:w-[100px] lg:w-[175px] lg:h-[57px] text-[#FF3B00] bg-white hover:bg-[#FF3B00] hover:text-white border-[1px] border-gray-400">
          Cars
          </button>

          <button className="xsm:w-[100px] lg:w-[175px] lg:h-[57px] text-[#FF3B00] bg-white hover:bg-[#FF3B00] hover:text-white border-[1px] border-gray-400">
          Packages
          </button>

          <button className="xsm:w-[100px] lg:w-[175px] lg:h-[57px] text-[#FF3B00] bg-white hover:bg-[#FF3B00] hover:text-white border-[1px] border-gray-400">
          Cruise
          </button>

          <button className="xsm:w-[100px] lg:w-[175px] lg:h-[57px] text-[#FF3B00] bg-white hover:bg-[#FF3B00] hover:text-white border-[1px] border-gray-400">
          Holiday
          </button>
        </div>
        {/* upper part section  */}



        <div className="flex  justify-around items-center xsm:p-10 xsm:flex-col lg:flex-row h-auto lg:h-[169px] w-full bg-white">

          <div className="text-start">
            
              <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                <CiLocationOn />
                <h1>Going to</h1>
              </div>
            
            <input
              type="text"
              placeholder="Location here"
              className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] md:w-[280px] text-base font-normal ps-[23px]"
            />
          </div>

          <div className="flex justify-between xsm:flex-col xsm:gap-1 md:flex-row gap-6">
            <div className="text-start">
              
                <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                  <LuUserCheck />
                  <h1>Check IN</h1>
                </div>
              
              <input
                type="text"
                placeholder="dd/mm/yy"
                className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] md:w-[150px] text-base font-normal ps-[23px]"
              />
            </div>

            <div className="text-start">
              
                <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                  <LuUserX />
                  <h1>Check Out</h1>
                </div>
              
              <input
                type="text"
                placeholder="dd/mm/yy"
                className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] md:w-[150px] text-base font-normal ps-[23px]"
              />
            </div>

            <div className="text-start">
              
                <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                  <FaRegUser />
                  <h1>Travelers</h1>
                </div>
            
              <input
                type="text"
                placeholder="Travelers"
                className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] md:w-[150px] text-base font-normal ps-[23px]"
              />
            </div>
          </div>

          <div>
            <button className="w-[150px] h-[45px] text-white  bg-[#FF3B00] border-[1px] border-gray-400 text-xl font-semibold relative top-5 rounded-2xl">
              Search
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BabotttomSection;
