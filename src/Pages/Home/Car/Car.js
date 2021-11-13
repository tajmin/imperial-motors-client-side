import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router';

const Car = ({ car }) => {
    const { _id, title, year, price, description, image1, engine } = car;
    const history = useHistory();
    const url = `/purchase/${_id}`;

    const handleStartPurchase = () => {
        history.push(url);
    }

    return (
        <div style={{ background: `url(${image1})` }} className="bg-styles z-0 flex relative">
            <div className="text-left bg-black opacity-70 absolute bottom-0 left-0 xl:top-0 xl:block xl:h-full py-4 px-6 xl:py-10 xl:px-12 xl:my-auto xl:max-w-xl z-20">
                <h1 className="text-xl xl:text-5xl text-red-700 font-bold font-serif xl:pt-10 xl:pb-8">{title}</h1>
                <h2 className="text-lg xl:text-2xl text-gray-200 pb-2 xl:pb-6"><FontAwesomeIcon icon={faDollarSign} />{price}</h2>
                <div className="flex justify-between pb-2 xl:pb-10 text-sm xl:text-lg text-gray-200">
                    <h4><FontAwesomeIcon icon={faTachometerAlt} /> {engine} Engine</h4>
                    <h4><FontAwesomeIcon icon={faCalendar} /> {year} Model</h4>
                </div>
                <p className="text-gray-300 pb-4 xl:pb-10 text-sm xl:text-base xl:mb-10">{description.slice(0, 100)}..</p>
                <button onClick={handleStartPurchase} className="transition-all duration-500 bg-red-600 text-sm xl:text-xl text-gray-200 px-5 xl:px-8 py-1 xl:py-2 border border-gray-100 hover:border-black hover:bg-red-700">Start Purchase</button>
            </div>
        </div>
    );
};

export default Car;