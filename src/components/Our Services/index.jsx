import React from "react";
import "./style.css"
import checklist from "../../assets/Group 53.png"
import femaleimg from "../../assets/img_service.png"
import ListServices from "../Service List";

function OurServices () {
    const ServiceList = [
        {
            image: <img src={checklist} alt="" />,
            title: "Sewa Mobil Dengan Supir di Bali 12 Jam",
        },
        {
            image: <img src={checklist} alt="" />,
            title: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
        },
        {
            image: <img src={checklist} alt="" />,
            title: "Sewa Mobil Jangka Panjang Bulanan",
        },
        {
            image: <img src={checklist} alt="" />,
            title: "Gratis Antar - Jemput Mobil di Bandara",
        },
        {
            image: <img src={checklist} alt="" />,
            title: "Layanan Airport Transfer / Drop In Out",
        },
    ]

    return (
        <div class="our-service" id="OurServices">
            <div className="img-service">
                <img src={femaleimg} alt="female"/>
            </div>
            
            <div className="container-service">
            <div className="desc">
                <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            </div>
            
        <div className="service-list">
            
        {ServiceList.map((obj) => (
            <ListServices obj={obj} />
            ))
        }
        </div>
        </div>
        </div>
    )
}

export default OurServices;