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
import ClientSpring from "../ClientSpring/ClientSpring";

// Todo: Circle issue not fixed yet, real content

const Banner = () => {
  return (
    <div className="container mx-auto">
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
              <h1 className="text-[32px] md:text-[64px] font-[Saira Stencil One] font-bold text-white">
                Plan Your Day With Creative{" "}
                <span className="text-[#3C4FF8]">Campus</span>
              </h1>
              <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                Welcome to creative campus. At Creative Campus, we believe in
                using innovative approaches to help our clients. Our experienced
                professionals are dedicated to providing exceptional service
                according to your needs.
              </p>
              <button className="btn download-app mt-[46px] lg:mr-[100px] text-white">
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
              <div className="lg:ml-[50px] ml-8  lg:w-[726px] w-[350px] lg:pt-[250px] pt-[50px] ">
                <h1 className="lg:text-[64px] text-[34px] font-[Saira Stencil One] font-bold text-white">
                  Learning <span className="titleBg">Campus</span>
                </h1>
                <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                  The future of digital learning technology in teaching and learning.
                </p>
                <button className="btn download-app mt-[46px] lg:mr-[100px] text-white">
                  Download App{" "}
                  <span>
                    <FaGooglePlay></FaGooglePlay>
                  </span>
                </button>
              </div>
              <div className="flex lg:mr-[150px] mr-[100px] lg:pt-[192px] pt-[102px] lg:gap-12 relative">
                <div className="absolute md:top-[18rem] md:-ml-[4.5rem]"><svg xmlns="http://www.w3.org/2000/svg" width="147" height="147" viewBox="0 0 147 147" fill="none">
                  <circle cx="73.5" cy="73.5" r="73.5" fill="#FF9324" />
                </svg></div>
                <img className="z-10" src={iphone12Dark} alt="" />
                <img src={iphone12Lignt} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[800px] bannerimg3 relative">
            <div className="md:flex md:justify-between">
              <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[350px] lg:pt-[250px] pt-[50px]">
                <div className="absolute svg-logo top-[17rem] right-[41rem] -z-[10] "><svg className="svg" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#4756DC" />
                </svg></div>
                <h1 className="lg:text-[64px] text-[34px] font-[Saira Stencil One] font-[700] text-white z-10 ">
                  Learning Campus
                </h1>
                <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                  The future academic platform for teaching and learning
                </p>
                <div className="flex  ">
                  <a className="w-[153px] h-[41px]" href="">
                    <img src={googleBtn} alt="" />
                  </a>
                  <a className="w-[153px] h-[41px]" href="">
                    <img src={appStoreBtn} alt="" />
                  </a>
                </div>
              </div>
             
              <div className="right-side mt-20">
                <div className="flex right-side-banner ">
                  <img className="relative md:left-[-16rem] salary-img" src={slider3ImgChart} alt="" />
                  <img className="absolute md:right-[2rem] md:top-[2rem] learning-img" src={slider3ImgLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full md:h-[800px] bannerimg4 relative">
            <div className="md:flex justify-between">
              <div className="absolute md:left-[15rem] md:top-[12rem] logo1"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.03576 0.0672327C7.52681 0.494388 7.03363 0.949755 6.55831 1.43331C-1.48205 9.61296 -1.36913 22.7619 6.81052 30.8022C14.9902 38.8426 28.1391 38.7297 36.1795 30.55C36.6548 30.0665 37.1016 29.5655 37.52 29.0493L8.03576 0.0672327Z" fill="#5A619D" />
              </svg></div>
              <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[350px] lg:pt-[250px] pt-[50px] ">
                <h1 className="lg:text-[64px] text-[34px] font-[Saira Stencil One] font-bold text-white">
                  Learning Campus
                </h1>
                <p className="font-[Poppins] text-[17px] text-white text-justify font-medium mt-2">
                  The future of digital academic platforms.
                </p>
                <button className="btn btn-info bg-[#ff0000] hover:bg-[#f35454] border-[#ff0000] mt-[46px] lg:mr-[100px] text-white">
                  Download App{" "}
                  <span>
                    <FaGooglePlay></FaGooglePlay>
                  </span>
                </button>
                <div className="absolute left-[33rem] logo2"> <svg xmlns="http://www.w3.org/2000/svg" width="39" height="45" viewBox="0 0 39 45" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0606259 39.6655C0.653591 40.1437 1.2748 40.5979 1.92379 41.0258C12.9025 48.2643 27.6705 45.2322 34.909 34.2535C42.1475 23.2748 39.1155 8.50678 28.1368 1.26827C27.4878 0.840386 26.8255 0.448387 26.1524 0.0917968L0.0606259 39.6655Z" fill="#FF9324" />
                </svg></div>
              </div>
              <div className="iphone12DarkBackground md:top-[110px] lg:mr-[50px] lg:pt-[192px] md:pt-[52px] relative">
                <div className="relative bg-logo top-[-6rem] "><svg xmlns="http://www.w3.org/2000/svg" width="468" height="468" viewBox="0 0 468 468" fill="none">
                  <g filter="url(#filter0_f_204_6072)">
                    <circle cx="234" cy="234" r="84" fill="#8DA6FF" />
                  </g>
                  <defs>
                    <filter id="filter0_f_204_6072" x="0" y="0" width="468" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_204_6072" />
                    </filter>
                  </defs>
                </svg></div>
                <img
                  className="absolute iphone12DarkBackground-img left-[160px] top-[110px] md:w-[180px] w-[100px] h-[200px] md:h-[360.81px] z-10"
                  src={iphone12Dark}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-x-0 mx-auto md:top-[837px]">
        {/* <ClientSpring></ClientSpring> */}
      </div>
    </div>
  );
};

export default Banner;
