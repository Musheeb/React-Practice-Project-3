import React from "react";

import MathsOperations from './MathOperations';

function FormExample() {

    function stopPageReload(e) {
        e.preventDefault()
    }

    const [checkbox, setCheckbox] = React.useState(false)
    function changeCheckbox() {
        if (checkbox === true) {
            setCheckbox(false)
        } else {
            setCheckbox(true)
        }
    }

    const [popUpUpdate, setPopUpUpdate] = React.useState(false)
    function popUpForSelection() {
        if (popUpUpdate === true) {
            setPopUpUpdate(false)
        } else if (popUpUpdate === false) {
            setPopUpUpdate(true)
            alert(
                "As you are selecting this, From now on your name will be used till the duration you will select in duration slot."
            )
        }
    }

    return (
        <div>
            <h1>This is Example Component</h1>
            <form action="">
                <div>
                    <label for="fname">First name:-</label>
                    {
                        checkbox ?
                            <input className="m-2" style={{
                                color: 'maroon',
                                fontWeight: 'bolder'
                            }} type="text" id="fname" /> :
                            <input className="m-2" type="text" id="fname" />
                    }
                    <input className="m-2" type="checkbox" onChange={changeCheckbox} onClick={popUpForSelection} />
                    <span style={{ color: 'red', fontWeight: 'bolder' }}>Select if you want to remember the name next time on this device.</span>
                    <br />

                    <label for="femail">Email:-</label>
                    <input className="m-2" type="text" id="femail" />
                    <input className="m-2" type="checkbox" />
                    <span style={{ color: 'red', fontWeight: 'bolder' }}>Select if you want to use this email.</span>
                    <br />

                    <label for="fcontact">Contact No:-</label>
                    <input className="m-2" type="text" id="fcontact" />
                    <input className="m-2" type="checkbox" />
                    <span style={{ color: 'red', fontWeight: 'bolder' }}>Select if you want to use this number in future.</span>
                    <br />

                    <label for="fhobby">Hobby:-</label>
                    <input className="m-2" type="text" id="fhobby" />
                    <br />

                    <label for="selection"
                        style={{ color: 'darkgreen', fontWeight: 'bold' }}>Select one time slot from all, Bydefault it is set to Never.</label>
                    <select className="m-2" id="selection">
                        <option value="">Never</option>
                        <option value="">for a week</option>
                        <option value="">for a month</option>
                        <option value="">forever</option>
                    </select>
                </div>
                <button className="btn btn-success btn-sm m-2"
                    type="submit"
                    onClick={stopPageReload}>Submit</button>

            </form>
            <MathsOperations />
        </div>
    )
}

export default FormExample;