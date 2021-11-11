import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const Car = ({ car }) => {
    const { title, year, price, description, image1, engine } = car;

    const bgStyle = {
        background: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '75vh',
    }

    return (
        <div style={bgStyle} className="z-0 flex relative">
            <div className="text-left bg-black opacity-70 absolute bottom-0 left-0 xl:top-0 xl:block xl:h-full py-4 px-6 xl:py-10 xl:px-12 xl:my-auto xl:max-w-xl z-20">
                <h1 className="text-xl xl:text-5xl text-red-700 font-bold font-serif xl:py-10">{title}</h1>
                <h2 className="text-lg xl:text-3xl text-gray-200 xl:pb-8"><FontAwesomeIcon icon={faDollarSign} />{price}</h2>
                <div className="flex justify-between pb-2 xl:pb-12 text-sm xl:text-xl text-gray-200">
                    <h4><FontAwesomeIcon icon={faTachometerAlt} /> {engine} Engine</h4>
                    <h4><FontAwesomeIcon icon={faCalendar} /> {year} Model</h4>
                </div>
                <p className="text-gray-300 mb-5 text-sm xl:text-base xl:mb-10">{description.slice(0, 100)}..</p>
                <button className="bg-red-600 text-sm xl:text-xl text-gray-200 px-5 xl:px-10 py-1 xl:py-2 border border-gray-100 hover:border-black hover:bg-red-700">Details</button>
            </div>
        </div>
    );
};

export default Car;