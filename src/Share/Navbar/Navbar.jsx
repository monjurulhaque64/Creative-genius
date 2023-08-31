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
        <Link to={"/contact"}>Products</Link>
      </li>
      <li>
        <Link to={"/about"}>Pricing Table</Link>
      </li>
      <li>
        <Link to={"/contact"}>Client Says</Link>
      </li>
      <li>
        <Link to={"/about"}>Review</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact Us</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img
            className="w-[148px] h-[51px] ml-[100px] mt-[38px]"
            src={logo}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mt-[45px] text-white font-medium">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-info bg-[#3C4FF8] mt-[36px] mr-[100px] text-white">
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
