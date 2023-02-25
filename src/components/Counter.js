import React from "react";

export default function Counter(props) {
    return (
        <div className="counter">
            <h2>Hits: {props.score}</h2>
            <h3>High score: {props.hiScore}</h3>
        </div>
    )
}