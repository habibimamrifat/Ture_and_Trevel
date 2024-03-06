
import React from 'react';
import CDCard from "./CDCard";
import ptp1 from "../../assets/img/Rectangle 21.png";
import ptp2 from "../../assets/img/Rectangle 22.png";


import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';



const CDSlider = () => {

  const pagination = { 
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  // incase of blust 

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
  ];
 
  let totalSlider = Math.floor(MostPopulerTureDataSet.length/8) ;
  console.log(totalSlider);
  let sliderArray = Array.from({ length: totalSlider }, (_, index) => index + 1);
  console.log(sliderArray);

  return (
    <div className='h-auto w-[100%] xl:mt-[120px] xsm:mt-[50px] '>
       <Swiper
        pagination={pagination}
        modules={[Pagination]}
        loop={1}
        className="mySwiper "
      >
        {sliderArray.map((slide) => (
          <SwiperSlide key={slide}>
            <div className='h-full w-full grid grid-rows-12 xsm:px-[15px] xl:px-[100px] pb-8'>

              <div className=' row-span-4 w-full h-[190px] my-[15px] grid grid-cols-12'>

                <div className='col-span-3  m-2 h-full rounded-lg overflow-hidden xsm:hidden lg:flex'>
                <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * 8]} />
                </div>
                <div className='xsm:col-span-12 lg:col-span-6 m-2 h-full rounded-lg overflow-hidden'>
                <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * 8 + 1]} />
                </div>
                <div className='col-span-3  m-2 h-full rounded-lg overflow-hidden xsm:hidden lg:flex'>
                <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * 8 + 2]} />
                </div>

              </div>


              <div className=' row-span-4 w-full h-[190px] my-[5px] grid grid-cols-12'>

                <div className='col-span-6  m-2 h-full rounded-lg overflow-hidden xsm:hidden sm:flex'>
                <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * 8 + 3]} />
                </div>
                <div className='xsm:col-span-12 sm:col-span-6  m-2 h-full rounded-lg overflow-hidden'>
                <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * 8 + 4]} />
                </div>

              </div>


              <div className=' row-span-4 w-full h-[190px] my-[5px] grid grid-cols-12'>

                <div className='col-span-3  m-2 h-full rounded-lg overflow-hidden xsm:hidden lg:flex'>
                <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * 8 + 5]} />
                </div>
                <div className='xsm:col-span-12 lg:col-span-6  m-2 h-full rounded-lg overflow-hidden'>
                <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * 8 + 6]} />
                </div>
                <div className='col-span-3  m-2 h-full rounded-lg overflow-hidden xsm:hidden lg:flex'>
                <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * 8 + 7]} />
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    
    </div>
  )
}

export default CDSlider;
