import React, { useContext } from "react";
import reactDOM from "react-dom"
import "./index.css"
import Header from "./components/Header.jsx"
import Navigator from "./components/Navigator.jsx"
import { GlobalProvider,LoginContext,LoginProvider } from "../globalAttributes.jsx";
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
import NotFound from "./NotFound.jsx";

// const {isLoggedIn} = useContext(LoginContext);

// reactDOM.createRoot(root).render(
//     <GlobalProvider>
//         <LoginProvider>  
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element ={<Layout /> }>
//                         <Route path="/" element={ <Welcome /> } />
//                         <Route path="login" element={ <Login /> } />
//                         <Route path="signup" element={ <SignUp /> } />
//                         <Route path="expense" element={ <Expense /> } >
//                             {!isLoggedIn && <Route path=":any" element={ <NotFound/>} />}
//                             <Route path="" element={ <Daily/> }/>
//                             <Route path="daily" element={ <Daily/> }/>
//                             <Route path="monthly" element={ <Monthly/> }/>
//                             <Route path="yearly" element={ <Yearly/> }/>
//                             <Route path=":any" element={ <NotFound/> }/>
//                         </Route>
//                         <Route path="transaction" element={ <Transaction /> } />
//                         <Route path="setting" element={ <Setting /> } />
//                         <Route path=":any" element={ <NotFound/>} />
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         </LoginProvider>
//     </GlobalProvider>
// )

const Main = () => {
    const { isLoggedIn } = useContext(LoginContext);
  
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Welcome />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="expense" element={isLoggedIn ? <Expense /> : <NotFound/>}>
                <Route path="" element={<Daily />} />
                <Route path="daily" element={<Daily />} />
                <Route path="monthly" element={<Monthly />} />
                <Route path="yearly" element={<Yearly />} />
              </Route>
              <Route path="transaction" element={isLoggedIn ? <Expense /> : <NotFound/>} />
              <Route path="setting" element={isLoggedIn ? <Expense /> : <NotFound/>} />
              <Route path=":any" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
};

const root = document.getElementById('root');
reactDOM.createRoot(root).render( 
<GlobalProvider>
    <LoginProvider>
        <Main />
    </LoginProvider>
</GlobalProvider>
);