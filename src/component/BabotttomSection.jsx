import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

import { LuUserCheck, LuUserX } from "react-icons/lu";

import { SlOptionsVertical } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";
import SectionWrapper from "./wrappers/SectionWrapper";
import { Link } from "react-router-dom";

const BabotttomSection = () => {
  const [toggle, setToggleValue] = useState(false);

  return (
    <SectionWrapper>
      <div className="flex justify-center items-center mt-[42px] xsm:bg-white xsm:pt-10 sm:bg-transparent sm:pt-0 ">
        <div className="w-[95%] h-auto xl:w-[1047px] xl:h-[225px]  rounded-3xl overflow-hidden shadow-md shadow-slate-500 bg-white">
          {/* ..............................  */}

          <div className="relative">
            {/* ........... button to open.... */}
            <div
              className={` xsm:absolute sm:hidden ${
                toggle
                  ? "xsm:top-[99999px] xsm:left-[99999px]"
                  : "xsm:top-5 xsm:left-5"
              }`}
              onClick={() => setToggleValue(!toggle)}
            >
              <SlOptionsVertical className="text-[20px]" />
            </div>
            {/* ..........buttton to open ...  */}
            <div
              className={`xsm:absolute  sm:h-[45px] w-[100%] sm:relative sm:flex sm:justify-center ${
                toggle
                  ? "flex flex-col z-10 rounded-xl bg-white shadow-md sm:flex-row "
                  : "xsm:top-[99999px] xsm:left-[99999px] sm:top-0 sm:left-0 "
              }`}
            >
              {/* ...........the button to close     */}
              <div
                className={` xsm:absolute sm:hidden ${
                  toggle
                    ? "xsm:top-5 xsm:right-5 "
                    : "xsm:top-[99999px] xsm:left-[99999px]"
                }`}
                onClick={() => setToggleValue(!toggle)}
              >
                <RxCrossCircled className="text-[20px]" />
              </div>

              {/* ......the button to close....  */}
              <Link to="#" className="flex-1 border-black/20">
              <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">Hotel</h1>
              </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
              <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Flights
                </h1>
              </div>
              </Link>
              
              <Link to="#" className="flex-1 border-black/20">
              <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Cars
                </h1>
              </div>
              </Link>

              <Link to="/pakagedetails" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                  <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                    Packages
                  </h1>
                </div>
              </Link>
                
              <Link to="#" className="flex-1 border-black/20"> 
              <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Cruise
                </h1>
              </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
              <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Holiday
                </h1>
              </div>
              </Link>
            </div>
          </div>

          {/* ...........................................  */}

          {/* upper part section  */}

          <div
            className={`flex  justify-around items-center xsm:p-10 xsm:flex-col lg:flex-row h-auto lg:h-[169px] w-full bg-white ${
              toggle
                ? "xsm:mt-[200px] sm:mt-[50px] md:mt-[0px]"
                : "xsm:mt-[50px] sm:mt-[50px] md:mt-[0px]"
            }`}
          >
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
    </SectionWrapper>
  );
};

export default BabotttomSection;
