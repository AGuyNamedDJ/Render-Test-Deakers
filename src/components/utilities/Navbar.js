// Imports 
import React from "react";
import { Link } from "react-router-dom";

// Component
const Navbar = ({}) => {
    return (
        <nav className="navbar">
            <Link to="/" id="navbar-text">Home</Link>
            <Link to="inventory" id="navbar-text">Inventory</Link>
            <Link to="service" id="navbar-text">Service</Link>
            <Link to="aboutus" id="navbar-text">About</Link>
            <Link to="contactus" id="navbar-text">Inquiry</Link>
            <Link to="newsandevents" id="navbar-text">News</Link>
            
        </nav>
    )
};

export default Navbar;