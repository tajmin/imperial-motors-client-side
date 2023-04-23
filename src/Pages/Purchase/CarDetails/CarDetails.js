import React, { useRef, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const CarDetails = (prop) => {
  const { _id, title, price, year, engine, exterior, description, image1 } =
    prop.carDetails;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleModal = () => {
    setOpen(true);
  };

  const handleForm = (data) => {
    data.car = { id: _id, image1, title, price };
    data.status = false;

    fetch("https://imperial-motors-server.up.railway.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setOpen(false);
        if (result.insertedId) {
          alert("order processed successfully!");
          reset();
        }
      });
  };

  return (
    <div>
      <div style={{ background: `url(${image1})` }} className="bg-styles"></div>
      <div className="bg-white">
        <div className="container bg-gray-50 mx-auto py-8 xl:py-16 xl:max-w-7xl ">
          <h1 className="text-2xl xl:text-5xl text-gray-600 font-bold pb-6 xl:pb-12">
            {title}
          </h1>
          <h2 className="text-lg xl:text-2xl text-red-500 pb-4 ">
            Starting From <FontAwesomeIcon icon={faDollarSign} />
            {price}
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 py-10 gap-4">
            <div className="text-left px-5 pb-4 xl:px-10 text-lg xl:text-xl text-gray-600">
              <table className="table-auto mx-auto border-collapse border border-gray-200">
                <tbody className="p-10">
                  <tr>
                    <td className="border border-gray-200 px-10 py-3">
                      Model Name
                    </td>
                    <td className="border border-gray-200 px-10 py-3">
                      {title}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-10 py-3">
                      Year Built
                    </td>
                    <td className="border border-gray-200 px-10 py-3">
                      {year}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-10 py-3">
                      Engine
                    </td>
                    <td className="border border-gray-200 px-10 py-3">
                      {engine}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-10 py-3">
                      Exterior
                    </td>
                    <td className="border border-gray-200 px-10 py-3">
                      {exterior}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="xl:text-left xl:px-10">
              <p className="text-gray-600 italic text-lg xl:text-xl xl:leading-8">
                {description}
              </p>
            </div>
          </div>
          <button
            onClick={handleModal}
            className="transform transition-all mt-3 xl:mt-6 font-semibold bg-white border border-red-500 rounded hover:bg-red-500 hover:border-gray-400 xl:text-lg px-5 py-2 xl:py-3 xl:px-10"
          >
            Purchase Now
          </button>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-middle bg-black rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-xl w-full">
                <div className="px-4 pt-5 pb-4 sm:ml-4 sm:p-6 sm:pb-4">
                  <div className="mt-2 mx-4">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium my-3 text-gray-200"
                    >
                      Fill Out Details
                    </Dialog.Title>
                    <form onSubmit={handleSubmit(handleForm)}>
                      <div className="py-4">
                        <input
                          {...register("displayName", { required: true })}
                          defaultValue={user.displayName}
                          placeholder="Your Name"
                          className="w-full py-2 px-2 border-none rounded"
                          type="text"
                          name="name"
                        />
                        {errors.displayName && (
                          <span className="text-red-700">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="py-4">
                        <input
                          {...register("email", { required: true })}
                          defaultValue={user.email}
                          placeholder="Your Email"
                          className="w-full py-2 px-2 border-none rounded"
                          type="text"
                          name="email"
                        />
                        {errors.email && (
                          <span className="text-red-700">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="py-4">
                        <input
                          {...register("phone", { required: true })}
                          placeholder="Contact Number"
                          className="w-full py-2 px-2 border-none rounded"
                          type="text"
                          name="phone"
                        />
                        {errors.phone && (
                          <span className="text-red-700">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="py-3 sm:flex sm:flex-row-reverse">
                        <input
                          type="submit"
                          value="Submit"
                          className="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        />
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default CarDetails;
