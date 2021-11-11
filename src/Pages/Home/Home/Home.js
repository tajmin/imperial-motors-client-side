import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import CarSection from '../CarSection/CarSection';
import Herosection from '../Herosection/Herosection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Herosection></Herosection>
            <CarSection></CarSection>
        </div>
    );
};

export default Home;