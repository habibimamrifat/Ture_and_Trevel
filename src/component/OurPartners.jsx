import React, { useRef } from 'react'
import Opimg from "../assets/img/Opimg.png"
import imageS from "../assets/img/Simg.png"
import imageT from "../assets/img/Timg.png"
import imageU from "../assets/img/Uimg.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SectionWrapper from './wrappers/SectionWrapper'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const OurPartners = () => {
 
  const OurpartnarDataSet= [
    Opimg,imageS,imageT,imageU,Opimg,imageS,imageT,imageU,
  ]
  return (
    
    <div className='w-full h-auto xsm:h-[150px] md:h-[200px] lg:h-[280px] bg-[#D9D9D9] mt-[81px]  flex justify-center items-center'>
      <div className='w-full flex items-center justify-center'>
      <Swiper
          slidesPerView={1}
          spaceBetween={5}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mySwiper "
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView:2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1350: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}

          
        
          
        >
          {OurpartnarDataSet.map((ourpartnar, index) => (
            <SwiperSlide key={index}>
              <div className='flex justify-center items-center'>
              <img src={ourpartnar} alt="" />
              </div>
            </SwiperSlide>
          ))}
           
        </Swiper>

      </div>
    </div>
    
  )
}

export default OurPartners;
