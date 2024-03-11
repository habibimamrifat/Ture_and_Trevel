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
    <div className="xsm:mt-[30px] xsm:ms-[10px] xsm:me-4 lg:mt-[32px] lg:ms-[32px] xl:ml-[120px] lg:me-8" id='Photograpgs'>
      <h1 className=" lg:text-xl xsm:font-normal xsm:text-[30px] sm:font-bold sm:text-lg text-white">
        Home / Node / A trip to the mighty desert
      </h1>

      <div className="flex gap-[17px] items-center mt-[26px] xsm:ms-[10px] lg:ms-[40px] ">
        <div className="h-[11px] w-[11px] rounded-full bg-[#FF3B00]"></div>
        <h2 className="sm:font-bold lg:text-xl xsm:font-normal xsm:text-[20px] text-white">North Africa</h2>
      </div>

      <div className="flex xsm:flex-col  sm:flex-row justify-between items-center mt-[32px] text-white">
        <h1 className="sm:font-medium xl:text-[48px] xsm:text-[30px] xsm:font-normal">A trip to the mighty desert</h1>

        <div className="flex justify-between items-center gap-5 xsm:mt-[15px]">

          <div className="xsm:h-[30px] xsm:w-[30px] lg:h-[46px] lg:w-[46px] rounded-full bg-white flex justify-center items-center">
            <FaBookmark className="text-xl text-[#FF3B00]" />
          </div>

          <button
            className="xsm:h-[30px] xsm:w-[30px] lg:h-[46px] lg:w-[46px] rounded-full bg-[#C2B9B9] flex justify-center items-center"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowLeft className="text-xl text-white" />
          </button>
          <button
            className="xsm:h-[30px] xsm:w-[30px] lg:h-[46px] lg:w-[46px] rounded-full bg-[#C2B9B9] flex justify-center items-center"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowRightLong className="text-xl text-white" />
          </button>
        </div>
      </div>

      <div className="mt-[71px] h-[250px]  rounded-lg">
        <Swiper
           slidesPerView={1}
           spaceBetween={0}
           loop={true}
           className="mySwiper"
           onBeforeInit={(swiper) => {
             swiperRef.current = swiper;
           }}
           breakpoints={{
             450: {
               slidesPerView: 1,
               spaceBetween: 0,
             },
             640: {
               slidesPerView: 2,
               spaceBetween: 5,
             },
             768: {
               slidesPerView: 2,
               spaceBetween: 5,
             },
             1024: {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             1350: {
               slidesPerView: 3,
               spaceBetween: 20,
             },
             1440: {
               slidesPerView: 3,
               spaceBetween: 20,
             },
           }}
          
        >
          {topPakegeImg.map((pakegeImg, index) => (

            <SwiperSlide key={index}>
              <img src={pakegeImg} alt="" className="h-[250px] rounded-sm w-full object-cover" />
            </SwiperSlide>

          ))}
           
        </Swiper>

       
      </div>
    </div>
  );
};

export default TpBannarSection;
