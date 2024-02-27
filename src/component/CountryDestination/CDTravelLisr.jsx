import React from "react";
import { FaSearch } from "react-icons/fa";


const CDTravelLisr = () => {
  return (
    <div>
      <div className="text-white">
        <h1 className="font-normal text-[48px] ">Travel list Full With</h1>
        <p className="text-[20px] font-normal">
          Latin literature from 45 BC, making it over 2000 years old
        </p>

        <div className="w-full h-auto bg-[#200D98] text-white mt-[140px] rounded-[10px] overflow-hidden">


          <div className="h-[45px] w-full flex">
            <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full w-[209px] ">
              <h1 className="font-normal text-[20px]">Hotel</h1>
            </div>
            <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full w-[209px] ">
              <h1 className="font-normal text-[20px]">Flights</h1>
            </div>
            <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full w-[209px] ">
              <h1 className="font-normal text-[20px]">Cars</h1>
            </div>
            <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full w-[209px] ">
              <h1 className="font-normal text-[20px]">Packages</h1>
            </div>
            <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full w-[209px] ">
              <h1 className="font-normal text-[20px]">Cruise</h1>
            </div>
            <div className="border-[1px] border-[#5D46E8] flex justify-center items-center h-full w-[209px] ">
              <h1 className="font-normal text-[20px]">Holiday</h1>
            </div>
          </div>

          <div className="flex justify-between items-center max-w-full h-[300px]">

            <div className="ml-[30px]">
                <h1 className="text-[20px] font-normal ">Destination</h1>
                <input type="text" className="w-[280px] h-[45px] rounded-[10px] text-white bg-slate-400/20 p-5 mt-[35px]" placeholder="All Destinations"/>
            </div>

            <div className=" text-white flex">

              <div className="w-[180px] h-[211px] flex flex-col justify-center items-center border-r-2 border-white">
                <h1 className="font-normal text-[20px] text-center">
                  Check In
                </h1>
                <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
                  <h1 className="font-normal text-[64px]">8</h1>
                  <p className="font-normal text-[16opx]">September 2022</p>
                </div>
              </div>
              <div className="w-[180px] h-[211px] flex flex-col justify-center items-center border-r-2 border-white">
                <h1 className="font-normal text-[20px] text-center">
                  Check Out
                </h1>
                <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
                  <h1 className="font-normal text-[64px]">8</h1>
                  <p className="font-normal text-[16opx]">September 2022</p>
                </div>
              </div>
              <div className="w-[180px] h-[211px] flex flex-col justify-center items-center border-r-2 border-white">
                <h1 className="font-normal text-[20px] text-center">Adult</h1>
                <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
                  <div className="font-normal text-[16opx] pr-4">
                   
                    <h1>+</h1> <h1>-</h1>
                  </div>
                  <h1 className="font-normal text-[64px]">8</h1>
                </div>
              </div>

              <div className="w-[225px] flex">

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
