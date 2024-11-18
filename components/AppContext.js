
import React, { createContext, useState, useContext } from 'react';


const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <AppContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext);
