import React, { useState } from 'react'
import { addCustomer as addCustomerAction } from './Slices/CustomerSlice';
import { useDispatch } from 'react-redux';


export const AddCustomer = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    // const [customers, setCustomers] = useState([]);
    

    const addCustomer =() => {
         
        if (input) {
            // setCustomers((previousState) => [...previousState, input]);
            dispatch(addCustomerAction(input));
            setInput("");
        }
    }

    return (
        <>
        <div>
            <h2>Add new customers</h2>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addCustomer}>Add more</button>
        </div>
        </>
    )
}
