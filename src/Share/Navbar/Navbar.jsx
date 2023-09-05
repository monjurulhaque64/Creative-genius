import React from "react";
import logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";

// todo: Mobile responsive logo + btn

const Navbar = () => {
  // Nav links
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About Us</Link>
      </li>
      <li>
        <Link to={"/products"}>Products</Link>
      </li>
      <li>
        <Link to={"/pricing"}>Pricing Table</Link>
      </li>
      <li>
        <Link to={"/client-says"}>Client Says</Link>
      </li>
      <li>
        <Link to={"/review"}>Review</Link>
      </li>
      <li>
        <Link to={"/contact-us"}>Contact Us</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost mt-[38px] lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm absolute dropdown-content mt-3 z-[1] p-2 text-black bg-gray-300 shadow font-bold rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img
            className=" w-[100px] lg:w-[148px] md:w-[120px]  lg:ml-[100px] mt-[38px]"
            src={logo}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mt-[45px] text-black font-bold">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-info w-[150px] lg:w-[199px] bg-[#ff0000] hover:bg-[#f35454] border-[#ff0000] mt-[36px] lg:mr-[100px] text-white font-[16px]">
            Download App{" "}
            <span>
              <FaGooglePlay></FaGooglePlay>
            </span>
          </button>
        </div>
        
      </div>
      <hr className="bg-[#424242]" />
    </div>
  );
};

export default Navbar;
