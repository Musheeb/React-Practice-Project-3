import React, { useState } from "react";

import Welzo from './Welzo';
import Noumi from './Noumi';

function BeAlly(props) {
    const [data, setWelzo] = useState('9876543210')
    const [alt, setAlt] = useState("Random pic from picsum/photos")
    const [picsum, setNewPic] = useState("https://picsum.photos/300")

    function setImage() {
        setNewPic('../../public/images/cristiano.jpg')
        setAlt("Pic of Cristiano Ronaldo")
    }

    return (
        <div>
            <div style={{ background: 'lightgreen' }}>
                <h1 style={{ color: "darkgreen" }}>This is BeAlly Component</h1>
                <h2>Client Name:- {props.clientName} <br /> Client Country:- {props.country} </h2>
            </div>
            <Welzo name='Welzo' country='UK' type='Health Care' contact={data}></Welzo>
            <div>
                <button className="btn btn-primary btn-sm m-2"
                    onClick={() => setWelzo('0123456789')}
                >Change Contact No To Home
                </button> <br />
                <a className="btn btn-secondary btn-sm m-2" href="http://localhost:3000">Refresh the image</a>
                <img className="m-4" src={picsum} alt={alt} />
                <button style={{ color: 'darkred' }}
                    className="btn btn-warning btn-sm m-2"
                    onClick={setImage}>Switch to default image
                </button>
            </div>
            <Noumi></Noumi>
        </div>

    )
}

export default BeAlly;