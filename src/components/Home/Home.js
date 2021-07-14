import React, { useState } from "react";
import "./Home.css";
import {GiHospital} from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { IoFlash } from "react-icons/io5";
import { SiTrustpilot } from "react-icons/si";
import { ImCancelCircle, ImOpt } from "react-icons/im";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    return(
        <>
        <div className="header">  
            <Navbar />
                <div className="view-appointment">
                    <p>We here for your Care</p>
                    <h1>We Are The Best Doctors</h1>
                    <input type="submit" value="View an Appointment" className="submit" onClick={() => history.push('/appointment')} />
                </div>
            <div className="picture">
                <img src={`${process.env.PUBLIC_URL}/medicine.svg`} alt="Gambar" />
            </div>
        </div>
        </>
    );
}

export default Home;