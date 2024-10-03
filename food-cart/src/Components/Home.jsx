import { useState } from 'react'
import data from '../assets/Data.json'
import { Product } from './Product';
import './Home.css'

export const Home = () => {

   const [Products] = useState(data);

   return (
      <div className="product-container">
         {Products.map((product) => (
            <Product key={product.id} product={product} />
         ))}
      </div>
   )
}
