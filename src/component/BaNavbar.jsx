import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logo-malekairinternational 1 (1).png";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";
import SectionWrapper from "./wrappers/SectionWrapper";
import SideNavigation from "./SideNavigation";
import Searchfield from "./Searchfield";
const BaNavbar = () => {
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);
  // console.log(menuButtonClicked);
  const [handleSearchClicked, setHandleSerchClicked] = useState(false);
  // console.log("search", handleSearchClicked);
 

  // feature section is in here ...
  const [feathureSectionOpen, setfeathureSectionOpen]= useState(false);
  const selectedFeature = useRef(null);

  const handleFeacher =(id)=>{
    selectedFeature.current=id;
    // console.log(selectedFeature.current);
    let alertMessage= selectedFeature.current + " is being selected"
    alert(alertMessage)

    if(selectedFeature)
    {
      setfeathureSectionOpen(!feathureSectionOpen);
    }
  }

  // outside button click down here......
 const featureSectionDiv = useRef(null)
//  console.log(featureSectionDiv.current);
const handleOutsideClick =(event)=>{
if(featureSectionDiv.current && !featureSectionDiv.current.contains(event.target))
{
  // console.log("out Side click")
  setfeathureSectionOpen(!feathureSectionOpen)
}

}

useEffect(()=>{
  if(feathureSectionOpen)
  {
    window.addEventListener("click", handleOutsideClick)
  }

  return ()=>
  {
    window.removeEventListener("click", handleOutsideClick)
  }
})
 // outside button click up here......
// feature section is up here ... 

  return (
    <SectionWrapper>
      <div className="xsm:mt-[3%] lg:mt-[1%] flex justify-center items-center mx-[5%] ">
        {/* all the menu item that appers at the top  */}
        <div className="flex justify-around items-center w-full">
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
            <ul
              className={`flex md:gap-3 lg:gap-4 xl:gap-6  xsm:hidden sm:flex sm:gap-4`}
            >
              <li>
                <Link to="/">HOME</Link>
              </li>

              {/* .....the feature of the nav bar ...... */}
              <li className="relative hover:cursor-pointer" ref={featureSectionDiv}>

                <div className="flex items-center " onClick={()=>setfeathureSectionOpen(!feathureSectionOpen)} >
                  <h1>FEATURES</h1>
                  <FaChevronDown className={`${feathureSectionOpen ? "rotate-180 duration-500":"rotate-0 duration-500"}`} />
                </div>

                <div className={`absolute bg-white h-auto top-6 text-black w-full flex justify-center rounded-lg translate-max-h ${feathureSectionOpen ? "max-h-44 duration-500 overflow-hidden": "max-h-0 duration-500 overflow-hidden"}`}>
                    <ul className="mt-2">
                      <li onClick={()=>handleFeacher("f1")}>Feature - 1</li>
                      <li onClick={()=>handleFeacher("f2")}>Feature - 2</li>
                      <li onClick={()=>handleFeacher("f3")}>Feature - 3</li>
                    </ul>
                </div>

                
              </li>
              {/* .....the feature of the nav bar ...... */}

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
          className={`w-[20px]  text-white`}
        >
          <FaSearch
            className={`text-xl ${handleSearchClicked ? "hidden" : "block"}`}
            onClick={() => setHandleSerchClicked(!handleSearchClicked)}
          />
        </div>
        {/* search button on the right  */}



        {/* ........serch field which appers at the top.......  */}
        <Searchfield
        handleSearchClicked={handleSearchClicked}
        setHandleSerchClicked={setHandleSerchClicked}
        />
        {/* ........serch field which appers at the top.......  */}

        

        {/* side nav bar for smaller device  */}
        <SideNavigation
        menuButtonClicked={menuButtonClicked}
        setMenuButtonClicked={setMenuButtonClicked}/>
        {/* side nav bar for smaller device  */}
      </div>
    </SectionWrapper>
  );
};

export default BaNavbar;
