import React, { createContext, useState } from 'react';

const GlobalContext = createContext();
const LoginContext = createContext();
const expenseListContext = createContext();
const DateDiffContext = createContext();
const EmailContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </GlobalContext.Provider>
  );
};

const LoginProvider = ({children}) =>{
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      {children}
    </LoginContext.Provider>
  )
}

const ExpenseListProvider = ({children}) =>{
  const [expenseList,setExpenseList] = useState([]);

  return (
    <expenseListContext.Provider value={{expenseList,setExpenseList}}>
      {children}
    </expenseListContext.Provider>
  )
}

const DateDiffProvider = ({children}) =>{
  const [dateDiff,setDateDiff] = useState(0);

  return (
    <DateDiffContext.Provider value={{dateDiff, setDateDiff}}>
      {children}
    </DateDiffContext.Provider>
  )
}

const EmailProvider = ({children}) => {
  const [email,setEmail] = useState("youremail@xyz.com");

  return (
    <EmailContext.Provider value={{email, setEmail}}>
      {children}
    </EmailContext.Provider>
  )
}

export {GlobalContext , LoginContext , expenseListContext,DateDiffContext , EmailContext, EmailProvider, DateDiffProvider, ExpenseListProvider , GlobalProvider, LoginProvider}