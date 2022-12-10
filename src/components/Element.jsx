import React, { useState } from 'react';

import FunctionAsProp from './FunctionAsProp';

function Element() {
    const [dataForChild, setdataForChild] = useState('This is just a string to test the function.')
    function passFuncAsProp() {
        setdataForChild('Function is working in child component.')
    }
    const [status, setStatus] = useState(true)
    const [single, setSingle] = useState(true)
    const [loggedIn, setLogIn] = useState(0)

    function setElement() {
        setSingle(!single)
    }

    function toggleFunction() {

        // {
        //     loggedIn <= 3 ?
        //     setLogIn(loggedIn + 1) :
        //     loggedIn === 4 ?
        //         setLogIn(0) :
        //         null
        // }

        if (loggedIn <= 2) {
            setLogIn(loggedIn + 1)
        } else if (loggedIn === 3) {
            setLogIn(0)
        }
    }

    return (
        <div>
            <h1>Element Component</h1>
            {
                status ?
                    <p style={{
                        color: 'indigo',
                        fontWeight: 'bold'
                    }}>Hello, This text is about to use in hide element example</p> :
                    null
            }
            <button className='btn btn-primary btn-sm m-2'
                onClick={() => setStatus(false)}>Hide</button>
            <button className='btn btn-warning btn-sm m-2'
                onClick={() => setStatus(true)}>Show</button>
            {
                single ?
                    <p style={{
                        color: 'darkgreen', fontWeight: 'bolder'
                    }}>This text varies when you click the below toggle switch button</p> :
                    null
            }

            <button className='btn btn-info btn-sm m-2'
                style={{ color: 'maroon', fontWeight: 'bold' }}
                onClick={setElement}>Toggle Switch</button>

            {
                loggedIn === 0 ?
                    <h1 style={{ color: 'darkorange' }}
                    >Welcome Guest</h1> :
                    loggedIn === 1 ?
                        <h1 style={{ color: 'darkgreen' }}
                        >Welcome User 1</h1> :
                        loggedIn === 2 ?
                            <h1 style={{ color: 'darkblue' }}
                            >Welcome User 2</h1> :
                            <h4 style={{ color: 'maroon' }}
                            >This is else part of the conditional rendering.
                                No user has matched.
                                One more keystroke will switch to guest user.</h4>
            }
            <button className='btn btn-warning btn-sm m-2'
                style={{ fontWeight: 'bolder' }}
                onClick={toggleFunction}>Toggle User</button>

            <FunctionAsProp
                defaultState={dataForChild}
                passFunction={passFuncAsProp}
            />
        </div>
    )
}

export default Element;