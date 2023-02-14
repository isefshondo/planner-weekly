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
  onRegister: (obj) => {},
  setEnteredUser: () => Array,
  enteredUser: enteredUserData,
  setIsLoggedIn: () => Array,
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const toNavigate = useNavigate();
  // Create a axios file to put this (baseUrl)
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [enteredUser, setEnteredUser] = React.useState<RegisterProps>(enteredUserData);
  
  // Create a modal for the errors
  const onRegister = (obj: string) => {
    axios.post(`${url}/users/sign-up/`, JSON.parse(obj))
    .then(res => {
      console.log(res);
      toNavigate("login");
    }).catch(err => console.log(err));
  };

  React.useEffect(() => {
    const currentLoginState = localStorage.getItem("enteredToken");
    if(currentLoginState != null){
      setIsLoggedIn(true);
      toNavigate("/");
    }
  }, []);

  const onLogOutHandler = () => {
    localStorage.removeItem("enteredToken");
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        onLogout: onLogOutHandler,
        onRegister: onRegister,
        setEnteredUser: setEnteredUser,
        enteredUser: enteredUser,
        setIsLoggedIn: setIsLoggedIn,
      }
    }>
      { children }
    </AppContext.Provider>
  );
};