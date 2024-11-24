import { NavLink } from "react-router-dom";

import React from 'react';
import { PiBuildingApartment } from "react-icons/pi";
import { BsHouses } from "react-icons/bs";
import { ImOffice } from "react-icons/im";

const Categories = () => {
    return (
        <div>
            <div className="flex justify-center items-center space-x-4">
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "flex justify-center text-xs lg:text-lg items-center w-20 lg:w-36 bg-[#3d84a8] text-white px-3 py-2 lg:py-5 rounded-xl"
                                : "flex justify-center text-xs lg:text-lg items-center w-20 lg:w-36 border-2 border-[#3d84a8] bg-gray-200 text-gray-700 px-3 py-2 lg:py-5 rounded-xl"
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
                                ? "flex justify-center items-center text-xs lg:text-lg w-20 lg:w-36 bg-[#3d84a8] text-white px-3 py-2 lg:py-5 rounded-xl"
                                : "flex justify-center items-center text-xs lg:text-lg w-20 lg:w-36 border-2 border-[#3d84a8] bg-gray-200 text-gray-700 px-3 py-2 lg:py-5 rounded-xl"
                        }
                    >
                     Apartment <span className="hidden sm:block"><PiBuildingApartment className="ml-2" /></span>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/type/House"
                        className={({ isActive }) =>
                            isActive
                                ? "flex justify-center items-center text-xs lg:text-lg w-20 lg:w-36 bg-[#3d84a8] text-white px-3 py-2 lg:py-5 rounded-xl"
                                : "flex justify-center items-center text-xs lg:text-lg w-20 lg:w-36 border-2 border-[#3d84a8] bg-gray-200 text-gray-700 px-3 py-2 lg:py-5 rounded-xl"
                        }
                    >
                     House <span className="hidden sm:block"><BsHouses className="ml-2" /></span>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/type/Commercial"
                        className={({ isActive }) =>
                            isActive
                                ? "flex justify-center items-center text-xs lg:text-lg w-20 lg:w-36 bg-[#3d84a8] text-white px-3 py-2 lg:py-5 rounded-xl"
                                : "flex justify-center items-center text-xs lg:text-lg w-20 lg:w-36 border-2 border-[#3d84a8] bg-gray-200 text-gray-700 px-3 lg py-2 lg:py-5 rounded-xl"
                        }
                    >
                        Commercial <span  className="hidden sm:block"><ImOffice className="ml-2" /></span>
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Categories;