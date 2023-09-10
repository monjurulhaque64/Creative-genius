import React from "react";
import ClientGallery from "./ClientGallery";
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
import SamsulHuqeKhanSchoolCollege from "../../../assets/Clients/SamsulHuqeKhanSchool&College.jpeg";
import SouthestUniversity from "../../../assets/Clients/SouthestUniversity.png";



const images = [
  { url: KhulnaUniversity },
  { url: BADC },
  { url: Asiyabari },
  { url: GachuaAdarshaHighSchool },
  { url: GovtMohammadpurModelSchoolCollege },
  { url: ItFutureInstitute },
  { url: JatuyaKhatadiMukhi },
  { url: MirpurGirlsIdealLaboratoryInstitute },
  { url: MirpurPolytechnicInstitute },
  { url: OhabIdealPublicHighSchool },
  { url: RUD },
  { url: SamsulHuqeKhanSchoolCollege },
  { url: SouthestUniversity },
];

const OurClients = () => {
  return (
    <div className="container mx-auto mt-[155px]">
      <div className="mx-auto text-center h-[200px]">
        <h1 className="heading font-[600] text-[48px] text-white">
          Our Client
        </h1>
        <p className="pragraph w-[650px] text-center mx-auto font-[400] text-[18px] text-white mt-[17px]">
          Work process can be a great way to learn more about how the company’s
          employees create value for their projects.
        </p>
      </div>
      <div className="mt-[146px]">
        <ClientGallery images={images} />
      </div>
    </div>
  );
};

export default OurClients;
