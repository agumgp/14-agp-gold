import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div class="banner-container">
            <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            
            <div class="button-rent-container">
            <Link to={"/SearchCar"}>
            <button>Mulai Sewa Mobil</button>
            </Link>
            </div>
        </div>
    )
}

export default Banner;