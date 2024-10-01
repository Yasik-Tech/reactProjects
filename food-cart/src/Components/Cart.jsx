import React, { useEffect, useState } from 'react'
import './Cart.css'

export const Cart = ({ cart, setCart }) => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);


return (
  <>
    <div className="cart-heading"><h1>Cart Products</h1></div>
    <div className="cart-containter">
      {cart.map((product) => (
        <div className="cart-product">
          <div className="img">
            <img src={product.pic} alt="image" />
          </div>
          <div className="cart-product-details">
            <h3>{product.name}</h3>
            <p>Price  is: {product.amt}</p>
          </div>
        </div>
      ))}
      <div className="cart-amt"><h2>Total Amount is: {total}</h2></div>
    </div>
  </>
)
}
