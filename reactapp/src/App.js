import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login  from "./components/Login";
import Admin from "./components/admin/Admin";
import Home from "./components/Home";
// import Usercard from "./components/admin/Usercard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/usercard" element={<Usercard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
