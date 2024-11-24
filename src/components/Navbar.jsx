import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar  p-4 space-y-2 w-11/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="cursor-pointer text-xl font-semibold ">UI-Dashboard</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex justify-center items-center gap-7">
                    <NavLink  to="/"    className={({ isActive }) => `text-lg ${isActive ? "font-semibold rounded-xl text-[#3d84a8]" : "hover:text-[#3d84a8] cursor-pointer"}`} > Dashboard</NavLink>
                    <NavLink  to="/inbox" className={({ isActive }) =>`text-lg ${isActive ?"font-semibold rounded-xl text-[#3d84a8]" : "hover:text-[#3d84a8] cursor-pointer"}`} > Inbox</NavLink>
                    <NavLink  to="/blog" className={({ isActive }) =>`text-lg ${isActive ? "font-semibold rounded-xl text-[#3d84a8]" : "hover:text-[#3d84a8] cursor-pointer"}`} > Blogs</NavLink>
                </div>
            </div>
            <div className="navbar-end">
                <div className=" hidden lg:flex justify-between items-center gap-3">
                <CiSearch className="text-2xl cursor-pointer font-bold text-gray-600" />
                <IoIosNotifications className="text-2xl cursor-pointer font-bold text-gray-600 " />
                </div>
                <NavLink to="/login" className="btn bg-[#3d84a8] text-gray-50 text-base lg:text-lg ml-4">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;