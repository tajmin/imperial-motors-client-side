import React from 'react';
import useCars from '../../../hooks/useCars';
import Car from '../../Home/Car/Car';

const Inventory = () => {
    const { cars } = useCars();
    return (
        <div className="bg-white">
            <div className="flex xl:h-96">
                <div className="container bg-red-600 px-10 xl:p-10 max-w-3xl m-auto rounded-lg shadow-lg">
                    <h1 className="text-xl xl:text-5xl text-gray-200 py-2 xl:py-4 font-serif font-bold">Explore Current Inventory</h1>
                    <div className="m-auto py-4 px-10">
                        <input className="w-full text-center xl:py-2" placeholder="Search your desired supercar" type="text" />
                    </div>
                </div>
            </div>
            <div className="bg-black py-5 xl:py-16">
                <div className="grid grid-cols-1 xl:grid-cols-2">
                    {
                        cars.map(car => <Car key={car._id} car={car}></Car>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Inventory;