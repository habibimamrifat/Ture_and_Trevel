import React from "react";
import bannerBg from "../../assets/img/ourPakageDetailBannerbg.png"
import BaMiniMenu from "../BaMiniMenu"
import Banavbar from "../BaNavbar"

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import BaNavbar from "../BaNavbar";
import TpBannarSection from "./TpBannarSection";
import TpBannaeBottomSEction from "./TpBannaeBottomSEction";
import OverView from "./OverView";
import TopPakegeInclucated from "./TopPakegeInclucated";
import Location from "./Location";
import TopStories from "../TopStories"
import PakageReview from "./PakageReview";
import Footer from "../Footer"
import Prefooter from "../Prefooter";
import SideNavBar from "./SideNavBar";
import SectionWrapper from "../wrappers/SectionWrapper";

const Pakagedetails = () => {
 
  const swiperStyles = {
    width: '100%',
    height: '200px', // Set the height here
  
     // Just for visualization
  };

  return (
    
    <div className="w-[100%]">

      <div className="w-full h-auto bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${bannerBg})`}}>
        <SectionWrapper>
        <BaMiniMenu/>
        <BaNavbar/>
        <TpBannarSection/>
        <TpBannaeBottomSEction />
        </SectionWrapper>  
      </div>

        <SectionWrapper>
      <div className="w-full md:grid md:grid-cols-12 gap-4">

        <div className="mx-[5%] md:col-span-9">
        <OverView/>
        <TopPakegeInclucated/>
        <Location/>
        <TopStories/>
        <PakageReview />
        </div>

        <div className="md:col-span-3 mt-[15px] mx-[5%]">
          <SideNavBar/>
        </div>

      </div>
      </SectionWrapper>


      <Prefooter/>
      <Footer/>
    </div>
 
  );
};

export default Pakagedetails;
