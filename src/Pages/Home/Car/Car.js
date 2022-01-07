import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router';
import './car.css'

const Car = ({ car }) => {
    const { _id, title, year, price, description, image1, engine } = car;
    const history = useHistory();
    const url = `/purchase/${_id}`;

    const handleStartPurchase = () => {
        history.push(url);
    }

    return (
        <div className='flex flex-1 flex-col xl:flex-row border-1 shadow-2xl xl:rounded-2xl'>
            <div className="">
                <img src={image1} className='xl:rounded-l-2xl' alt="" />
            </div>
            <div className="partial-bg py-4 xl:w-9/12 text-left pl-8 xl:pl-10 pr-12 xl:rounded-r-2xl">
                <h1 className="text-2xl xl:text-4xl text-gray-900 font-bold xl:py-6 mb-2">{title}</h1>
                <h2 className="text-lg xl:text-2xl text-gray-800 pb-1"><FontAwesomeIcon icon={faDollarSign} />{price}</h2>
                <div className="flex justify-between xl:h-16 text-sm xl:text-lg text-gray-800">
                    <h4><FontAwesomeIcon icon={faTachometerAlt} /> {engine} Engine</h4>
                    <h4><FontAwesomeIcon icon={faCalendar} /> {year} Model</h4>
                </div>
                <p className="text-gray-800 pb-4 xl:pb-10 pr-4 text-sm xl:text-base">{description.slice(0, 110)}..</p>
                <button onClick={handleStartPurchase} className="mb-2 transition-all duration-500 bg-black text-sm xl:text-xl text-white hover:text-black px-4 py-1.5 rounded-full border border-black hover:border-black hover:bg-transparent">Purchase Now</button>
            </div>
        </div>
    );
};

export default Car;