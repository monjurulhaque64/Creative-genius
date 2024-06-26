import React from "react";
import logo from "../../assets/Logo - white.png";
import { Link } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";
import './Navbar.css'

// todo: Mobile responsive logo + btn

const Navbar = () => {

    const handleClick = () => {
      const elem = document.activeElement;
      if(elem){
        elem?.blur();
      }
    };


  // Nav links
  const navItems = (
    <>
      <li onClick={handleClick}>
        <Link to={"/"}>Home</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/about"}>About Us</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/products"}>Products</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/pricing"}>Pricing Table</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/client-says"}>Client Says</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/review"}>Review</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/contact-us"}>Contact Us</Link>
      </li>
    </>
  );


  return (
    <div>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown  z-10">
            <label tabIndex={0} className="btn btn-ghost mt-[38px] lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
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
              className="menu menu-sm absolute font dropdown-content  mt-3 z-[1] p-2 text-white bg-[#222222CC] shadow font-bold rounded-box w-52 "
            >
              {navItems}
            </ul>
          </div>
          <img
            className=" w-[100px] lg:w-[148px] md:w-[120px]  lg:ml-[40px] mt-[38px]"
            src={logo}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 mt-[45px] text-white font font-[400] text-[16px] gap-[25px]">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="download-btn heading  font  mt-[36px] lg:mr-[30px] text-white ">
            Download App{" "}
            <span>
              <FaGooglePlay></FaGooglePlay>
            </span>
          </button>
        </div>
        
      </div>
      {/* <hr className=" mx-auto mt-2" /> */}
      <div className="line !mt-[23px]"></div>
    </div>
  );
};

export default Navbar;
