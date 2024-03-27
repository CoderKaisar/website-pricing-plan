import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import "../src/assets/css/pricingList.style.css"

const PriceList = ({ pricing }) => {
    const { title, headText, rate, priceBtn, priceLi, priceLi1, priceLi2, priceLi3 } = pricing

    return (
        <div className='pricingCard rounded-lg  py-6'>
            <div className='border-2 border-[#CDD1D0] hover:border-none rounded-lg py-6 px-6 w-[300px] h-[450px]  hover:h-[500px] space-y-4 '>
                <h2 className='text-md font-semibold '>{title}</h2>
                <p className='text-[13px] text-gray-700  leading-4 '>{headText}</p>
                <h3 className='text-3xl text-[#007DF8] py-3'>{rate}</h3>
                <button className='text-white bg-[#013CD8] px-10 py-2 rounded-lg'>{priceBtn}</button>
                <div className='flex flex-col justify-start items-start gap-2 py-6'>
                    <div className='flex justify-start items-center gap-2'>
                        <span className='mr-[4px]'><FaArrowCircleRight /></span><p className='text-left'>{priceLi1}</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <span className='mr-[4px]'><FaArrowCircleRight /></span><p className='text-left'>{priceLi2}</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <span className='mr-[4px]'><FaArrowCircleRight /></span><p className='text-left'>{priceLi3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceList;