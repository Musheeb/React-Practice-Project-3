import React from "react";

function BeAlly(props){
    return(
        <div>
            <h1>This is BeAlly Component</h1>
            <h2>Client Name:- {props.clientName} <br /> Client Country:- {props.country} </h2>
        </div>
    )
}

export default BeAlly;