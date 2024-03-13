import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

import { LuUserCheck, LuUserX } from "react-icons/lu";

import { SlOptionsVertical } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";
import SectionWrapper from "./wrappers/SectionWrapper";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { LuPackageOpen } from "react-icons/lu";
import { GiCruiser } from "react-icons/gi";
import { MdOutlineHolidayVillage } from "react-icons/md";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const BabotttomSection = () => {
  const [toggle, setToggleValue] = useState(false);
  const [country, setCountry] = useState("Bangladesh");

  return (
    <SectionWrapper>
      <div className="flex justify-center items-center">
        <div className="w-[95%] h-auto xl:w-[1047px] xl:h-[225px]  rounded-3xl overflow-hidden shadow-md shadow-slate-500 bg-white">
          {/* ..............................  */}

          <div className="relative">
            {/* ........... button to open.... */}
            <div
              className={` xsm:absolute sm:hidden text-black ${
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
              className={`xsm:absolute text-orange-600   sm:h-[45px] w-[100%] sm:relative sm:flex sm:justify-center ${
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
                  <div className="flex items-center gap-4">
                    <FaHotel className="font-normal xsm:text-[15px] sm:text-[20px] xsm:hidden lg:block" />
                    <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                      Hotel
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center gap-4">
                    <MdFlight className="font-normal xsm:text-[15px] sm:text-[25px] xsm:hidden lg:block" />
                    <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                      Flights
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center gap-4">
                    <IoCarSport className="font-normal xsm:text-[15px] sm:text-[25px] xsm:hidden lg:block" />
                    <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                      Cars
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="/pakagedetails" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center gap-4">
                    <LuPackageOpen className="font-normal xsm:text-[15px] sm:text-[25px] xsm:hidden lg:block" />
                    <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                      Packege
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center gap-4">
                    <GiCruiser className="font-normal xsm:text-[15px] sm:text-[40px] xsm:hidden lg:block" />
                    <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                      Cruise
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full xsm:w-[80%] sm:w-full sm:flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center gap-4">
                    <MdOutlineHolidayVillage className="font-normal xsm:text-[15px] sm:text-[25px] xsm:hidden lg:block" />
                    <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                      Holiday
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ...........................................  */}

          {/* upper part section  */}

          {/* lg:flex-row h-auto lg:h-[169px] */}
          <div
            className={` flex justify-center items-center xsm:flex-col xsm:items-center w-full lg:flex-row md:px-2 bg-white xsm:h-auto xsm:mb-10 lg:mb-0 md:h-[200px] ${
              toggle
                ? "xsm:mt-[200px]  sm:mt-[5px]"
                : "xsm:mt-[50px]  sm:mt-[5px]"
            }`}
          >
            <div className="text-start w-full  px-[2%]">
              <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                <CiLocationOn />
                <h1>Going to</h1>
              </div>

              {/* <input
                  type="text"
                  placeholder="Location here"
                  className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] w-full lg::w-[280px] text-base font-normal ps-[23px] outline-none"
                /> */}

              <CountryDropdown className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] w-full lg::w-[280px] text-base font-normal ps-[23px] outline-none text-[#948D8D]"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>

            <div className="flex justify-between xsm:flex-col sm:flex-row xsm:gap-1  px-[2%] w-full">
              <div className="text-start flex-1">
                <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                  <LuUserCheck />
                  <h1>Check IN</h1>
                </div>

                <input
                  type="text"
                  placeholder="dd/mm/yy"
                  className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] lg:w-[150px] text-base font-normal ps-[23px] outline-none"
                />
              </div>

              <div className="text-start flex-1">
                <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                  <LuUserX />
                  <h1>Check Out</h1>
                </div>

                <input
                  type="text"
                  placeholder="dd/mm/yy"
                  className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] lg:w-[150px] text-base font-normal ps-[23px] outline-none"
                />
              </div>

              <div className="text-start flex-1">
                <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                  <FaRegUser />
                  <h1>Travelers</h1>
                </div>

                <input
                  type="number"
                  placeholder="Travelers"
                  className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] lg:w-[150px] text-base font-normal ps-[23px] outline-none"
                />
              </div>
            </div>

            <div className="w-full px-[2%]">
              <button className="w-full xl:w-[150px] h-[45px] text-white  bg-[#FF3B00] border-[1px] border-gray-400 text-xl font-semibold relative top-5 rounded-2xl">
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
