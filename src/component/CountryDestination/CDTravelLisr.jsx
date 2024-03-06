import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";

const CDTravelLisr = () => {
  const [toggle, setToggleValue] = useState(false);

  return (
    <div>
      <div className="text-white">
        <h1 className="font-normal xsm:text-[30px] lg:text-[48px] ">
          Travel list Full With
        </h1>
        <p className="text-[20px] font-normal">
          Latin literature from 45 BC, making it over 2000 years old
        </p>

        <div className="w-full h-auto bg-[#200D98] text-white xsm:mt-[50px] sm:mt-[80px] md:mt-[100px] lg:mt-[150px] rounded-[10px] overflow-hidden">
          <div className="relative">
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
                  ? "flex flex-col z-10 rounded-xl bg-[#200D98] shadow-md shadow-[#5D46E8] sm:flex-row "
                  : "xsm:top-[99999px] xsm:left-[99999px] sm:top-0 sm:left-0 "
              }`}
            >
              {/* ........... button to open.... */}
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
              <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full xsm:w-[80%] sm:flex-1 xl:w-[209px] ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Hotel
                </h1>
              </div>
              {/* ...........the button to close     */}

              <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full xsm:w-[80%] sm:flex-1 xl:w-[209px] ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Flights
                </h1>
              </div>
              <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full xsm:w-[80%] sm:flex-1 xl:w-[209px] ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Cars
                </h1>
              </div>
              <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full xsm:w-[80%] sm:flex-1 xl:w-[209px] ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Packages
                </h1>
              </div>
              <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full xsm:w-[80%] sm:flex-1 xl:w-[209px] ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Cruise
                </h1>
              </div>
              <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full xsm:w-[80%] sm:flex-1 xl:w-[209px] ">
                <h1 className="font-normal xsm:text-[15px] sm:text-[20px]">
                  Holiday
                </h1>
              </div>
            </div>
          </div>

          {/* not working on this section  */}
          <div className={`flex xsm:flex-col xsm:justify-center xl:flex-row xl:flex-nowrap xl:justify-between xl:items-center lg:flex-wrap items-center max-w-full xl:h-[300px] xsm:mt-[200px] ${toggle ? "xsm:mt-[200px] sm:mt-[50px]":'xsm:mt-[50px] sm:mt-[50px]'}`}>
            <div className="ml-[30px] flex flex-col justify-center">
              <h1 className="text-[20px] font-normal md:text-center">Destination</h1>
              <input
                type="text"
                className="xsm:w-[95%] lg:w-[280px] lg:h-[45px] rounded-[10px] text-white bg-slate-400/20 p-5 mt-[35px]"
                placeholder="All Destinations"
              />
            </div>

            <div className=" text-white flex xsm:mt-[10px] md:mt-[30px] lg:mt-[40px] xl:mt-[0px] xsm:flex-col sm:flex-row sm:justify-center sm:flex-wrap xl:flex-nowrap pb-10">

              <div className="w-[180px] h-[211px] flex flex-col justify-center items-center xsm:border-b-2 md:border-b-0 md:border-r-2 border-white">
                <h1 className="font-normal text-[20px] text-center">
                  Check In
                </h1>
                <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
                  <h1 className="font-normal text-[64px]">8</h1>
                  <p className="font-normal text-[16opx]">September 2022</p>
                </div>
              </div>
              <div className="w-[180px] h-[211px] flex flex-col justify-center items-center xsm:border-b-2 md:border-b-0 md:border-r-2 border-white">
                <h1 className="font-normal text-[20px] text-center">
                  Check Out
                </h1>
                <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
                  <h1 className="font-normal text-[64px]">8</h1>
                  <p className="font-normal text-[16opx]">September 2022</p>
                </div>
              </div>
              <div className="w-[180px] h-[211px] flex flex-col justify-center items-center xsm:border-b-2 md:border-b-0 lg:border-r-2 border-white">
                <h1 className="font-normal text-[20px] text-center">Adult</h1>
                <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
                  <div className="font-normal text-[16opx] pr-4">
                    <h1>+</h1> <h1>-</h1>
                  </div>
                  <h1 className="font-normal text-[64px]">8</h1>
                </div>
              </div>

              <div className="w-[225px] flex md:border-x-2 md:border-white lg:border-none">
                <div className="h-[211px] flex flex-col justify-center items-center">
                  <h1 className="font-normal text-[20px] text-center">
                    Children
                  </h1>
                  <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
                    <div className="font-normal text-[16opx] pr-4">
                      <h1>+</h1> <h1>-</h1>
                    </div>
                    <h1 className="font-normal text-[64px]">8</h1>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div className="h-[63px] w-[63px] flex items-center justify-center bg-[#FF3B00] rounded-full">
                    <FaSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CDTravelLisr;
