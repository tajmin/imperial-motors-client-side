import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../Shared/Navbar/Navbar';
import CarDetails from '../CarDetails/CarDetails';

const Purchase = () => {
    const { id } = useParams();
    const [carDetails, setCarDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                setCarDetails(data);
                //reset(data);
                //setIsLoading(false);
            });
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <CarDetails carDetails={carDetails}></CarDetails>
        </div>
    );
};

export default Purchase;