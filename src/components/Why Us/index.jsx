import React from "react";
import "./style.css";
import thumbs from "../../assets/icon_complete.png"
import tag from "../../assets/icon_price.png"
import clock from "../../assets/icon_24hrs.png"
import award from "../../assets/icon_professional.png"
import WhyUsCard from "../CardWhyUs";

function Card () {
const WhyUs = [
        {
        image: <img src={thumbs} alt="" />,
        title: "Mobil Lengkap",
        description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
        },
        {
        image: <img src={tag} alt="" />,
        title: "Harga Murah",
        description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
        },
        {
        image: <img src={clock} alt="" />,
        title: "Layanan 24 Jam",
        description: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
        },
        {
        image: <img src={award} alt="" />,
        title: "Sopir Profesional",
        description: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
        },        
    ]

    return (
        <div className="why-us" id="WhyUs">
        <div class="word-why-us">
            <p>Why Us?</p>
        </div>
        <div class="why-choose">
            <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="why-us-list-item">

            
            {/* {WhyUs.map(obj => {
                return (
                    <WhyUsCard image={obj.image} title={obj.title} description={obj.description} />
                )
            })
            } */}
            
            {WhyUs.map(obj => {
                return (
                    <WhyUsCard obj={obj} />
                )
            })
            }
        </div>
        </div>
    )

        }


export default Card;