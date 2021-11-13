import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { emailLogin, errorMessage } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const onSubmit = data => {
        const { email, password } = data;
        emailLogin(email, password, location, history);
        setIsLoading(true);
        reset();
    };

    return (
        <div className="container mx-auto min-h-screen flex">
            <div className="bg-red-500 p-10 xl:p-16 m-auto w-full xl:w-1/3 text-left rounded-lg shadow-2xl">
                {
                    isLoading ? <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                    </div> : <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="py-4">
                                <label className="block mb-2 text-lg font-semibold text-white" htmlFor="email">Your Email</label>
                                <input {...register("email", { required: true })} className="w-full py-2 border-none rounded" type="text" name="email" />
                                {errors.email && <span className="text-red-700">This field is required</span>}
                            </div>
                            <div className="py-4">
                                <label className="block mb-2 text-lg font-semibold text-white" htmlFor="password">Password</label>
                                <input {...register("password", { required: true })} className="w-full py-2 border-none rounded" type="password" name="password" />
                                {errors.password && <span className="text-red-700">This field is required</span>}
                            </div>
                            <input className="px-6 py-2 bg-white hover:bg-black hover:text-white cursor-pointer rounded" type="submit" value="Submit" />
                            <div className="my-3"><p className="text-red-700">{errorMessage}</p></div>
                        </form>
                        <p className="text-white">New User? <NavLink className="underline hover:text-black" to="/register">Register Now</NavLink></p>
                    </>
                }

            </div>
        </div>
    );
};

export default Login;