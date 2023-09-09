import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page_404 container mx-auto mt-[72px]">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center four_zero_four_bg font-[Poppins]">
                  404
                </h1>
              </div>

              <div className="contant_box_404">
                <h3 className=" font-bold text-black text-5xl font-[Poppins]">
                  Look like you're lost
                </h3>

                <p className=" font-[Poppins] text-black text-2xl">
                  The page you are looking for is not available!
                </p>

                <div className="flex justify-center items-center mb-12">
                  <Link to={"/"}>
                    <button className="btn btn-info bg-[#3C4FF8] hover:bg-[#3C4FF8] border-[#3C4FF8] mt-[36px] lg:mr-[100px] text-white">
                    Go to Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
