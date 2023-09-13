import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaGooglePlay, FaTimes } from 'react-icons/fa';
import logo from "../../assets/Images/Logo1.png";
import './Navbar.css'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='  mt-5 '>
            <div className='flex items-center'>
                <div className='mx-auto px-4 sm:px-6 lg:px-8'>

                    <div className='flex justify-between items-center gap-2 mr-4 h-16'>


                        <div className='flex items-center -mr-2 sm:hidden'>
                            <button
                                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out'
                                onClick={toggleNavbar}
                            >
                                {isOpen ? (
                                    <FaTimes className='block h-6 w-6' />
                                ) : (
                                    <FaBars className='block h-6 w-6' />
                                )}
                            </button>
                        </div>

                        <div className='hidden sm:flex sm:items-center '>
                            <div className=''>
                                <ul className='hidden sm:flex sm:items-center'>
                                    <li className='ml-6'>
                                        <NavLink
                                            to='/'
                                            className={({ isActive }) => (isActive ? 'text-blue-600 px-2 font-semibold block lg:inline' : 'text-black px-3 py-2 rounded-md text-xl font-medium')}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className='ml-6'>
                                        <NavLink
                                            to='/blog'
                                            className={({ isActive }) => (isActive ? 'text-blue-600 px-2 font-xl font-semibold block lg:inline' : 'text-black px-3 py-2 rounded-md text-xl font-medium')}
                                        >
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li className='ml-6'>
                                        <NavLink

                                            className='text-black px-3 py-2 rounded-md text-xl font-medium'
                                        >
                                            Menu
                                        </NavLink>
                                    </li>
                                    <li className='ml-6'>
                                        <NavLink
                                            className='text-black px-3 py-2 rounded-md text-xl font-medium'
                                        >
                                            About Us
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>


                        </div>


                    </div>
                </div>
                <div>
                    <img
                        className=" w-[100px] lg:w-[148px] md:w-[120px]  lg:ml-[40px] mt-[0px]"
                        src={logo}
                        alt=""
                    />
                </div>
                <div className="navbar-end">
                    <button className="download-btn heading  font  mt-[0px] lg:mr-[0px] text-white ">
                        Download App{" "}
                        <span>
                            <FaGooglePlay></FaGooglePlay>
                        </span>
                    </button>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className=''>
                    <Link
                        to='/'
                        className='block px-3 py-2 rounded-md text-base font-medium  hover:text-gray-400 hover:bg-gray-700'
                        onClick={toggleNavbar}
                    >
                        Home
                    </Link>
                    <Link
                        to='/blog'
                        className='block px-3 py-2 rounded-md text-base font-medium  hover:text-gray-400 hover:bg-gray-700'
                        onClick={toggleNavbar}
                    >
                        Blog
                    </Link>
                    <Link
                        to='/contact'
                        className='block px-3 py-2 rounded-md text-base font-medium  hover:text-gray-400 hover:bg-gray-700'
                        onClick={toggleNavbar}
                    >
                        About Us
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;