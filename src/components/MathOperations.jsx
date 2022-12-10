import React, { useState } from "react";

function MathsOperations() {
    const [data1, setData1] = useState({
        firstNumber: 0,
        lastNumber: 0,
        finalValue: 0,
    });

    // Below example is known as 'spread operator'.
    //below example is only for testing purpose. nothing to do with the functionality.
    const [data2, setData2] = useState({
        first: {
            al: '1',
            a2: '2'
        },
        second: {
            b1: '1',
            b2: '2'
        }
    })

    function printThreeDotObj() {
        const mergeTheTwo = { ...data2.first, ...data2.second }
        console.log(mergeTheTwo)
    }

    return (
        <div>
            <h1 style={{
                color: 'blue',
                fontStyle: 'italic'
            }}>This is Maths Operations Component.</h1>
            <div>
                <label for="Fnumber" className="m-2">Enter-First-Number:-</label>
                <input type="text"
                    id="Fnumber"
                    style={{ color: 'darkblue', fontWeight: 'bold', textAlign: 'center' }}
                    value={data1.firstNumber}
                    onChange={e => setData1({ ...data1, firstNumber: e.target.value })} />
                <br />

                <label for="Snumber" className="m-2">Enter-Second-Number:-</label>
                <input type="text"
                    id="Snumber"
                    style={{ color: 'darkgreen', fontWeight: 'bold', textAlign: 'center' }}
                    value={data1.lastNumber}
                    onChange={e => setData1({ ...data1, lastNumber: e.target.value })} />

                {
                    data1.finalValue ?
                        <div>
                            <label for="Fvalue">Final_Value:-</label>
                            <input type="text"
                                id="Fvalue"
                                className="m-2"
                                style={{
                                    color: 'darkred',
                                    fontWeight: 'bolder',
                                    textAlign: 'center'
                                }} value={data1.finalValue} />
                        </div> :
                        null
                }

            </div>

            <button className="btn btn-primary btn-sm m-2"
                style={{ color: 'black' }}
                onClick={(currentValue) => setData1({
                    ...currentValue,
                    finalValue: data1.firstNumber + data1.lastNumber
                })}>Addition</button>

            <button className="btn btn-secondary btn-sm m-2"
                style={{ color: 'black' }}
                onClick={(currentValue => setData1({
                    ...currentValue,
                    finalValue: data1.firstNumber - data1.lastNumber
                }))}>Subtraction</button>

            <button className="btn btn-warning btn-sm m-2"
                style={{ color: 'black' }}
                onClick={currentValue => setData1({
                    ...currentValue,
                    finalValue: data1.firstNumber * data1.lastNumber
                })}>Multiplication</button>

            <button className="btn btn-success btn-sm m-2"
                style={{ color: 'black' }}
                onClick={currentValue => setData1({
                    ...currentValue,
                    finalValue: data1.firstNumber / data1.lastNumber
                })}>Division</button>

            <button className="btn btn-danger btn-sm m-2"
                onClick={val => setData1({
                    firstNumber: null,
                    lastNumber: null,
                    finalValue: null
                })}>Reset</button><br />

            {/* This below button has nothing to do with the functionality of the component.
                It is only for Testing the Spread operator only */}
            <button className="btn btn-primary btn-sm m-4"
                onClick={printThreeDotObj}>Console Three Dot Objects</button>

        </div>
    )
}

export default MathsOperations; 