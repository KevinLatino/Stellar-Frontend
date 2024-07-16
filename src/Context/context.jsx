import React, { createContext, useContext, useState, useEffect } from "react";
import getUserFromCookie from "../Utils/getUserCookies";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialUser = getUserFromCookie("user");
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    // Esta parte del useEffect se ejecutará solo una vez al montar el componente
    // y establecerá el estado de usuario inicial desde las cookies.
    if (!user) {
      const userFromCookie = getUserFromCookie("user");
      setUser(userFromCookie);
    }
  }, []);

  const login = (userData) => {
    setUser(userData); // userData debe contener al menos nombre, apellido y otros datos necesarioss
  };

  const logout = () => {
    setUser(null);
    document.cookie = `user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    // Limpia las cookies cuando el usuario cierra sesión
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
