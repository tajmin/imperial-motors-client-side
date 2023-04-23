import React from 'react';
import useCars from '../../../hooks/useCars';
import Car from '../Car/Car';
import { NavLink } from 'react-router-dom';

const CarSection = () => {
    const { cars } = useCars();
    return (
        <div className="bg-black py-8 xl:py-16">
            <h1 className="text-gray-100 text-3xl xl:text-6xl font-bold pt-10 mb-6">Car Showcase</h1>
            <div className='cursor-pointer mb-16 xl:mb-24'>
                <div className='w-28 xl:w-40 h-5 transition-all duration-300 transform hover:scale-x-150 border-0 border-t-4 border-yellow-400 mx-auto'></div>
                <div className='w-16 xl:w-24 h-5 transition-all duration-300 transform hover:scale-x-150 border-0 border-t-4 border-yellow-400 mx-auto'></div>
                <div className='w-6 xl:w-12 h-5 transition-all duration-300 transform hover:scale-x-150 border-0 border-t-4 border-yellow-400 mx-auto'></div>
            </div>
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 gap-16">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>).slice(0, 6)
                    }
                </div>
            </div>
            <div className='text-right px-8 xl:px-16 mt-8 xl:mt-16'>
                <NavLink to='/inventory' className='text-blue-400 underline text-lg'>See More</NavLink>
            </div>
        </div>
    );
};

export default CarSection;