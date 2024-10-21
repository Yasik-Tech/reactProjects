import React from 'react'
import { useSelector } from 'react-redux'
import { deleteCustomer } from './Slices/CustomerSlice'
import { useDispatch } from 'react-redux'

export const CustomerView = () => {

    const customers = useSelector((state) => state.customers)
    const dispatch = useDispatch();

    const DeleteHandler = (index) =>{
        dispatch(deleteCustomer(index));
    }

    return (
        <div>
            <h3>Customers List</h3>
            <ul style={{ listStyle: "none" }}>
                {customers.map((customer, index) => <li>{customer} 
                    <button onClick={() => DeleteHandler(index)}>Delete</button>
                    </li>)}
            </ul>
        </div>
    )
}
