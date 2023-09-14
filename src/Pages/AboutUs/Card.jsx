import React from 'react';
import { HiAcademicCap , HiLocationMarker} from "react-icons/hi";
import './singleCard.css';

const Card = ({SingleData}) => {
    const {id , name , image , title  , location , veracity} = SingleData;
    return (
        <div className='cards md:w-[390px] w-[335px] text-white p-5'>
            <div className=' flex gap-6 md:gap-10'>
                <div className='my-auto'>
                <img className="card-img" src={image} alt="" />
                </div>
                <div className='card-left-body'>
                    <p className='pragraph text-[15px] '>{title} </p>
                    <h2 className='mt-2 heading !font-[500] '> {name} </h2>
                    <p  className='flex gap-2 items-center my-1 mt-[12px] pragraph text-[14px] '> <HiLocationMarker></HiLocationMarker> {location}</p>
                    <p className='flex gap-2 mt-[8px] pragraph text-[14px]'><HiAcademicCap></HiAcademicCap>{veracity}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Card;