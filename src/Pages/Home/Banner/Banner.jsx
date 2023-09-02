import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";
import iphone12Dark from "../../../assets/Images/iPhone12FontView.png";
import iphone12Lignt from "../../../assets/Images/iPhone12FontWhiteView.png.png";
import googleBtn from "../../../assets/Images/google.png";
import appStoreBtn from "../../../assets/Images/appStore.png";
import slider3ImgChart from "../../../assets/Images/Group24.png";
import slider3ImgLogo from "../../../assets/Images/Group25.png";

// import required modules
import { Autoplay } from "swiper/modules";
import { FaGooglePlay } from "react-icons/fa";
import ClientSpring from "../OurServices/ClientSpring/ClientSpring";

// Todo: Circle issue not fixed yet, real content

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
        <div className="circle bg-[#FF9324] left-[calc(-80px)] top-[calc(280px)] transform absolute ml-[1150px] "></div>
          <div className="w-full h-[800px] bannerimg2 relative">
          <div className="centeredDiv"></div>
            <div className="flex justify-between">
              <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[350px] lg:pt-[250px] pt-[50px] ">
                <h1 className="lg:text-[64px] text-[34px] font-[Saira Stencil One] font-bold text-white">
                  Learning <span className="titleBg">Campus</span>
                </h1>
                <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                The future of digital learning technology in teaching and learning.
                </p>
                <button className="btn btn-info bg-[#3C4FF8] mt-[46px] lg:mr-[100px] text-white">
                  Download App{" "}
                  <span>
                    <FaGooglePlay></FaGooglePlay>
                  </span>
                </button>
              </div>
              <div className="flex lg:mr-[250px] mr-[100px] lg:pt-[192px] pt-[102px] lg:gap-12 ">
                <img src={iphone12Dark} alt="" />
                <img src={iphone12Lignt} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[800px] bannerimg3 relative">
            <div className="flex justify-between">
              <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[350px] lg:pt-[250px] pt-[50px] ">
                <h1 className="lg:text-[64px] text-[34px] font-[Saira Stencil One] font-bold text-white">
                  Learning Camp<span className="titleBgCircle">us</span>
                </h1>
                <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                The future academic platform for teaching and learning
                </p>
                <div className="flex">
                  <a className="w-[153px] h-[41px]" href="">
                    <img src={googleBtn} alt="" />
                  </a>
                  <a className="w-[153px] h-[41px]" href="">
                    <img src={appStoreBtn} alt="" />
                  </a>
                </div>
              </div>
              <div className="flex lg:mr-[250px] mr-[100px] lg:pt-[192px] pt-[102px]">
                <img className="absolute -ml-44" src={slider3ImgChart} alt="" />
                <img className="relative mb-36" src={slider3ImgLogo} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[800px] bannerimg4 relative">
            <div className="flex justify-between">
              <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[350px] lg:pt-[250px] pt-[50px] ">
                <h1 className="lg:text-[64px] text-[34px] font-[Saira Stencil One] font-bold text-white">
                  Learning Campus
                </h1>
                <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                The future of digital academic platforms.
                </p>
                <button className="btn btn-info bg-[#3C4FF8] mt-[46px] lg:mr-[100px] text-white">
                  Download App{" "}
                  <span>
                    <FaGooglePlay></FaGooglePlay>
                  </span>
                </button>
              </div>
              <div className="iphone12DarkBackground top-[110px] lg:mr-[250px] mr-[100px] lg:pt-[192px] pt-[102px] relative">
                <img
                  className="absolute left-[160px] top-[110px] w-[180px] h-[360.81px]"
                  src={iphone12Dark}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-[18%] top-[837px]">
        <ClientSpring></ClientSpring>
      </div>
    </div>
  );
};

export default Banner;
