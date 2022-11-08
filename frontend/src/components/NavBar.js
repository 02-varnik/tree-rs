import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";
function Navbar(props) {

  const auth = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const logoutButtonHandler = async ()=>{
    auth.logout();
  }

  return (
    <nav className="top-0 z-50 w-full shadow-sm bg-divcol shadow-purple-500/50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
        <div className="">
          <div className="flex items-center justify-between py-4 md:block">
            <Link to="/">
              <h2 className="text-2xl font-bold text-[#7F027E]">TREE R</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-purple-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => {
                  setNavbar(!navbar);
                  setSidebar(false);
                }}
              >
                {/* left side */}
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          {/* left side wala */}
          <div
            className={`flex-1  justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {props.isLoggedIn ? (
                <>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/post/new">New Post</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/contact-us">CONTACT US</Link>
                  </li>
                  <li className="text-gray-600 hover:text-purple-600">
                    <Link
                      to="/"
                      onClick={() => {
                        logoutButtonHandler()
                      }}
                    >
                      LOGOUT
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/login">LOGIN</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/contact-us">CONTACT US</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* right side wala */}
          <div
            className={`flex-1 justify-self-center text-gray-500 pb-3 mt-8 md:hidden ${
              sidebar ? "block" : "hidden"
            }`}
          >
            Hello
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
