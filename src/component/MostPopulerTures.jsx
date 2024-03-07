import { useRef } from "react";
// in case of emmergency delete everything above
import React from "react";
import MptCard from "./MptCard";
import ptp1 from "../assets/img/Rectangle 21.png";
import ptp2 from "../assets/img/Rectangle 22.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionWrapper from "./wrappers/SectionWrapper";

const MostPopulerTures = () => {
  const swiperRef = useRef();
  // incase of need delete everything above
  const MostPopulerTureDataSet = [
    {
      location: "Australia",
      bookMarked: "no",
      detail: "Lorem Ipsum is simply dummy text",
      days: 5,
      totalCosting: 500,
      ratting: 2.5,
      totalReviews: 3,
      img: ptp1,
    },
    {
      location: "NorthAmerica",
      bookMarked: "yes",
      detail: "Lorem Ipsum is simply dummy text",
      days: 5,
      totalCosting: 500,
      ratting: 5,
      totalReviews: 3,
      img: ptp2,
    },
    {
      location: "NorthAmerica",
      bookMarked: "yes",
      detail: "Lorem Ipsum is simply dummy text",
      days: 5,
      totalCosting: 500,
      ratting: 5,
      totalReviews: 3,
      img: ptp2,
    },
    {
      location: "NorthAmerica",
      bookMarked: "yes",
      detail: "Lorem Ipsum is simply dummy text",
      days: 5,
      totalCosting: 500,
      ratting: 5,
      totalReviews: 3,
      img: ptp2,
    },
  ];
  return (
    <SectionWrapper>
      <div className="w-full xsm:mt-[650px] sm:mt-[600px] md:mt-[380px] lg:mt-[350px] xl:mt-[450px]">
        <div className=" lg:ml-[103px] lg:mr-[100px]">
          <div>
            <div>
              <h1 className="xsm:ml-[20px] xsm:text-[30px] md:text-5xl font-medium text-black">
                Most Popular Tours
              </h1>
            </div>
            <div className="flex xsm:flex-col  md:flex-row md:justify-between items-center md:gap-16">
              <h6 className="xsm:text-[20px] md:text-xl ml-[20px] font-normal text-[#645E5E]">
                Lorem Ipsum is simply dummy text.
              </h6>

              <div className="flex xsm:flex-col md:flex-row md:justify-center md:items-center sxm:gap-4 md:gap-16 xsm:mt-3 md:mt-[10px]">
                <h1 className="xsm:text-[20px] md:text-xl font-normal text-[#645E5E]">
                  View All Tours
                </h1>

                <div className=" flex justify-center items-center gap-2">
                  <button
                    className="w-[42px] h-[41px] rounded-full bg-[#645E5E]/30 flex justify-center items-center text-white "
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <FaArrowLeft />
                  </button>

                  <button
                    className="w-[42px] h-[41px] rounded-full bg-[#645E5E]/30 flex justify-center items-center text-white "
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-container mt-[40px] w-[full] rounded-3xl">
            <Swiper
              slidesPerView={1}
              spaceBetween={5}
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
                768: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1350: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {MostPopulerTureDataSet.map((populerTure, index) => (
                <SwiperSlide key={index}>
                  <MptCard key={index} aboutTure={populerTure} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* above this  */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MostPopulerTures;
