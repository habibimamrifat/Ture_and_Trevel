import React from "react";
import Accordian from "./Accordian";

const OverView = () => {
  return (
    <div className="mt-[113px]">
      <div>
        <h1 className="font-semibold text-[48px] text-black">Overview</h1>
        <p className="mt-[45px] text-[20px] font-normal">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was and I will give you a complete account
          of the system, and expound the actual teachings of the great explorer
          of the truth, the master-builder of human happiness. No one rejects,
          dislikes, or avoids pleasure itself, because it is pleasure, but
          because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful.
        </p>
        <div className="mt-[76px]">

            <Accordian/>
            
          </div>
        </div>
      
    </div>
  );
};

export default OverView;
