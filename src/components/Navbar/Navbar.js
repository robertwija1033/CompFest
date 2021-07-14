import React, { useState } from "react";
import "./Navbar.css";
import {GiHospital} from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';
import { ImCancelCircle } from "react-icons/im";


const Navbar = () => {
    const [openSlideBarClick, setOpenSlideBarClick] = useState(false);

    return(
            <div className="navbar">
                <div className="title">
                    <div className="title-header">
                        <GiHospital className="svg"/>
                        <h1>Hospital SR</h1>
                    </div>
                </div>
                <div className="menu">
                        <GiHamburgerMenu className="hamburger-menu" onClick={() => setOpenSlideBarClick(true)} />
                </div>
                <div className={`nav-links ${openSlideBarClick ? "active" : ""}`}>
                    <div className="close">
                        <ImCancelCircle className="cancel" onClick={() => setOpenSlideBarClick(false)} />
                    </div>
                    <Link to="/" className="nav-link1">Home</Link>
                    <Link to="/register" className="nav-link3">Log Out</Link>
                </div>
            </div>
    );
}

export default Navbar;




















