import React,{useState} from 'react';

import StateTest from './StateTest';

function Counter(props) {
    // const newFunction = ()=>{
    //     const v = 10;
    //     const x = 20;
    //     return (
    //         <div>
    //             <h4>Mathematical operation</h4>
    //             <h3>{v+x}</h3>
    //         </div>
    //     )
    // }
    const [data, setState] = useState(4)
    console.log(props)
    
    function updateData(){
        setState('This is new updated data')
    }

    function toOriginal(){
        setState(data+1)
    }
    // console.log("This is for testing the state if it is working properly or not");


    const [name,setName] = useState('Joel Miller')
    function updateProps(){
        setName('Thomas Miller')
    }

    const v = 10;
    const [newvalue,setNewValue] = useState(v)
    function updateValue(){
        setNewValue(newvalue+1)
    }
    
    return(
        <div className='App'>
            <h2>This is functional component.</h2>
            <h3>{data}</h3>
            <button className='btn btn-primary btn-sm' onClick={()=>setState('This is updated with primary button data')}>Update Data</button>
            <button className='btn btn-warning btn-sm m-4' onClick={updateData}>New Update</button>
            <button className='btn btn-secondary btn-sm' onClick={toOriginal}>Increase the initial number</button>
            <button className='btn btn-danger btn-sm m-4' onClick={()=> alert("Danger alert in arrow function.")}>Alert</button><br/>
            <h2 style={{color:'darkviolet'}}>This is Props</h2>
            <h3>{props.name} and Email id is {props.value}</h3>
            <StateTest name={name} value={newvalue}/>
            <button className='btn btn-danger btn-sm m-2' onClick={updateProps}>UpdateSate</button>
            <button className='btn btn-primary btn-sm m-2' onClick={updateValue}>UpdateValue</button>
            
        </div>
        
    )
}

export default Counter;