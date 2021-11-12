import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ClipLoader from "react-spinners/RiseLoader";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const color = "#ffd700";

    if (loading) {
        return (
            <div className="min-h-screen flex">
                <div className="m-auto">
                    <ClipLoader color={color} loading={loading} size={50} />
                </div>
            </div>
        );
    }

    return (
        <Route {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;