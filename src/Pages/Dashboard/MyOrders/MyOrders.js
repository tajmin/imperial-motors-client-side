import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user, authToken } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `https://pacific-sands-70895.herokuapp.com/orders/${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${authToken}`
            }
        })
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])

    const handleCancellation = (id) => {
        const confirmDelete = window.confirm('Confirm cancell this booking?');
        if (confirmDelete) {
            fetch(`https://pacific-sands-70895.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const restOrders = myOrders.filter(item => item._id !== id);
                        setMyOrders(restOrders);
                        alert('Booking Cancelled Successfully.');
                    }
                });
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order Info</th>
                            <th>Order Status</th>
                            <th>Provided Details</th>
                            <th>Cancellation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-16 h-16 mask mask-squircle">
                                                <img src={item.car.image1} alt="t" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {item.car.title}
                                            </div>
                                            <div className="text-sm opacity-50">
                                                {item.car.price}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.status ? 'Shipped' : 'Pending'}</td>
                                <td>
                                    {item.email}
                                    <br />
                                    <span className="badge badge-outline badge-sm">{item.phone}</span>
                                </td>
                                <th>
                                    <button onClick={() => handleCancellation(item._id)} className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded text-white m-auto">Cancel</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Order Info</th>
                            <th>Order Status</th>
                            <th>Provided Details</th>
                            <th>Cancellation</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;