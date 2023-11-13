import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
import Logo from "../../assets/blue_logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
const [isSidebarOpen, setSidebarOpen] = useState(false);

const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
};

return (
    <div className={`navbar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
    <div className="logo">
        <Link to={"/"}>
        <img src={Logo} alt="" />
        </Link>
    </div>
    <div className="navbar-menu">
        <a href="#OurServices">Our Services</a>
        <a href="#WhyUs">Why Us</a>
        <a href="#Testimonial">Testimonial</a>
        <a href="#FAQ">FAQ</a>
    </div>
    <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
    </div>
    </div>
);
};

export default Navbar;
