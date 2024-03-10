import React, { useRef } from "react";
// carusol importment starts
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from "../assets/img/herobg.png";
import BaSliderCard from "./BaSliderCard";
import BaMiniMenu from "./BaMiniMenu";
import BaNavbar from "./BaNavbar";
import SectionWrapper from "./wrappers/SectionWrapper";
import BaBookNOw from "./BaBookNOw"
import BabotttomSection from "./BabotttomSection";


// carusol impoartment ends

const BaSlider = () => {
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
  // banner data set
  const BannerDaataset = [
    {
      img: bg1,
      stateName: "United",
      countryName: "Arizona",
      aboutCountry:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      continenlalName: "Asia",
      next: next,
      previous: previous,
    },
    {
      img: bg1,
      stateName: "United State of America",
      countryName: "Africa",
      aboutCountry:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      continenlalName: "Africa",
      next: next,
      previous: previous,
    },
    {
      img: bg1,
      stateName: "of America",
      countryName: "Ice Land",
      aboutCountry:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      continenlalName: "Arab",
      next: next,
      previous: previous,
    },
  ];
  // carusol coding starts

  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  //   carusol coding ends

  return (
    <div className="relative h-screen w-full bg-black">
      <div className="absolute top-0 left-0 z-50 w-full">
        <SectionWrapper>
          <BaMiniMenu />
          <BaNavbar />
        </SectionWrapper>
      </div>

      <div className="slider-container h-full w-full relative">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className="-ml-3 h-[100vh]"
        >
          {BannerDaataset.map((eachBanner) => (
            <BaSliderCard eachBanner={eachBanner} />
          ))}
        </Slider>

        <div className=" absolute text-white xl:top-[75%] md:top-[65%] xsm:top-[60%] w-[100%]">
          <SectionWrapper>
            <BaBookNOw next={next} previous={previous} />

            <div className="w-full mt-[3%] ">
              <BabotttomSection />
            </div>

          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default BaSlider;
