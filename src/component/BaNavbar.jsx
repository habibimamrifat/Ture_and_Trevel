import React, { useState } from "react";
import logo from "../assets/img/logo-malekairinternational 1 (1).png";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import SectionWrapper from "./wrappers/SectionWrapper";
const BaNavbar = () => {
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);
  console.log(menuButtonClicked);
  const [handleSearchClicked, setHandleSerchClicked] = useState(false);
  console.log("search", handleSearchClicked);

  return (
    <SectionWrapper>
      <div className="mt-[1%] flex justify-center items-center ">
        {/* all the menu item that appers at the top  */}
        <div className="flex justify-around items-center w-[80%]">
          {/* navlink logo section  */}
          <Link to="/">
            <div className="xsm:w-[100px] lg:w-[150px] lg:h-[100px] sm:w-[15px] xl:w-[211px] xl:h-[146px] lg:ml-1 xsm:hidden lg:block">
              <img src={logo} alt="" />
            </div>
          </Link>
          {/* navlink logo section  */}

          {/* ..... make it animeded whill small ...  */}

          {/* button to make nav section apper  */}
          <div>
            <SlOptionsVertical
              className={`xsm:text-sm xsm:block sm:absolute sm:top-[99999px] sm:right-[99999px] text-white ${
                menuButtonClicked
                  ? "xsm:absolute xsm:top-[99999px] xsm:right-[99999px]"
                  : "block"
              }`}
              onClick={() => setMenuButtonClicked(!menuButtonClicked)}
            />
          </div>
          {/* button to make nav section apper  */}

          {/* navsection wrapper  */}
          <div
            className={`flex xsm:text-sm lg:text-xl lg:font-semibold w-[80vw] text-white  ${
              menuButtonClicked
                ? " font-semibold rounded-xlb shadow-lg  z-10 justify-center"
                : " bg-transparent"
            }`}
          >
            {/* button to close the nav section  */}
            {/* <div className={`absolute top-5 right-3 ${menuButtonClicked ? ' block':'hidden'}`}>
                <GiCancel className='text-xl' onClick={()=>setMenuButtonClicked(!menuButtonClicked)}/>
              </div> */}
            {/* button to close the nav section  */}

            <ul
              className={`flex md:gap-3 lg:gap-4 xl:gap-6  xsm:hidden sm:flex sm:gap-4`}
            >
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li>
                <div className="flex items-center ">
                  <h1>FEATURES</h1>
                  <FaChevronDown />
                </div>
              </li>

              <li>
                <Link to="/pakagedetails">PAGES</Link>
              </li>
              <li>
                <Link to="/country_destination">TOURS</Link>
              </li>
              <li>
                <Link>CARS</Link>
              </li>
              <li>
                <Link>HOTELS</Link>
              </li>
              <li>
                <Link>FLIGHTS</Link>
              </li>
            </ul>
          </div>
          {/* navsection wrapper  */}
        </div>
        {/* all the menu item that appers at the top  */}

        {/* search button on the right  */}
        <div
          className={`w-[20px]  text-white ${
            menuButtonClicked ? " absolute top-[30%] right-2" : "relative"
          }`}
        >
          <FaSearch
            className={`text-xl ${handleSearchClicked ? "hidden" : "block"}`}
            onClick={() => setHandleSerchClicked(!handleSearchClicked)}
          />
        </div>
        {/* search button on the right  */}

        {/* ........serch field which appers at the top.......  */}
        <div
          className={`fixed  flex justify-around shadow-xl shadow-[#466B85] z-[100] bg-[#344C68] ${
            handleSearchClicked
              ? "top-0 left-0 w-full min-h-[60px]"
              : "top-[99999px] left-[99999px] w-0 h-0"
          }`}
        >
          <button onClick={() => window.alert("NOT YET FUNCTIONAL")}>
            <FaSearch className="text-xl text-white" />
          </button>

          <input
            type="text"
            placeholder="Search Here"
            className="w-[90%] h-full rounded-xl bg-transparent outline-none text-white p-5"
          />

          <button>
            <ImCross
              className="text-lg text-white"
              onClick={() => setHandleSerchClicked(!handleSearchClicked)}
            />
          </button>
        </div>
        {/* ........serch field which appers at the top.......  */}

        {/* side nav bar for smaller device  */}
        <div
          className={` h-[800px] absolute left-0 top-0 bg-white transition-w text-black ${
            menuButtonClicked ? "w-[300px] sm:hidden" : " w-0"
          }`}
        >
          <div className="relative w-full h-full">
            {/* button to close the nav section  */}
            <div
              className={` w-full absolute top-5 left-[80%] ${
                menuButtonClicked ? "sm:hidden" : "hidden"
              }`}
            >
              <h1
                className="text-xl h-[30px] w-[30px] rounded-full bg-black/20 flex justify-center items-center"
                onClick={() => setMenuButtonClicked(!menuButtonClicked)}
              >X </h1>
            </div>
            {/* button to close the nav section  */}

            <div
              className={`flex w-[100%]  ${
                menuButtonClicked ? " sm:hidden" : " hidden"
              }`}
            >
              <div className="w-full h-auto mt-16">
                <ul>
                  <li className=" w-full h-10 flex justify-center items-center border-[1px] border-gray-400 text-gray-700 hover:bg-orange-600 hover:text-white">
                    <Link to="/">HOME</Link>
                  </li>

                  <li className=" w-full h-10 flex justify-center items-center border-[1px] border-gray-400 text-gray-700 hover:bg-orange-600 hover:text-white">
                    <div className="flex items-center ">
                      <h1>FEATURES</h1>
                      <FaChevronDown />
                    </div>
                  </li>

                  <li className=" w-full h-10 flex justify-center items-center border-[1px] border-gray-400 text-gray-700 hover:bg-orange-600 hover:text-white">
                    <Link to="/pakagedetails">PAGES</Link>
                  </li>

                  <li className=" w-full h-10 flex justify-center items-center border-[1px] border-gray-400 text-gray-700 hover:bg-orange-600 hover:text-white">
                    <Link to="/country_destination">TOURS</Link>
                  </li>

                  <li className=" w-full h-10 flex justify-center items-center border-[1px] border-gray-400 text-gray-700 hover:bg-orange-600 hover:text-white">
                    <Link>CARS</Link>
                  </li>

                  <li className=" w-full h-10 flex justify-center items-center border-[1px] border-gray-400 text-gray-700 hover:bg-orange-600 hover:text-white">
                    <Link>HOTELS</Link>
                  </li>

                  <li className=" w-full h-10 flex justify-center items-center border-[1px] border-gray-400 text-gray-700 hover:bg-orange-600 hover:text-white">
                    <Link>FLIGHTS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* side nav bar for smaller device  */}
      </div>
    </SectionWrapper>
  );
};

export default BaNavbar;
