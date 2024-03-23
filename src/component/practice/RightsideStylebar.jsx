import React, { useState } from "react";

const RightsideStylebar = () => {
    const [menubuttonClicked,setManuButtonClicked]=useState(false)
    
  const sideBarNavigation = [
    {
      name: "photo",
      link: "#Photograpgs",
    },
    {
      name: "overView",
      link: "#overView",
    },
    {
      name: "Included",
      link: "#Included",
    },
    {
      name: "Location",
      link: "#Location",
    },
    {
      name: "Stories",
      link: "#stories",
    },
    {
      name: "Reviews",
      link: "#reviews",
    },
    {
      name: "Reviews",
      link: "#reviews",
    },
  ];
 const manubarLength = sideBarNavigation.length;
 const degree =360/manubarLength; 
 console.log(manubarLength ,degree)

  return (
    <div className="w-[200px] h-[200px] rounded-full bg-red-600 border-2 border-blue-400 flex justify-center items-center relative   ">

      <div className={`h-[50px] w-[50px] rounded-full bg-yellow-400 flex justify-center items-center absolute z-50  ${menubuttonClicked ? "rotate-[360deg] duration-1000" :"rotate-0 duration-1000" }`} onClick={()=>setManuButtonClicked(!menubuttonClicked)}>
      X
      </div>


      {
        sideBarNavigation.map((manubar,index)=>
        (
            <li  className={`absolute list-none bg-blue-400  h-[50px] w-[50px] rounded-full  flex justify-center items-center left-0  ${menubuttonClicked ? ``:``}`}

           

            key={index}>
              <a href={menubar.link}>
                <h1>{manubar.name}</h1>
              </a>
            </li>
        ))
      }

      

    </div>
  );
};

export default RightsideStylebar;
