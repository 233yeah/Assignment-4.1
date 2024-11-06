import { useState } from 'react'
import './App.css'
import HeronFormula from './components/HeronFormula'
import AmbiguousCase from './components/AmbiguousCase'
import NewtonsMethod from './components/NewtonsMethod'
import PolynomialFunction from './components/PolynomialFunction'

function App() {

  return (
    <>
  <HeronFormula/>
  <AmbiguousCase/>
  <NewtonsMethod/>
  <PolynomialFunction/>
    </>
  )
}

export default App
