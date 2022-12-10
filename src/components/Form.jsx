import React from "react";

import Element from './Element';

function Form() {
    function getFormData(e) {
        e.preventDefault()
    }
    return (
        <div>
            <h1>Form Component</h1><br />
            <form action=""
                style={{ backgroundColor: 'lightskyblue' }}
                onSubmit={getFormData}
            >
                <input type="text" placeholder="Enter your name" /><br />
                <select name="" id="" className="m-4">
                    <option>Select an option</option>
                    <option>England</option>
                    <option>NewZeland</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>South Africa</option>
                </select><br />
                <input type="checkbox" />
                <span style={{ margin: '5px' }}>Accept Terms & Conditions</span><br />
                <button type="submit"
                    className="btn btn-danger btn-sm m-2"
                >Submit</button>
            </form>
            <Element />
        </div>

    )
}

export default Form;