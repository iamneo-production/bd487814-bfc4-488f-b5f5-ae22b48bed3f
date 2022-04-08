import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
import Feed from "./components/admin/newsfeed/Feed";
//import Home from "./components/Home";
import AddUser from "./components/admin/AddUser";
import UserEdit from "./components/admin/UserEdit";
//import Image from "./components/image";
import ImageAdd from "./components/imageAdd";
import ImageEdit from "./components/imageEdit";
import UserFeed from "./components/userfeed/UserFeed";
import Notfound from "./components/Notfound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<Notfound />} />
        <Route path={"/"} element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route exact path="image/add" element={<ImageAdd />} />
        <Route exact path="admin/imageEdit" element={<ImageEdit />} />
        <Route path="admin/adduser" element={<AddUser />} />
        <Route path="admin/userEdit/:id" element={<UserEdit />} />
        <Route path="admin/image" element={<Feed />} />
        <Route path="image" element={<UserFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;