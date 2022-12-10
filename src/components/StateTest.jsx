import { useState } from "react";
 

function StateTest(props){
    const [data,setState] = useState('This is Unchanged or raw State.')
    const updatedSetState = 'This is updated state.'
    return (
        <div>
            <h1>This is StateTest component in H1 Tag.</h1>
            <h2>{data}</h2>
            <button className="btn btn-success btn-sm m-2" onClick={()=>setState(updatedSetState)}>Update State</button>
            <p>{props.name} and Rank is {props.value}</p>
        </div>
    ) 
}

export default StateTest;