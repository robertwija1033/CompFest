import React, { useState } from "react";
import "./Appointment.css";
import { GiPriceTag } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { IoFlash } from "react-icons/io5";
import { SiTrustpilot } from "react-icons/si";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useHistory } from "react-router-dom";


const Appointment = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return(
        <>  
            <div className="header-appointemnt"></div>
            <Navbar />
            <div className="main">
                <img src={`${process.env.PUBLIC_URL}/foto-hospital.jpg`} alt="Gambar" />
            </div>
            <div className="header-cards">
                <Slider {...settings}>
                    <div className="card1">
                        <GiPriceTag className="price-tag"/>
                        Wallet Friendly
                    </div>
                    <div className="card2">
                        <IoFlash className="flash" />
                        Instant
                    </div>
                    <div className="card3">
                        <GiHealthNormal className="good" />
                        healthy
                    </div>
                    <div className="card4">
                        <MdHighQuality className="quality"/>
                        quality
                    </div>
                    <div className="card5">
                        <SiTrustpilot className="trust" />
                        Trusted
                    </div>
                </Slider>
            </div>
            <div className="doctor">
                <div className="profile">Dokter Spesialis</div>
                <div className="all-doctors">
                    <div className="profile1">
                        <img src={`${process.env.PUBLIC_URL}/robert.jpeg`} alt="Gambar" />
                        <p>Dokter Bedah</p>
                        <p>Robert Angkasa</p>
                    </div>
                    <div className="profile2">
                        <img src={`${process.env.PUBLIC_URL}/userIcon.png`} alt="Gambar" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appointment;