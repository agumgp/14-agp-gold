import React, { useState } from "react";
import "./style.css"
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBox from "../Search Car Box";

function SearchCar () {
    const [searchCar, setSearchCar] = useState ("")
    const [filterCategory, setFilterCategory] = useState ("")
    const [filterPrice, setPrice] = useState ("")
    const [filterStatus, setFilterStatus] = useState ("")
    const [isReset, setIsReset] = useState(false)

    const handleChangeName = (e) => {
        setSearchCar(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setFilterCategory(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleChangeStatus = (e) => {
        setFilterStatus(e.target.value)
    }
    
    const InputSearch = [
        {     
            title: "Nama Mobil",
            input: <input value={searchCar} onChange={handleChangeName} placeholder="Ketik nama/tipe mobil"></input>,
        },
        {
            title: "Kategori",
            input: <select value={filterCategory} onChange={handleChangeCategory} type="text" id="MySelect" name="name" placeholder="Masukan Kapasitas Mobil">
                <option value="" disabled >Masukan Kapasitas Mobil</option>
                <option value="small">2 - 4 Orang</option>
                <option value="medium">4 - 6 Orang</option>
                <option value="large">6 - 8 Orang</option>
            </select>,
        },
        {
            title: "Harga",
            input: <select value={filterPrice} onChange={handleChangePrice} type="text" id="MySelect" name="name" placeholder="Masukan Harga Sewa per Hari">
                <option value="" disabled>Masukan Harga Sewa per Hari</option>
                <option value="minPrice=0&maxPrice=400000"> &lt; Rp. 400.000 </option>
                <option value="minPrice=400000&maxPrice=600000"> Rp. 400.000 - Rp. 600.000</option>
            </select>,
        },
        {
            title: "Status",
            input: <select value={filterStatus} onChange={handleChangeStatus} id="MySelect" name="status" placeholder="Disewa">
                <option value="" disabled>Status</option>
                <option value="true"> Disewa </option>
                <option value="false"> Tidak Disewa </option>
            </select>,
        },
    ]

    const [carList , setCarList ] = useState ([])
    

    useEffect(() => {
        handleGetListCar(searchCar, filterCategory,filterPrice,filterStatus)
    }, [])

    const handleGetListCar = (dataSearch, dataCategory, dataPrice, dataStatus) => {
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/v2/car?page=1&pageSize=10&name=${dataSearch}&category=${dataCategory}&${dataPrice}&status=${dataStatus}`)
            .then((res) => {
                console.log(res)
                setCarList (res.data.cars)
            })
            .catch((err) => console.log(err))
    }

    const handleReset = () => {
        setSearchCar("")
        setFilterCategory("")
        setPrice("")
        setFilterStatus("")
        setIsReset(false)
        handleGetListCar("", "", "", "")
    }

    const handleSubmit = () => {
        // console.log(searchCar,filterCategory,filterPrice,filterStatus)
        handleGetListCar(searchCar,filterCategory,filterPrice,filterStatus)
        setIsReset(true)
    }


    return (
        <div className="main-box-container">

        <div className="input-box">
        {InputSearch.map((obj) => (
            <SearchBox obj={obj} />
            ))
        }
    <div className="search-car-button">
    <button onClick={isReset ? handleReset : handleSubmit }>{isReset ? "Reset" : "Cari Mobil"}</button>
    </div>
    </div>
    <div className="car-show">
        {carList.length ? (carList.map((obj) => (
            <div className="car-list-container">
                <img src={obj.image} alt="" />
                <h1>{obj.name}</h1>
                <h2>Rp {obj.price} / Hari</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, est? Sapiente neque ullam temporibus sit quas nesciunt tenetur dignissimos amet porro libero accusantium nam esse nihil a nemo, voluptatibus non.</p>
                <Link to={`/SearchCar/${obj.id}`}>
                <button>Pilih Mobil</button>
                </Link>
            </div>
        )))
    : (<h1 className="not-found">Data Tidak Ditemukan!</h1>)
    }
    </div>
    </div>

        )
}

export default SearchCar;