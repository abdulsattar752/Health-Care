// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      // Fake user for demo
      setUser({ name: 'User', email: 'user@example.com' });
    }
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add('dark');
  }, []);

  const login = (data) => {
    localStorage.setItem('jwt', 'fake-token');
    setUser(data);
    toast.success('Logged in successfully!');
    navigate('/dashboard');
  };

  const register = (data) => {
    login(data); // Fake register as login
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    setUser(null);
    toast.info('Logged out');
    navigate('/login');
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, darkMode, toggleDarkMode }}>
      {children}
    </AuthContext.Provider>
  );
};