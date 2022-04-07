import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify"
import axios from "axios"


function ImageUpload() {
  const notify = (e) => toast(e);
  const userEmail = localStorage.getItem("userEmail");

  const [Pictures, setPictures] = useState([]);


  function onDrop(pictureFiles, pictureDataURLs) {
    setPictures(pictureFiles);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      image: Pictures,
      email:userEmail

    }

    console.log(data);
    axios.post("http://localhost:8080/image/add", data).then((res) => {
      if (res.data.status) {
        notify("Image Uploaded")
        return <Navigate to="/image" />;
      } else {
        notify("Error Occurred");
        console.log(data);
      }
    });
  }
  return (
    <div>

      <ImageUploader
        withIcon={false}
        withPreview={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      <center><button onClick={handleClick}>upload the image</button></center>
    </div>
  );
}
export default ImageUpload;
