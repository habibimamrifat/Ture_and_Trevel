import { useRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


// in case of emmergency delete everything above 
import React from "react";
import MptCard from "./MptCard";
import ptp1 from "../assets/img/Rectangle 21.png";
import ptp2 from "../assets/img/Rectangle 22.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const MostPopulerTures = () => {


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
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };


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
  ];
  return (
    <div className="mt-[251px] ml-[103px] mr-[100px]">
      <div>
      <div>
        <h1 className="text-5xl font-medium text-black">Most Popular Tours</h1>
      </div>
      <div className="flex justify-between items-center gap-16">
        <h6 className="text-xl font-normal text-[#645E5E]">
          Lorem Ipsum is simply dummy text.
        </h6>

        <div className="flex justify-center items-center gap-16 mt-[10px]">
          <h1 className="text-xl font-normal text-[#645E5E]">View All Tours</h1>
          <div className=" flex justify-center items-center gap-2">
            <button className="w-[42px] h-[41px] rounded-full bg-black flex justify-center items-center text-white " onClick={previous}>
              <FaArrowLeft />
            </button>
            <button className="w-[42px] h-[41px] rounded-full bg-black flex justify-center items-center text-white " onClick={next}>
              <FaArrowRight />
            </button>
          </div>
        </div>

      </div>
      </div>

      {/* {MostPopulerTureDataSet.map((populerTure, index) => (
        <MptCard key={index} aboutTure={populerTure} index={index} />
      ))} */}


      {/* incase of emmergency delete everything undernith  */}

      <div className="slider-container mt-[40px] w-[full] rounded-3xl">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
        
      >

        {MostPopulerTureDataSet.map((populerTure, index) => (
        <MptCard key={index} aboutTure={populerTure} index={index} />
      ))}

      </Slider>
    </div>

        {/* above this  */}
    </div>
  );
};

export default MostPopulerTures;