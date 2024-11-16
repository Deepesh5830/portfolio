import React, { createContext, useState } from 'react';

export const ActiveTabContext = createContext();

export const ActiveTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};
