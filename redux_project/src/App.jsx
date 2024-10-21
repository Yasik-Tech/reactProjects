import { useState } from 'react'
import './App.css'
import { AddCustomer } from './AddCustomer'
import { CustomerView } from './CustomerView'
import { Provider } from 'react-redux';
import {store} from './store'

function App() {


  return (
    <Provider store={store}>
      <div>
        <h1>React redux customer example</h1>
        <AddCustomer />
        <CustomerView />
      </div>
    </Provider>
  )
}

export default App
