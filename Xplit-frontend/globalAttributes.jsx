import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;