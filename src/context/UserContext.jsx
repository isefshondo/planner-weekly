import React from "react";

export const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    if(localStorage.getItem("currentUser") !== null){
      const userLocalStorage = localStorage.getItem("currentUser");
      setUser(JSON.parse(userLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={ { user } }>
      { children }
    </UserContext.Provider>
  );
};