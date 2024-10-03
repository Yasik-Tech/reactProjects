
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Viewcart } from './Components/Viewcart'
import { useState,  } from 'react'
import { Cartcontext } from './Components/cart-context'

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <Cartcontext.Provider value={{cart, setCart}}>
        <BrowserRouter>
          < Header cart={cart} />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Viewcart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Cartcontext.Provider>

    </>
  )
}

export default App
