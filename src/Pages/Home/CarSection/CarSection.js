import React from 'react';
import useCars from '../../../hooks/useCars';
import Car from '../Car/Car';

const CarSection = () => {
    const { cars } = useCars();
    return (
        <div className="bg-black">
            <h1 className="text-gray-300 text-2xl xl:text-5xl font-bold font-serif py-8">Number of Cars {cars?.length}</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-16">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>).slice(0, 6)
                    }
                </div>
            </div>
        </div>
    );
};

export default CarSection;