// Login.js
/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // React Router for navigation

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Basic validation to check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return;
    }

    // For simplicity, you can simulate a successful login by just checking if fields are filled
    // You can later integrate with a backend API for real authentication
    setIsLoggedIn(true); // Mark user as logged in

    // Redirect to the home page after successful login
    navigate("/");

    setError(""); // Clear error message
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState('');
  const navigate = useNavigate();  

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername && trimmedPassword) {
      setEnteredUsername(trimmedUsername);
      setShowSuccessModal(true);

      
      setTimeout(() => {
        navigate('/home'); 
      }, 1500);
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="center">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input 
              id="username"
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              placeholder="Enter your username" 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input 
              id="password"
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password" 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Success Popup Modal */}
      {showSuccessModal && (
        <div className="success-modal">
          <div className="modal-content">
            <h3>Welcome, {enteredUsername}!</h3>
            <p>Login Successful. Redirecting...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

