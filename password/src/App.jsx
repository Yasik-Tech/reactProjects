import { useState } from 'react'
import './App.css'
import { StrongPassword } from './StrongPassword'

function App() {

  return (
    <div className="strong-password">
      <h2>strong password generate</h2>

      <div className="input-group">
        <label htmlFor="num">Password Length :</label>
        <input type="number" id="num" />
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="upper" />
        <label htmlFor="upper">Include Uppercase</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="lower" />
        <label htmlFor="lower">Include Lowercase</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="numbers" />
        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="symbols" />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      
      <button className='generate-btn'>Generate Password</button>
      
      <div className='genrate-password'>
        <input type="text" readOnly />
        <button className='copy-btn'>Copy</button>
      </div>
    </div>
  )
}

export default App
