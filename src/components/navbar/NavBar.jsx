import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar-content">
            <h2>React App</h2>
            <nav className="content-items">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
            <div></div>
        </div>
    );
};

export default NavBar;
