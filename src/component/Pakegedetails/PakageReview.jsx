import React from "react";
import person from "../../assets/img/Ellipse 56.png";
import Ratting from "../Rating";
const PakageReview = () => {
  return (
    <div className="mt-[60px]">
      <div>
        <div className="flex gap-5 items-center">
          <div className="w-[55px] h-[55px] rounded-full bg-[#FF3B00] text-white flex items-center justify-center">
            <h1 className="text-[32px] font-normal">4</h1>
          </div>
          <h1 className="text-[60px] font-semibold text-black">Reviews 1</h1>
        </div>
        <div className="mt-[65px] bg-[#EBE7E7] w-[858px] h-[228px] rounded-xl">
          <div className=" text-[20px] font-normal m-2 p-[35px]">
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

      <div className="mt-[36px] flex justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[56px] h-[56px] rounded-full items-center justify-center">
            <img src={person} alt="" className="object-cover h-full w-full" />
          </div>
          <h1 className="text-[16px] font-normal">
            Submitted by admin on November 3rd
          </h1>
        </div>
        <div className="flex justify-around items-center gap-3">
          <Ratting retting={2.5} />
          <button className="w-[81px] h-[24px] bg-[#F1EAEA] text-[15px] font-normal text-[#FF3B00] rounded-[5px]">
            Reply
          </button>
          <button className="w-[81px] h-[24px] bg-[#F1EAEA] text-[15px] font-normal text-[#FF3B00] rounded-[5px]">
            Permalink
          </button>
        </div>
      </div>

      <div className="w-full h-[553px] bg-[#F1EAEA]">
        <div className="mx-[56px]">
          <div className="flex justify-between  pt-[45px]">
            <h1 className="text-[20px] font-normal text-black">
              Write A Review
            </h1>

            <div className="flex justify-around gap-4">
              <h1 className="text-[20px] font-normal">Assigned rating</h1>
              <Ratting retting={3} />
            </div>
          </div>

          <div className="flex justify-between mt-[42px]">
            <input type="text" placeholder="Your Name"  className="bg-white p-5 rounded-md w-[375px] h-[64px] text-[#BDB0B0] text-[20px] font-normal"/>
            <input type="text" placeholder="Your Email"  className="bg-white p-5 rounded-md w-[375px] h-[64px] text-[#BDB0B0] text-[20px] font-normal"/>
            
          </div>

          <div className="mt-[28px]">
            <textarea name="" placeholder="Comment" id="" cols="30" rows="10" className="bg-white p-5 rounded-md w-full h-[208px] text-[#BDB0B0] text-[20px] font-normal" ></textarea>
          </div>

          <div className="flex justify-between items-center mt-[28px]">
            <button className="w-[230px] h-[62px] rounded-[10px] bg-[#2E2E2F] text-white text-[20px] font-normal">
            + Add a new file
            </button>
            <button className="w-[230px] h-[62px] rounded-[10px] bg-[#FF3B00] text-white text-[20px] font-normal">
            Send
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PakageReview;
