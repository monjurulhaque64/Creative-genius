import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";
import iphone12Dark from "../../../assets/Images/iPhone12FontView.png"
import iphone12Lignt from "../../../assets/Images/iPhone12FontWhiteView.png.png"

// import required modules
import { Autoplay } from "swiper/modules";
import { FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[800px]  bannerimg1">
            <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[350px] lg:pt-[200px] pt-[50px] ">
              <h1 className="text-[64px] font-[Saira Stencil One] font-bold text-white">
                Plan Your Day With Creative{" "}
                <span className="text-[#3C4FF8]">Campus</span>
              </h1>
              <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                Welcome to creative campus. At Creative Campus, we believe in
                using innovative approaches to help our clients. Our experienced
                professionals are dedicated to providing exceptional service
                according to your needs.
              </p>
              <button className="btn btn-info bg-[#3C4FF8] mt-[46px] lg:mr-[100px] text-white">
                Download App{" "}
                <span>
                  <FaGooglePlay></FaGooglePlay>
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[800px] bannerimg2 relative">
            <div className="flex justify-between">
              <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[350px] lg:pt-[200px] pt-[50px] ">
                <h1 className="text-[64px] font-[Saira Stencil One] font-bold text-white">
                  Learning Campus
                </h1>
                <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt Lorem.
                </p>
                <button className="btn btn-info bg-[#3C4FF8] mt-[46px] lg:mr-[100px] text-white">
                  Download App{" "}
                  <span>
                    <FaGooglePlay></FaGooglePlay>
                  </span>
                </button>
              </div>
              <div className="flex mr-[250px] pt-[192px] gap-12 relative ">
              <div className="circle bg-[#FF9324] left-[calc(-80px)] top-[calc(280px)] transform absolute "></div>
                <img src={iphone12Dark} alt="" />
                <img src={iphone12Lignt} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
