import React from "react";
import SectionWrapper from "./wrappers/SectionWrapper";

const BaCountry = ({eachBanner}) => {
  console.log(eachBanner)
  return (
    <SectionWrapper>
    <div className="text-white flex justify-between items-center mx-[5%]">

      <div className="">

            <div className="xsm:w-[200px] xl:w-[400px]  
            relative">

                <div className="flex justify-center items-center absolute right-0  ">
                    <div className="w-[11px] h-[11px] bg-[#FF3B00] rounded-full"></div>
                    <h6 className="xsm:font-normal xsm:text-[10px] xl:font-semibold xl:text-base ">{eachBanner.stateName}</h6>
                </div>

                <h1 className="xsm:font-normal xsm:text-[30px] xl:font-normal xl:text-8xl">{eachBanner.countryName}</h1>
            </div>

            <p className="xsm:font-light xl:font-normal xl:text-base xl:w-[313px]  xl:h-[38px] xsm:w-[150px] xsm:h-[100px]">
            {eachBanner.aboutCountry}
            </p>
      </div>

      <div className="">
        <h1 className="xsm:text-[30px] xl:font-normal xl:text-[64px]">{eachBanner.  continenlalName}</h1>
      </div>
      
    </div>
    </SectionWrapper>
  );
};

export default BaCountry;
