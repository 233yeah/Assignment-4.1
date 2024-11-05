import { useState } from 'react'
import './HeronFormula.css'

function App() {
  

  return (
    <>
     
     <form className="heron">
            <h1>Heron's Formula</h1>
            <label for="sideA">Side A:</label>
            <input type="number" id="heronA" name="sidesh" value="0"/>
            <label for="sideB">Side B:</label>
            <input type="number" id="heronB" name="sidesh" value="0"/>
            <label for="sideC">Side C:</label>
            <input type="number" id="heronC" name="sidesh" value="0"/>
            <label for="result">Area:</label>
            <input type="text" id="heronResult" name="sidesh" value=" " readonly/>
            <button id="heronButton">Calculate</button>
            </form>

    </>
  )
}

export default App
