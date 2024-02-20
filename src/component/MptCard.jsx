import React from "react";
import { FaBookmark } from "react-icons/fa";
import Rating from "./Rating";

const MptCard = ({ aboutTure, index }) => {


  return (
    <div className="w-[570px] h-[360px] rounded-2xl relative">
      <img src={aboutTure.img} alt="" className="bg-cover bg-center" />

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/20 rounded-2xl">

        <div className="flex justify-between mx-[33px] my-[35px]">
          <div className="flex justify-center items-center gap-1">
            <div className="w-[11px] h-[11px] bg-[#FF3B00] rounded-full"></div>
            <h6 className="font-semibold text-base text-white">{aboutTure.location}</h6>
          </div>
          <div className="flex justify-center items-center h-[54px] w-[54px] rounded-full bg-white/40">
            <FaBookmark className={`text-base ${aboutTure.bookMarked === 'yes' ? 'text-[#FF3B00]' : 'text-black'}`}/>
          </div>
        </div>

        <div className="mt-[104px] w-[347px] h-[78px] ml-[35px]">
            <h1 className="text-[32px] font-normal text-white">
              {aboutTure.detail}
            </h1>
        </div>

        <div className="mt-[32px]  ml-[35px] flex justify-around">

          <div className="font-normal text-xl text-white flex items-center gap-1">

          <div className="border-r-[1px] border-white">
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
  );
};

export default MptCard;
