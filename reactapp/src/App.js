import React from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Login" />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Home" element={<Home />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
