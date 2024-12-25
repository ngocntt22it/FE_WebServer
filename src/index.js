import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { GoogleOAuthProvider } from '@react-oauth/google'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <GoogleOAuthProvider clientId={process.env.REACT_GG_CLIENT_ID}>
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
  // {/* </GoogleOAuthProvider> */}
);


reportWebVitals();
