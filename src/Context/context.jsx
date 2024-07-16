import React, { createContext, useContext, useState, useEffect } from "react";
import getUserFromCookie from "../Utils/getUserCookies";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
      const user = getUserFromCookie("user");
      setUser(user);
    }
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null)
    document.cookie = `user=${null}`
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  ); 2
};


export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};
