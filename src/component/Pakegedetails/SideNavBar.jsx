import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideNavBar = () => {
  const [isActiveLink, setIsActiveLink] = useState("");
  const checekActiveLink = (link) => {
    setIsActiveLink(link);
  };
  return (
    <div className=" w-full h-[500px] bg-black sticky top-[10%] border-[10px] border-red-900">
      <div className="mt-[53px] ml-[68px] text-[24px] font-medium text-white">
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
  );
};

export default SideNavBar;
