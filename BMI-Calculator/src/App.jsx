import { useState } from 'react'
import './App.css'


function App() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  const calculateBmi = () => {

    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight")
      } else if (bmiValue <= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal")
      } else if (bmiValue <= 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight")
      } else {
        setBmiStatus("obese")
        
      }
      setErrorMsg("");
    }
    else {
      setBmi(null);
      setBmiStatus("");
      setErrorMsg("Please enter vaild numeric value for height and weight.")
    }

  }

  const clearAll = () =>{
    setBmi(null);
    setWeight("");
    setHeight("");
    setBmiStatus("");
  }

  return (
    <>
      <div className="bmi-container">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMsg && <p className='error'>{errorMsg}</p>}
          <div className='input-container'>
            <label htmlFor="height">Height(Cm) :</label>
            <input type="text" value={height} id="height" onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className='input-container'>
            <label htmlFor="weight">Weight(Kg) :</label>
            <input type="text" value={weight} id="weight" onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button  onClick={calculateBmi}>Calculate BMI</button>
          <button  onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className='result'>
              <p>Your BMI value is :  {bmi}</p>
              <p>Status is : {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
