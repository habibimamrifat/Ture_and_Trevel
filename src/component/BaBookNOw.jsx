import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import SectionWrapper from "./wrappers/SectionWrapper";

const BaBookNOw = ({next, previous}) => {
  
  return (
    <SectionWrapper>
    <div className="mt-[37px] flex justify-between items-center xl:ml-[120px] ">
      <div className="text-xl font-bold xsm:ml-[20px] sm:ml-[50px]  text-white gap-2">
        <button className="px-[20px] py-[10px] bg-[#FF3B00] rounded-md">
          Book Now
        </button>
        <button className="px-[20px] py-[10px] rounded-md">Choose Tour</button>
      </div>

      <div className="xsm:hidden sm:flex justify-center items-center gap-6 sm:mr-[50px] xl:mr-[126px]  ">

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
