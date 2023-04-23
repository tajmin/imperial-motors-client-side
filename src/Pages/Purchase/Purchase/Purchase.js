import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Shared/Navbar/Navbar";
import CarDetails from "../CarDetails/CarDetails";

const Purchase = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    fetch(`https://imperial-motors-server.up.railway.app/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCarDetails(data);

        //setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      <Navbar></Navbar>
      <CarDetails carDetails={carDetails}></CarDetails>
    </div>
  );
};

export default Purchase;
