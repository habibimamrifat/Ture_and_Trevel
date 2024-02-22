import React from "react";

const BaCountry = () => {
  return (
    <div className="text-white flex justify-between items-center mt-[93px] ">
      <div className="ml-[110px]">
            <div className="w-[312px] h-[113px] relative ">

                <div className="flex justify-center items-center absolute right-0">
                    <div className="w-[11px] h-[11px] bg-[#FF3B00] rounded-full"></div>
                    <h6 className="font-semibold text-base">United State of America</h6>
                </div>

                <h1 className="font-normal text-8xl">Arizona</h1>
            </div>
            <p className="font-normal text-base w-[313px]  h-[38px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            </p>
      </div>

      <div className="mr-[78px]">
        <h1 className="font-normal text-[64px]">Asia</h1>
      </div>
    </div>
  );
};

export default BaCountry;
