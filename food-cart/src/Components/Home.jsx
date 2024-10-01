import { useState } from 'react'
import data from '../assets/Data.json'
import { Product } from './Product';
import './Home.css'

export const Home = ({ cart, setCart }) => {

   const [Products] = useState(data);

   return (
      <div className="product-container">
         {Products.map((product) => (
            <Product key={product.id} product={product} cart={cart} setCart={setCart} />
         ))}
      </div>
   )
}
