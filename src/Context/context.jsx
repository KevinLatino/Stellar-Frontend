import React, { createContext, useContext, useState, useEffect } from "react";
import getCookie from "../Utils/getCookies";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
      const token = getCookie("token")
      setUser(token);
    }
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {

  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};
