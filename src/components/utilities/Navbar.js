// Imports 
import React from "react";
import { Link } from "react-router-dom";

// Component
const Navbar = ({}) => {
    return (
        <nav className="navbar">
            <Link to="/" id="navbar-text">Home</Link>
            <Link to="/vehicles" id="navbar-text">Vehicles</Link>
            <Link to="aboutus" id="navbar-text">About</Link>
            <Link to="contactus" id="navbar-text">Inquiry</Link>
            
        </nav>
    )
};

export default Navbar;