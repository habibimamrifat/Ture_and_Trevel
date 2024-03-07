import React, { useRef } from "react";
import BaMiniMenu from "./BaMiniMenu";
import BaNavbar from "./BaNavbar";
import BaCountry from "./BaCountry";
import BaBookNOw from "./BaBookNOw";

// carusol importment starts
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import causolBg from "../assets/img/herobg.png";

import BabotttomSection from "./BabotttomSection";

// carusol impoartment ends

const BaSlider = () => {
  // carusol coding starts
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },

    afterChange: (current) => setActiveSlide2(current),
    
  };

  //   carusol coding ends
  
  return (
    <div className="relative h-screen w-full ">
      <div className="slider-container h-full w-full xsm:hidden sm:block" >
        <Slider
        
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        
      className="-ml-3 h-[100vh]"
        >
          <div key={1} className="h-full">
            <img src={causolBg} alt="not found" className="object-cover w-full" />
          </div>
          <div key={2} className="h-full">
            <img src={causolBg} alt="not found" className="object-cover h-full w-full" />
          </div>
          <div key={3} className="h-full">
            <img src={causolBg} alt="not found" className="object-cover w-full" />
          </div>
        </Slider>

      </div>

      <div className=" top-0 bottom-0 left-0 right-0 xsm:relative xsm:bg-black sm:absolute sm:bg-transparent">
        <BaMiniMenu />
        <BaNavbar />
        <BaCountry />
        <BaBookNOw 
        next={next}
        previous={previous}
        />
        <BabotttomSection/>
      </div>
      
    </div>
  );
};

export default BaSlider;
