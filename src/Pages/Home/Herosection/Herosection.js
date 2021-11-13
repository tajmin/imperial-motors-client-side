import React from 'react';
import './Herosection.css';
import banner from '../../../images/banner.mp4';

const Herosection = () => {
    return (
        <div className="hero-section relative">
            <video src={banner} autoPlay loop muted></video>
            <div className="absolute flex left-0 right-0 top-0 bottom-0 bg-black opacity-70 z-10 p-12 xl:p-32">
                <div className="m-auto">
                    <h1 className="text-3xl xl:text-7xl font-bold font-serif text-gray-100 py-4">Imperial Motors</h1>
                    <h2 className="xl:text-4xl font-serif text-gray-300">Dubai's Most Luxurious Car Dealership</h2>
                </div>
            </div>
        </div>
    );
};

export default Herosection;