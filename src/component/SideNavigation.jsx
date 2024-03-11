import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/img/logo-malekairinternational 1 (1).png";

const SideNavigation = ({ menuButtonClicked, setMenuButtonClicked }) => {
  return (
    <div
      className={` max-w-[630px] h-[800px]  absolute left-0 top-0 bg-white  text-black  duration-1000 rounded-r-2xl translate-all shadow-xl shadow-gray-800 z-[100] ${
        menuButtonClicked ? "translate-x-0 ease-in-out sm:hidden" : " ease-in-out translate-x-[-700px]"
      }`}
    >
      <div className="relative w-full h-full px-10">
        {/* button to close the nav section  */}
        <div
          className={` w-full absolute top-2 left-[80%] ${
            menuButtonClicked ? "sm:hidden" : "hidden"
          }`}
        >
          <h1
            className="text-xl h-[30px] w-[30px] rounded-full bg-black/20 flex justify-center items-center overflow-hidden "
            onClick={() => setMenuButtonClicked(!menuButtonClicked)}
          >
            X{" "}
          </h1>
        </div>
        {/* button to close the nav section  */}

        {/* logo section  */}
        <div
          className={` transform translate-min-w ${menuButtonClicked
              ? "relative top-10 min-w-[80%] flex justify-center transition-all duration-700 overflow-hidden"
              : "absolute -left-[99999px] min-w-0 min-h-0 overflow-hidden"
          }`}
        >
          <img
            src={logo}
            alt="Your Image"
            className={`${menuButtonClicked ? 'transform translate-min-w min-w-[100px] duration-700 delay-100 overflow-hidden':'min-w-0'}`}
          />
        </div>
        {/* logo section  */}

        <div
          className={`flex w-[100%]  ${
            menuButtonClicked ? " sm:hidden" : " hidden"
          }`}
        >
          <div className="w-full h-auto mt-16">
            <ul className="flex flex-col gap-2 mx-5">
              <li className=" w-full h-10 flex justify-center items-center border-[1px] border-[#FF3B00]    rounded-xl hover:bg-white hover:text-orange-600">
                <Link to="/">HOME</Link>
              </li>

              <li className=" w-full h-10 flex justify-center items-center border-[1px] border-[#FF3B00]    rounded-xl hover:bg-white hover:text-orange-600">
                <div className="flex items-center ">
                  <h1>FEATURES</h1>
                  <FaChevronDown />
                </div>
              </li>

              <li className=" w-full h-10 flex justify-center items-center border-[1px] border-[#FF3B00]    rounded-xl hover:bg-white hover:text-orange-600">
                <Link to="/pakagedetails">PAGES</Link>
              </li>

              <li className=" w-full h-10 flex justify-center items-center border-[1px] border-[#FF3B00]    rounded-xl hover:bg-white hover:text-orange-600">
                <Link to="/country_destination">TOURS</Link>
              </li>

              <li className=" w-full h-10 flex justify-center items-center border-[1px] border-[#FF3B00]    rounded-xl hover:bg-white hover:text-orange-600">
                <Link>CARS</Link>
              </li>

              <li className=" w-full h-10 flex justify-center items-center border-[1px] border-[#FF3B00]    rounded-xl hover:bg-white hover:text-orange-600">
                <Link>HOTELS</Link>
              </li>

              <li className=" w-full h-10 flex justify-center items-center border-[1px] border-[#FF3B00]    rounded-xl hover:bg-white hover:text-orange-600">
                <Link>FLIGHTS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
