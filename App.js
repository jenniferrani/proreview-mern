import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router, Routes, and Route
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Router>  {/* Wrap your components in Router to enable routing */}
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Login />} />  {/* Login page will be shown first */}
        <Route path="/home" element={<><Header /><Home /></>} />  {/* After login, navigate to Home */}
      </Routes>
    </Router>
  );
}

export default App;
