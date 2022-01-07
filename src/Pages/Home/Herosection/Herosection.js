import React from 'react';
import './Herosection.css';
import banner from '../../../images/banner.mp4';
import { NavLink } from 'react-router-dom';

const Herosection = () => {
    return (
        <div className="hero-section relative">
            <video src={banner} autoPlay loop muted></video>
            <div className="absolute flex left-0 right-0 top-0 bottom-0 bg-black opacity-70 z-10 p-12 xl:p-32">
                <div className="m-auto">
                    <h1 className="text-3xl xl:text-7xl font-bold font-serif text-yellow-400 py-4">Imperial Motors</h1>
                    <h2 className="xl:text-4xl font-serif text-gray-300"> The Best Luxury Car Dealership in Dubai</h2>
                    <NavLink to="/inventory">
                        <button className="mt-8 transition duration-500 border border-yellow-400 text-yellow-400 hover:border-black hover:bg-white hover:text-black text-xl px-3 py-1 xl:px-5 xl:py-3 font-semibold">Explore Inventory</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Herosection;