import { useEffect, useState } from 'react';
import checkIn from '../assets/check-icon.png'
import checkOut from '../assets/checkout.png'
const Banner = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);
    const handleThemeChange = () => {
        setIsDark((prevTheme) => !prevTheme);
    };
    return (
        <div className='mb-16 mt-10'>
            {/* User Intro */}
            <div className='w-11/12 mx-auto mb-10 flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-gray-800'>Welcome,<span>User</span></h2>
                </div>
                <div>
                    <label className="swap swap-rotate">
                        {/* Hidden checkbox */}
                        <input
                            type="checkbox"
                            checked={isDark}
                            onChange={handleThemeChange}
                        />

                        {/* Sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* Moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>
            <div className='w-11/12 mx-auto flex flex-col lg:flex-row justify-center items-center gap-6'>
                {/* Check In And Checkout Section */}
                <div className='w-full lg:w-1/2'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Card 1: CheckIns */}
                        <div className="flex items-center justify-between border rounded-2xl p-6 shadow-sm">
                            <div>
                                <h3 className="text-lg lg:text-xl font-semibold">CheckIns</h3>
                                <p className="text-2xl lg:text-3xl  font-bold">12</p>
                            </div>
                            <div>
                                <img
                                    className="w-12 h-12 rounded-3xl"
                                    src={checkIn}
                                    alt="CheckIn Icon"
                                />
                            </div>
                        </div>

                        {/* Card 2: CheckOuts */}
                        <div className="flex items-center justify-between border rounded-2xl p-6 shadow-sm">
                            <div>
                                <h3 className="text-lg lg:text-xl font-semibold">CheckOuts</h3>
                                <p className="text-2xl lg:text-3xl font-bold">32</p>
                            </div>
                            <div>
                                <img
                                    className="w-12 h-12 rounded-xl"
                                    src={checkOut}
                                    alt="CheckOut Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Statistics Sections */}
                <div className='w-full lg:w-1/2 flex flex-col lg:flex-row justify-center items-center gap-4'>
                    {/* Stat-1 Starts*/}
                    <div className='px-16 lg:p-x-0'>
                        <div className="stats shadow">
                            <div className="stat place-items-center">
                                <div className="stat-title">Total Check In</div>
                                <div className="stat-value">31K</div>
                                <div className="stat-desc">From January 1st to February 1st</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Users</div>
                                <div className="stat-value text-[#3d84a8]">4,200</div>
                                <div className="stat-desc text-[#3d84a8]">↗︎ 40 (2%)</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">New Registers</div>
                                <div className="stat-value">1,200</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>
                        </div>
                    </div>
                    {/* Stat-2 Ends */}
                </div>
            </div>
        </div>
    );
};

export default Banner;