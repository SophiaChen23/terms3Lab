import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";

// import App from "./App";
//
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
//
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>,
//     rootElement
// );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
