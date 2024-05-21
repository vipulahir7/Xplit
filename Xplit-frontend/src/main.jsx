import React from "react";
import reactDOM from "react-dom"
import App from "./App.jsx"

const root = document.getElementById('root');

reactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode> 
)