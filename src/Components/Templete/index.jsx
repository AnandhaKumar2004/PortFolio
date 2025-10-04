import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faHouse, faUser, faList, faComments, faBriefcase, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Added faTimes for close icon

const Template = () => {
    // State to manage the open/closed state of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getNavLinkClass = ({ isActive }) => {
        return `nav-link ${isActive ? "active-nav" : ""}`;
    };

    // Component for the navigation links
    const NavLinks = () => (
        <ul className="list">
            <li className="list-item">
                <NavLink to="/" className={getNavLinkClass} end onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faHouse} />
                    <p>HOME</p>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/about" className={getNavLinkClass} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faUser} />
                    <p>ABOUT</p>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/solutions" className={getNavLinkClass} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faList} />
                    <p>SOLUTIONS</p>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/projects" className={getNavLinkClass} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>PORTFOLIO</p>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/contact" className={getNavLinkClass} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faComments} />
                    <p>CONTACT</p>
                </NavLink>
            </li>
        </ul>
    );

    return (
        <>
            {/* Desktop View Sidebar */}
            <div className="big-bg-container">
                <div className="logo-container">
                    <NavLink to="/" className={getNavLinkClass} end onClick={toggleMenu}>
                      <img
                        src={logo}
                        alt="Company Logo"
                        className="logo"
                    />
                    </NavLink>
                </div>
                <nav className="content-container">
                    <NavLinks />
                </nav>
            </div>

            {/* Mobile View Navbar and Menu */}
            <div className="mobile-navbar">
                <div className="logo-container-mobile">
                    <NavLink to="/">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="logo"
                    />
                    </NavLink>
                </div>
                <button className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
                
                {/* Conditionally render mobile menu overlay */}
                <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                    <NavLinks />
                </nav>
            </div>
        </>
    );
};

export default Template;