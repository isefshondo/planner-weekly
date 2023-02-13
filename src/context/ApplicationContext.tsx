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
  onLogin: (username, password) => {},
  onLogout: () => {},
  onRegister: (obj) => {},
  enteredUser: enteredUserData
});

export const AppProvider = ({ children }: AppProviderProps) => {
  // I would need to pass the state of the modal
  // and then pass the error message as props
  // also I would need to pass the state to the page
  const toNavigate = useNavigate();
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [enteredUser, setEnteredUser] = React.useState<RegisterProps>(enteredUserData);

  React.useEffect(() => {
    if(localStorage.getItem("enteredUser") !== null){
      const enteredLocalStorage = JSON.parse(localStorage.getItem("enteredUser")!);
      setEnteredUser(enteredLocalStorage);
    }
  }, [setEnteredUser]);
  
  const onRegister = async (obj: string) => {
    await axios.post(`${url}/users/sign-up`, JSON.parse(obj))
    .then(
      res => {
        toNavigate("login");
      }
    )
    .catch(error => 
      console.log(error.response.data))
  };

  React.useEffect(() => {
    const currentLoginState = localStorage.getItem("isLoggedIn");
    if(currentLoginState === "LOGGED_IN"){
      setIsLoggedIn(true);
      toNavigate("/");
    }
  }, []);

  const onLogInHandler = async (
    username: string,
    password: string,
  ) => {
    await axios.post(`${url}/users/sign-in`, {
      email: username,
      password,
    }).then(res => console.log(res))
    .catch(error => console.log(error))
    // const enteredUser = JSON.parse(localStorage.getItem("enteredUser")!);

    // if(enteredUser === null) return;

    // if((enteredUser.fullName === username || enteredUser.enteredEmail === username) && (enteredUser.enteredPassword === password)){
    //   setIsLoggedIn(true);
    //   localStorage.setItem("isLoggedIn", "LOGGED_IN");
    //   toNavigate("/");
    // }
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