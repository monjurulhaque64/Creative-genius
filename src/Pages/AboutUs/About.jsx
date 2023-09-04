import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import Card from "./Card";
import './singleCard.css';
import  img from "../../assets/Images/Ellipse 28.png"


const About = () => {
    const [data, setData] = useState([])



    useEffect(() => {
        fetch("/designer.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);



    return (
        <div className="container mx-auto mt-[72px] ">
            <Helmet>
                <title>Creative Campus || About Us</title>
            </Helmet>
            <div className="mx-5 md:mx-0">
            <div className="mx-auto text-center ">
                <h1 className="about-title">
                    Meet Our Team
                </h1>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[100px]">
                
                    {
                        data.map(SingleData => <Card
                            key={SingleData.id}
                            SingleData={SingleData}
                        ></Card>)
                        
                        
                    }
                
            </div>
            <div className="mt-28">
                <div className="flex  flex-col items-center">
                    <h1 className="Title">Lorium Ipsum</h1>
                    <p className="founder mb-3">Founder & CEO</p>
                    <p className="description md:w-[776px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="md:flex md:justify-between gap-10 my-24 ">
                    <div className="relative mb-10">
                        <div className="md:h-44 h-24 border-2 border-blue-700 rotate-180 border-dotted  absolute"></div>
                        <div className="md:ml-16 ml-5 w-[300px]">
                        <h1 className="thought-title">Thoughts </h1>
                        <p className="thought-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ut.</p>
                        </div>
                    </div>
                    <div className="relative ">
                        <div className="md:h-44 h-24 border-blue-700 border-2 rotate-180 border-dotted  absolute"></div>
                        <div className=" md:ml-16 ml-5 w-[300px]">
                        <h1 className="Title">Feelings </h1>
                        <p className="thought-description"> ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ut.</p>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col items-center my-20 relative">
                    <img className="z-10 border-[2px] border-gray-400 animate-border-animation rounded-full p-2" src={img} alt="" />
                <div className="lg:w-[70rem] md:w-[50rem] w-[20rem] border-[1px] border-gray-400 rotate-180 mt-[7rem] border-dashed   absolute"></div>
                </div>
                <div className="md:flex md:justify-between gap-10 my-24 md:mb-56">
                    <div className="relative mb-10">
                        <div className="md:h-44 h-24 border-2 border-blue-700 rotate-180 border-dotted  absolute"></div>
                        <div className="md:ml-16 ml-5 w-[300px]">
                        <h1 className="thought-title">Does </h1>
                        <p className="thought-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ut.</p>
                        </div>
                    </div>
                    <div className="relative ">
                        <div className="md:h-44 h-24 border-blue-700 border-2 rotate-180 border-dotted  absolute"></div>
                        <div className=" md:ml-16 ml-5 w-[300px]">
                        <h1 className="Title">Wants  </h1>
                        <p className="thought-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ut.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;