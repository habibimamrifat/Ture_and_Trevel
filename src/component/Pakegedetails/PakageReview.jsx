import React, { useRef, useState } from "react";
import Ratting from "../Rating";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import { Autoplay, Pagination} from "swiper/modules";
import { Link } from "react-router-dom";

import reviewSectionDatabase from "./reviewDataset";

const PakageReview = () => {

 
  // slider section up for the review

  // the form that takes review
  const name = useRef("");
  const email = useRef("");
  const comment = useRef("");

  const handleFromDataChange = (event) => {
    const form = event.target;
    if (event.target.name === "name") {
      name.current = event.target.value;
    }
    if (event.target.name === "email") {
      email.current = event.target.value;
    }
    if (event.target.name === "comment") {
      comment.current = event.target.value;
    }
  };
  const manageSubmitReview = (event) => {
    console.log("submitting");
    event.preventDefault();
    const message = name.current + " " + email.current + " " + comment.current;
    alert(message);
  };
  // the form that takes review
  return (
    <div
      className="xsm:mt-[45px] xsm:mb-[70px] md:mt-[60px] md:mb-[95px]"
      id="reviews"
    >
      <div>
      <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          modules={[Autoplay, Pagination]}
          loop={true}

          className="mySwiper "
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {reviewSectionDatabase.map((review, index) => (
           <SwiperSlide key={index}>
              <div>
                <div className="flex gap-5 items-center">
                  <div className="xsm:w-[30px] xsm:h-[30px] lg:w-[55px] lg:h-[55px] rounded-full bg-[#FF3B00] text-white flex items-center justify-center">
                    <h1 className="xsm:text-[15px] md:text-[32px] font-normal">
                      4
                    </h1>
                  </div>

                  <h1 className="xsm:text-[30px] xsm:font-normal md:text-[50px] xl:text-[60px] font-semibold text-black">
                    Reviews {index+1}
                  </h1>
                </div>
                <div className="xsm:mt-[30px] lg:mt-[65px] bg-[#EBE7E7] w-full h-auto rounded-xl">
                  <div className="xsm:text-[15px] lg:text-[20px] font-normal m-2 xsm:p-[20px] lg:p-[35px]">
                    {review.detail}
                  </div>
                </div>
              </div>

              <div className="mt-[36px] flex xsm:flex-col xsm:gap-[15px] md:flex-row md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="xsm:w-[30px] xsm:h-[30px] lg:w-[56px] lg:h-[56px] rounded-full items-center justify-center">
                    <img
                      src={review.img}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>

                  <h1 className="text-[16px] font-normal">
                    Submitted by {review.reviewerName} on {review.date}
                  </h1>
                </div>

                <div className="flex xsm:flex-col sm:flex-row justify-around items-center gap-3">
                  <Ratting retting={2.5} />
                 <Link to={`/comments/${index}`}>
                 <button className="w-[81px] h-[24px] bg-[#F1EAEA] text-[15px] font-normal text-[#FF3B00] rounded-[5px]">
                    Reply
                  </button>
                  </Link>
                  <button className="w-[81px] h-[24px] bg-[#F1EAEA] text-[15px] font-normal text-[#FF3B00] rounded-[5px]">
                    Permalink
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-auto pb-5 bg-[#F1EAEA] mt-[36px]">
        <div className="xsm:mx-[10px] lg:mx-[56px]">
          <div className="flex xsm:flex-col xsm:gap-3 lg:flex-row lg:justify-between pt-[45px]">
            <h1 className="text-[20px] font-normal text-black">
              Write A Review
            </h1>

            <div className="flex xsm:flex-col xsm:gap-3 md:flex-row md:justify-between lg:gap-4">
              <h1 className="text-[20px] font-normal">Assigned rating</h1>
              <Ratting retting={3} />
            </div>
          </div>

          <form action="" onSubmit={manageSubmitReview}>
            <div className="flex xsm:flex-col xsm:gap-3 lg:flex-row lg:justify-between mt-[42px]">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white p-5 outline-none rounded-md xsm:w-full lg:w-[45%] h-[64px] text-[#BDB0B0] text-[20px] font-normal"
                name="name"
                onChange={handleFromDataChange}
              />
              <input
                name="email"
                type="text"
                placeholder="Your Email"
                className="bg-white p-5 outline-none rounded-md xsm:w-full lg:w-[45%] h-[64px] text-[#BDB0B0] text-[20px] font-normal"
                onChange={handleFromDataChange}
              />
            </div>

            <div className="mt-[28px]">
              <textarea
                name="comment"
                placeholder="Comment"
                id=""
                cols="30"
                rows="10"
                className="bg-white p-5 outline-none rounded-md w-full h-[208px] text-[#BDB0B0] text-[20px] font-normal"
                onChange={handleFromDataChange}
              ></textarea>
            </div>

            <div className="flex justify-between items-center mt-[28px]">
              <label
                for="file-upload"
                className="xsm:w-[45%] xsm:h-[40px] lg:w-[230px] lg:h-[62px] rounded-[10px] bg-[#2E2E2F] text-white xsm:text-[15px] lg:text-[20px] font-normal  flex justify-center items-center"
              >
                <input type="file" id="file-upload" className="hidden" />+ Add a
                new file
              </label>

              <button
                type="submit"
                className="xsm:w-[45%] xsm:h-[40px] lg:w-[230px] lg:h-[62px] rounded-[10px] bg-[#FF3B00] text-white xsm:text-[15px] lg:text-[20px] font-normal"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PakageReview;
