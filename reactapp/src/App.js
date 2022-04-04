import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
import Home from "./components/Home";
import AddUser from "./components/admin/AddUser";
import Image from "./components/image";
import { ProfilePage } from "./ProfilePage";

//import Id from "./components/id";
import ImageUpload from "./components/imageupload";
// import Usercard from "./components/admin/Usercard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="home" element={<Home />} />
        <Route exact path="image" element={<Image />} />
        {/* <Route exact path="/id" element={<Id />} /> */}
        <Route exact path="uploadimg" element={<ImageUpload />} />
        <Route path="admin/adduser" element={<AddUser />} />
        {/* <Route path="/usercard" element={<Usercard />} /> */}
        <Route path="/profile">
          <ProfilePage />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
