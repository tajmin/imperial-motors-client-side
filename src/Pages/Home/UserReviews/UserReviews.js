import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import avatar from "../../../images/avatar.jpg";

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://imperial-motors-serverside.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="xl:bg-yellow-400 py-8 xl:py-16">
      <h1 className="text-3xl xl:text-6xl font-bold text-gray-800 pt-10 mb-6 xl:mb-20">
        Client Reviews
      </h1>

      <div className="container max-w-6xl mx-auto bg-white p-12 rounded-xl shadow-xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {reviews.map((item) => (
            <div
              key={item._id}
              className="bg-yellow-50 p-12 rounded-lg shadow-xl"
            >
              <div className="pb-6 flex flex-col gap-3">
                <img
                  className="h-12 w-12 rounded-full mx-auto"
                  src={avatar}
                  alt=""
                />
                <p className="text-gray-600 font-semibold">
                  {item.displayName}
                </p>
              </div>
              <div className="pb-6">
                <Rating
                  emptySymbol="far fa-star rating-star"
                  fullSymbol="fas fa-star rating-star"
                  initialRating={item.rating}
                  readonly
                />
              </div>
              <div className="xl:h-32 italic text-gray-500">
                <p>{item.reviewText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
