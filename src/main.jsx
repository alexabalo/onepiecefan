import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './components/AuthContext.jsx';
import {CartProvider} from './components/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />

      </CartProvider>

    </AuthProvider>
    
    
  </StrictMode>,
)
