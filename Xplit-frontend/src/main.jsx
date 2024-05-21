import React from "react";
import reactDOM from "react-dom"
import "./index.css"
import Header from "./components/Header.jsx"
import Navigator from "./components/Navigator.jsx"
import Body from "./components/Body.jsx"

const root = document.getElementById('root');

reactDOM.createRoot(root).render(
    <React.StrictMode>  
        <Header />
        <Body />
        <Navigator />
    </React.StrictMode> 
)