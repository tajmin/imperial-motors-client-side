import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { authToken } = useAuth();

    const handleForm = data => {
        const user = { email: data.email }

        fetch('https://pacific-sands-70895.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Made Admin successfully!');
                    reset();
                }
            })
    };

    return (
        <div>
            <h1 className="text-3xl text-white-500">Make Admin</h1>
            <div className="container max-w-md xl:max-w-xl mx-auto">
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className="py-4">
                        <input {...register("email", { required: true })} placeholder="Enter user email" className="w-full py-2 px-2 border-none rounded" type="email" name="email" />
                        {errors.email && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div className="py-3 sm:flex sm:flex-row-reverse">
                        <input type="submit" value="Submit" className="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;