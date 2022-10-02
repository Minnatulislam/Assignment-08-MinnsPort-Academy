import React from 'react';
import logo from "../../media/LOGO.png"

const Header = () => {
    return (
      <div className="flex justify-between mt-10 mb-10">
        <div className="flex items-center">
          <img className="w-44 mr-2 ml-1" src={logo} alt="" />
          <h1 className="text-3xl font-semibold">Academy</h1>
        </div>
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-ghost btn-outline lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
      </div>
    );
  };
  
export default Header;