import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="link-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;