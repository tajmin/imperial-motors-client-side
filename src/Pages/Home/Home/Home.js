import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;