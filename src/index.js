import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { StatesProvider } from './GlobalStates/AllState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StatesProvider>
    <App />
  </StatesProvider>
);


