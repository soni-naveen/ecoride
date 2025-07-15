import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slidecard() {
  const data = [
    {
      message:
        "Using Ecoride has saved me both time and money. The convenience of carpooling with like-minded individuals has made my commute enjoyable. Great initiative!",
      name: "Arjun",
    },
    {
      message:
        "I love the concept of Ecoride how it promotes environmental friendly transportation options. The app is intuitive, and the drivers I've ridden with have been courteous & punctual.",
      name: "Vikram",
    },
    {
      message:
        "I'm impressed by how seamless the experience has been. The app matches me with compatible drivers and passengers effortlessly, making my commute stress-free.",
      name: "Shraddha",
    },
    {
      message:
        "Ecoride is not just a carpooling webapp, it's a community. I've met some fantastic people through carpooling & I appreciate ecoride's efforts to promote a sense of unity among its consumers.",
      name: "Akshay",
    },
  ];
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#2a6171",
          "--swiper-pagination-color": "#2a6171",
          "--swiper-navigation-size": "2rem",
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
        className="mySwiper pb-14 pt-10 flex items-center justify-center smxl:pt-7 smxl:pb-12"
      >
        {data.map((user, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <div className="bg-white flex flex-col justify-between shadow-md rounded-xl w-[450px] h-[250px] p-9 sm2xl:w-[200px] sm2xl:h-[220px] smxl:w-[240px] smxl:h-[200px] smxl:p-6 sm:w-[330px] sm:h-[180px] sm:p-7 md1:p-8 md1:h-[220px] md1:w-[400px]">
                <div className="disc">
                  <div className="sm:text-xs md1:text-sm">"{user.message}"</div>
                </div>
                <div className="author">
                  <h2 className="font-medium text-sm md:text-xs">
                    {user.name}
                  </h2>
                  <p className="text-[10px]">Ecoride User</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
