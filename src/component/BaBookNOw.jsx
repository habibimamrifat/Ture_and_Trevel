import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import SectionWrapper from "./wrappers/SectionWrapper";

const BaBookNOw = ({next, previous}) => {
  
  return (
    <SectionWrapper>

    <div className="w-[100%] flex justify-center xsm:flex-col sm:flex-row sm:justify-between ml-[2.5%] mr-[2.5%]">
      <div className="text-xl font-bold   text-white gap-2">
        <button className="px-[20px] py-[10px] bg-[#FF3B00] rounded-md">
          Book Now
        </button>
        <button className="px-[20px] py-[10px] rounded-md">Choose Tour</button>
      </div>

      <div className="flex justify-center items-center gap-6 sm:mr-[50px] xl:mr-[126px] mt-[10px]  ">

        <button onClick={previous}>
        <div
          className="w-[42px] h-[41px] rounded-full bg-white/20 flex justify-center items-center text-white "
          
        >
          <FaArrowLeft />
        </div>
        </button>

        <button onClick={next} >
        <div
          className="w-[42px] h-[41px] rounded-full bg-white/20 flex justify-center items-center text-white "
        >
          <FaArrowRight />
        </div>
        </button>

      </div>
    </div>

    </SectionWrapper>
  );
};

export default BaBookNOw;
