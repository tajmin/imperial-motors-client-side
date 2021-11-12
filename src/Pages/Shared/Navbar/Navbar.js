import React from 'react';
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const navigation = [
    { name: 'Dashboard', to: '/dashboard', current: false },
    { name: 'Manage Orders', to: '/manage-orders', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const { user, logOut } = useAuth();

    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-24">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="-ml-20 md:ml-0 flex-shrink-0 flex items-center">
                                    <img className="block lg:hidden h-8 w-auto" src={logo} alt="" />
                                    <img className="hidden lg:block h-16 w-auto" src={logo} alt="" />
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-2">
                                        <NavLink to="/home" className="text-base text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</NavLink>
                                        <NavLink to="/inventory" className="text-base text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Explore Inventory</NavLink>

                                        {user.email && navigation.map((item) => (
                                            <NavLink key={item.name} to={item.to}
                                                className="text-base text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
                                                {item.name}
                                            </NavLink>
                                        ))}
                                        {
                                            user.email ?
                                                <button type="button" onClick={logOut} className="text-base text-gray-300 bg-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md" >Log Out</button>
                                                :
                                                <Link to="/login">
                                                    <button type="button" className="ml-2 text-base bg-green-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md" >
                                                        Log In
                                                    </button>
                                                </Link>
                                        }
                                    </div>
                                </div>

                                {/* Profile  */}
                                {user.email &&
                                    <div className="ml-3 relative">
                                        <div>
                                            <span className="flex text-sm text-green-600">
                                                <span className="">{user.displayName}</span>
                                            </span>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 text-left">
                            <NavLink to="/home" className="text-gray-400 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
                            {user.email && navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={classNames(
                                        item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-200 hover:text-black',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            {
                                user.email ?
                                    (
                                        <button type="button" onClick={logOut} className="text-gray-400 w-full text-left hover:text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium" >
                                            Log Out
                                        </button>)
                                    : <NavLink to="/login"
                                        className="text-gray-400 w-full text-left hover:text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium" >Log In
                                    </NavLink>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;