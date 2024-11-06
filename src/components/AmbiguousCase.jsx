import { useState } from 'react'

function ambCase(){
    return(
    <div class="ambCase">
    <h2>Ambiguous Case</h2>
    <label for="sideA">Side A:</label>
    <input type="number" id="ambiguousA" name="sides" value="0"></input>
    <label for="sideB">Side B:</label>
    <input type="number" id="ambiguousB" name="sides" value="0"></input>
    <label for="sideC">Angle A:</label>
    <input type="number" id="ambiguousAngle" name="sides" value="0"></input>
    <label for="result"># of Triangles:</label>
    <input type="text" id="resultAc" name="sides" value=" " readonly></input>
    <button id="ambButton">Calculate</button>
</div>)
}
export default ambCase;