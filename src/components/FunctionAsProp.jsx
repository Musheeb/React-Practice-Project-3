import React from "react";

import FormExample from './Example';

function FunctionAsProp(props){
    return(
        <div>
            <h1>This is Function As Props Component</h1>
            <h3>{props.defaultState}</h3>
            <button className="btn btn-primary btn-sm m-2" 
            onClick={props.passFunction}>Change above state</button>
            <FormExample ></FormExample>
        </div>
    )
}

export default FunctionAsProp;