import React from "react";
import austrilia from "../../assets/img/Australia.png";
import zz from "../../assets/img/zz.png";
import Rating from "../Rating";

const WishList = () => {
  const wishListDataSet = [
    {
      destinationImg: austrilia,
      destinationName: "Grand Lilly Hotel Dany",
      destinationReting: 4,
      aboutDestination:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      totalOrder: "186",
    },
    {
      destinationImg: zz,
      destinationName: "Grand Lilly",
      destinationReting: 2,
      aboutDestination:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      totalOrder: "186",
    },
  ];
  return (
    <div>
      <div>
        <u className="text-[#FF3B00]">
          <h1 className="text-[48px] text-black font-normal">Your Wish List</h1>
        </u>
        <div className="mt-[15px] flex flex-col gap-10">
          {
        wishListDataSet.map((wishList, index)=>(
          <div className="w-full bordr-[1px] shadow-md shadow-[#d2d2d2] rounded-md" key={index}>
            <div className="xsm:flex xsm:flex-col md:grid md:grid-cols-12 md:gap-[50px] p-12">
              
              <div className="md:col-span-5 lg:col-span-4 rounded-xl overflow-hidden">
                <img
                  src={wishList.destinationImg}
                  alt=""
                  className="object-cover h-full w-full "
                />
              </div>

              <div className="md:col-span-7 lg:col-span-8 md:relative">
                <h1 className="font-bold text-[32px] text-[#FF3B00] mb-[35px]">
                {wishList.destinationName}
                </h1>

                <Rating retting={wishList.destinationReting} />

                <p className="mt-[35px] text-[16px] font-normal">
                {wishList.aboutDestination}
                </p>

                <p className="text-[#200D98] font-normal text-[24px] mt-[35px] mb-[60px]">
                  Order Total : {wishList.totalOrder}
                </p>

                <div className="flex gap-5 md:absolute md:right-0 md:bottom-2">
                  <button className="w-[138px] h-[45px] rounded-[10px] border-[1px] text-[16px] font-normal flex justify-center items-center text-[#200D98] border-[#200D98]">
                  Book Now
                  </button>
                  <button className="w-[138px] h-[45px] rounded-[10px] border-[1px] text-[16px] font-normal flex justify-center items-center text-white bg-[#200D98]">
                  Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      }

          
        </div>
      </div>
    </div>
  );
};

export default WishList;
