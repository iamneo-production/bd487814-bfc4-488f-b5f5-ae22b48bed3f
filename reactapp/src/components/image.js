import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
// import Suggestionlist from "./Suggestionlist";
import "./css/Profile.css";
import { ReactComponent as Commenticon } from "./images/comment.svg";
import { ReactComponent as Shareicon } from "./images/share.svg";
import { ReactComponent as Doticon } from "./images/dotes.svg"

export default function Image() {

    let navigate =useNavigate(); 
    const options = {
        labels: {
            confirmable: "Confirm",
            cancellable: "Cancel"
        }
    }

    const [currentUser, setcurrentUser] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await confirm("Are you sure?", options);
        if (result) {
            navigate("/login")
        }

    }

   
    return (

        <div>
            <p>hi</p>
            <div className="navigation">
                <div className="logo">
                    <Link className="no-underline" to="/home">
                        Photo Frame
                    </Link>
                </div>
                <div className="navigation-search-container">
                    <i className="fa fa-search" />
                    <input className="search-field" type="text" placeholder="Search" />
                    <div className="search-container">
                        <div className="search-container-box">
                            <div className="search-results">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-icons">
                    <Link to="#" className="navigation-link">
                        <i className="far fa-compass" />
                    </Link>
                    <Link to="#" className="navigation-link notifica">
                        <i className="far fa-heart" />
                    </Link>
                    <Link to="/profile" className="navigation-link">
                        <i className="far fa-user-circle" />
                    </Link>
                    <Link to="/home" onClick={handleSubmit} id="signout" className="navigation-link" >
                        <i className="fas fa-sign-out-alt" />
                    </Link>
                </div>
            </div>
            {/* Suggestion's
            <Suggestionlist /> */}
            <hr></hr>
            <body>
          
          <div className="container mainbox">
            <div className="row box1">
              <div className="col-md-1 imgcol">
                <img className="userimage" src="{userimg}" />
              </div>
              <div className="col-md-10 usernamecol">
                <h3>user_name</h3>
              </div>
              <div className="col-md-1 dotescol">
               <Doticon className="dotesicon"/>
              </div>
              <div className="col-md-12 userpost">
                <img className='image' src={post1} height="100%" width="1140px"  />
              </div>
              <div className="col-md-0 like userfeed">
                <Likeicon className="likeicon"/>
              </div>
              <div className="col-md-3 like userfeed">
                <h5>Likes</h5>
              </div>
              <div className="col-md-0 comments userfeed">
                <Commenticon className="commenticon"/>
              </div>
              <div className="col-md-3 like userfeed">
                <h5>comments</h5>
              </div>
              <div className="col-md-0 comments userfeed">
                <Shareicon className="commenticon"/>
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