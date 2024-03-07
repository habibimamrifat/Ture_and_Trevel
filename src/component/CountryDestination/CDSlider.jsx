
import React, { useEffect } from 'react';
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

const [totalSlide, setTotalSlide] = useState(8);

function handleResize() {
  let width = window.innerWidth;

  if (width <= 640) {
    setTotalSlide(3);
  } else if (width >= 640 && width < 768) {
    setTotalSlide(5);
  } else {
    setTotalSlide(8);
  }
}

useEffect(() => {
  handleResize(); // Call the function initially to get the initial device width

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

useEffect(() => {
  console.log("totalslide", totalSlide);
  // Here you can perform any other actions you need when totalSlide changes
}, [totalSlide]);



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
 
  let totalSlider = Math.floor(MostPopulerTureDataSet.length/totalSlide) ;
  console.log("totalslider",totalSlider);

  let sliderArray = Array.from({ length: totalSlider }, (_, index) => index + 1);
  console.log("sliderarray",sliderArray);

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
            <div className='h-full w-full grid grid-rows-12 xsm:px-[15px] sm:px-0 pb-8'>

              <div className=' row-span-4 w-full h-[190px] my-[15px] grid grid-cols-12'>

                <div className='col-span-3  m-2 h-full rounded-lg overflow-hidden xsm:hidden lg:flex'>
                {MostPopulerTureDataSet[(slide - 1) * totalSlide] ? (
                    <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * totalSlide]} />
                  ) : null
                }
                </div>

                <div className='xsm:col-span-12 lg:col-span-6 m-2 h-full rounded-lg overflow-hidden'>
                {MostPopulerTureDataSet[(slide - 1) * totalSlide + 1] ? (
                    <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * totalSlide + 1]} />
                  ) : null
                }
                </div>

                <div className='col-span-3  m-2 h-full rounded-lg overflow-hidden xsm:hidden lg:flex'>
                {MostPopulerTureDataSet[(slide - 1) * totalSlide + 2] ? (
                    <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * totalSlide + 2]} />
                  ) : null
                }
                </div>

              </div>


              <div className=' row-span-4 w-full h-[190px] my-[5px] grid grid-cols-12'>

                <div className='col-span-6  m-2 h-full rounded-lg overflow-hidden xsm:hidden sm:flex'>
                {MostPopulerTureDataSet[(slide - 1) * totalSlide + 3] ? (
                    <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * totalSlide + 3]} />
                  ) : null
                }
                </div>
                <div className='xsm:col-span-12 sm:col-span-6  m-2 h-full rounded-lg overflow-hidden'>
                {MostPopulerTureDataSet[(slide - 1) * totalSlide + 4] ? (
                    <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * totalSlide + 4]} />
                  ) : null
                }
                </div>

              </div>


              <div className=' row-span-4 w-full h-[190px] my-[5px] grid grid-cols-12'>

                <div className='col-span-3  m-2 h-full rounded-lg overflow-hidden xsm:hidden lg:flex'>
                {MostPopulerTureDataSet[(slide - 1) * totalSlide + 5] ? (
                    <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * totalSlide + 5]} />
                  ) : null
                }
                </div>
                <div className='xsm:col-span-12 lg:col-span-6  m-2 h-full rounded-lg overflow-hidden'>
                {MostPopulerTureDataSet[(slide - 1) * totalSlide + 6] ? (
                    <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * totalSlide + 6]} />
                  ) : null
                }
                </div>
                <div className='col-span-3  m-2 h-full rounded-lg overflow-hidden xsm:hidden lg:flex'>
                {MostPopulerTureDataSet[(slide - 1) * totalSlide + 7] ? (
                    <CDCard aboutTure={MostPopulerTureDataSet[(slide - 1) * totalSlide + 7]} />
                  ) : null
                }
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
