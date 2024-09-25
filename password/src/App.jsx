import { useState } from 'react'
import './App.css'
import { StrongPassword } from './StrongPassword'

function App() {

  const [length, setLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("")

  const genratePassword = () => {
    let charset = "";
    if (includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "1234567890";
    if (includeSymbols) charset += "!@#$%^&*()_+";
    let genratedPassword = "";
    for( let i=0; i < length ; i++){
      const randomIndex = Math.floor(Math.random() * charset.length);
      genratedPassword += charset[randomIndex];
    }
    setPassword(genratedPassword);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password is copied")
  }

  return (
    <>
      <div className="strong-password">
        <h2>strong password generate</h2>

        <div className="input-group">
          <label htmlFor="num">Password Length :</label>
          <input type="number" id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="upper" checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} />
          <label htmlFor="upper">Include Uppercase</label>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="lower" checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} />
          <label htmlFor="lower">Include Lowercase</label>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="numbers" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
          <label htmlFor="numbers">Include Numbers</label>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="symbols" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
          <label htmlFor="symbols">Include Symbols</label>
        </div>

        <button className='generate-btn' onClick={genratePassword}>Generate Password</button>

        <div className='genrate-password'>
          <input type="text" readOnly value={password} />
          <button className='copy-btn'onClick={copyToClipboard}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
