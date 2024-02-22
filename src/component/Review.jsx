import React from "react";
import pone from "../assets/img/pOne.png";
import ptwo from "../assets/img/Ptwo.png";
import pThree from "../assets/img/Pthree.png";
import Rating from "./Rating";

import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  const reviewDataSet = [
    {
      customerImg: pone,
      customerName: "Shirly Smith",
      customerReview:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      CustomerReting: 5,
      authority: "Customer",
    },
    {
      customerImg: ptwo,
      customerName: "Kevin Martin",
      customerReview:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      CustomerReting: 3,
      authority: "Customer",
    },
    {
      customerImg: pThree,
      customerName: "Jecchica Brown",
      customerReview:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      CustomerReting: 2.5,
      authority: "Customer",
    },
    {
      customerImg: pThree,
      customerName: "Jecchica Brown",
      customerReview:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      CustomerReting: 2.5,
      authority: "Customer",
    },
  
    
  ];

  //   slicl slider code here
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  return (
   <div className="w-[1440px]">
     <div className="mt-[77px] pb-8">
      <div>
        <h1 className="text-[32px] font-normal text-[#FF3B00] text-center">
          Testimonials and Review
        </h1>
        <h1 className=" text-[48px] font-normal text-black text-center">
          What They’re Saying
        </h1>
        <div className="mt-[53px] mx-[100px] flex justify-center items-center pb-10 ">
        <Swiper
        pagination={{
          dynamicBullets: true,
          
        }}
        
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        
      >
            
            {reviewDataSet.map((review, index) => (
              <SwiperSlide>
                <div
                className="flex flex-col items-center justify-centers p-[50px] "
                key={index}
              >
                <div className=" rounded-full">
                  <img
                    src={review.customerImg}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-[352px] h-[384px] mt-[15px] shadow-xl shadow-[#00000040] ">
                  <div className="flex flex-col justify-center items-center">
                    <div className="mt-[47px]">
                      <Rating retting={review.CustomerReting} />
                    </div>
                    <div className="text-center mt-[30px] mx-[42px]">
                      <p>{review.customerReview}</p>
                      <div className="mt-[75px] pb-[49px]">
                        <h1 className="text-[20px] font-medium text-black">
                          {review.customerName}
                        </h1>
                        <h1 className="text-base font-normal text-[#FF3B00] ">
                          {review.authority}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>
            ))}

            
          </Swiper>

          {/* {reviewDataSet.map((review, index) => (

            <div className="flex flex-col items-center justify-centers " key={index}>
              <div className="h-[260px] w-[260px] rounded-full">
                <img
                  src={review.customerImg}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-[352px] h-[382px] mt-[15px] shadow-xl shadow-[#00000040] ">
                <div className="flex flex-col justify-center items-center">
                  <div className="mt-[47px]">
                    <Rating retting={review.CustomerReting} />
                  </div>
                  <div className="text-center mt-[30px]">
                    <p>{review.customerReview}</p>
                    <div className="mt-[75px] pb-[49px]">
                      <h1 className="text-[20px] font-medium text-black">
                        {review.customerName}
                      </h1>
                      <h1 className="text-base font-normal text-[#FF3B00] ">
                        {review.authority}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
   </div>
  );
};

export default Review;
