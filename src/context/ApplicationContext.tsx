import React from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationContext, RegisterProps } from "../interfaces/Interfaces";

interface AppProviderProps {
  children: React.ReactNode
}

let enteredUserData = {
  enteredFirstName: "",
  enteredLastName: "",
  enteredBirthDate: "",
  enteredCountry: "",
  enteredCity: "",
  enteredEmail: "",
  enteredPassword: "",
  enteredConfirmPassword: "",
  fullName: "",
}

export const AppContext = React.createContext<ApplicationContext>({
  isLoggedIn: false,
  onLogin: (username, password) => {},
  onLogout: () => {},
  onRegister: (obj) => {},
  enteredUser: enteredUserData
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const toNavigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [enteredUser, setEnteredUser] = React.useState<RegisterProps>(enteredUserData);

  React.useEffect(() => {
    if(localStorage.getItem("enteredUser") !== null){
      const enteredLocalStorage = JSON.parse(localStorage.getItem("enteredUser")!);
      setEnteredUser(enteredLocalStorage);
    }
  }, [setEnteredUser]);
  
  const onRegister = (obj: string) => {
    setEnteredUser(JSON.parse(obj));
    localStorage.setItem("enteredUser", obj);
    toNavigate("login");
  };

  React.useEffect(() => {
    const currentLoginState = localStorage.getItem("isLoggedIn");
    if(currentLoginState === "LOGGED_IN"){
      setIsLoggedIn(true);
      toNavigate("/");
    }
  }, [])

  const onLogInHandler = (
    username: string,
    password: string,
  ) => {
    const enteredUser = JSON.parse(localStorage.getItem("enteredUser")!);

    if(enteredUser === null) return;

    if((enteredUser.fullName === username || enteredUser.enteredEmail === username) && (enteredUser.enteredPassword === password)){
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "LOGGED_IN");
      toNavigate("/");
    }
  };

  const onLogOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        onLogin: onLogInHandler,
        onLogout: onLogOutHandler,
        onRegister: onRegister,
        enteredUser: enteredUser,
      }
    }>
      { children }
    </AppContext.Provider>
  );
};