import React, { useEffect, useRef, useState } from "react";
import flag1 from "../assets/img/Ellipse 30.png";
import { FaAngleDown } from "react-icons/fa";
import SignUpPage from "./SignUpPageFinal";
import SignIn from "./SignInFinal";
import ForgetPassword from "./ForgetPassword";
import { FaSignInAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import SectionWrapper from "./wrappers/SectionWrapper";
import { Link } from "react-router-dom";


const BaMiniMenu = () => {
  let [setCountry, viewCuntryOption] = useState(false);
  let [destination, setDestination] = useState("BAN");
  let [flag, setFlag] = useState(flag1);

//  out side click event for country shiowing drop down  
  const containerRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      console.log("Clicked outside");
      viewCuntryOption(false);
    }
  };
  useEffect(() => {
    if (setCountry) {
      // console.log("Adding event listener");
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      // console.log("Removing event listener");
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [setCountry]);
 //  out side click event for country shiowing drop down 

  let [isSignupClosed, setIsSignUpClosed] = useState(null);

  let countryAndFlagArr = [
    {
      id: "c1",
      country: "Ban",
      flag: flag1,
    },
    {
      id: "c2",
      country: "ENG",
      flag: flag1,
    },
    {
      id: "c3",
      country: "CHI",
      flag: flag1,
    },
    {
      id: "c4",
      country: "ITAI",
      flag: flag1,
    },
  ];
  let InitialOptionCountry = countryAndFlagArr.filter(
    (countryandflag) => countryandflag.id != "c1"
  );
  let [ViewOptionCountry, setViewOPtionCountry] =
    useState(InitialOptionCountry);

  // function to handle currenct of the select box
  function handleCurency(currency) {
    console.log(currency);
  }

  //   function to handle country and country flag of the select box

  function setCountryAndFlag(id) {
    let CountryAndFlagSearch = countryAndFlagArr.find(
      (countryandflag) => countryandflag.id == id
    );
    setDestination((destination = CountryAndFlagSearch.country));
    setFlag((flag = CountryAndFlagSearch.flag));
    // console.log("the selected country and the destinaetion",flag, destination)
    let OptionCountry = countryAndFlagArr.filter(
      (countryandflag) => countryandflag.id != id
    );
    // console.log(OptionCountry);
    setViewOPtionCountry((ViewOptionCountry = OptionCountry));
    viewCuntryOption(!setCountry);
  }

  // this is for sign up function
 const setSignupPeramiter =(signupparamiter)=>{
  console.log("signup paramiter", signupparamiter)
  
  if(isSignupClosed === signupparamiter)
  {
    
    setIsSignUpClosed(null)
    
  }
  else
  {
    console.log("not equal")
    setIsSignUpClosed(signupparamiter)
    
  }
 }

  return (
    <SectionWrapper>
    <div className=" pt-[5%] flex justify-between items-center ">
      <div className="text-white xsm:font-normal lg:font-bold text-base flex justify-center items-center xsm:pl-[20px] sm:pl-[150px] md:pl-[200px] lg:pl-[315px]">

        <div className="mr-4 " onClick={()=> alert("this feature is still not functional")}>
         <Link> <h1 className="text-[20px] font-bold">Support</h1></Link>
        </div>

   {/* curency section starts  */}
        <div className="flex ">
          <select
            name=""
            id=""
            className="bg-transparent border-none outline-none"
            onChange={(e) => handleCurency(e.target.value)}
          >
            <option value="EUR" className="text-black">
              EURO
            </option>
            <option value="GBP" className="text-black">
              GBP
            </option>
            <option value="RUB" className="text-black">
              RUB
            </option>
          </select>
        </div>
    {/* curency section ends  */}

    {/* set country and flag section starts */}
        <div className="relative" ref={containerRef} >
          <button className="flex justify-center items-center gap-2">
            <div
              className="flex justify-center items-center xsm:gap-1 lg:gap-5 "
              onClick={() => viewCuntryOption(!setCountry)}
            >
              <div className="h-14px w-15px rounded-full">
                <img
                  src={flag}
                  className="object-cover overflow-hidden"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-white">{destination}</h1>
                <FaAngleDown />
              </div>
            </div>
          </button>

          <div
            className={`${
              setCountry
                ? "block  text-black absolute right-1 top-5 h-[73px] w-[90px] bg-white rounded-md z-10"
                : "hidden"
            }`}
          >
            {ViewOptionCountry.map((option) => (
              <button
                className="flex justify-center items-center gap-5"
                id={option.id}
                onClick={(e) => setCountryAndFlag(e.currentTarget.id)}
                key={option.id}
              >
                <div className="h-14px w-15px rounded-full">
                  <img
                    src={option.flag}
                    className="object-cover overflow-hidden"
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center">
                  <h1 className=" text-[15px] font-normal">{option.country}</h1>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    {/* set country and flag section ends */}
    
      <div className="text-white xsm:font-normal lg:font-bold text-base flex gap-1 xsm:pr-[20px] sm:pr-[150px] md:pr-[200px] lg:pr-[108px]">

        <button onClick={() => setSignupPeramiter("Signup")}>
          
            <h1 className="xsm:hidden md:block">Sign Up</h1>
            <GiArchiveRegister className="xsm:block md:hidden" />
        </button>

        <h1>/</h1>

        <button onClick={() => setSignupPeramiter("Signin")}>
          <h1 className="xsm:hidden md:block">Sign In</h1>
          <FaSignInAlt className="xsm:block md:hidden" />
        </button>

        <div className={`absolute bg-white ease-in-out  ${ isSignupClosed === 'Signup' || isSignupClosed === "Signin" || isSignupClosed === "Forgetpassword" ? ' top-0 right-0 ' : 'delay-500 -top-[99999px] -right-[99999px]' } `}>


          <div
            className={`bg-white absolute right-0 shadow-md shadow-gray-400 z-[100] transition-min-height transition-min-w duration-1000 ${
              isSignupClosed === 'Signup' || isSignupClosed === "Signin" || isSignupClosed === "Forgetpassword" ? "xsm:min-w-[100vw] sm:min-w-[70vw] md:min-w-[60vw] min-h-max xl:min-h-[964px] xl:min-w-[550px] " : "min-w-0 min-h-0"
            }`}
          >

           <button className={`w-[50px] h-[50px] rounded-full flex justify-center items-center bg-black/20 absolute right-5 top-2 ${ isSignupClosed === 'Signup' || isSignupClosed === "Signin" || isSignupClosed === "Forgetpassword" ?' block':'hidden'} `} onClick={() => setSignupPeramiter(null)}>

                <h1 className="text-[12px]" >X</h1>
            </button>

            <div className={`mt-[80px] ms-[20px] me-[40px] transition-all duration-500 ease-in-out overflow-hidden ${isSignupClosed === 'Signup' || isSignupClosed === "Signin" || isSignupClosed === "Forgetpassword" ?'max-h-full max-w-full':'max-h-0 max-w-0'}`}>
            
            {
               isSignupClosed === "Signup" ? <SignUpPage isSignupClosed={isSignupClosed} setIsSignUpClosed={setIsSignUpClosed }/> : isSignupClosed === "Signin" ? <SignIn isSignupClosed={isSignupClosed} setIsSignUpClosed={setIsSignUpClosed } /> : isSignupClosed === "Forgetpassword" ? <ForgetPassword isSignupClosed={isSignupClosed} setIsSignUpClosed={setIsSignUpClosed } /> :null
            }
              
            </div>


          </div>


        </div>
      </div>

    </div>
    </SectionWrapper>
  );
};

export default BaMiniMenu;
