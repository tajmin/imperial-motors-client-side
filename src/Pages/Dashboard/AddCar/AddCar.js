import React from "react";
import { useForm } from "react-hook-form";

const AddCar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://imperial-motors-serverside.vercel.app/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Car added successfully!");
          reset();
        }
      });
  };

  return (
    <div>
      <div className="py-6 bg-black">
        <h1 className="text-2xl xl:text-5xl font-bold text-gray-200">
          Add New Car
        </h1>
      </div>
      <div className="container flex h-screen mx-auto">
        <div className="container m-auto max-w-2xl text-left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4">
              <label
                className="block mb-2 text-lg font-semibold"
                htmlFor="email"
              >
                Model Name
              </label>
              <input
                {...register("title", { required: true })}
                className="w-full py-2 border-none rounded"
                type="text"
                name="title"
              />
              {errors.title && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="py-4">
              <label
                className="block mb-2 text-lg font-semibold"
                htmlFor="email"
              >
                Manufacturing Year
              </label>
              <input
                {...register("year", { required: true })}
                className="w-full py-2 border-none rounded"
                type="text"
                name="year"
              />
              {errors.year && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="py-4">
              <label
                className="block mb-2 text-lg font-semibold"
                htmlFor="email"
              >
                Price
              </label>
              <input
                {...register("price", { required: true })}
                className="w-full py-2 border-none rounded"
                type="text"
                name="price"
              />
              {errors.price && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="py-4">
              <label
                className="block mb-2 text-lg font-semibold"
                htmlFor="email"
              >
                Engine
              </label>
              <input
                {...register("engine", { required: true })}
                className="w-full py-2 border-none rounded"
                type="text"
                name="engine"
              />
              {errors.engine && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="py-4">
              <label
                className="block mb-2 text-lg font-semibold"
                htmlFor="email"
              >
                Exterior
              </label>
              <input
                {...register("exterior")}
                className="w-full py-2 border-none rounded"
                type="text"
                name="exterior"
              />
            </div>
            <div className="py-4">
              <label
                className="block mb-2 text-lg font-semibold"
                htmlFor="email"
              >
                Description
              </label>
              <textarea
                {...register("description", { required: true })}
                rows="5"
                className="w-full py-2 border-none rounded"
                type="text"
                name="description"
              />
              {errors.description && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="py-4">
              <label
                className="block mb-2 text-lg font-semibold"
                htmlFor="email"
              >
                Car Image 1
              </label>
              <input
                {...register("image1", { required: true })}
                className="w-full py-2 border-none rounded"
                type="text"
                name="image1"
              />
              {errors.image1 && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <input
              className="mt-2 px-6 py-2 xl:w-1/3 bg-white hover:bg-black hover:text-white cursor-pointer rounded"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
