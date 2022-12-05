import React, { useState } from "react";

import BeAlly from "./BeAlly";

//props is not naming convention we can take other names as well for parameter. eg "crops" in the 
//following example
function NewComponent(crops) {
    const [data, setNewData] = useState("State in NewComponent's Component")
    function updateState(){
        setNewData("Updated NewComponent's Component")
    }
    return (
        <div>
            <h1 style={{ color: "darkblue" }}>This is NewComponent in H1 tag.</h1>
            <h2>{data}</h2>
            <button className="btn btn-success btn-sm m-2" onClick={updateState}>UpdateState</button>
            <h1 style={{color:'darkgoldenrod'}}>{crops.name}</h1>
            <BeAlly clientName='TeaLeta' country='France' />
        </div>

    )
}

export default NewComponent;