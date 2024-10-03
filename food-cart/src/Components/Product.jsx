import React from 'react'
import '../Components/Product.css'
import { Cartcontext } from './cart-context';
import { useContext } from 'react';


export const Product = ({ product }) => {

    const { cart, setCart } = useContext(Cartcontext);

    const name = product.name.length > 16 ? product.name.substring(0, 15) + "..." : product.name;

    const addCart = () => {
        setCart([...cart, product]);
    }

    const removeCart = () => {
        setCart((cart.filter((c) => c.id !== product.id)));
    }

    return (
        <div className="product">
            <div className="image">
                <img src={product.pic} alt={product.name} />
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p>Price RS: {product.amt}</p>
                {cart.includes(product) ? (
                    <button className='removebtn' onClick={removeCart}>Remove Cart</button>
                ) : (
                    <button onClick={addCart}>Add Cart</button>
                )}
            </div>
        </div>
    )
}
