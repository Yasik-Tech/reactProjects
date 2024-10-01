import { Link } from 'react-router-dom'
import '../Components/Header.css'
import { useState } from 'react'

export const Header = ({cart}) => {

    return (
        <>
            <div className="navbar">
                <div className="logo">Food Cart</div>
                <ul>
                    <li>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>View Cart<span>   {cart.length}</span></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

