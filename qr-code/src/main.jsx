import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Qrcode } from './Qr-code.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Qrcode />
  </StrictMode>,
)
