import React from 'react';
import { HiAcademicCap , HiLocationMarker} from "react-icons/hi";
import './singleCard.css';

const Card = ({SingleData}) => {
    const {id , name , image , title  , location , veracity} = SingleData;
    return (
        <div className='cards md:w-[390px] w-[335px] text-white p-6'>
            <div className=' flex gap-6 md:gap-10'>
                <div className='my-auto'>
                <img className="client-photo" src={image} alt="" />
                </div>
                <div className='card-left-body'>
                    <p className='heading text-[15px] '>{title} </p>
                    <h2 className='mt-2 pragraph '> {name} </h2>
                    <p  className='flex gap-2 items-center my-1  pragraph text-[14px] '> <HiLocationMarker></HiLocationMarker> {location}</p>
                    <p className='flex gap-2 items-center pragraph text-[14px]'><HiAcademicCap></HiAcademicCap>{veracity}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Card;