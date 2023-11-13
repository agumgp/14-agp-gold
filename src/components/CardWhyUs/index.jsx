import React from "react";
import "./style.css"

const WhyUsCard = (props) => {
    return (
        <div className="card-list">
             {/* {props.image}
            <h1>{props.title}</h1>
            <p>{props.description}</p> */}

            {props.obj.image}
            <h1>{props.obj.title}</h1>
            <p>{props.obj.description}</p>
        </div>
    )
}

export default WhyUsCard;