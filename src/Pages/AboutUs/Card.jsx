import React from 'react';
import { HiAcademicCap , HiLocationMarker} from "react-icons/hi";
import './singleCard.css';

const Card = ({SingleData}) => {
    const {id , name , image , title  , location , veracity} = SingleData;
    return (
        <div className='cards md:w-[390px] w-[335px] text-black p-6'>
            <div className=' flex gap-10'>
                <div>
                    <img className='card-img items-center' src={image} alt="" />
                </div>
                <div className='card-left-body'>
                    <p>{title} </p>
                    <h2 className='mt-2'> {name} </h2>
                    <p  className='flex gap-2 items-center my-1'> <HiLocationMarker></HiLocationMarker> {location}</p>
                    <p className='flex gap-2 items-center'><HiAcademicCap></HiAcademicCap>{veracity}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Card;