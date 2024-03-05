import React from "react";
import africaflag from "../assets/img/africaflag.png"
import greceflg from "../assets/img/Greece.png"
import southpoolflg from "../assets/img/SouthPol.png"
import rashaflg from "../assets/img/rasha.png"
import rassto from "../assets/img/rashasto.png"
import southpoolsto from "../assets/img/southpoolsto.png"
import africasto from "../assets/img/africasto.png"
import GReceSto from "../assets/img/GReceSto.png"

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
    <div className="w-full flex justify-center items-center" id="stories">
      <div className=" mt-[80px] xsm:mx-[10px] sm:mx-[20px] ">
        <h1 className="xsm:text-[30px] lg:text-[48px] font-medium text-black xsm:mx-[10px] sm:mx-[20px]">Top Stories</h1>
        <div className="flex xsm:flex-col md:flex-row md:justify-between mt[10px] xsm:mx-[10px] sm:mx-[20px]">
          <h1 className="xsm:text-[15px] lg:text-[20px] font-normal text-[#645E5E]">
            Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
          </h1>
          <button className="xsm:text-[15px] lg:text-[20px] font-normal text-[#645E5E]">
            
            View All Destinations
          </button>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-5 mt-[40px]  lg:h-[374px] lg:overflow-hidden">
          {topStoriesDataset.map((topStories, index) => (
            <div className=" md:w-[45%] lg:w-[267px] h-[374px]  relative rounded-[20px] overflow-hidden" key={index}>
              <div className="absolute top-0 left-0 right-0 bottom-0  rounded-[20px] flex justify-center m-4 items-center ">
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
                className="w-full h-full object-fill block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStories;
