import { NavLink } from "react-router-dom";

import React from 'react';

const Categories = () => {
    return (
        <div>
            <div className="flex justify-center items-center space-x-4">
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "flex justify-center text-sm lg:text-lg items-center w-20 lg:w-36 bg-purple-500 text-white px-3 py-2 lg:py-5 rounded-xl"
                                : "flex justify-center text-sm lg:text-lg items-center w-20 lg:w-36 bg-gray-200 text-gray-700 px-3 py-2 lg:py-5 rounded-xl"
                        }
                    >
                        All
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/type/Apartment"
                        className={({ isActive }) =>
                            isActive
                                ? "flex justify-center items-center text-sm lg:text-lg w-20 lg:w-36 bg-purple-500 text-white px-3 py-2 lg:py-5 rounded-xl"
                                : "flex justify-center items-center text-sm lg:text-lg w-20 lg:w-36 bg-gray-200 text-gray-700 px-3 py-2 lg:py-5 rounded-xl"
                        }
                    >
                       Apartment
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/type/House"
                        className={({ isActive }) =>
                            isActive
                                ? "flex justify-center items-center text-sm lg:text-lg w-20 lg:w-36 bg-purple-500 text-white px-3 py-2 lg:py-5 rounded-xl"
                                : "flex justify-center items-center text-sm lg:text-lg w-20 lg:w-36 bg-gray-200 text-gray-700 px-3 py-2 lg:py-5 rounded-xl"
                        }
                    >
                     House
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/type/Commercial"
                        className={({ isActive }) =>
                            isActive
                                ? "flex justify-center items-center text-sm lg:text-lg w-20 lg:w-36 bg-purple-500 text-white px-3 py-2 lg:py-5 rounded-xl"
                                : "flex justify-center items-center text-sm lg:text-lg w-20 lg:w-36 bg-gray-200 text-gray-700 px-3 lg py-2 lg:py-5 rounded-xl"
                        }
                    >
                        Commercial
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Categories;