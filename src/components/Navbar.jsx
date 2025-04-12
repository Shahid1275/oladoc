import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex text-sm items-center justify-between py-4 sticky border-b top-0 bg-white z-50">
      <h2 className="text-4xl font-bold cursor-pointer">
        <span className="text-yellow-500">ola</span>
        <span className="text-blue-500">doc</span>
      </h2>
      <ul className="hidden md:flex gap-8 items-center font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative ${isActive ? "text-blue-500" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <li className="hover:text-blue-500 transition-colors">HOME</li>
              <hr
                className={`absolute -bottom-1 left-0 w-full h-0.5  transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            `relative ${isActive ? "text-blue-500" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <li className="hover:text-blue-500 transition-colors">
                ALL DOCTORS
              </li>
              <hr
                className={`absolute -bottom-1 left-0 w-full h-0.5  transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative ${isActive ? "text-blue-500" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <li className="hover:text-blue-500 transition-colors">ABOUT</li>
              <hr
                className={`absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative ${isActive ? "text-blue-500" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <li className="hover:text-blue-500 transition-colors">CONTACT</li>
              <hr
                className={`absolute -bottom-1 left-0 w-full h-0.5  transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className="flex items-center gap-2 group relative cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={assets.profile_pic}
                alt="Profile"
              />
              <img
                className="w-2.5 transition-transform group-hover:rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
            </div>
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-md py-2 w-48 text-base font-medium text-gray-600 hidden group-hover:block z-20">
              <div className="flex flex-col">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/myappointments")}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="px-4 py-2 hover:bg-gray-100 text-red-500 hover:text-red-600"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-full font-light hidden md:block hover:bg-blue-600 transition"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
