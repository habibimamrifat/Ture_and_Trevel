import React from "react";
import person from "../../assets/img/Ellipse 56.png";
import Ratting from "../Rating";
const PakageReview = () => {
  return (
    <div className="xsm:ml-[10px] xsm:mr-[10px] xsm:mt-[45px] xsm:mb-[70px] md:mt-[60px] md:mb-[95px]" id='reviews'>

      <div>
        <div className="flex gap-5 items-center">

          <div className="xsm:w-[30px] xsm:h-[30px] lg:w-[55px] lg:h-[55px] rounded-full bg-[#FF3B00] text-white flex items-center justify-center">
            <h1 className="xsm:text-[15px] md:text-[32px] font-normal">4</h1>
          </div>

          <h1 className="xsm:text-[30px] xsm:font-normal md:text-[50px] xl:text-[60px] font-semibold text-black">Reviews 1</h1>

        </div>
        <div className="xsm:mt-[30px] lg:mt-[65px] bg-[#EBE7E7] w-full h-auto rounded-xl">
          <div className="xsm:text-[15px] lg:text-[20px] font-normal m-2 xsm:p-[20px] lg:p-[35px]">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </div>
        </div>
      </div>

      <div className="mt-[36px] flex xsm:flex-col xsm:gap-[15px] md:flex-row md:justify-between">

        <div className="flex items-center gap-3">

          <div className="xsm:w-[30px] xsm:h-[30px] lg:w-[56px] lg:h-[56px] rounded-full items-center justify-center">
            <img src={person} alt="" className="object-cover h-full w-full" />
          </div>

          <h1 className="text-[16px] font-normal">
            Submitted by admin on November 3rd
          </h1>
        </div>

        <div className="flex xsm:flex-col sm:flex-row justify-around items-center gap-3">
          <Ratting retting={2.5} />
          <button className="w-[81px] h-[24px] bg-[#F1EAEA] text-[15px] font-normal text-[#FF3B00] rounded-[5px]">
            Reply
          </button>
          <button className="w-[81px] h-[24px] bg-[#F1EAEA] text-[15px] font-normal text-[#FF3B00] rounded-[5px]">
            Permalink
          </button>
        </div>
      </div>

      <div className="w-full h-auto pb-5 bg-[#F1EAEA] mt-[36px]">
        <div className="xsm:mx-[10px] lg:mx-[56px]">
          <div className="flex xsm:flex-col xsm:gap-3 lg:flex-row lg:justify-between pt-[45px]">
            <h1 className="text-[20px] font-normal text-black">
              Write A Review
            </h1>

            <div className="flex xsm:flex-col xsm:gap-3 md:flex-row md:justify-between lg:gap-4">
              <h1 className="text-[20px] font-normal">Assigned rating</h1>
              <Ratting retting={3} />
            </div>
          </div>

          <div className="flex xsm:flex-col xsm:gap-3 lg:flex-row lg:justify-between mt-[42px]">
            <input type="text" placeholder="Your Name"  className="bg-white p-5 rounded-md xsm:w-full lg:w-[45%] h-[64px] text-[#BDB0B0] text-[20px] font-normal"/>
            <input type="text" placeholder="Your Email"  className="bg-white p-5 rounded-md xsm:w-full lg:w-[45%] h-[64px] text-[#BDB0B0] text-[20px] font-normal"/>
            
          </div>

          <div className="mt-[28px]">
            <textarea name="" placeholder="Comment" id="" cols="30" rows="10" className="bg-white p-5 rounded-md w-full h-[208px] text-[#BDB0B0] text-[20px] font-normal" ></textarea>
          </div>

          <div className="flex justify-between items-center mt-[28px]">
            <button className="xsm:w-[45%] xsm:h-[40px] lg:w-[230px] lg:h-[62px] rounded-[10px] bg-[#2E2E2F] text-white xsm:text-[15px] lg:text-[20px] font-normal">
            + Add a new file
            </button>
            <button className="xsm:w-[45%] xsm:h-[40px] lg:w-[230px] lg:h-[62px] rounded-[10px] bg-[#FF3B00] text-white xsm:text-[15px] lg:text-[20px] font-normal">
            Send
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PakageReview;
