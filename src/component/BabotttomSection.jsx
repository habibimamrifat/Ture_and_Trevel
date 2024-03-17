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
// date peaker section import and css
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const BabotttomSection = () => {
  const [toggle, setToggleValue] = useState(false);

  // country dropdown state manegment
  const [country, setCountry] = useState("Bangladesh");

  // date manegment state is maneged here
  const [startDate, setStartDate] = useState(new Date());
  
  const [endDate, setEndDate] = useState("");
  // new Date("mm/dd/yy")
  // new Date("mm/dd/yy")

  // travelers count
  const [traveler, setTraveler] = useState(1);
  const totalPossibletraveler = (condition) => {
    if (condition === "plus") {
      console.log("increasing trv");
      setTraveler(traveler + 1);
    } else {
      if (traveler - 1 > 0) {
        setTraveler(traveler - 1);
      } else {
        alert("must be one person trevelling");
      }
    }
  };

  // hotel booking handelling
  const handleHotelBooking = (event) => {
    event.preventDefault();
    const ShowBooking = `country:${country}startingdate:${startDate}endingDtate:${endDate}total treveler:${traveler}`;
    alert(ShowBooking);
  };

  return (
    <SectionWrapper>
      <div className="flex justify-center items-center">
        <div className="w-[95%] h-auto xl:w-[1047px] xl:h-[225px]  rounded-3xl overflow-hidden shadow-md shadow-slate-500 bg-white">
          {/* ..............................  */}
          {/* top starts here   */}

          <div className=" flex text-orange-600 xsm:flex-col md:flex-row">

            <div className="flex flex-1">
              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full w-full flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center lg:gap-4 xsm:gap-2 xsm:p-[5%] sm:m-0 xsm:flex-col sm:flex-row">

                    <FaHotel className="font-normal  text-[20px]" />
                    <h1 className="font-normal  text-[20px]">
                      Hotel
                    </h1>

                  </div>
                </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full w-full flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center lg:gap-4 xsm:gap-2 xsm:p-[5%] sm:m-0 xsm:flex-col sm:flex-row">

                    <MdFlight className="font-normal  text-[30px]" />
                    <h1 className="font-normal  text-[20px]">
                      Flights
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full w-full flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center lg:gap-4 xsm:gap-2 xsm:p-[5%] sm:m-0 xsm:flex-col sm:flex-row">
                    <IoCarSport className="font-normal  text-[30px]" />
                    <h1 className="font-normal  text-[20px]">
                      Cars
                    </h1>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-1">
              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full w-full flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center lg:gap-4 xsm:gap-2 xsm:p-[5%] sm:m-0 xsm:flex-col sm:flex-row">
                    <LuPackageOpen className="font-normal  text-[25px]" />
                    <h1 className="font-normal  text-[20px]">
                      Packege
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full w-full flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center lg:gap-4 xsm:gap-2 xsm:p-[5%] sm:m-0 xsm:flex-col sm:flex-row">
                    <GiCruiser className="font-normal  text-[50px]" />
                    <h1 className="font-normal  text-[20px]">
                      Cruise
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="#" className="flex-1 border-black/20">
                <div className="border-[1px]  flex justify-center items-center h-full w-full flex-1 hover:text-white hover:bg-orange-600 ">
                  <div className="flex items-center lg:gap-4 xsm:gap-2 xsm:p-[5%] sm:m-0 xsm:flex-col sm:flex-row">
                    <MdOutlineHolidayVillage className="font-normal  text-[30px]" />
                    <h1 className="font-normal  text-[20px]">
                      Holiday
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* top section ends here   */}
          {/* ...........................................  */}

          {/* Bottom from section starts here  */}
          <form
            onSubmit={(event) => handleHotelBooking(event)}
            className=" flex justify-around xsm:flex-col xsm:items-center  lg:flex-row lg:justify-around lg:items-center xsm:mb-[30px] lg:mb-[0px] lg:h-40 mx-[3%] "
          >
            <div className="text-start w-full lg:ml-[2%]  ">
              <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                <CiLocationOn />
                <h1>Going to</h1>
              </div>

              <CountryDropdown
                className="border-[1px] border-[#948D8D]  rounded-2xl w-full xsm:h-9 md:h-[45px] text-base font-normal ps-[23px] outline-none text-[#948D8D] countryselector"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>

            <div className="flex lg:mx-[2%] justify-between xsm:flex-col sm:flex-row xsm:gap-1  w-full  ">

              <div className="flex flex-1 gap-2">

                <div className="text-start flex-1 gap-2">

                  <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                    <LuUserCheck />
                    <h1>Check IN</h1>
                  </div>

                  
                 

                  <DatePicker
                    className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] lg:w-[150px] text-base font-normal outline-none  text-[#948D8D]  overflow-hidden ps-5 checkIn"
                    popperPlacement="bottom-end"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="mm/dd/yy"
                  />
                </div>

                <div className="text-start flex-1 ">
                  <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                    <LuUserX />
                    <h1>Check Out</h1>
                  </div>

                  <DatePicker
                    className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] lg:w-[150px] text-base font-normal outline-none text-[#948D8D]  overflow-hidden ps-5 "
                    popperPlacement="bottom-start"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="mm/dd/yy"
                  />
                </div>

              </div>

              <div className="text-start flex-1">
                <div className="text-xl font-normal text-black flex items-center mb-[14px]">
                  <FaRegUser />
                  <h1>Travelers</h1>
                </div>

                <div className="border-[1px] border-[#948D8D]  rounded-2xl xsm:w-full xsm:h-9 md:h-[45px] lg:w-[150px] text-base font-normal outline-none flex text-[#948D8D] justify-between items-center overflow-hidden">
                  <div
                    className=" w-10 h-full text-white text-3xl bg-slate-300 flex justify-center items-center hover:cursor-pointer"
                    onClick={() => totalPossibletraveler("minus")}
                  >
                    -
                  </div>

                  <div className="flex-1 flex  justify-center">{traveler}</div>

                  <div
                    className="w-10  h-full text-white text-3xl bg-slate-300 flex justify-center items-center hover:cursor-pointer"
                    onClick={() => totalPossibletraveler("plus")}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center lg:mr-[2%]  ">
              <button
                className="w-full h-[45px] text-white  bg-[#FF3B00] border-[1px] border-gray-400 text-xl font-semibold relative top-5 rounded-2xl"
                type="submit"
              >
                Search
              </button>
            </div>

          </form>
          {/* Bottom from section ends here  */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BabotttomSection;
