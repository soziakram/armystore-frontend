import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="p-4 bg-black text-white">
        <div className="container flex justify-between h-16 mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center font-turney text-2xl font-semibold whitespace-nowrap text-green-600 font- dark:text-white">
              Army Store
            </span>
          </a>

          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border-transparent hover:text-green-200 focus:text-green-400  activ:text-green-200  hover:border-green-100"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="contactus"
                className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border-transparent hover:text-green-200 focus:text-green-400  activ:text-green-200   hover:border-green-100"
              >
                contact us
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="payment"
                className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border-transparent hover:text-green-200 focus:text-green-400  activ:text-green-200  hover:border-green-100"
              >
                Payment
              </Link>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
          
            <button className="self-center px-8 py-3 font-semibold rounded bg-green-600 text-white">
              Sign up
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
