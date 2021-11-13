import React from 'react';
import porsche from '../../../images/porsche.jpg'

const SellCarSection = () => {
    return (
        <div className="bg-white">
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="hidden xl:block">
                    <img className="" src={porsche} alt="" />
                </div>
                <div className="flex">
                    <div className="container max-w-3xl my-auto bg-red-600 xl:py-16 xl:px-10 xl:rounded-xl">
                        <h1 className="text-xl xl:text-5xl xl:font-bold text-white py-5 xl:py-10">Looking for an exchange deal?</h1>
                        <button className="mb-2 transition-all duration-500 border border-gray-400 bg-white hover:bg-black hover:border-black hover:text-white px-2 py-1 xl:px-4 xl:py-2 text-lg xl:text-xl rounded">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellCarSection;