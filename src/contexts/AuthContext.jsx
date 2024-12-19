import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null); // Persist user data in localStorage

  // Signup function: Adds user to localStorage
  const signup = (email, password) => {
    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser({ email }); // Set logged-in user
  };

  // Login function: Validates user credentials
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser({ email });
    } else {
      throw new Error("Invalid email or password");
    }
  };

  // Logout function: Clears user data
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Cleanup on unmount or logout
  useEffect(() => {
    if (!user) {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
