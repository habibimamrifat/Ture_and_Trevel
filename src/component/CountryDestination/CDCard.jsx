import React from 'react'
import { FaBookmark } from "react-icons/fa";
import Rating from "../Rating";

const CDCard = ({aboutTure}) => {
  return (
    <div className="w-full h-full relative">
    <img src={aboutTure.img} alt="" className="object-fit h-full w-full" />

    <div className="absolute top-0 bottom-0 left-0 right-0 rounded-2xl m-[4%] flex flex-col justify-between">

      <div className=" flex justify-between">

        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] h-[15px] bg-[#FF3B00] rounded-full"></div>
          <h6 className="font-semibold text-base text-white">{aboutTure.location}</h6>
        </div>
        <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full bg-white/40">
          <FaBookmark className={`text-base ${aboutTure.bookMarked === 'yes' ? 'text-[#FF3B00]' : 'text-black'}`}/>
        </div>

      </div>

      <div>
      <div className="">
          <h1 className="text-[20px] font-normal text-white">
            {aboutTure.detail}
          </h1>
      </div>

      <div className="  flex items-baseline justify-between flex-wrap">

            <div className="font-normal text-sm text-white flex items-center gap-1">

                <div className="border-r-[1px] border-white flex justify-center items-center">
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

            <div className="font-normal text-sm text-white flex">
            <p><span>{aboutTure.totalReviews} </span>reviews</p>
            </div>

      </div>
      </div>

    </div>
  </div>
  )
}

export default CDCard;
