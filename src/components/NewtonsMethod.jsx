import './HeronFormula.css';
import { useState } from 'react'

function NewtonsMethod(){
    return(
        <div className="newton">
        <h3>Newton's Method for 6x^4-13x^3-18x^2+7x+6</h3>
        <label for="sideA">g(root guess):</label>
        <input type="number" id="guess" name="sides" value="0"></input>
        <label for="result">Root Approximation:</label>
        <input type="text" id="resultN" name="sides" value=" " readonly></input>
        <button id="newtonButton">Calculate</button>
    </div>
    )
}
export default NewtonsMethod;