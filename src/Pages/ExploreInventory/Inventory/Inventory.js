import React from 'react';
import useCars from '../../../hooks/useCars';
import Car from '../../Home/Car/Car';

const Inventory = () => {
    const { cars } = useCars();
    return (
        <div className="bg-white py-20">
            <h1 className="text-gray-900 text-3xl xl:text-6xl font-bold mb-10 xl:mb-20">Current Inventory</h1>
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-16">
                    {
                        cars.map(car => <Car key={car._id} car={car}></Car>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Inventory;