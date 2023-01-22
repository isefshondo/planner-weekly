import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (username, password, isLoginValid) => {},
  onLogout: () => {},
  onRegister: (obj) => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    if(localStorage.getItem("currentUser") !== null){
      const userLocalStorage = JSON.parse(localStorage.getItem("currentUser"));
      setUser(userLocalStorage);
    }
  }, [setUser]);

  const onUserRegister = (obj) => {
    setUser(JSON.parse(obj));
    localStorage.setItem("currentUser", obj);
    navigate("login");
  };

  React.useEffect(() => {
    const currentLoginState = localStorage.getItem("isLoggedIn");
    if(currentLoginState === "LOGGED_IN"){
      setIsLoggedIn(true);
      navigate("/");
    }
  }, []);

  const onLogInHandler = (username, password, isLoginValid) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if(user === null){
      return;
    }
    
    if((user.fullName === username || user.email === username ) && (user.password === password)){
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "LOGGED_IN");
      navigate("/");
    } else{
      isLoginValid(false);
    }
  };

  const onLogOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
  };

  return(
    <AuthContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        onLogin: onLogInHandler,
        onLogout: onLogOutHandler,
        onRegister: onUserRegister,
        user: user,
      }
    }>
      { children }
    </AuthContext.Provider>
  );
};