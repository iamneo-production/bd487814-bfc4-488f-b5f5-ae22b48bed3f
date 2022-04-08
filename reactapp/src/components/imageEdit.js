import React, { useState, useEffect, useContext } from "react";
import ImageUploader from "react-images-upload";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import "./admin/darkmode/dark.scss";
import { DarkModeContext } from "./admin/darkmode/DarkModeContext";
import Navbar from "./admin/Navbar";
import { Navigate } from "react-router-dom";

function ImageUpload() {
  const notify = (e) => toast(e);
  const userEmail = sessionStorage.getItem("userEmail");
  const imageId = sessionStorage.getItem("imageId");
  const token = sessionStorage.getItem("token");
  const { darkMode } = useContext(DarkModeContext);
  const [Pictures, setPictures] = useState();

  function onDrop(pictureFiles, pictureDataURLs) {
    setPictures(pictureFiles[0]);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (Pictures == null) {
      window.alert("No Image Uploaded");
      window.location.reload();
    }
    let fd = new FormData();
    fd.append("image", Pictures);
    // console.log(imageId);
    axios
      .put(`http://localhost:8080/admin/imageEdit/${imageId}`, fd, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        notify("Image Uploaded");
        sessionStorage.removeItem("imageId");
        window.location.href = "/admin/image";
      });
  };
  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
      <div>
        <ImageUploader
          withIcon={false}
          withPreview={true}
          buttonText="CHOOSE IMAGE"
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <center>
          <button onClick={handleClick}>EDIT THE IMAGE</button>
        </center>
      </div>
    </div>
  );
}
export default ImageUpload;