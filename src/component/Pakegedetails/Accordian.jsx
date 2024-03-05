import React, { useState } from "react";
import e1 from "../../assets/img/Ellipse 28.png";
import e2 from "../../assets/img/Ellipse 27.png";
import e3 from "../../assets/img/Ellipse 25.png";
import i1 from "../../assets/img/due.png"
import i2 from "../../assets/img/bluewave.png"
import i3 from "../../assets/img/grass.png"

const Accordian = () => {
  const accordianDataset = [
    {
      id: "0",
      titleImg: e1,
      titleWriting: "Transfer to hotel",
      imgsideWriting:'Day 1',
      
      accordianContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        imges:[i1, i2,i3]
    },
    {
      id: "1",
      titleImg: e2,
      imgsideWriting:'Day  2 - 4',
      titleWriting: "Transfer to hotel",
      
      accordianContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        imges:[i1, i2,i3]
    },
    {
      id: "2x",
      titleImg: e3,
      imgsideWriting:"Day 5",
      titleWriting: "Transfer to hotel",
      accordianContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        imges:[i1, i2,i3]
    },
  ];

  const [isAccordianClosed, setIsAccordianClosed] = useState(null);
  const setTheAccordianToOpen = (id) => {
    if (isAccordianClosed === id) {
      return setIsAccordianClosed(null);
    } else setIsAccordianClosed(id);
  };

  return (
    <div className="mb-[58px]">
      {accordianDataset.map((accordian, index) => (
        <div className="mt-[15px]" key={accordian.id}>
          <div
            className=" flex justify-between items-center"
            onClick={() => setTheAccordianToOpen(accordian.id)}
          >
           <div className="flex items-center gap-3">
            <div className="flex justify-center items-center h-[47px] w-[47px] rounded-full ">
                <img
                  src={accordian.titleImg}
                  alt=""
                  className="object-cover h-[100%] w-[100%]"
                />
              </div>
              <h1 className="font-medium text-[25px]">{accordian.imgsideWriting}</h1>
           </div>

            <div className="font-medium text-[25px]">
              <h1>{accordian.titleWriting}</h1>
            </div>

            <div>
              {isAccordianClosed === null ? (
                <div className="h-[44px] w-[44px] rounded-full bg-[#D9D9D9] flex justify-center items-center text-2xl font-semibold">
                  +
                </div>
              ) : (
                <div className="h-[44px] w-[44px] rounded-full bg-[#D9D9D9] flex justify-center items-center text-2xl font-semibold">
                  -
                </div>
              )}
            </div>
          </div>
 <hr />
          <div
            className={`w-full overflow-hidden transition-max-height duration-1000 ease-in-out ${
              isAccordianClosed === accordian.id ? "max-h-[1000px]" : " max-h-0"
            }`}
          >
            <div className="mt-[15px]">
             {accordian.accordianContent}
            </div>
            <div className="mt-[45px] w-full flex xsm:flex-wrap lg:flex-nowrap justify-around items-center">
              {
                accordian.imges.map((accordianImg)=>(
                  <img src={accordianImg} alt="" srcset="" className="w-[260px]" />
                ))
              }

            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
