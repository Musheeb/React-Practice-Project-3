import React, { useState } from "react";

import Form from './Form';

function Noumi() {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    function inputOperation(val) {
        // console.log(val.target.value)
        setData(val.target.value)
    }
    return (
        <div>
            <h1>Noumi Component</h1>
            {
                print ?
                    <h3 style={{
                        color: 'darkorchid',
                        fontWeight: 'bolder',
                        fontFamily: 'cursive'
                    }}>{data}
                    </h3> :
                    null
            }
            <input className="m-4"
                type="text"
                placeholder="Type something"
                onChange={inputOperation}
            />
            <button className="btn btn-primary btn-sm m-2" onClick={() => setPrint(true)}>Print Data</button>
            <button className="btn btn-warning btn-sm m-2" onClick={() => setData(null)}>Reset Text</button>
            <Form></Form>
        </div>

    )
}

export default Noumi;