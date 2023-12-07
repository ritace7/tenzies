import React from "react";

export default function Die(props){
    return(
        <div className={`die-container ${props.isHeld?"held":""}`} onClick={props.holdDice}>
            <h2 className="die-value">{props.value}</h2>
        </div>
    )
}