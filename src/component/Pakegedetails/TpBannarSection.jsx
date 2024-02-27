import React, { useRef } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import due from "../../assets/img/due.png";
import grass from "../../assets/img/grass.png";
import bluewave from "../../assets/img/bluewave.png";



// Import Swiper React componentsx
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const TpBannarSection = () => {
  const swiperRef =useRef();

  const topPakegeImg = [due, grass, bluewave, due, grass, bluewave];
  return (
    <div className="mt-[32px] ms-[32px] me-8" id='Photograpgs'>
      <h1 className="font-bold text-xl text-white">
        Home / Node / A trip to the mighty desert
      </h1>

      <div className="flex gap-[17px] items-center mt-[26px] ms-[40px] ">
        <div className="h-[11px] w-[11px] rounded-full bg-[#FF3B00]"></div>
        <h2 className="font-bold text-xl text-white">North Africa</h2>
      </div>

      <div className="flex justify-between items-center mt-[32px] text-white">
        <h1 className="font-medium text-[48px]">A trip to the mighty desert</h1>
        <div className="flex justify-between items-center gap-5">
          <div className="h-[46px] w-[46px] rounded-full bg-white flex justify-center items-center">
            <FaBookmark className="text-xl text-[#FF3B00]" />
          </div>
          <button
            className="h-[46px] w-[46px] rounded-full bg-[#C2B9B9] flex justify-center items-center"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowLeft className="text-xl text-white" />
          </button>
          <button
            className="h-[46px] w-[46px] rounded-full bg-[#C2B9B9] flex justify-center items-center"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowRightLong className="text-xl text-white" />
          </button>
        </div>
      </div>

      <div className="mt-[71px] mx-[32px] h-[360px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
         
          className="mySwiper"
          onBeforeInit={(swiper)=>{
            swiperRef.current = swiper;
          }}
          
        >
          {topPakegeImg.map((pakegeImg, index) => (
            <SwiperSlide key={index}>
              <img src={pakegeImg} alt="" />
            </SwiperSlide>
          ))}
           
        </Swiper>

       
      </div>
    </div>
  );
};

export default TpBannarSection;
