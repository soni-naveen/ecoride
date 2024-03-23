import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Card() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#2a6171",
          "--swiper-pagination-color": "#2a6171",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[350px] pt-10"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white flex flex-col justify-between shadow-md rounded-xl w-[450px] h-[250px] p-9">
              <div className="disc">
                <h1>
                  "Using Ecoride has saved me both time and money. The
                  convenience of carpooling with like-minded individuals has
                  made my commute enjoyable. Great initiative!"
                </h1>
              </div>
              <div className="author">
                <h2 className="font-bold text-sm">Raghav Sharma</h2>
                <p className="text-xs">EcoRide User</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white flex flex-col justify-between shadow-md rounded-xl w-[450px] h-[250px] p-9">
              <div className="disc">
                <h1>
                  "I love the concept of Ecoride and how it promotes
                  environmentally friendly transportation options. The app is
                  intuitive, and the drivers I've ridden with have been
                  courteous and punctual. 5 stars!"
                </h1>
              </div>
              <div className="author">
                <h2 className="font-bold text-sm">Amrit Singh</h2>
                <p className="text-xs">EcoRide User</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white flex flex-col justify-between shadow-md rounded-xl w-[450px] h-[250px] p-9">
              <div className="disc">
                <h1>
                  "Ecoride is not just a carpooling app; it's a community. I've
                  met some fantastic people through carpooling, and I appreciate
                  the effort Ecoride puts into fostering a sense of camaraderie
                  among users."
                </h1>
              </div>
              <div className="author">
                <h2 className="font-bold text-sm">Akshay Garg</h2>
                <p className="text-xs">EcoRide User</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white flex flex-col justify-between shadow-md rounded-xl w-[450px] h-[250px] p-9">
              <div className="disc">
                <h1>
                  "I've been using Ecoride for a few months now, and I'm
                  impressed by how seamless the experience has been. The app
                  matches me with compatible drivers and passengers
                  effortlessly, making my commute stress-free."
                </h1>
              </div>
              <div className="author">
                <h2 className="font-bold text-sm">Shraddha Arora</h2>
                <p className="text-xs">EcoRide User</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
