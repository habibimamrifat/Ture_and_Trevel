import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const BaBookNOw = ({next, previous}) => {
  
  return (
    <div className="mt-[37px] flex justify-between items-center  pb-[136px]">
      <div className="text-xl font-bold ml-[106px] text-white gap-2">
        <button className="px-[20px] py-[10px] bg-[#FF3B00] rounded-md">
          Book Now
        </button>
        <button className="px-[20px] py-[10px] rounded-md">Choose Tour</button>
      </div>

      <div className="flex justify-center items-center gap-6 mr-[126px]">

        <button onClick={previous} className="bg-black">
        <div
          className="w-[42px] h-[41px] rounded-full bg-white/20 flex justify-center items-center text-white "
          
        >
          <FaArrowLeft />
        </div>
        </button>

        <button onClick={next} className="bg-black">
        <div
          className="w-[42px] h-[41px] rounded-full bg-white/20 flex justify-center items-center text-white "
        >
          <FaArrowRight />
        </div>
        </button>

      </div>

    </div>
  );
};

export default BaBookNOw;
