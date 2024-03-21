import React, { useEffect, useRef, useState } from "react";
import Rating from "../Rating";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TpBannaeBottomSEction = () => {
  const [AdultCount, setAdultCount] = useState(1);
  const [childCount, setchildCount] = useState(0);
  const [days, setDays] = useState(5);
  const [totalDoller, setTotalDoller]= useState(500)

  const [startDate, setStartDate] = useState(new Date());
  const Startdate = startDate.getDate();
  const StartMonth = startDate.toLocaleString("default", { month: "long" });
  const StartYear = startDate.getFullYear();

  // console.log(time)

  const [endDate, setEndDate] = useState(new Date(startDate));
  const Enddate = endDate.getDate();
  const EndMonth = endDate.toLocaleString("default", { month: "long" });
  const EndYear = endDate.getFullYear();

  const totalExpances =(days, adult, child)=>
  {
  const eachDayAdult = 100;
  const eachDayChild =75;
  console.log("The calcluter days",days,"child",childCount,"adult",AdultCount)
  setTotalDoller((eachDayAdult*adult*days)+(eachDayChild*child*days))
  }

  useEffect(() => {
    setEndDate(endDate);
    setDays(Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
  }, [endDate]);

  useEffect(() => {
    const daysAfterFiveDays = new Date(startDate);
    daysAfterFiveDays.setDate(startDate.getDate() + 5);
    setEndDate(daysAfterFiveDays);
    setDays(Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
  }, [startDate]);


  useEffect(() => {
    totalExpances(days, AdultCount, childCount);
  }, [days, AdultCount, childCount]);

  const manupulateAdultcount = (AddOrMin) => {
    if (AddOrMin === "plus") {
      setAdultCount(AdultCount + 1);
      totalExpances(days,AdultCount,childCount)
    } else {
      if (AdultCount > 1) {
        setAdultCount(AdultCount - 1);
        totalExpances(days,AdultCount,childCount)
      } else {
        alert("atlist one Adult is requared");
      }
    }
  };

  const manupulateChildcount = (AddOrMin) => {
    if (AddOrMin === "plus") {
      setchildCount(childCount + 1);
      totalExpances(days,AdultCount,childCount)
    } else {
      if (childCount > 0) {
        setchildCount(childCount - 1);
        totalExpances(days,AdultCount,childCount)
      } else {
        alert("child count is 0");
        totalExpances(days,AdultCount,childCount)
      }
    }
  };

  return (
    <div className="flex justify-center items-center pb-16 xsm:mt-[10px] lg:mt-[40px] xl:mt-[118px] w-full">
      <div className="text-white grid grid-cols-12 w-full xl:flex">
        <div className="w-full  h-[211px] flex flex-col justify-center items-center xsm:border-b-2 sm:border-b-0 sm:border-r-2 md:border-b-0 md:border-r-2 border-white xsm:col-span-12 flex-1 lg:col-span-3 md:col-span-4 sm:col-span-6">
          <h1 className="font-normal text-[20px] text-center">Check In</h1>
          <label
            className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3"
            for="Check_in"
          >
            <h1 className="font-normal text-[64px]">{Startdate}</h1>
            <p className="font-normal text-[16opx]">
              {StartMonth} <br />
              {StartYear}
            </p>

            <DatePicker
              id="Check_in"
              className="hidden"
              popperPlacement="top-end"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="mm/dd/yy"
            />
          </label>
        </div>

        <div className="w-full  h-[211px] flex flex-col justify-center items-center xsm:border-b-2 sm:border-b-0 sm:border-r-0 md:border-b-0 md:border-r-2 border-white xsm:col-span-12 flex-1 lg:col-span-3 md:col-span-4 sm:col-span-6">
          <h1 className="font-normal text-[20px] text-center">Check Out</h1>
          <label
            className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3"
            for="Check_out"
          >
            <h1 className="font-normal text-[64px]">{Enddate}</h1>
            <p className="font-normal text-[16opx]">
              {EndMonth} <br />
              {EndYear}
            </p>

            <DatePicker
              id="Check_out"
              className="hidden "
              popperPlacement="bottom-start"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="mm/dd/yy"
            />
          </label>
        </div>
        <div className="w-full  h-[211px] flex flex-col justify-center items-center xsm:border-b-2 sm:border-b-0 sm:border-r-2 md:border-b-0 md:border-r-0 lg:border-r-2 border-white xsm:col-span-12 flex-1 lg:col-span-3 md:col-span-4 sm:col-span-6">
          <h1 className="font-normal text-[20px] text-center">Adult</h1>
          <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
            <div className="font-normal text-[16opx] pr-4">
              {" "}
              <h1
                className="text-2xl hover:cursor-pointer"
                onClick={() => manupulateAdultcount("plus")}
              >
                +
              </h1>{" "}
              <h1
                className="text-2xl hover:cursor-pointer"
                onClick={() => manupulateAdultcount("")}
              >
                -
              </h1>
            </div>
            <h1 className="font-normal text-[64px]">{AdultCount}</h1>
          </div>
        </div>
        <div className="w-full  h-[211px] flex flex-col justify-center items-center xsm:border-b-2 sm:border-b-0 md:border-b-0 md:border-r-2 lg:border-r-0 xl:border-r-2 border-white xsm:col-span-12 flex-1 lg:col-span-3 md:col-span-6 sm:col-span-6">
          <h1 className="font-normal text-[20px] text-center">Children</h1>
          <div className="flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3">
            <div className="font-normal text-[16opx] pr-4">
              {" "}
              <h1
                className="text-2xl hover:cursor-pointer"
                onClick={() => manupulateChildcount("plus")}
              >
                +
              </h1>{" "}
              <h1
                className="text-2xl hover:cursor-pointer"
                onClick={() => manupulateChildcount("")}
              >
                -
              </h1>
            </div>
            <h1 className="font-normal text-[64px]">{childCount}</h1>
          </div>
        </div>
        <div className="w-full  h-[211px] flex flex-col justify-center items-center xsm:col-span-12 flex-1 lg:col-span-12 md:col-span-6 sm:col-span-12">
          <h1>
          {days} Days <span className="font-bold text-[24px]">| From {totalDoller}</span>
          </h1>
          <button className="py-[10px] px-[38px] bg-[#FF3B00] rounded-md mt-[21px]">
            Book Now
          </button>
          <div className="mt-[12px]">
            <div className="w-[198px] h-[35px] text-sm">
              <Rating retting={3} />
              <h1 className=" text-end">3 reviews</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TpBannaeBottomSEction;
