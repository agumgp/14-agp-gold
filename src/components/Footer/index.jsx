import React from "react";
import "./style.css";
import facebook from "../../assets/icon_facebook.png";
import instagram from "../../assets/icon_instagram.png";
import twitter from "../../assets/icon_twitter.png";
import mail from "../../assets/icon_mail.png";
import twitch from "../../assets/icon_twitch.png";
import logo from "../../assets/blue_logo.png";

function Footer () {
    const SocMed = [
        {
            anchor : <a href="https://www.facebook.com"><img src={facebook} alt="facebook"/></a>,
        },
        {
            anchor : <a href="https://www.instagram.com"><img src={instagram} alt="instagram"/></a>,
        },
        {
            anchor : <a href="https://www.twitter.com"><img src={twitter} alt="twitter"/></a>,
        },
        {
            anchor : <a href="https://www.gmail.com"><img src={mail} alt="mail"/></a>,
        },
        {
            anchor : <a href="https://www.twitch.com"><img src={twitch} alt="twitch"/></a>,
        },
    ]

    return (
        <div class="footer-container">
        <div class="left-content">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
        </div>
        <div class="middle-left-content">
            <a href="#OurServices">Our Services</a>
            <a href="#WhyUs">Why Us</a>
            <a href="#Testimonial">Testimonial</a>
            <a href="#FAQ">FAQ</a>
        </div>
        <div class="middle-right-content">
        <p>Connect with us</p>
        <div className="middle-right-logo-container">
            {SocMed.map((obj) => {
                return (
            
            <div class="middle-right-logo">
            {obj.anchor}
            </div>
            
                )
                })
                
                }
        </div>
        </div>
        <div class="right-content">
            <p>Copyright Binar 2022</p>
            <img src={logo} alt="logo"/>
        </div>
    </div>
    );
};

export default Footer;