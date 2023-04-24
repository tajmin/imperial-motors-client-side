import React from "react";
import useAuth from "../../../hooks/useAuth";
import useCars from "../../../hooks/useCars";

const ManageCars = () => {
  const { cars } = useCars();
  const { authToken } = useAuth();

  const handleDeletion = (id) => {
    const confirmDelete = window.confirm("Confirm delete this car?");
    if (confirmDelete) {
      fetch(`https://imperial-motors-serverside.vercel.app/cars/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            // const restOrders = myOrders.filter(item => item._id !== id);
            // setMyOrders(restOrders);
            alert("Car deleted Successfully!");
          }
        });
    }
  };

  return (
    <div>
      <div className="py-6 bg-black">
        <h1 className="text-2xl xl:text-5xl font-bold text-gray-200">
          Manage Cars
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Model</th>
              <th>Year</th>
              <th>Engine</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="w-16 h-16 mask mask-squircle">
                        <img src={item.image1} alt="t" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.title}</div>
                </td>
                <td>
                  <div className="font-bold">{item.year}</div>
                </td>
                <td>
                  <div className="font-bold">{item.engine}</div>
                </td>
                <td>
                  <div className="font-bold">{item.price}</div>
                </td>
                <th>
                  <button
                    onClick={() => handleDeletion(item._id)}
                    className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded text-white m-auto"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Model</th>
              <th>Year</th>
              <th>Engine</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageCars;
