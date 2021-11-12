import React from 'react';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-6">
                <div className="bg-gray-200 min-h-screen col-span-2 xl:col-span-1">

                </div>
                <div className="col-span-4 xl:col-span-5">
                    <MyOrders></MyOrders>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;