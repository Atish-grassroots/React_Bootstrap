import React from 'react';
import './App.css';
import LoginForm from './LoginForm/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Sidebar from './Component/Sidebar';
import Register from './LoginForm/Register';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } /> 
        <Route path="/sidebar" element={<Sidebar />} /> 
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;