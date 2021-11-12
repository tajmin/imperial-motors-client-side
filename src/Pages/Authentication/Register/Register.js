import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { emailRegistration, errorMessage, loading } = useAuth();
    const history = useHistory();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert('Password and Confirm Password Did Not Match!');
            return;
        }
        const { name, email, password } = data;
        emailRegistration(name, email, password, history);
        if (loading) {
            setIsLoading(true);
            reset();
        }
    };

    const handleGoogleLogin = () => {
        //google sign in
    }

    return (
        <div className="container mx-auto min-h-screen flex">
            <div className="bg-black p-10 xl:p-16 m-auto w-full xl:w-1/3 text-left rounded-lg shadow-2xl">
                {
                    isLoading ? <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                    </div> : <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="py-4">
                                <label className="block mb-2 text-lg font-semibold text-white" htmlFor="name">Your Name</label>
                                <input {...register("name", { required: true })} className="w-full py-2 border-none rounded" type="text" name="name" />
                                {errors.name && <span className="text-red-700">This field is required</span>}
                            </div>
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
                            <div className="py-4">
                                <label className="block mb-2 text-lg font-semibold text-white" htmlFor="confirmPassword" >Confirm Password</label>
                                <input {...register("confirmPassword", { required: true })} className="w-full py-2 border-none rounded" type="password" name="confirmPassword" />
                                {errors.confirmPassword && <span className="text-red-700">This field is required</span>}
                            </div>
                            <input className="px-6 py-2 bg-white hover:bg-black hover:text-white cursor-pointer rounded" type="submit" value="Submit" />
                            <div className="my-3"><p className="text-red-700">{errorMessage}</p></div>
                        </form>
                        <p className="text-white">Already Registered? <NavLink className="underline hover:text-black" to="/login">Sign in</NavLink></p>
                        <div className="mt-5">
                            <button onClick={handleGoogleLogin} className="px-8 bg-black text-white py-2 hover:bg-white hover:text-black rounded"> Google Sign In</button>
                        </div></>
                }

            </div>
        </div>
    );
};

export default Register;