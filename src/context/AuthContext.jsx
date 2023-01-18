import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (username, password) => {},
  onLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const currentLoginState = localStorage.getItem("isLoggedIn");
    if(currentLoginState === "LOGGED_IN"){
      setIsLoggedIn(true);
      navigate("/");
    }
  }, []);

  const onLogInHandler = (username, password) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user === null){
      return;
    }
    if((user.fullName === username || user.email === username ) && (user.password === password)){
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "LOGGED_IN");
      navigate("/");
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
      }
    }>
      { children }
    </AuthContext.Provider>
  );
};