import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApplicationContext, RegisterProps } from "../interfaces/Interfaces";

interface AppProviderProps {
  children: React.ReactNode
}

let enteredUserData = {
  firstName: "",
  lastName: "",
  birthDate: "",
  city: "",
  country: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const AppContext = React.createContext<ApplicationContext>({
  isLoggedIn: false,
  onLogout: () => {},
  setEnteredUser: () => Array,
  enteredUser: enteredUserData,
  setIsLoggedIn: () => Array,
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const toNavigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [enteredUser, setEnteredUser] = React.useState<RegisterProps>(enteredUserData);
  
  const onLogOutHandler = () => {
    localStorage.removeItem("enteredToken");
    localStorage.removeItem("locationInfo");
    setIsLoggedIn(false);
  };
  
  React.useEffect(() => {
    const currentLoginState = localStorage.getItem("enteredToken");
    if(currentLoginState != null){
      setIsLoggedIn(true);
      toNavigate("/");
    }
  }, []);

  React.useEffect(() => {
    if(localStorage.getItem("locationInfo") !== null) {
      const enteredLocationInfo = JSON.parse(localStorage.getItem("locationInfo")!);
      setEnteredUser(prevState => {
        return ({
          ...prevState,
          city: enteredLocationInfo.city,
          country: enteredLocationInfo.country,
        })
      })
    }
  }, [setEnteredUser]);

  return (
    <AppContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        onLogout: onLogOutHandler,
        setEnteredUser: setEnteredUser,
        enteredUser: enteredUser,
        setIsLoggedIn: setIsLoggedIn,
      }
    }>
      { children }
    </AppContext.Provider>
  );
};