import React from "react";
import "./style.css"

const ListServices = (props) => {
    return (
    <div className="check-list">
        {props.obj.image}
        <p>{props.obj.title}</p>
    </div>
    )
}

export default ListServices;