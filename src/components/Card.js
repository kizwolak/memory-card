import React from "react";

export default function Card(props) {
    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.img} alt='headshot'></img>
            <h3>{props.name}</h3>
        </div>
    )
}