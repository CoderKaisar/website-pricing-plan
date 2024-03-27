import React from 'react';
import PriceList from './PriceList';


const PriceLists = () => {
    const pricings = [
        {
            title: "LIGHT",
            headText: "Suitable for Startups, Bloggers and Basic Websites",
            rate: "$450",
            priceBtn: "One Time",
            priceLi1: "Light, modern, clean and simple",
            priceLi2: "Pre-made template",
            priceLi3: "USer & Mobile Friendly"
        },
        {
            title: "PRO",
            headText: "Suitable for Small Companies & Growing Brands",
            rate: "$850",
            priceBtn: "One Time",
            priceBtn: "One Time",
            priceLi1: "Power up your business-modern size companies",
            priceLi2: "Pre-made template",
            priceLi3: "USer & Mobile Friendly"

        },
        {
            title: "ULTRA",
            headText: "Suitable for anyone who just wants the A+ Game",
            rate: "$1750 +",
            priceBtn: "One Time",
            priceLi1: "Professional from the experienced",
            priceLi2: " Pre-made template",
            priceLi3: "USer & Mobile Friendly"
        },
    ]
    return (
        <div>
            <div className='flex flex-col justify-center items-center py-6'>
                <h2 className='text-2xl mb-[6px]'>Our Site Develeopment</h2>
                <p className='font-bold text-2xl'>Pricing Plan</p>
            </div>
            <div className='flex justify-center items-center py-10'>
                <button className='bg-sky-400 px-6 py-1 rounded-sm rounded-l-full text-white border-r-1 hover:bg-sky-700 active-plan'>Weekly</button>
                <button className='bg-sky-400 hover:bg-sky-700 px-6 py-1 rounded-sm rounded-r-full text-white border-l-2'>Monthly</button>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-2  '>
                {
                    pricings.map((pricing, idx) => <PriceList pricing={pricing} key={idx} />)
                }
            </div>
        </div>
    );
};

export default PriceLists;