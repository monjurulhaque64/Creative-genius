import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Navbar/Navbar';
// import Nav from '../Share/Navbar/Nav';
import Footer from '../Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;