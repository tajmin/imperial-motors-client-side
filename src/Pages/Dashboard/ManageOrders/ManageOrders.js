import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const ManageOrders = () => {
  const { authToken } = useAuth();
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const url = `https://imperial-motors-serverside.vercel.app/orders`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [authToken]);

  //order status set to approve
  const handleApproveOrder = (index) => {
    const updatedOrder = allOrders[index];
    updatedOrder.status = true;
    fetch("https://imperial-motors-serverside.vercel.app/orders", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${authToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const restOrders = allOrders.filter(
            (item) => item._id !== updatedOrder._id
          );
          const newOrders = [updatedOrder, ...restOrders];
          setAllOrders(newOrders);
          alert("Booking Approved Successfully!");
        }
      });
  };

  //handle cancel order
  const handleCancellation = (id) => {
    const confirmDelete = window.confirm("Confirm cancel this booking?");
    if (confirmDelete) {
      fetch(`https://imperial-motors-serverside.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const restOrders = allOrders.filter((item) => item._id !== id);
            setAllOrders(restOrders);
            alert("Order Cancelled Successfully.");
          }
        });
    }
  };

  return (
    <div>
      <div className="py-6 bg-black">
        <h1 className="text-2xl xl:text-5xl font-bold text-gray-200">
          Manage Orders
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Order Info</th>
              <th>Ordered By</th>
              <th>Contact Details</th>
              <th>Order Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-16 h-16 mask mask-squircle">
                        <img src={item.car.image1} alt="t" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.car.title}</div>
                      <div className="text-sm opacity-50">{item.car.price}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.displayName}</div>
                </td>
                <td>
                  {item.email}
                  <br />
                  <span className="badge badge-outline badge-sm">
                    {item.phone}
                  </span>
                </td>
                <td>{item.status ? "Shipped" : "Pending"}</td>
                <th>
                  <div className="flex flex-auto flex-col gap-3">
                    <button
                      onClick={() => handleApproveOrder(index)}
                      className={
                        item.status
                          ? "bg-green-600 opacity-25 w-full hover:bg-green-700 px-4 py-1 rounded text-white "
                          : "bg-green-600 hover:bg-green-700 w-full px-4 py-1 rounded text-white"
                      }
                      disabled={item.status}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleCancellation(item._id)}
                      className="bg-red-700 w-full hover:bg-red-800 px-4 py-1 rounded text-white m-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>No.</th>
              <th>Order Info</th>
              <th>Ordered By</th>
              <th>Contact Details</th>
              <th>Order Status</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
