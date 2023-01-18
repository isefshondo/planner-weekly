import React from 'react'

export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (username, password) => {},
  onLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const currentLoginState = localStorage.getItem("isLoggedIn");
    if(currentLoginState === "LOGGED_IN") return setIsLoggedIn(true);
  }, []);

  const onLogInHandler = () => {
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    setIsLoggedIn(true);
  };

  const onLogOutHandler = () => {
    localStorage.removeItem("isLoggedIn", "LOGGED_IN");
    localStorage.removeItem("currentUser")
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