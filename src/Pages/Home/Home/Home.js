import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import CarSection from '../CarSection/CarSection';
import Herosection from '../Herosection/Herosection';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Herosection></Herosection>
            <CarSection></CarSection>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;