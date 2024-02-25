import React, { useState } from "react";

const Accordian = () => {
  const [isAccordianClosed, setIsAccordianClosed] = useState(false);
  console.log(isAccordianClosed);
  const setTheAccordian=(id)=>
  {
    console.log(id);
    setIsAccordianClosed(!isAccordianClosed)
    const p= document.getElementById(id)
    console.log(p.classList);
  }
  return (
    <div>
      <div className="relative">

        <div className=" flex justify-between items-center"  onClick={()=>setTheAccordian(accor14)}>
          <div className="h-[47px] w-[47px] rounded-full bg-blue-400 flex justify center items-center">
            <img src="" alt="" />
          </div>

          <div className="font-medium text-[25px]">
            <h1>Transfer to hotel</h1>
          </div>

          <div>
            {isAccordianClosed ? (
                <div
               
                className="h-[44px] w-[44px] rounded-full bg-[#D9D9D9] flex justify-center items-center text-2xl font-semibold"
              >
                +
              </div>
             
            ) : (
              
               <div
               
               className="h-[44px] w-[44px] rounded-full bg-[#D9D9D9] flex justify-center items-center text-2xl font-semibold"
             >
               -
             </div>
            )}
          </div>
        </div>

        <div className={` hidden w-full overflow-hidden transition-max-height duration-1000 ${
          isAccordianClosed ? "max-h-0" : "max-h-96" 
        }`} id="accor14" >

              <div>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque enim quod consequatur voluptates quibusdam eveniet? Animi illum, in soluta minima molestias labore hic ipsa iure debitis ratione quae, velit quidem veritatis sunt cupiditate culpa porro excepturi! Quasi, nesciunt iusto iste harum facere sunt neque, minima provident nobis, quod laudantium delectus fuga omnis adipisci ut quaerat! Nemo repellat quod ullam ratione beatae reprehenderit velit, rem, quae accusantium dignissimos fugit aperiam corrupti accusamus rerum quis provident similique maiores. Odit a sit similique voluptatibus nihil excepturi dignissimos nobis suscipit? Quam expedita corrupti eaque quidem minus debitis laboriosam cupiditate error saepe incidunt. Eum, quas aliquid sed magni molestiae iure veritatis vel odit, alias praesentium odio blanditiis. Adipisci quia esse laboriosam? Laborum eius laudantium, in accusantium doloribus hic excepturi omnis nemo eligendi ab rem nesciunt. Possimus, cupiditate. Autem voluptatibus corrupti aut facilis natus? Sint debitis minus quia ab nostrum veritatis rem repellendus error, obcaecati quisquam omnis quo ratione nobis pariatur perferendis dolor possimus! Inventore, fugit similique nam aspernatur eligendi placeat in quidem recusandae, et, eveniet deleniti voluptas assumenda. Vel alias, a nobis velit ea illum voluptates! Reprehenderit veritatis culpa natus ipsum fuga ducimus delectus iste aperiam neque necessitatibus? Soluta pariatur error, quam consequuntur, consequatur explicabo commodi dicta assumenda quia ad laboriosam quidem tempora beatae facilis. Dicta corporis laudantium totam, odit officiis non nemo sit ea deserunt sapiente natus velit libero saepe inventore voluptatibus laborum aut quo praesentium quia dolores mollitia ut quam deleniti officia? Ipsam, ipsa recusandae optio facere numquam cum nihil! Eum debitis explicabo saepe molestias ad nesciunt nulla. Laborum aperiam, harum debitis aspernatur aliquid blanditiis numquam, atque ipsam voluptatibus id enim? Quis exercitationem mollitia aperiam, harum nobis veniam neque, magni ipsam unde laborum autem repellat omnis! Repudiandae iure maxime voluptas dignissimos, sequi facere consequatur sit ipsa aspernatur fugit rerum consectetur voluptates unde perspiciatis?
              </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
