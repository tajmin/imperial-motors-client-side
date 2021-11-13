import React from 'react';
import MyOrders from '../MyOrders/MyOrders';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import SubmitReview from '../SubmitReview/SubmitReview';
import Payment from '../Payment/Payment';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Authentication/AdminRoute/AdminRoute';
import ManageCars from '../ManageCars/ManageCars';
import AddCar from '../AddCar/AddCar';


const Dashboard = () => {
    const { logOut, isAdmin } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className="grid grid-cols-6">
                <div className="bg-white min-h-screen col-span-2 xl:col-span-1 flex">
                    <div className="flex flex-col m-auto gap-4 w-2/3">
                        {
                            !isAdmin ? <>
                                <NavLink to={`${url}`}><button className="w-full py-3 bg-blue-100 shadow-lg rounded-lg border border-gray-300 text-gray-900">My Orders</button></NavLink>
                                <NavLink to={`${url}/submit-review`}><button className="w-full py-3 bg-blue-100 shadow-lg rounded-lg border border-gray-300 text-gray-900">Submit Review</button></NavLink>
                                <NavLink to={`${url}/payment`}><button className="w-full py-3 bg-blue-100 shadow-lg rounded-lg border border-gray-300 text-gray-900">Pay Now</button></NavLink>

                            </> :

                                <>
                                    <NavLink to={`${url}/add-car`}><button className="w-full py-3 bg-blue-100 shadow-lg rounded-lg border border-gray-300 text-gray-900">Add Car</button></NavLink>
                                    <NavLink to={`${url}/manage-cars`}><button className="w-full py-3 bg-blue-100 shadow-lg rounded-lg border border-gray-300 text-gray-900">Manage Cars</button></NavLink>
                                    <NavLink to={`${url}/make-admin`}><button className="w-full py-3 bg-blue-100 shadow-lg rounded-lg border border-gray-300 text-gray-900">Make Admin</button></NavLink>
                                </>
                        }

                        <NavLink to="/"><button className="w-full py-3 bg-blue-100 shadow-lg rounded-lg border border-gray-300 text-gray-900">Go to Home</button></NavLink>
                        <button onClick={logOut} className="w-full py-3 bg-blue-100 shadow-lg rounded-lg border border-gray-300 text-gray-900">Log Out</button>
                    </div>
                </div>
                <div className="col-span-4 xl:col-span-5">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/submit-review`}>
                            <SubmitReview></SubmitReview>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-cars`}>
                            <ManageCars></ManageCars>
                        </AdminRoute>
                        <AdminRoute path={`${path}/add-car`}>
                            <AddCar></AddCar>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;