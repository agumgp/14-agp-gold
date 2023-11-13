import React from "react";
import "./style.css"

const SearchBox = (props) => {
    return (
        <div className="input-box-detail">
        <div className="box-title">
        {props.obj.title}
        </div>
        <div className="box-input">
        {props.obj.input}
        </div>
        </div>
    )
}

export default SearchBox;
