import React from 'react';

function Welzo(props) {
    return (
        <div>
            <h1 style={{ color: 'crimson' }}>This is welzo Component in h1 tag.</h1>
            <div style={{ backgroundColor: 'burlywood' }}>
                <h3>Project Name:- {props.name}</h3>
                <h3>Project From(Country):- {props.country}</h3>
                <h3>Project Type:- {props.type}</h3>
                <h3>Contact Number:- {props.contact}</h3>
            </div>
        </div>

    )
}

export default Welzo;
