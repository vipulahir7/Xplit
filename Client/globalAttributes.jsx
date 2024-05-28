import React, { createContext, useState } from 'react';

const GlobalContext = createContext();
const LoginContext = createContext();
const expenseListContext = createContext();

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

export {GlobalContext , LoginContext , expenseListContext, ExpenseListProvider , GlobalProvider, LoginProvider}