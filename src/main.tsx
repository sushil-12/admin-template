import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "./assets/themes/theme.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>,
)
