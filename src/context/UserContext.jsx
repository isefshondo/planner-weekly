import React from "react";

export const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {

  if(localStorage.getItem("user") !== null){
    
  }

  return (
    <UserContext.Provider>
      { children }
    </UserContext.Provider>
  );
};