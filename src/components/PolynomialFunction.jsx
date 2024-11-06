import './HeronFormula.css';
import { useState } from 'react'

function PolynomialFunction(){
    return(
        <div className="polynomial">
        <h4>Polynomial Function</h4>
        <label for="sideA">Cofficients:</label>
        <input type="text" id="cofficients" name="sides" value="0"></input>
        <label for="sideB">Exponents:</label>
        <input type="text" id="exponents" name="sides" value="0"></input>
        <label for="sideC">X value:</label>
        <input type="number" id="xVal" name="sides" value="0"></input>
        <label for="result">Function:</label>
        <input type="text" id="resultPFunct" name="sides" value=" " readonly></input>
        <label for="result">Evaluation:</label>
        <input type="text" id="resultPEval" name="sides" value=" " readonly></input>
        <button id="polyButton">Calculate</button>
    </div>
    )
}
export default PolynomialFunction;