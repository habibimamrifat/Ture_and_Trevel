import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const SideNavBar = () => {
  const [isActiveLink, setIsActiveLink] = useState("");
  const checekActiveLink = (link) => {
    setIsActiveLink(link);
  };
  return (
    <div className=" w-full h-[580px] sticky top-[1%] flex flex-col justify-center items-center ">

      <div className=" text-[24px] font-medium text-white bg-black w-full rounded-[10px]">
       <div className="p-[68px]">
       <div className="flex items-center gap-2">
          <div
            className={
              isActiveLink === "Photograpgs"
                ? "w-[11px] h-[11px] bg-[#FF3B00] rounded-full"
                : "hidden"
            }
          ></div>
          <a
            href="#Photograpgs"
            onClick={() => checekActiveLink("Photograpgs")}
            className={
              isActiveLink === "Photograpgs" ? "text-red-500" : "text-white"
            }
          >
            Photograpgs
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={
              isActiveLink === "overView"
                ? "w-[11px] h-[11px] bg-[#FF3B00] rounded-full"
                : "hidden"
            }
          ></div>
          <a
            href="#overView"
            onClick={() => checekActiveLink("overView")}
            className={
              isActiveLink === "overView" ? "text-red-500" : "text-white"
            }
          >
            Over View
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={
              isActiveLink === "Included"
                ? "w-[11px] h-[11px] bg-[#FF3B00] rounded-full"
                : "hidden"
            }
          ></div>
          <a
            href="#Included"
            onClick={() => checekActiveLink("Included")}
            className={
              isActiveLink === "Included" ? "text-red-500" : "text-white"
            }
          >
            Included
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={
              isActiveLink === "Location"
                ? "w-[11px] h-[11px] bg-[#FF3B00] rounded-full"
                : "hidden"
            }
          ></div>
          <a
            href="#Location"
            onClick={() => checekActiveLink("Location")}
            className={
              isActiveLink === "Location" ? "text-red-500" : "text-white"
            }
          >
            Location
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={
              isActiveLink === "stories"
                ? "w-[11px] h-[11px] bg-[#FF3B00] rounded-full"
                : "hidden"
            }
          ></div>
          <a
            href="#stories"
            onClick={() => checekActiveLink("stories")}
            className={
              isActiveLink === "stories" ? "text-red-500" : "text-white"
            }
          >
            Stories
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={
              isActiveLink === "reviews"
                ? "w-[11px] h-[11px] bg-[#FF3B00] rounded-full"
                : "hidden"
            }
          ></div>
          <a
            href="#reviews"
            onClick={() => checekActiveLink("reviews")}
            className={
              isActiveLink === "reviews" ? "text-red-500" : "text-white"
            }
          >
            Reviews
          </a>
        </div>
       </div>
      </div>
      <div className="w-full rounded-[10px] overflow-hidden mt-[15px]">
        <button className="w-full h-[127px] bg-[#FF3B00] text-white ">
          <h1 className="text-[24px] font-bold">Book Now</h1>
            <h1 className="text-[32px] font-bold">From $500</h1>
        </button>
      </div>

      <div className="flex items-center gap-2 mt-[15px]">
        <div className="w-[61px] h-[61px] rounded-full flex justify-center items-center shadow-md shadow-[#645E5E]">
        <FaBookmark className="text-[#FF3B00]" />
        </div>
        <h1 className="text-[25px] font-normal text-[#645E5E]">Add to favourites</h1>
      </div>

    </div>
  );
};

export default SideNavBar;
