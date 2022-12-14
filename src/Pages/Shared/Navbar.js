import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import '../Home/style.css'

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('token')
  };

  const menuItems = (
    <>
      <li>
        <Link className="a" to="/">Home</Link>
        <Link className="a" to="/about">About</Link>
        <Link className="a" to="/blogs">Blogs</Link>
        <Link className="a" to="/portfolio">Portfolio</Link>
        {user && <>
          <Link className="a" to="/dashboard">Dashboard</Link>
        </>}
        {user ? (
          <>
            <button  className="font-bold text-black bg-success" onClick={() => logout()}>
              LogOut{" "}
            </button>
            <span className="font-bold">{user?.displayName}</span>
          </>
        ) : (
          <Link className="bg-lime-300 font-bold text-black " to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn logo normal-case text-xl" alt="l">
       
          Manufacturer
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {/* {user && (
        <a className="btn">
          <span>{user?.displayName}</span>
        </a>
      )} */}
      <div class="navbar-end">
        <label
          for="dashboard_side_nav"
          tabIndex="1"
          className="btn btn-ghost lg:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
