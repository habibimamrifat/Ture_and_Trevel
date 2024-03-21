import React from "react";
import { useParams } from "react-router-dom";
import SectionWrapper from "../wrappers/SectionWrapper";
import reviewSectionDatabase from "./reviewDataset";

const Comment = () => {
  const indexC = useParams();
  const comment = reviewSectionDatabase.find(
    (reviewSwction, index) => index == indexC.index
  );
  console.log(comment);

  return (
   
      <div className="mx-[5%] max-h-screen bg-black flex flex-col ">
            <div>
            <div className="bg-[#EBE7E7] w-full h-auto rounded-xl">
            <div className="xsm:text-[15px] lg:text-[20px] font-normal xsm:p-[20px] lg:p-[35px]">
                {comment.detail}
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="xsm:w-[30px] xsm:h-[30px] lg:w-[56px] lg:h-[56px] rounded-full items-center justify-center">
                <img
                src={comment.img}
                alt=""
                className="object-cover h-full w-full"
                />
            </div>

            <h1 className="text-[16px] font-normal">
                Submitted by {comment.reviewerName} on {comment.date}
            </h1>
            </div>
            </div>
            
            <div className="bg-slate-400 flex-1 overflow-scroll">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui recusandae ipsum alias quae voluptatum architecto, ullam modi soluta, sint exercitationem fuga? Earum culpa tenetur vero vel molestiae ipsam consectetur ratione amet, enim illo totam iste esse minima, asperiores omnis magni quidem atque temporibus harum aliquam laborum quae quod delectus! Quod odit explicabo officiis ipsum obcaecati totam voluptatem ab similique aliquid, animi illum unde libero maiores quas hic quia itaque tenetur molestiae! Quae eius excepturi rerum aspernatur perspiciatis dolores nostrum quis placeat, deserunt vitae eveniet alias sequi possimus nam a aut dignissimos dicta molestias temporibus numquam hic unde laboriosam voluptatem quos? Sunt distinctio totam blanditiis neque illo. Excepturi soluta impedit doloremque id repellendus, hic amet quos nam officiis quia recusandae sit omnis voluptatum ipsa! Temporibus, cupiditate. Maxime similique quas non sequi dicta accusamus molestiae in, laborum et velit, magnam ea ullam fuga voluptatum exercitationem nobis sapiente aliquid odit deleniti explicabo cupiditate veniam. Porro eos, laboriosam rerum ab quaerat facilis veniam nostrum vero maiores adipisci! Illum nostrum rem eius, provident quasi veritatis. Maiores culpa iure eligendi similique sit id neque, eos facere a dolor consequuntur repudiandae tempora aliquid, vitae odit veritatis quibusdam. Hic, voluptas repudiandae, sit reprehenderit, obcaecati fugit sed iste assumenda iusto maxime perferendis. Magnam illum, delectus suscipit aliquid voluptatum, doloremque ea sequi minima eius blanditiis recusandae esse officia libero. Deleniti cumque possimus earum quidem in ratione fugiat dolor, quia libero pariatur eius ipsam saepe repellendus dignissimos reprehenderit delectus laboriosam sapiente praesentium iste ut voluptas numquam neque? Hic, iure laborum. Voluptatum quidem totam sint voluptates et ipsam ad facilis ullam unde omnis? Ullam id, alias praesentium fuga provident porro nam ex autem voluptatibus exercitationem vero sequi recusandae odio est consequuntur. Obcaecati dicta, culpa ex enim nisi, rem consequuntur quibusdam, asperiores vel delectus ratione nulla tempora praesentium labore fugiat provident eum tempore architecto dolorum voluptatibus accusamus consectetur ducimus! Dignissimos esse tempora minima. Nostrum nesciunt sed iusto, ab quo labore corporis voluptates ad nemo, recusandae molestias exercitationem. Corrupti nesciunt cum aut accusamus totam quod nulla reprehenderit ducimus distinctio? Voluptas iure accusamus minima similique, culpa debitis delectus at cupiditate, dolor, quam consectetur itaque corporis vel est molestias voluptate quisquam? Nulla, nisi voluptate quis, ad aspernatur illo impedit veritatis, saepe eum expedita nesciunt recusandae quam totam accusamus minus? Amet fugiat aut ad vero facere labore voluptatem similique, at eligendi! Dolore quod cumque distinctio dicta laborum, ullam sed praesentium nam odit accusamus? Repellat atque libero harum odio, eius esse repudiandae totam amet et rerum tempore exercitationem vitae autem, reprehenderit laborum cupiditate cum mollitia? Dicta atque accusantium rem quis minima assumenda quo repellat est modi? Asperiores accusantium accusamus at hic odit consequatur architecto similique, dignissimos, ut ipsam unde qui alias explicabo assumenda a optio ex debitis sunt aut, iure pariatur dolorem rem quam. Voluptate, repellendus. Sit facilis nihil eius nemo porro distinctio fuga sunt minus incidunt optio corporis molestias consequuntur maiores ducimus, inventore doloremque, velit alias ab molestiae. Debitis aliquid dignissimos obcaecati, quae quisquam laborum repellendus ducimus eius, neque cum beatae, fuga sit unde deserunt nemo.
            </div>
      </div>
   
  );
};

export default Comment;
