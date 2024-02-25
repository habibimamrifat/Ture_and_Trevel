import React from "react";
import boom from "../assets/img/boom.png";
import pinaple from "../assets/img/pinaple.png";
import spalash from "../assets/img/spalash.png";
import hatMan from "../assets/img/hatMan.png";
import capMan from "../assets/img/capMan.png";

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
    <div className="w-[1440px]">
      <div className="mx-[103px] mb-[80px] ">
        <h1 className="font-medium text-[48px] text-black">
          Recent Blog Posts
        </h1>
        <h1 className="text-xl font-normal text-[#645E5E]">
          Latin literature from 45 BC, making it over 2000 years old
        </h1>
        <div className="flex justify-around mt-[41px] max-w-[1440px]">
          {recentBlogPostDataset.map((blogPost,index) => (
            <div className="w-[382px]" key={index}>
              
              <div className="w-[382px] h-[252px]">

                <div className="relative">
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

              <div className="mt-[33px] text-start">
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
    </div>
  );
};

export default RecentBlogPOst;
