import {configureStore} from '@reduxjs/toolkit';
import customerReducer from './Slices/CustomerSlice'

export const store = configureStore({
    devTools:true,
    reducer:{
        customers : customerReducer
    }
})