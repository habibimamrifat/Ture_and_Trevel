import React from "react";
import { FaBookmark } from "react-icons/fa";
import Rating from "./Rating";
import SectionWrapper from "./wrappers/SectionWrapper";

const MptCard = ({ aboutTure,  }) => {


  return (
    <SectionWrapper>
    <div className="xsm:w-full h-full rounded-2xl relative 2xl:w-[48%]">
      <img src={aboutTure.img} alt="" className="bg-cover bg-center object-cover w-full" />

      <div className="absolute top-0 bottom-0 left-0 right-0 rounded-2xl flex flex-col justify-between m-[2%]">

        <div className="flex justify-between xsm:mx-[2%] xsm:my-[2%] xl:mx-[33px] xl:my-[35px] px-4">
          <div className="flex justify-center items-center gap-1">
            <div className="w-[11px] h-[11px] bg-[#FF3B00] rounded-full"></div>
            <h6 className="font-semibold text-base text-white">{aboutTure.location}</h6>
          </div>
          <div className="flex justify-center items-center h-[54px] w-[54px] rounded-full bg-white/40">
            <FaBookmark className={`text-base ${aboutTure.bookMarked === 'yes' ? 'text-[#FF3B00]' : 'text-black'}`}/>
          </div>
        </div>

        <div className="py-4">

        <div className="w-full xsm:m-[1%] xl:h-[78px] xl:mx-[2%]">
            <h1 className="text-wrap xsm:text-[20px] xl:text-[32px] font-normal text-white px-4">
              {aboutTure.detail}
            </h1>
        </div>

        <div className="xl:mt-[32px]  xl:ml-[35px] flex justify-around xsm:mb-[2%]">

          <div className="font-normal text-sm xl:text-xl text-white flex xsm:flex-col md:flex-row items-center gap-1">

          <div className="border-r-[1px] border-white  ">
            <p className="px-1">{aboutTure.days} <span>days</span></p>
            </div>
            <div>
              <p>form $ <span>{aboutTure.totalCosting}</span> </p>
            </div>
          </div>

          <div>
            <Rating
            retting ={aboutTure.ratting} />
          </div>

          <div className="font-normal text-xl text-white flex">
            <p><span>{aboutTure.totalReviews} </span>reviews</p>
          </div>

        </div>
        </div>

      </div>
    </div>
    </SectionWrapper>
  );
};

export default MptCard;
