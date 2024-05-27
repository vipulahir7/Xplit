import React, { createContext, useState } from 'react';

const GlobalContext = createContext();
const LoginContext = createContext();

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

export {GlobalContext , LoginContext , GlobalProvider, LoginProvider}