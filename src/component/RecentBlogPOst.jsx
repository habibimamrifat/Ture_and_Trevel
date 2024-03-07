import React from "react";
import boom from "../assets/img/boom.png";
import pinaple from "../assets/img/pinaple.png";
import spalash from "../assets/img/spalash.png";
import hatMan from "../assets/img/hatMan.png";
import capMan from "../assets/img/capMan.png";
import SectionWrapper from "./wrappers/SectionWrapper";

const RecentBlogPOst = () => {
  const recentBlogPostDataset = [
    {
      blogImg: boom,
      blogerName:"",
      BlogDEtail:
        "Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text",
      blogerPicture: capMan,
      buttonNavigatin:
        "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
        postDate:"june 31th",
        authority:"Admin"
    },
    {
      blogImg: pinaple,
      BlogDEtail:
        "Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text",
      blogerPicture: hatMan,
      buttonNavigatin: "https://en.wikipedia.org/wiki/Pineapple",
      postDate:"june 31th",
        authority:"Admin"
    },
    {
      blogImg: spalash,
      BlogDEtail:
        "Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text",
      blogerPicture: capMan,
      buttonNavigatin: "https://en.wikipedia.org/wiki/Color",
      postDate:"june 31th",
        authority:"Admin"
    },
  ];
  return (
    <SectionWrapper>
      <div className="ms-[5%] my-[5%] lg:mb-[80px]">

        <h1 className=" text-black text-[30px] lg:font-medium lg:text-[48px]">
          Recent Blog Posts
        </h1>
        <h1 className="text-base font-normal text-[#645E5E] lg:text-xl">
          Latin literature from 45 BC, making it over 2000 years old
        </h1>

        <div className="mt-[41px]  gap-3 flex justify-center items-center xsm:flex-col xsm:items-center xsm:justify-center sm:flex-wrap sm:flex-row sm:justify-start lg:flex lg:flex-wrap ">

          {recentBlogPostDataset.map((blogPost,index) => (
            <div className="xsm:w-[90%] sm:w-[45%] lg:w-[382px]" key={index}>
              
              <div className=" w-full h-[252px] rounded-lg overflow-hidden">

                <div className="relative h-full w-full">
                  <img src={blogPost.blogImg} alt="blog Img unaviable" className="w-full h-full object-cover" />
                  <div className="absolute top-[27px] left-[18px] rounded-2xl overflow-hidden  ">
                  <a href={blogPost.buttonNavigatin}>
                    <button className="w-[166px] h-[47px] bg-[#FF3B00] text-white text-[24px] text-center">
                      Streem
                    </button>
                  </a>
                </div>
                </div>
                
              </div>

              <div className="xsm:mt-[5px] lg:mt-[33px] w-full text-start">
                <div className="flex items-center gap-[15px]">
                  <div className="w-[52px] h-[52px] rounded-full">
                    <img src={blogPost.blogerPicture} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-[#645E5E]">
                      <span>{blogPost.postDate}</span> by <span>{blogPost.authority}</span>
                    </h1>
                  </div>
                </div>
                <div className="mt-[22px] w-[273px] h-[90px]">
                  <p className="text-xl font-normal text-[#645E5E]">
                    Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy
                    text.
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      </SectionWrapper>
    
  );
};

export default RecentBlogPOst;
