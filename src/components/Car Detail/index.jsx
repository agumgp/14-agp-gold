import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css"
import userIcon from "../../assets/fi_users.png"

const CarDetail = () => {
    const param = useParams()

    const [ detailCar, setDetailCar ] = useState({})

    useEffect (() => {
        handleGetDetailCar()
    }, [])

    const handleGetDetailCar = () => {
        axios
        .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
        .then((res) => {
            console.log(res)
            setDetailCar(res.data)
        }) 
        .catch((err) => console.log(err))
    }

    return(

        <div className="main-container-detail-car">
            <div className="left-container-detail">
                <h1>Tentang</h1>
                <h1>Include</h1>
                <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                </ul>
                <h1>Exclude</h1>
                <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h1>Refund, Reschedule, Overtime</h1>
                <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
            </div>
            <div className="right-container-detail">
            <img src={detailCar.image} alt="" />
            <h1>{detailCar.name}</h1>
            <div className="category-contain">
            <img src={userIcon} alt="" />
            <p>{detailCar.category}</p>
            </div>
            <div className="grand-total-price">
            <h2>Total</h2>
            <h2>Rp {detailCar.price}</h2>
            </div>
            </div>
        </div>

    )
}

export default CarDetail;