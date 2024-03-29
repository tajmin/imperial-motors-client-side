import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://imperial-motors-serverside.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return { cars };
};

export default useCars;
