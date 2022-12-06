import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasketProvider from './contexts/BasketContext'
import CartProvider from './contexts/CartContext'
import SidebarProvider from './contexts/SidebarContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
  <BasketProvider>
    <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </CartProvider>
  </BasketProvider>
  </SidebarProvider>
);