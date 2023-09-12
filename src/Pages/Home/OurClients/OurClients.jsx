import React from "react";
import KhulnaUniversity from "../../../assets/Clients/KhulnaUniversity.png";
import BADC from "../../../assets/Clients/BADC.png";
import Asiyabari from "../../../assets/Clients/asiyabari.png";
import GachuaAdarshaHighSchool from "../../../assets/Clients/GachuaAdarshaHighSchool.png";
import GovtMohammadpurModelSchoolCollege from "../../../assets/Clients/Govt.MohammadpurModelSchool&College.png";
import ItFutureInstitute from "../../../assets/Clients/ItFutureInstitute.png";
import JatuyaKhatadiMukhi from "../../../assets/Clients/JatuyaKhatadiMukhi.png";
import MirpurGirlsIdealLaboratoryInstitute from "../../../assets/Clients/MirpurGirlsIdealLaboratoryInstitute.png";
import MirpurPolytechnicInstitute from "../../../assets/Clients/MirpurPolytechnicInstitute.png";
import OhabIdealPublicHighSchool from "../../../assets/Clients/OhabIdealPublicHighSchool.png";
import RUD from "../../../assets/Clients/RUD.png";
import SamsulHuqeKhanSchoolCollege from "../../../assets/Clients/SamsulHuqeKhanSchool&College.png";
import SouthestUniversity from "../../../assets/Clients/SouthestUniversity.png";
import "./OurClient.css";

// const images = [
//   { url: KhulnaUniversity },
//   { url: BADC },
//   { url: Asiyabari },
//   { url: GachuaAdarshaHighSchool },
//   { url: GovtMohammadpurModelSchoolCollege },
//   { url: ItFutureInstitute },
//   { url: JatuyaKhatadiMukhi },
//   { url: MirpurGirlsIdealLaboratoryInstitute },
//   { url: MirpurPolytechnicInstitute },
//   { url: OhabIdealPublicHighSchool },
//   { url: RUD },
//   { url: SamsulHuqeKhanSchoolCollege },
//   { url: SouthestUniversity },
// ];

const OurClients = () => {
  return (
    <div className="container mx-auto mt-16 md:mt-[155px]">
      <div className="mx-auto text-center h-[200px]">
        <h1 className="heading font-[600] text-[38px] md:text-[48px] text-white">
          Our Client
        </h1>
        <p className="heading w-[300px] md:w-[650px] text-center mx-auto font-[400] text-[16px] text-white mt-[17px]">
          Work process can be a great way to learn more about how the company’s
          employees create value for their projects.
        </p>
      </div>
      <div className="mt-10 md:mt-[146px]">
        <div className="hexagon-gallery">
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={KhulnaUniversity}
                  alt=''
                  className="hexagon-image h-[120px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={BADC}
                  alt=''
                  className="hexagon-image flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={Asiyabari}
                  alt=''
                  className="hexagon-image h-[130px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={GachuaAdarshaHighSchool}
                  alt=''
                  className="hexagon-image h-[150px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={GovtMohammadpurModelSchoolCollege}
                  alt=''
                  className="hexagon-image h-[130px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={ItFutureInstitute}
                  alt=''
                  className="hexagon-image h-[130px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={JatuyaKhatadiMukhi}
                  alt=''
                  className="hexagon-image h-[150px] w-[150px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={MirpurGirlsIdealLaboratoryInstitute}
                  alt=''
                  className="hexagon-image h-[130px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={MirpurPolytechnicInstitute}
                  alt=''
                  className="hexagon-image h-[130px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={OhabIdealPublicHighSchool}
                  alt=''
                  className="hexagon-image h-[130px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={RUD}
                  alt=''
                  className="hexagon-image h-[130px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={SamsulHuqeKhanSchoolCollege}
                  alt=''
                  className="hexagon-image h-[120px] flex justify-center align-center"
                />
              </div>
            </div>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img
                  src={SouthestUniversity}
                  alt=''
                  className="hexagon-image h-[130px] flex justify-center align-center"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
