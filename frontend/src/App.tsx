import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Register and Login</h1>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
