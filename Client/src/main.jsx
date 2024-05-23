import React from "react";
import reactDOM from "react-dom"
import "./index.css"
import Header from "./components/Header.jsx"
import Navigator from "./components/Navigator.jsx"
import { GlobalProvider } from "../globalAttributes.jsx";
import Login from "./login/Login.jsx"
import SignUp from "./signup/SignUp.jsx"
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from "./Layout.jsx";
import Expense from "./expense/Expense.jsx"
import Transaction from "./transaction/Transaction.jsx"
import Setting from "./setting/Setting.jsx"
import Welcome from "./welcome/Welcome.jsx";
import Daily from "./expense/daily/Daily.jsx"
import Monthly from "./expense/monthly/Monthly.jsx"
import Yearly from "./expense/yearly/Yearly.jsx"

const root = document.getElementById('root');

reactDOM.createRoot(root).render(
    <GlobalProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Layout /> }>
                    <Route path="/" element={ <Welcome /> } />
                    <Route path="login" element={ <Login /> } />
                    <Route path="signup" element={ <SignUp /> } />
                    <Route path="expense" element={ <Expense /> } >
                        <Route path="" element={ <Daily/> }/>
                        <Route path="daily" element={ <Daily/> }/>
                        <Route path="monthly" element={ <Monthly/> }/>
                        <Route path="yearly" element={ <Yearly/> }/>
                    </Route>
                    <Route path="transaction" element={ <Transaction /> } />
                    <Route path="setting" element={ <Setting /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    </GlobalProvider>
)