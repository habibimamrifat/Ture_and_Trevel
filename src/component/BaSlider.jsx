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
import { CustomPrevArrow, CustomNextArrow } from "./Button";

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
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },

    afterChange: (current) => setActiveSlide2(current),
  };

  //   carusol coding ends

  return (
    <div className="relative">
      <div className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div key={1}>
            <img src={causolBg} alt="" />
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
          <div key={6}>
            <h3>6</h3>
          </div>
        </Slider>

      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0">
        <BaMiniMenu />
        <BaNavbar />
        <BaCountry />
        <BaBookNOw 
        next={next}
        previous={previous}
        />
      </div>
    </div>
  );
};

export default BaSlider;
