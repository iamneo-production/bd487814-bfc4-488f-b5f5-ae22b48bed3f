import { ReactComponent as Homeicon } from "../images/home.svg";
import { ReactComponent as Likeicon } from "../images/like.svg";
import { ReactComponent as Commenticon } from "../images/comment.svg";
import { ReactComponent as Shareicon } from "../images/share.svg";
import { ReactComponent as Doticon } from "../images/dotes.svg";
import { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
// import {script} from 'script.js';
// import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import home from '../Icons.js';
import logo from '../images/PhotoFramed-logos_black.png';
import logo1 from '../images/logo.png';
import userimg from '../images/userimg.png';
import post1 from '../images/post1.jpg';
import '../style/App.css';
import React, { Component } from 'react';
import userPost from "../userPost";
import Header from '../components/header';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Navigation({ post }) {


  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)

  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const[images,setimages]=useState([]);

  // const inputRef=useRef(null);
  // const varRef= useRef(images.length);

  // useEffect(()=>{
  //   inputRef.current.focus();
  //   Axios.get("http://localhost:3000/image").then(res =>{
  //     setimages(res.data);
  //     // console.log(res);
  //   });

  // },[]);

  // useEffect(()=>{
  //   varRef.current=varRef.current+1;
  // });


  // function index(){

  // }

  // const[newImageUrl,setNewImagesUrl]=useState("");
  // function handleRemove(index){
  //   setimages([
  //     ...images.slice(0,index),
  //     ...images.slice(index+1,images.length)
  //   ]);
  // }



  // function ShowImage(){
  //   return images.map((img,index)=>(
  //     <img 
  //     image={img.urls.regular}
  //     handleRemove={handleRemove}
  //     index={index}
  //     key={index}
  //     />
  //   ))
  // }




  return (

    <div className="navi">
      <header>
        <homeicon className="icon" />
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <img className='logo' src={logo1} height="120px" width="245px" />
            <img className='logo1' src={logo} height="100px" width="120px" />
            <Homeicon className="icons" />
          </div>
        </nav>
        {/* <Header /> */}


      </header>
      <body>

        <div className="container mainbox">
          <div className="row box1">
            <div className="col-md-1 imgcol">
              <img className="userimage" src={userimg} />
            </div>
            <div className="col-md-10 usernamecol">
              <h3>user_name</h3>
            </div>
            <div className="col-md-1 dotescol">
              <Doticon className="dotesicon"></Doticon>
            </div>
            <div className="col-md-12 userpost">
              <img className='image' src={post1} height="100%" width="1140px" />
            </div>
            <div className="col-md-3 like userfeed">
              {/* <Likeicon className="likeicon" /> */}
              <div class="heart-btn">
                <div class="content">
                  {/* <button onClick={() => setCount(count + 1) }> */}
                  {/* <button onClick={() => if{setCount(count + 1) }> */}
                  <button onClick={likeHandler}>
                    <span class="heart"> </span>
                    <span class="text">Like </span>
                  </button>
                  {/* <span class="heart"> </span>
                    <span class="text">Like 0</span> */}
                  <span class="numb"></span>

                </div>
              </div>
            </div>
            {/* <div className="col-md-3 like userfeed">
                <h5>Likes</h5>
              </div> */}
            <div className="col-md-0 comments userfeed">
              <Commenticon className="commenticon" />
            </div>
            <div className="col-md-3 like userfeed">
              <Button variant="outlined" onClick={handleClickOpen}>
                comments
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Put your comments here..."}
                </DialogTitle>
                <input type="text" />
                <DialogActions>
                  <Button onClick={handleClose}>cancel</Button>
                  <Button onClick={handleClose} autoFocus>
                    post
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className="col-md-0 comments userfeed">
              <Shareicon className="commenticon" />
            </div>
            <div className="col-md-3 like userfeed">
              <h5>share</h5>
            </div>

          </div>
        </div>

      </body>




    </div>


  );




}


export default Navigation;