import React from "react";
import africaflag from "../assets/img/africaflag.png"
import greceflg from "../assets/img/Greece.png"
import southpoolflg from "../assets/img/SouthPol.png"
import rashaflg from "../assets/img/rasha.png"
import rassto from "../assets/img/rashasto.png"
import southpoolsto from "../assets/img/southpoolsto.png"
import africasto from "../assets/img/africasto.png"
import GReceSto from "../assets/img/GReceSto.png"
import SectionWrapper from "./wrappers/SectionWrapper";

const TopStories = () => {
 const  topStoriesDataset = [
    {
      storyImg: rassto,
      countryName: "Russia",
      countryImg: rashaflg,
    },
    {
      storyImg: southpoolsto,
      countryName: "South pole",
      countryImg: southpoolflg,
    },
    {
      storyImg: africasto,
      countryName: "Africa",
      countryImg: africaflag,
    },
    {
      storyImg: GReceSto,
      countryName: "Greece",
      countryImg: greceflg,
    },
  ];

  return (
    
    <div className="w-full mx-auto max-w-[1440px] " id="stories">
      <div className="mt-[80px]">
        <h1 className="xsm:text-[30px] lg:text-[48px] font-medium text-black">Top Stories</h1>
        <div className="flex xsm:flex-col md:flex-row md:justify-between mt[10px]">
          <h1 className="xsm:text-[15px] lg:text-[20px] font-normal text-[#645E5E]">
            Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
          </h1>
          <button className="xsm:text-[15px] lg:text-[20px] font-normal text-[#645E5E]">
            
            View All Destinations
          </button>
        </div>

        <div className="flex justify-center flex-wrap mt-[40px] gap-2 sm:gap-2  lg:h-[374px] lg:overflow-hidden">
          {topStoriesDataset.map((topStories, index) => (
            <div className=" xsm:w-full sm:w-[48%] lg:w-[32%] xl:flex-1 h-[374px]  relative rounded-[20px] overflow-hidden" key={index}>
              <div className="absolute top-0 left-0 right-0 bottom-0  rounded-[20px] flex justify-center items-center ">
               <div className="flex flex-col justify-center items-center">
               <div className="h-[100px] w-[100px] rounded-full">
                    <img src={topStories.countryImg} alt="" />
                </div>
                <h1 className="text-[36px] font-normal text-white">
                  {topStories.countryName}
                </h1>
               </div>
              </div>
              <img
                src={topStories.storyImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
    
  );
};

export default TopStories;
