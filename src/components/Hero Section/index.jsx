import React from "react";
import "./style.css";
import CarImage from "../../assets/img_car.png";
import { Link, useLocation } from "react-router-dom"

const Hero = () => {
    const location = useLocation();
    

    let isButtonVisible = true;

    if (location.pathname === "/SearchCar") {
    isButtonVisible = false;

    }

    return (

            

            <div class="container-header-bottom">
                <div class="header-bot-sewa">
                    <p class="sewa">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                    <p class="welcome">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    
                    
                    {isButtonVisible && (
                        <Link to={"/SearchCar"}>
                            <button class="mulai-button">Mulai Sewa Mobil</button>
                        </Link>
                    )}
                
                
                </div>
                <div class="header-bot-imgcar">
                    <img src={CarImage} alt="img"/>
                </div>
            </div>

    );
};

export default Hero;
