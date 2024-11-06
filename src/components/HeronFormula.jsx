import './HeronFormula.css';
import { useState } from 'react'



function HeronFormula(){
const a=useState(0);
return (
    <div className="heron">
        <h1>Heron's Formula</h1>
        <label for="sideA">Side A:</label>
        <input type="number" id="heronA" name="sidesh" value="0"></input>
        <label for="sideB">Side B:</label>
        <input type="number" id="heronB" name="sidesh" value="0"></input>
        <label for="sideC">Side C:</label>
        <input type="number" id="heronC" name="sidesh" value="0"></input>
        <label for="result">Area:</label>
        <input type="text" id="heronResult" name="sidesh" value=" " readonly></input>
        <button id="heronButton">Calculate</button>
    </div>
)
}
export default HeronFormula;