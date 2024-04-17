import React from 'react';
import './App.css';
import LoginForm from './LoginForm/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Sidebar from './Component/Sidebar';
import Register from './LoginForm/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/sidebar" element={<Sidebar />} /> 
      </Routes>
    </Router>
  );
}

export default App;