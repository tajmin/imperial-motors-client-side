import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import useAuth from "../../../hooks/useAuth";

const SubmitReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const [rating, setRating] = useState(null);

  const handleStar = (star) => {
    setRating(star);
  };

  const handleForm = (data) => {
    const review = {
      rating,
      reviewText: data.reviewText,
      email: user.email,
      displayName: user.displayName,
      thumb: user.photoURL,
    };

    fetch("https://imperial-motors-serverside.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Review submitted successfully!");
          reset();
        }
      });
  };

  return (
    <div>
      <div className="py-6 bg-black">
        <h1 className="text-2xl xl:text-5xl font-bold text-gray-200">
          Submit Review
        </h1>
      </div>
      <div className="container max-w-md xl:max-w-xl mx-auto py-5 xl:py-10">
        <Rating
          emptySymbol="far fa-star rating-star"
          fullSymbol="fas fa-star rating-star"
          onChange={(rate) => handleStar(rate)}
        />
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="py-4">
            <textarea
              rows="10"
              {...register("reviewText", { required: true })}
              placeholder="Give your feedback"
              className="w-full py-2 px-2 border-none rounded"
              type="text"
              name="reviewText"
            />
            {errors.reviewText && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="py-3 sm:flex sm:flex-row-reverse">
            <input
              type="submit"
              value="Submit"
              className="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitReview;
