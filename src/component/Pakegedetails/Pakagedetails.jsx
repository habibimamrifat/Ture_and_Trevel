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
import FootrtBottom from "../FooterBottom"
import Prefooter from "../Prefooter";
import SideNavBar from "./SideNavBar";

const Pakagedetails = () => {
 
  const swiperStyles = {
    width: '100%',
    height: '200px', // Set the height here
  
     // Just for visualization
  };

  return (
    
    <div>

      <div className="w-full h-[1304px] bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${bannerBg})`}}>
        <BaMiniMenu/>
        <BaNavbar/>
        <TpBannarSection/>
        <TpBannaeBottomSEction />  
      </div>

      <div className="grid grid-cols-4 gap-4">

      <div className="ml-[37px] col-span-3">
      <OverView/>
      <TopPakegeInclucated/>
      <Location/>
      <TopStories/>
      <PakageReview />
      </div>

      <div className="col-span-1 mt-[15px] mr-[30px]">
        <SideNavBar/>
      </div>

      </div>


      <Prefooter/>
      <Footer/>
    </div>
 
  );
};

export default Pakagedetails;
