import React from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Image from "./components/image";
import Id from "./components/id";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={ <Signup />} />
          <Route exact path="/image" element={<Image />} />
          <Route exact path="/id" element={<Id />} />

        </Routes>
      </Router>
      {/* <div className="app_header">
        <img 
        className="app_headerImage" src ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E0BAQHUnyI5clnOrA%2Fcompany-logo_200_200%2F0%2F1594675990525%3Fe%3D2147483647%26v%3Dbeta%26t%3DuAzJSY4871gLxNliTtVNK3jRNiz2ndh2-6EbPNP-_-E&imgrefurl=https%3A%2F%2Fca.linkedin.com%2Fcompany%2Fvirtusa&tbnid=-76l1mTeCOgzXM&vet=12ahUKEwjAuuPyn8_2AhW__DgGHREPBAsQMygCegUIARDXAQ..i&docid=SyM6dkmekdCoGM&w=200&h=200&q=virtusa&ved=2ahUKEwjAuuPyn8_2AhW__DgGHREPBAsQMygCegUIARDXAQ.png" alt="" />


      </div>
      <h1>Hello</h1>
      <Image/> */}

    </div>
  );
}

export default App;
