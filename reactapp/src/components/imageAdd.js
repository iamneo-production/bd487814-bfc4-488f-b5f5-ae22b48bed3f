import React, { useState, useContext } from "react";
import ImageUploader from "react-images-upload";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import "./userfeed/darkmode/dark.scss";
import { DarkModeContext } from "./userfeed/darkmode/DarkModeContext";
import UserNavbar from "./userfeed/UserNavbar";
import { Navigate } from "react-router-dom";

function ImageUpload() {
  const notify = (e) => toast(e);
  const userEmail = sessionStorage.getItem("userEmail");
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
    fd.append("email", userEmail);

    axios.post("http://localhost:8080/image/add", fd).then((res) => {
      notify("Image Uploaded");
      window.location.href = "/image";
    });
  };

  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <UserNavbar />
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
          <button onClick={handleClick}>UPLOAD THE IMAGE</button>
        </center>
      </div>
    </div>
  );
}
export default ImageUpload;