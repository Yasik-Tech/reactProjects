import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("INR")
  const [convertAmount, setConvertAmount] = useState(null)
  const [exchangeRate, setExchangeRate] = useState(null)


  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        setExchangeRate(res.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate", error.message);
      }
    }
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null){
    setConvertAmount((amount * exchangeRate).toFixed(2))
    }
  }, [amount, exchangeRate]);

  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : (value));
  }

  const handleFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  }

  const handleToCurrency = (e) => {
    setToCurrency(e.target.value);
  }

  return (
    <>
      <div className="currency-converter">
        <div className="box"></div>
        <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-contaniner">
            <label htmlFor="amt">Amount:</label>
            <input type="number" id="amt" value={amount} onChange={handleAmount} />
          </div>
          <div className="input-contaniner">
            <label htmlFor="fcurrency">From Currency:</label>
            <select id="fcurrency" value={fromCurrency} onChange={handleFromCurrency}>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound sterling</option>
              <option value="JPY">JPY - Jepanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="input-contaniner">
            <label htmlFor="tcurrency">To Currency:</label>
            <select id="tcurrency" value={toCurrency} onChange={handleToCurrency}>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound sterling</option>
              <option value="JPY">JPY - Jepanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className='result'>
            <p>{amount} {fromCurrency} Is Equal To {convertAmount} {toCurrency}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
