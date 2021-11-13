import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ClipLoader from "react-spinners/RiseLoader";

const AdminRoute = ({ children, ...rest }) => {
    const { user, loading, isAdmin } = useAuth();
    const color = "#ffd700";

    if (!isAdmin || loading) {
        return (
            <div className="min-h-screen flex">
                <div className="m-auto">
                    <ClipLoader color={color} loading={loading} size={40} />
                </div>
            </div>
        );
    }

    return (
        <Route {...rest}
            render={({ location }) => user.email && isAdmin ? children : <Redirect to={{
                pathname: "/",
                state: { from: location }
            }}
            ></Redirect>}
        >
        </Route>
    );

};

export default AdminRoute;